import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { HttpClient } from 'selenium-webdriver/http';
import request = require("request-promise");

var base_url = "http://localhost:3000/";
const base_front_url = "http://localhost:4200";

const httpClient = new HttpClient(base_url);

async function loginAsUser(user_id: string){
    const usr = await getUserFromDb(user_id);
    const psswd = JSON.parse(usr.body).password;

    //Navegar até página de login
    await browser.get(base_front_url);
    await element(by.buttonText('Login')).click();
    await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + '/login');

    //Realizar login
    await $("input[formControlName='id']").sendKeys(<string> user_id);
    await $("input[formControlName='password']").sendKeys(<string> psswd);
    await element(by.buttonText('Login')).click();
    await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + "/initial-page");
}

async function criarUsuario(id, name, password, email) {
    await $("input[name='id']").sendKeys(<string> id);
    await $("input[name='name']").sendKeys(<string> name);
    await $("input[name='password']").sendKeys(<string> password);
    await $("input[name='email']").sendKeys(<string> email);    
    await element(by.buttonText('Enviar')).click();
}

async function getUserFromDb(user_id: string){
    return httpClient.send(
        {
            method: "get",
            path: "/user/" + user_id,
            headers: null,
            data: null
        }
    )
}

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am on the "Registro de novo usuário" page$/, { timeout: 10000 }, async () => {
        await browser.get(base_front_url);
        await expect(browser.getTitle()).to.eventually.equal('Dizer');
        await element(by.buttonText('Cadastro')).click();
        await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + '/register');
    })

    Given(/^I am on the "Editar Perfil" page$/, {timeout: 10000}, async () => {
        await browser.get(base_front_url+'/user');
        await element(by.buttonText('Editar Perfil')).click();
        await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + '/userEdit');
    })

    Given(/^I am on the "Lista de Usuários" page$/, {timeout: 10000}, async () => {
        await browser.get(base_front_url+'/userAdmin');
        await element(by.buttonText('Visualizar Usuários')).click();
        await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + '/lista-usuarios');
    })


    Given(/^I see a list of system users$/, {timeout: 10000}, async () => {
        const listaUsuarios = await this.page.$(".lista-usuarios");
        expect(listaUsuarios).to.exist;
        // await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + '/lista-usuarios');
    })

    Given(/^I see a list of system users with "3" users$/, {timeout: 10000}, async () => {
        const listaUsuarios = await this.page.$$(".lista-usuarios li");
        expect(listaUsuarios).to.have.lengthOf.at.least(3);
    })
    
    Given(/^I am logged in with an admin account with user "([^\"]*)"$/, {timeout: 10000}, async (user : string) => {
        loginAsUser(user);
    })

    Given(/^I am logged in with user "([^\"]*)"$/, {timeout: 10000}, async (user : string) => {
        loginAsUser(user);
    })

    When(/^I write "([^\"]*)" in "Usuário" field$/, async (id) => {
        await $("input[formControlName='id']").sendKeys(<string> id);
    })

    When(/^I write "([^\"]*)" in "Nome" field$/, async (name) => {
        await $("input[formControlName='name']").sendKeys(<string> name);
    })

    When(/^I write "([^\"]*)" in "Senha" field$/, async (password) => {
        await $("input[formControlName='password']").sendKeys(<string> password);
    })

    When(/^I write "([^\"]*)" in "Email" field$/, async (email) => {
        await $("input[formControlName='email']").sendKeys(<string> email);
    })

    When(/^I write "([^\"]*)" in "Nova Senha" field$/, async (password) => {
        await $("input[formControlName='password']").sendKeys(<string> password);
    })


    When(/^I click on "Enviar"$/, async () => {
        await element(by.buttonText('Enviar')).click();
    })

    When(/^I click on "Adicionar"$/, async () => {
        await element(by.buttonText('Adicionar')).click();
    })

    When(/^I click on "Atualizar"$/, async () => {
        await element(by.buttonText('Atualizar')).click();
    })

    When(/^I click on "Sim"$/, async () => {
        await element(by.buttonText('Sim')).click();
    })

    When(/^I click on "Alterar Senha"$/, async () => {
        await element(by.buttonText('Alterar Senha')).click();
    })

    When(/^I click on "Alterar"$/, async () => {
        await element(by.buttonText('Alterar')).click();
    })

    When(/^I click on "Deletar Perfil"$/, async () => {
        await element(by.buttonText('Deletar Perfil')).click();
    })

    When(/^I click on "Adicionar Usuario"$/, async () => {
        await element(by.buttonText('Adicionar Usuario')).click();
    })

    When(/^When I write nothing in "Email" field$/, async () => {
        const campo = "";
        await $("input[formControlName='email']").sendKeys(<string> campo);
      });

    When(/^When I write nothing in "Nome" field$$/, async () => {
        const campo = "";
        await $("input[formControlName='name']").sendKeys(<string> campo);
    })

    When(/^When I write nothing in "Nova Senha" field$/, async () => {
        const campo = "";
        await $("input[formControlName='password']").sendKeys(<string> campo);
      });

    When(/^When I write nothing in "Senha" field$$/, async () => {
        const campo = "";
        await $("input[formControlName='password']").sendKeys(<string> campo);
    })

    When(/^When I write nothing in "Usuario" field$/, async () => {
        const campo = "";
        await $("input[formControlName='id']").sendKeys(<string> campo);
      });

    When(/^When I write nothing in "Tipo de Usuario" field$$/, async () => {
        const campo = "";
        await $("input[formControlName='role']").sendKeys(<string> campo);
    })
    
    // When(/^When I write nothing in "([^\"]*)" field$/, async (campo) => {
    //     // Implemente o código para deixar o campo em branco
    //     const campoInput = await this.page.$(`input[formControlName=${campo}]`);
    //     await campoInput.clear();
    //   });

    Then(/^I see a registration completed message$/, async () => {
        await expect(element(by.cssContainingText('*', 'Registro feito com sucesso!')).isPresent()).to.eventually.equal(true);
    })

})

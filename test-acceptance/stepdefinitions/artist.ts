import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, ExpectedConditions } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import request = require("request-promise");
import { HttpClient } from 'selenium-webdriver/http';

const base_url = "http://localhost:3000/";
const base_front_url = "http://localhost:4200";

const httpClient = new HttpClient(base_url);

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

async function getPasswordForUser(user_id: string){
    const res = await getUserFromDb(user_id);
    const psswd = JSON.parse(res.body).password;
    return psswd;
}

async function loginAsUser(user_id: string, psswd: string = null){
    const password = psswd === null ? getPasswordForUser(user_id) : psswd;

    //Navegar até página de login
    await browser.get(base_front_url);
    await element(by.buttonText('Login')).click();
    await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + '/login');

    //Realizar login
    await $("input[formControlName='username']").sendKeys(<string> user_id);
    await $("input[formControlName='password']").sendKeys(<string> password);
    await element(by.buttonText('Login')).click();
    await browser.wait(ExpectedConditions.urlIs(base_front_url + "/initial-page") , 5000);
    await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + "/initial-page");
}

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^Estou na página de "Cadastrar novo artista"$/, async () => {
        await $("a[routerLink='/userAdmin']").click();
        await element(by.cssContainingText('a', 'Cadastrar artista')).click();
        await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + "/cadastrar-artista");
    })


    When(/^Preencho os campos "nome do artista", "gênero musical" e "url_foto" com os valores "([^\"]*)", "([^\"]*)" e "([^\"]*)"$/, async (name, genre, url_photo) => {
        await $("#artista-nome").sendKeys(<string> name);
        await $("#artista-genero_musical").sendKeys(<string> genre);
        await $("#artista-url_foto_artista").sendKeys(<string> url_photo);
    })

    Then(/^O campo "nome do artista" fica realçado$/, async () => {
        await expect($(`#artista-nome.ng-invalid`));
    })

    Then(/^O campo "gênero musical" fica realçado$/, async () => {
        await expect($(`#artista-genero_musical.ng-invalid`));
    })

    Then(/^O campo "url_foto" fica realçado$/, async () => {
        await expect($(`#artista-url_foto_artista.ng-invalid`));
    })

})

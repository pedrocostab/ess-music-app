import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, ExpectedConditions } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import request = require("request-promise");
//import * as bcrypt from 'bcryptjs';
import { HttpClient } from 'selenium-webdriver/http';


var base_url = "http://localhost:3000/";
const base_front_url = "http://localhost:4200";

const httpClient = new HttpClient(base_url);

async function getUserFromDb(user_id: string) {
    return httpClient.send(
        {
            method: "get",
            path: "/user/" + user_id,
            headers: null,
            data: null
        }
    )
}

//async function comparePasswordForUser(user_id: string, passwd: string) {
//    const res = await getUserFromDb(user_id);
//    const hashedPassword = JSON.parse(res.body).password;
//    return bcrypt.compareSync(passwd, hashedPassword)
//}

//async function getUserRoleFromDb(user_id: string) {
//    const res = await getUserFromDb(user_id);
//   const hashedPassword = JSON.parse(res.body).role;
//}

export function getSessionStorageItem(key: string) {
    return browser.executeScript(`return sessionStorage.getItem('${key}');`);
}

defineSupportCode(function ({ Given, When, Then }) {

    //Given(/^o usuário "([^\"]*)" de senha "([^\"]*)" está corretamente registrado no sistema com permissões de "([^\"]*)"$/, async (username, password, role) => {
    //const validPassword = comparePasswordForUser(<string>username, <string>password);
    //expect(validPassword).to.equal(true)
    //const actualRole = getUserRoleFromDb(<string>username);
    //expect(actualRole).to.equal(<string>role)
    //})

    Given(/^possui senha "([^\"]*)"$/, async (username) => {
        await $("input[formControlName='username']").sendKeys(<string>username);
    })
    Given(/^está registrado no sistema com permissões de "([^\"]*)"$/, async (username) => {
        await $("input[formControlName='username']").sendKeys(<string>username);
    })

    Given(/^eu estou na página "login" da aplicação$/, { timeout: 10000 }, async () => {
        await browser.get(base_front_url);
        await expect(browser.getTitle()).to.eventually.equal('Dizer');
        await element(by.buttonText('Login')).click();
        await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + '/login');
    })

    When(/^eu insiro corretamente os dados do campo "Usuário" como "([^\"]*)"$/, async (username) => {
        await $("input[formControlName='username']").sendKeys(<string>username);
    })

    When(/^eu insiro corretamente os dados do campo "Senha" como "([^\"]*)"$/, async (password) => {
        await $("input[formControlName='password']").sendKeys(<string>password);
    })

    When(/^eu envio as credênciais para o servidor$/, async () => {
        await element(by.buttonText('Login')).click();
    })

    Then(/^eu sou redirecionado para a rota "initial-page"$/, async () => {
        await browser.wait(ExpectedConditions.urlIs(base_front_url + "/initial-page"), 10000);
        await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + "/initial-page");
    })

    Then(/^eu vejo que estou logado com o usuário "([^\"]*)"$/, async (username) => {
        const actualLoggedInUser = await getSessionStorageItem("username");
        expect(actualLoggedInUser).to.equal(<string>username);
    })

    Then(/^eu vejo que estou logado com permissões de "([^\"]*)"$/, async (role) => {
        const actualUserRole = await getSessionStorageItem("userrole");
        expect(actualUserRole).to.equal(<string>role);
    })
})

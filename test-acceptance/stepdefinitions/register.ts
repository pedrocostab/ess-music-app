import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, ExpectedConditions } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { HttpClient } from 'selenium-webdriver/http';
import request = require("request-promise");


var base_url = "http://localhost:3000/";
const base_front_url = "http://localhost:4200";

const httpClient = new HttpClient(base_url);

async function loginAsUser(user_id: string, password: string){
    //Navegar até página de login
    await browser.get(base_front_url);
    await element(by.buttonText('Login')).click();
    await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + '/login');

    //Realizar login
    await $("input[formControlName='username']").sendKeys(<string> user_id);
    await $("input[formControlName='password']").sendKeys(<string> password);
    await element(by.buttonText('Login')).click();
    await browser.wait(ExpectedConditions.urlIs(base_front_url + "/initial-page") , 30000);
    await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + "/initial-page");
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
        await browser.get(base_front_url + '/register');
    })
    
    When(/^I fill the fields "Usuario", "Nome", "Senha" and "Email" with the values "([^\"]*)", "([^\"]*)", "([^\"]*)" and "([^\"]*)"$/, async (id, name, password, email) => {
        await $("input[formControlName='id']").sendKeys(<string> id);
        await $("input[formControlName='name']").sendKeys(<string> name);
        await $("input[formControlName='password']").sendKeys(<string> password);
        await $("input[formControlName='email']").sendKeys(<string> email);
    })

    When(/^I click on "Enviar"$/, async () => {
        await element(by.buttonText('Enviar')).click();
    })

    Then(/^I see a registration completed message$/, { timeout : 10000 }, async () => {
        await browser.get(base_front_url+'/login');
        await element(by.cssContainingText('div', 'Registro feito com sucesso!')).isPresent();
    })

    Then(/^I get a Registration Error message "Por favor colocar um dado válido"$/, { timeout: 10000 }, async () => {
        await browser.get(base_front_url+'/register');
        await element(by.cssContainingText('div', 'Por favor colocar um dado válido')).isPresent();
    })

    Then(/^I see the "Email" field highlighted$/, { timeout: 10000 }, async () => {
        // await element(by.cssContainingText('mdc-text-field--invalid', '')).isPresent();
        await expect($("input[formControlName='email'].ng-invalid").isPresent()).to.eventually.equal(true);
    })

    Then(/^I see the "Senha" field highlighted$/, { timeout: 10000 }, async () => {
        // await element(by.cssContainingText('mdc-text-field--invalid', '')).isPresent();
        await expect($("input[formControlName='password'].ng-invalid").isPresent()).to.eventually.equal(true);
    })

    Then(/^I see the "Usuario" field highlighted$/, { timeout: 10000 }, async () => {
        // await element(by.cssContainingText('mdc-text-field--invalid', '')).isPresent();
        await expect($("input[formControlName='id'].ng-invalid").isPresent()).to.eventually.equal(true);
    })

    Then(/^I see the "Nome" field highlighted$/, { timeout: 10000 }, async () => {
        // await element(by.cssContainingText('mdc-text-field--invalid', '')).isPresent();
        await expect($("input[formControlName='name'].ng-invalid").isPresent()).to.eventually.equal(true);
    })

})
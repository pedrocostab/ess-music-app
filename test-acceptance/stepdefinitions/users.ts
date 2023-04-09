import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import request = require("request-promise");

var base_url = "http://localhost:3000/";
const base_front_url = "http://localhost:4200";

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am on the "Registro de novo usuário" page$/, {timeout: 10000}, async () => {
        await browser.get(base_front_url);
        await expect(browser.getTitle()).to.eventually.equal('Dizer');
        await element(by.buttonText('Cadastro')).click();
        await expect(browser.getCurrentUrl()).to.eventually.equal(base_front_url + '/register');
    })

    When(/^I write "([^\"]*)" in "Usuário"$/, async (id) => {
        await $("input[formControlName='id']").sendKeys(<string> id);
    })

    When(/^I write "([^\"]*)" in "Nome"$/, async (name) => {
        await $("input[formControlName='name']").sendKeys(<string> name);
    })

    When(/^I write "([^\"]*)" in "Senha"$/, async (password) => {
        await $("input[formControlName='password']").sendKeys(<string> password);
    })

    When(/^I write "([^\"]*)" in "Email"$/, async (email) => {
        await $("input[formControlName='email']").sendKeys(<string> email);
    })

    When(/^I click on "Enviar"$/, async () => {
        await element(by.buttonText('Enviar')).click();
    })

    Then(/^I see a registration completed message$/, async () => {
        await expect(element(by.cssContainingText('*', 'Registro feito com sucesso!')).isPresent()).to.eventually.equal(true);
    })

})

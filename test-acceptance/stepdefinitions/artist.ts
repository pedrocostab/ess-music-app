import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, ExpectedConditions } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import request = require("request-promise");

const base_url = "http://localhost:3000/";
const base_front_url = "http://localhost:4200";

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
        await expect($(`#artista-nome.ng-invalid`).isPresent()).to.eventually.equal(true);
    })

    Then(/^O campo "gênero musical" fica realçado$/, async () => {
        await expect($(`#artista-genero_musical.ng-invalid`).isPresent()).to.eventually.equal(true);
    })

    Then(/^O campo "url_foto" fica realçado$/, async () => {
        await expect($(`#artista-url_foto_artista.ng-invalid`).isPresent()).to.eventually.equal(true);
    })

})

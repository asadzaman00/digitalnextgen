import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import Globals from '../support/Globals';
import { browser } from 'protractor';
import { Given, When, And, Then } from "cucumber";

// Chai
const globals = new Globals();
const expect = globals.expect;

//Page instance
const homePage = new HomePage();
const loginPage = new LoginPage();
const registerPage = new RegisterPage();

Given(/^I am on home page with title "(.*?)"$/, (title) => {
    return expect(browser.getTitle()).to.eventually.equal(title);
});

Given(/^I am on register page$/, () => {
    return registerPage.goto();
});

When(/^I type userId "(.*?)"$/, (text) => {
    return loginPage.userName.sendKeys(text);
});

When(/^I type Firstname "(.*?)"$/, (text) => {
    return registerPage.firstName.sendKeys(text);
});

When(/^I type Lastname "(.*?)"$/, (text) => {
    return registerPage.lastName.sendKeys(text);
});

When(/^I type username "(.*?)"$/, (text) => {
    return registerPage.userName.sendKeys(text);
});

When(/^I type password "(.*?)"$/, (text) => {
    return registerPage.password.sendKeys(text);
});

When(/^I click Login$/, () => {
    return loginPage.loginBtn.click();
});

When(/^I click Register$/, () => {
    return registerPage.registerBtn.click();
});

Then(/^Verify registration successful$/, () => {
    return loginPage.inDom(loginPage.registerSuccess);
});

Then(/^Verify I am not logged in$/, () => {
    return loginPage.inDom(loginPage.loginBtn);
});

Then(/^Verify I am logged in$/, () => {
    return homePage.inDom(homePage.logoutLink);
});



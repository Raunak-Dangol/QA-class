import {test} from '@playwright/test';
import {LoginPage} from '../page objects/login.po';
const testData = require('../fixtures/loginfixture.json');


test.beforeEach(async ({page}) => {
    await page.goto('/');
});

test.describe('valid login', () => {
    test('Login using  valid username and password', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(testData.validUser.userName, testData.validUser.password);
        await loginPage.verifyvalidLogin();
   
 });
});
test.describe('invalid login', () => {
    test('Login using valid username and invalid password', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(testData.validUser.userName, testData.invalidUser.password);
        await loginPage.verifyinvalidLogin();
    });
    test('Login using invalid username and invalid password', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(testData.invalidUser.userName, testData.invalidUser.password);
        await loginPage.verifyinvalidLogin();
    })
    test('Login using no username and no password', async ({page}) => {
    
        const loginPage = new LoginPage(page);
        await loginPage.login('', '');
        await loginPage.verifyinvalidLogin();
    })
     test('Login using  no password and click on login', async ({page}) => {
    
        const loginPage = new LoginPage(page);
        await loginPage.login(testData.validUser.userName, '');
        await loginPage.verifyinvalidLogin();
    })
});
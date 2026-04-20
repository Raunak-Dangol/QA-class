import {test, expect} from '@playwright/test';

// test('valid login test', async ({page}) => {
//     await page.goto('https://www.facebook.com/');
//     await page.getByLabel('Email or phone number').fill('dangolraunak@gmail.com');
//     await page.getByLabel('Password').fill('R726099@');
//     await page.getByRole('button', {name: 'Log In'}).click();
//     // Add assertions to verify successful login, e.g., check for a specific element that appears after login
// });

test('invalid login test', async ({page}) => {
    await page.goto('https://justpaste.it/login');
    await page.getByLabel('Email or phone number').fill('dangrauntdxfygvjhbnak@gmail.com');
    await page.getByLabel('Password').fill('Raunak@123');
    await page.getByRole('button', {name: 'Log In'}).click();
    // Add assertions to verify successful login, e.g., check for a specific element that appears after login
    const error = await expect.page.locator('User not found').toBeVisible();
});

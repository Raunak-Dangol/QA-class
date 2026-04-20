// import {test} from '@playwright/test';
// import {LoginPage} from '../page objects/login.po';
// import {ContactPage} from '../page objects/contact.po';
// import { create } from 'node:domain';
// const { authenticateUser, createEntity } =require( '../utils/helper.specs');
// const testData = require('../fixtures/loginfixture.json');
// test.beforeEach(async ({ page }) => {
//     const login = new LoginPage(page);
//     await page.goto('/');
//     await login.login(testData.validUser.userName, testData.validUser.password);
//     await login.verifyvalidLogin();
// });

// test.describe('Contact testcases', () => {
//   test('Contact Add test', async ({ page }) => {
//     const contact = new ContactPage(page);
//     await contact.add(
//       'Raunak',
//       'Dangol',
//       '2005/06/14',
//       'raunakdangol19@gmail.com',
//       '9841123463',
//       'Machhapokhari',
//       'Kathmandu',
//       'Bagmati',
//       '9008',
//       'Nepal'
//     );
//     await contact.viewContact();
//     await contact.validateContactCreated(
//       'Raunak',
//       'Dangol',
//       '2005/06/14',
//       'raunakdangol19@gmail.com',
//       '9841123463',
//       'Machhapokhari',
//       'Kathmandu',
//       'Bagmati',
//       '9008',
//       'Nepal'
//     );
//   }
//  test('Contact Edit test', async ({ page }) => {
//     const Data ={
//             "firstName": "John",
//     "lastName": "Doe",
//     "birthdate": "1970-01-01",
//     "email": "jdoe@fake.com",
//     "phone": "8005555555",
//     "street1": "1 Main St.",
//     "street2": "Apartment A",
//     "city": "Anytown",
//     "stateProvince": "Kathmandu",
//     "postalCode": "12345",
//     "country": "Nepal"
//     };
//     const contact = new ContactPage(page);
//     accessToken = await authenticateUser(testData.validUser.username, testData.validUser.password, { request });
//     await createEntity(Data, accessToken, '/contacts', { request });
//  page.reload();
//     await contact.viewContact();
//     await contact.contactEdit(contactTestData.contactEdit.firstName);
//      await contact.validateContactCreated(contactTestdata.contactEditData.firstName, contactTestdata.contactEditData.lastName, contactTestdata.contactEditData.dateOfBirth, contactTestdata.contactEditData.email, contactTestdata.contactEditData.phone, contactTestdata.contactEditData.address, contactTestdata.contactEditData.city, contactTestdata.contactEditData.state, contactTestdata.contactEditData.postal, contactTestdata.contactEditData.country);
// } 
//  )}
// )
// });

import { test } from '@playwright/test';
import { LoginPage } from '../page objects/login.po';
import { ContactPage } from '../page objects/contact.po';
import { create } from 'node:domain';
const { authenticateUser, createEntity } = require('../utils/helper.specs');
const testData = require('../fixtures/loginfixture.json');
const contactTestdata = require('../fixtures/contactfixture.json');

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await page.goto('/');
  await login.login(testData.validUser.userName, testData.validUser.password);
  await login.verifyvalidLogin();
});

test.describe('Contact testcases', () => {

  test('Contact Add test', async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.add(
      'Raunak',
      'Dangol',
      '2005/06/14',
      'raunakdangol19@gmail.com',
      '9841123463',
      'Machhapokhari',
      'Kathmandu',
      'Bagmati',
      '9008',
      'Nepal'
    );

    await contact.viewContact();

    await contact.validateContactCreated(
      'Raunak',
      'Dangol',
      '2005/06/14',
      'raunakdangol19@gmail.com',
      '9841123463',
      'Machhapokhari',
      'Kathmandu',
      'Bagmati',
      '9008',
      'Nepal'
    );
  });

  test('Contact Edit test', async ({ page, request }) => {
    const Data = {
      firstName: "John",
      lastName: "Doe",
      birthdate: "1970-01-01",
      email: "jdoe@fake.com",
      phone: "8005555555",
      street1: "1 Main St.",
      street2: "Apartment A",
      city: "Anytown",
      stateProvince: "Kathmandu",
      postalCode: "12345",
      country: "Nepal"
    };

    const contact = new ContactPage(page);

    accessToken = await authenticateUser(
      testData.validUser.username,
      testData.validUser.password,
      { request }
    );

    await createEntity(Data, accessToken, '/contacts', { request });

    await page.reload();

    await contact.viewContact();
    await contact.contactEdit(contactTestdata.contactEdit.firstName);

    await contact.validateContactCreated(
      contactTestdata.contactEditData.firstName,
      contactTestdata.contactEditData.lastName,
      contactTestdata.contactEditData.dateOfBirth,
      contactTestdata.contactEditData.email,
      contactTestdata.contactEditData.phone,
      contactTestdata.contactEditData.address,
      contactTestdata.contactEditData.city,
      contactTestdata.contactEditData.state,
      contactTestdata.contactEditData.postal,
      contactTestdata.contactEditData.country
    );
    
  });

});
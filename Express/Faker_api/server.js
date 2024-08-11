const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT = 8000;
/*********************************************************/
//function to create a random user
const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
    };
};
/*********************************************************/
//function to create a random company
const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
};
/*********************************************************/
//route to get a new user
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});
/*********************************************************/
//route to get a new company
app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});
/*********************************************************/
//route to get both a new user and a new company
app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});
/*********************************************************/

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

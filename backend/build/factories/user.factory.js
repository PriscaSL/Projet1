"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const faker = require("faker");
const user_model_1 = require("./../users/model/user.model");
faker.setLocale('en');
async function create(count = 1, params) {
    const users = [];
    for (let i = 1; i <= count; i++) {
        const defaultParams = {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
        };
        const userParams = { ...defaultParams, ...params };
        const newUser = new user_model_1.User(userParams);
        await newUser.save();
        users.push(newUser);
    }
    return users;
}
exports.create = create;

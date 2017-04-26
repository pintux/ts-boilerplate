"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sample_1 = require("../dist/sample");
describe('test fetchHeaders', function () {
    it('should return headers as an object', async function () {
        return async () => {
            const headers = await sample_1.fetchHeaders('http://www.vivocha.com');
            console.log('Complete your TS test here.');
        };
    });
});

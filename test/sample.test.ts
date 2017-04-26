import { fetchHeaders } from '../dist/sample';

describe('test fetchHeaders', function () {
    it('should return headers as an object', async function () {
        return async () => {
            const headers = await fetchHeaders('http://www.vivocha.com');
            console.log('Complete your TS test here.');
        }
    });
});
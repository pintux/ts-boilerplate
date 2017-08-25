import * as http from 'http';

export async function fetchHeaders(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            resolve(res.headers);
        });
    });
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
async function fetchHeaders(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            resolve(res.headers);
        });
    });
}
exports.fetchHeaders = fetchHeaders;
//# sourceMappingURL=sample.js.map
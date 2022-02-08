"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
exports.hello = function (event) {
    var response = {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: '<div><h1>Dapper</h1></div>'
    };
    return new Promise(function (resolve) {
        resolve(response);
    });
};
//# sourceMappingURL=handler.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAltPromise = void 0;
const Custom_1 = require("./Custom");
class CustomAltPromise extends Promise {
    constructor(executor) {
        super(executor);
    }
    returnNewCustom() {
        return new CustomAltPromise(resolve => {
            resolve(new Custom_1.Custom("Test"));
        });
    }
    then(onfulfilled, onrejected) {
        return super.then(onfulfilled, onrejected);
    }
}
exports.CustomAltPromise = CustomAltPromise;
//# sourceMappingURL=CustomAltPromise.js.map
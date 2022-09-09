"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAltPromise = void 0;
class CustomAltPromise extends Promise {
    constructor(executor) {
        super(executor);
    }
    returnNewCustom() {
        return new CustomAltPromise(resolve => {
        });
    }
    then(onfulfilled, onrejected) {
        return super.then(onfulfilled, onrejected);
    }
}
exports.CustomAltPromise = CustomAltPromise;
//# sourceMappingURL=CustomAltPromise.js.map
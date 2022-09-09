"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAnyPromise = void 0;
class CustomAnyPromise extends Promise {
    constructor(executor) {
        super(executor);
    }
    then(onfulfilled, onrejected) {
        return super.then(onfulfilled, onrejected);
    }
}
exports.CustomAnyPromise = CustomAnyPromise;
class SpecificPromise extends CustomAnyPromise {
    constructor(executor) {
        super(executor);
    }
    cThen() {
        return this.then(value => value.andWeSaySmthElse());
    }
    sample() {
        this.cThen().then(value => value.sayMyNameAndWait());
    }
}
//# sourceMappingURL=CustomAnyPromise.js.map
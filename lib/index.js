"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Custom_1 = require("./Custom");
const CustomAnyPromise_1 = require("./CustomAnyPromise");
//
// new CustomPromise((resolve, reject) => {
//     resolve(new Custom("Number1"));
// }).customNew().customTHEN();
new CustomAnyPromise_1.CustomAnyPromise(resolve => resolve(new Custom_1.Custom("test"))).then(value => value.sayMyNameAndWait()).then();
//# sourceMappingURL=index.js.map
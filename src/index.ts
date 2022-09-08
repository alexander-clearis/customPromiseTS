import {CustomPromise} from "./CustomPromise";
import {Custom} from "./Custom";

new CustomPromise((resolve, reject) => {
    resolve(new Custom("Number1"));
}).customNew().customTHEN();
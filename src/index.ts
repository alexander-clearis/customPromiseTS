import {CustomPromise} from "./CustomPromise";
import {Custom} from "./Custom";
import {CustomAltPromise} from "./CustomAltPromise";
import {Empty} from "./Empty";
//
// new CustomPromise((resolve, reject) => {
//     resolve(new Custom("Number1"));
// }).customNew().customTHEN();

new CustomAltPromise(resolve => resolve(new Custom("test"))).then(value => value.sayMyNameAndWait()).then()
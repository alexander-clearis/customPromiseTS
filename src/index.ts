import {CustomPromise} from "./CustomPromise";
import {Custom} from "./Custom";
import {CustomAnyPromise} from "./CustomAnyPromise";
import {Empty} from "./Empty";
//
// new CustomPromise((resolve, reject) => {
//     resolve(new Custom("Number1"));
// }).customNew().customTHEN();

new CustomAnyPromise(resolve => resolve(new Custom("test"))).then(value => value.sayMyNameAndWait()).then()
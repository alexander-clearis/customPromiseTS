import {Custom} from "./Custom";
import {CustomPromise} from "./CustomPromise";
import {CustomPromiseAlt} from "../lib/CustomPromiseAlt";

type MyCustomType = Custom;

export class CustomAltPromise<T = Custom | never> extends Promise<T> {

    constructor(executor: (resolve: (value: (PromiseLike<T> | T)) => void, reject: (reason?: any) => void) => void) {
        super(executor);
    }

    returnNewCustom<T = Custom>(): CustomAltPromise<any> {
        return new CustomAltPromise(resolve => {
            resolve(new Custom("Test"));
        })
    }

    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): CustomAltPromise<TResult1 | TResult2> {
        return <CustomAltPromise<TResult1 | TResult2>>super.then(onfulfilled, onrejected);
    }

}

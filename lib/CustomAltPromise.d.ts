import { Custom } from "./Custom";
export declare class CustomAltPromise<T = Custom | never> extends Promise<T> {
    constructor(executor: (resolve: (value: (PromiseLike<T> | T)) => void, reject: (reason?: any) => void) => void);
    returnNewCustom<T = Custom>(): CustomAltPromise<any>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): CustomAltPromise<TResult1 | TResult2>;
}

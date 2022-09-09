import { Custom } from "./Custom";
export declare type MyCustomType = PromiseLike<Custom> | Custom | void | never;
export declare class CustomAnyPromise<T = MyCustomType> extends Promise<T> {
    constructor(executor: (resolve: (value: (PromiseLike<T> | T)) => void, reject: (reason?: any) => void) => void);
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): CustomAnyPromise<TResult1 | TResult2>;
}

import { Custom } from "./Custom";
declare type CustomFullFillType = (value: Custom) => (PromiseLike<Custom> | any);
declare type CustomRejectType = (reason: any) => (PromiseLike<never> | never);
export declare class CustomPromise extends Promise<Custom | never | void | undefined> {
    constructor(executor: (resolve: (value: (PromiseLike<Custom> | Custom)) => void, reject: (reason?: any) => void) => void);
    customTHEN(): CustomPromise;
    customNew(): CustomPromise;
    thenNotStrict<TResult1 = Custom, TResult2 = never>(onfulfilled?: CustomFullFillType | undefined | null, onrejected?: CustomRejectType | undefined | null): CustomPromise;
    then<TResult1 = Custom, TResult2 = never>(onfulfilled?: CustomFullFillType | undefined | null, onrejected?: CustomRejectType | undefined | null): CustomPromise;
}
export {};

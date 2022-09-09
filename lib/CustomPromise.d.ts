import { Custom } from "./Custom";
export declare class CustomPromise extends Promise<Custom | never | void | undefined> {
    constructor(executor: (resolve: (value: (PromiseLike<Custom> | Custom)) => void, reject: (reason?: any) => void) => void);
}

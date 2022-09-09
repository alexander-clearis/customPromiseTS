import { Custom } from "./Custom";
declare type MyCustomType = Custom | void | never;
export declare class CustomPromiseAlt<T = MyCustomType> extends Promise<T> {
    constructor(executor: (resolve: (value: (PromiseLike<T> | T)) => void, reject: (reason?: any) => void) => void);
}
export {};

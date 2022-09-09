import {Custom} from "./Custom";
import {CustomPromise} from "./CustomPromise";
import {Empty} from "./Empty";

export type MyCustomType = PromiseLike<Custom> | Custom | void | never;


export class CustomAnyPromise<T = MyCustomType> extends Promise<T> {

    constructor(executor: (resolve: (value: (PromiseLike<T> | T)) => void, reject: (reason?: any) => void) => void) {
        super(executor);
    }
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): CustomAnyPromise<TResult1 | TResult2> {
        return <CustomAnyPromise<TResult1 | TResult2>>super.then(onfulfilled, onrejected);
    }
}

class SpecificPromise<T extends Custom> extends CustomAnyPromise<T> {

    constructor(executor: (resolve: (value: (PromiseLike<T> | T)) => void, reject: (reason?: any) => void) => void) {
        super(executor);
    }

    cThen(): SpecificPromise<T> {
        return <SpecificPromise<T>>this.then(value => value.andWeSaySmthElse())
    }

    sample(): void {
        this.cThen().then(value => value.sayMyNameAndWait())
    }
}
import {Custom} from "./Custom";

type CustomFullFillType = (value: Custom) => (PromiseLike<Custom> | any);
type CustomRejectType = (reason: any) => (PromiseLike<never> | never)

export class CustomPromise extends Promise<Custom> {


    constructor(executor: (resolve: (value: (PromiseLike<Custom> | Custom)) => void, reject: (reason?: any) => void) => void) {
        super(executor);
    }

    customTHEN(): CustomPromise {
        return this.then(() => {
            console.log("CUSTOM THEN FROM CustomPromise")
        });
    }

    customNew(): CustomPromise {
        return this.then(() => {
            console.log("new CUstom Funccasd")
        })
    }

    then<TResult1 = Custom, TResult2 = never>(onfulfilled?: CustomFullFillType | undefined | null, onrejected?: CustomRejectType | undefined | null): CustomPromise {
        return <CustomPromise>super.then(onfulfilled, onrejected);
    }
}

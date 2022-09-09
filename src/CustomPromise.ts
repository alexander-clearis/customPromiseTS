import {Custom} from "./Custom";

type CustomFullFillType = (value: Custom) => (PromiseLike<Custom> | any);
type CustomRejectType = (reason: any) => (PromiseLike<never> | never)

export class CustomPromise extends Promise<Custom | never | void | undefined> {


    constructor(executor: (resolve: (value: (PromiseLike<Custom> | Custom)) => void, reject: (reason?: any) => void) => void) {
        super(executor);
    }

    customTHEN(): CustomPromise {
        return this.thenNotStrict(() => {
            console.log("CUSTOM THEN FROM CustomPromise")
        });
    }

    customNew(): CustomPromise {
        return this.thenNotStrict(() => {
            console.log("new CUstom Funccasd")
        })
    }

    thenNotStrict<TResult1 = Custom, TResult2 = never>(onfulfilled?: CustomFullFillType | undefined | null, onrejected?: CustomRejectType | undefined | null): CustomPromise {
        return <CustomPromise>super.then(onfulfilled, onrejected);
    }

    then<TResult1 = Custom, TResult2 = never>(onfulfilled?: CustomFullFillType | undefined | null, onrejected?: CustomRejectType | undefined | null): CustomPromise {
        return <CustomPromise>super.then<Custom>(onfulfilled, onrejected);
    }
}

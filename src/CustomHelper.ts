import {Custom} from "./Custom";

export class CustomHelper {
    static createNewPromiseWithMe(callMe: (resolve: (value: Custom) => void, reject: () => void) => void): Promise<Custom> {
        return new Promise((resolve: (value: Custom) => void, reject: () => void) => {
            callMe(resolve, reject);
        });
    }

}
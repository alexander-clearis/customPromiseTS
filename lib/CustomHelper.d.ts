import { Custom } from "./Custom";
export declare class CustomHelper {
    static createNewPromiseWithMe(callMe: (resolve: (value: Custom) => void, reject: () => void) => void): Promise<Custom>;
}

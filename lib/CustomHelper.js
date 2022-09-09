"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHelper = void 0;
class CustomHelper {
    static createNewPromiseWithMe(callMe) {
        return new Promise((resolve, reject) => {
            callMe(resolve, reject);
        });
    }
}
exports.CustomHelper = CustomHelper;
//# sourceMappingURL=CustomHelper.js.map
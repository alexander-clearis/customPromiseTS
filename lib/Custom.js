"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Custom = void 0;
class Custom {
    constructor(Name) {
        this.Name = Name;
    }
    createNewPromiseWithMe(callMe) {
        return new Promise((resolve, reject) => {
            callMe(resolve, reject);
        });
    }
    sayMyNameAndWait() {
        return new Promise((resolve) => {
            console.log(this.Name, ": GOING TO GET MY NAME FROM DB");
            setTimeout(() => {
                console.log(this.Name, ": My Name is ", this.Name);
                resolve(this);
            }, 1000);
        });
    }
    saySomethingAndWait(smth) {
        return this.createNewPromiseWithMe(resolve => {
            setTimeout(() => {
                console.log(this.Name, ": ", smth);
                resolve(this);
            }, 1000);
        });
    }
    andWeSaySmthElse() {
        console.log(this.Name, ": I say smth else!");
    }
}
exports.Custom = Custom;
//# sourceMappingURL=Custom.js.map
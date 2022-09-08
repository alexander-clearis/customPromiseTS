export class Custom {
    Name: string;

    constructor(Name: string) {
        this.Name = Name;

    }

    createNewPromiseWithMe(callMe: (resolve: (value: this) => void, reject: () => void) => void): Promise<this> {
        return new Promise((resolve: (value: this) => void, reject: () => void) => {
            callMe(resolve, reject);
        });
    }

    sayMyNameAndWait(): Promise<this> {
        return new Promise((resolve) => {
            console.log(this.Name, ": GOING TO GET MY NAME FROM DB");
            setTimeout(() => {

                console.log(this.Name, ": My Name is ", this.Name);
                resolve(this);
            }, 1000)
        })
    }

    saySomethingAndWait(smth: String): Promise<this> {
        return this.createNewPromiseWithMe(resolve => {
            setTimeout(() => {
                console.log(this.Name, ": ", smth)
                resolve(this)
            }, 1000)
        });
    }

    andWeSaySmthElse(): void {
        console.log(this.Name, ": I say smth else!")
    }
}

export declare class Custom {
    Name: string;
    constructor(Name: string);
    createNewPromiseWithMe(callMe: (resolve: (value: this) => void, reject: () => void) => void): Promise<this>;
    sayMyNameAndWait(): Promise<this>;
    saySomethingAndWait(smth: String): Promise<this>;
    andWeSaySmthElse(): void;
}

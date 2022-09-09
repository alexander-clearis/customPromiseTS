export class  Empty {
    constructor(id?: string) {
        console.log(id, "IM EMPTY!")
    }
    say(string: string): void {
        console.log(string);
    }
}
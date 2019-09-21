import add from "./util";
import TV from "./base";

const returnValue = add(1, 2)

console.log(returnValue);

let tu:[number, string];

tu = [10, "ggg"];

let sy = Symbol()

console.log(tu[0]);

const myTV : TV = {
    turnOn() {
        console.log("turnOnTV");
    }

    ,
    turnOff() {
        console.log("turnOffTV");
    }
}

myTV.turnOn();
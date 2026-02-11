import greeting from "./hi.js";

async function  sayHi(params) {
    const result = await greeting("Sam");
    console.log(result);
}
sayHi();
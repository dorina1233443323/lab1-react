const firstFunction = () =>{
    return new Promise((resolve) => {
        resolve("First message");
    })
}
const secondFunction = () =>{
    return new Promise((resolve) => {
        resolve("Second message");
    })
}
const thirdFunction = () =>{
    return new Promise((resolve) => {
        resolve("Third message");
    })
}

firstFunction().then((msg) => {
    console.log(msg)
    return secondFunction();
}).then((msg2) => {
    console.log(msg2)
    return thirdFunction();
}).then((msg3) => {
    console.log(msg3)
}).catch((e) => console.log("Error"))
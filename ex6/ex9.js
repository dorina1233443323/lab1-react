const promise1 = Promise.resolve("abc");
const promise2 = 123;
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Third")
    }, 1000)
})
const promise4 = Promise.reject("i");

Promise.all([promise1, promise2, promise3]).then((result) => console.log(result)).catch((e) => console.log("Error"))

Promise.allSettled([promise1, promise3, promise4])
.then((result) => {
    result.forEach(element => console.log(element.status));
})
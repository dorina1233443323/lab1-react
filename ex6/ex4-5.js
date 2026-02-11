// 6.4
const lateMsg = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("This message is 2 sec late")
        }, 2000)
    })
}
lateMsg().then((msg) => {
    console.log(msg);
})

// 6.5
const promisteParameter = (criteria) => {
    return new Promise((resolve, reject) => {
        if(criteria) {
            resolve("The promise is resolved")
        }else {
            reject("The promise is rejected")
        }
    })
}

promisteParameter(true).then((msg) => {console.log(msg)}).catch((e) => {console.log("Error")})
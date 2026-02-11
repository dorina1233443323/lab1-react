const hello = (anotherFunction) =>{
    console.log("hello");
    anotherFunction();
}
const funct = () => {
    console.log("ABC")
}
hello(funct)


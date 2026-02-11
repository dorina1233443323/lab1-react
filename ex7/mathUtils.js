// 7.1
export function sum(...arg){
    return Array.from(arg).reduce((acc, currVal) => acc + currVal);
}
export function subtract(...arg){
    return Array.from(arg).reduce((acc, currVal) => acc - currVal)
}
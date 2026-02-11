// 1. Variabile și Tipuri de date

// 1.1
var number = 1;
let boolean = true;
const string = "string";

// 1.2
function returnType(variabile){
    return typeof(variabile);
}

// 1.3
let nr = 123;
let str = nr.toString();
let nr2 = Number(str);

// 1.4
let name = "Dorina";
let age = 20;
let sentence = `Hi, I am ${name}, I am ${age} years old`;

// 1.5
let var1 = 1;
let var2 = 2;
let temp = var1;
var1 = var2;
var2 = temp;

// 1.6
function isNullOrUndefined (variabile) {
    if(variabile === null || variabile === undefined){
        return "The variable is null/undefined";
    }else{
        return "The variable is not null/undefined"
    }
}

// 1.7
let car = {
    type: "Volkswagen Beetle",
    color: "Yellow",
    year: 2003,
    new: false
};
car.paint = "Ladybug";
delete car.color;

// 1.8
let array = [1, "str", false, null, undefined];
for(let i = 0; i < array.length; i++){
    console.log(typeof(array[i]));
}

// 2. Funcții

// 2.1
function sum(a, b){
    return a + b;
}

// 2.2
function area(length, width = 1){
    return length * width;
}

// 2.3
let square = function(nr){
    return nr*nr;
}

// 2.4
function stringChange(str){
    let newStr = str.toUpperCase();
    let chNr = str.length;
    return [newStr, chNr];
}

// 2.5
function double(nr){
    return nr*2;
}
function square(nr){
    return nr*nr;
}
function main(nr){
    return {
       double: double(nr),
       square: square(nr)
    }
}

// 2.6
const summ = (a, b) => {
    return a + b;
}

// 2.7
function one(smth){
    return `This is ${smth}`;
}
function two(array){
    for(let i = 0; i < array.length; i++){
        array[i] = one(array[i]);
    }
    return array;
}

// 3. Obiecte

// 3.1
let car = {
    type: "Volkswagen Beetle",
    model: "Final Edition SEL",
    year: 2019
};

// 3.2
console.log(car.type, car.model, car.year);
console.log(car["type"], car["model"], car["year"]);

// 3.3
car.color = "Blue";
car.year = 2020;

// 3.4
delete car.model;

// 3.5
for(let key in car){
    if(car.hasOwnProperty(key)){
        value = car[key];
        console.log(key, value);
    }
}

// 3.6
let car = {
    type: "Volkswagen Beetle",
    model: "Final Edition SEL",
    year: 2019,
    description: function() { 
        return`Mark: ${this.type}, Model: ${this.model}, Year: ${this.year}`
    }
};
console.log(car.description);

// 3.7
function msg(obj){
    return `Hi, ${obj.name}, you are ${obj.age} y.o`;
}

// 3.8
if("color" in car){
    console.log("Color is a property in the car obj")
}

// 3.9
let person = {
    name,
    age,
    adress: {
        city,
        street,
    }
}

// 3.10
function createStudent(name, age,  mark){
    let student = {
        studentName: name,
        studentAge: age,
        studentMark: mark
    }
    return student;
}

// 3.11
let newCar = Object.assign({}, car);
let secondCar = {...car};

// 3.12
let calculator = {
    sum: function(a, b){
        return a + b;
    },
    substraction: function(a, b){
        return a - b;
    },
    multipilication: function(a, b){
        return a * b;
    },
    division: function(a, b){
        return a / b;
    }
}

// 3.13
const {sum, substraction} = calculator;

// 4. Array-uri

// 4.1
let arr  = ["Chisinau", "Edinet", "Vadul lui Voda"];
console.log(arr[0], "," ,arr[arr.length - 1]);

// 4.2
arr.push("Balti");
arr.unshift("Tiraspol");

// 4.3
let colors =  ["blue", "yellow", "green"];
for(let i = 0; i < colors.length; i++){
    console.log(colors[i])
}

// 4.4
let animals = ["zebra", "dog", "cat"];
animals.forEach((animal, i) => {
    console.log(`${animal} is the ${i + 1} animal in the array`);
    i++;
})

// 4.5
function biggerThanTen(array){
    let newArr = [];
    array.forEach(el => {
        if(el > 10){
            newArr.push(el);
        }
    })
    return newArr;
}

// 4.6
let numbers = [1, 5, 3, 9, 4, 6]
console.log(numbers.sort());

// 4.7
function square(array){
    const squared = array.map(x => x*x);
    return squared;
}

// 4.8
console.log(numbers.reduce((a,b) => a + b));

// 4.9
console.log(numbers.includes(5));
console.log(numbers.indexOf(9));

// 4.11
let bidimensionalArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(bidimensionalArr[0][1]);

// 4.10
let arr1 = ["i", "am", "elsa"];
let arr2 = ["let", "it", "go"];
let arr3 = [...arr1, ...arr2];

// 4.12
function noDuplicate(arr){
    return [...(new Set(arr))];
}

// 4.13
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let subarr = a.slice(0, 3);
let noSecond = a.splice(2, 1);
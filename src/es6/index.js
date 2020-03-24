function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';

    console.log(name,age,country)
}

// es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
}

newFunction();
newFunction2();

// TEMPLATE LITERAL
let hello = "Hello";
let world = "World";

let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

//LET and CONST, Multilinea, Spread Operator y Desestructuracion
let loren = `Otra frese epica que necesitamos
ahora es otra frase epica`;

console.log(loren)

//Desestructuracion
let person = {
    'name' : 'oscar',
    'age' : '32',
    'country': 'MX'
};

let { name , age , country } = person;
console.log(name,age, country);

console.log(name,age);

//Spread Operator
let team1 = ['OScar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

// LET y VAR
{
    let globalLet = "Variable global let";
    console.log(globalLet)
}
{
    var globalVar = "Variable global Var";

}
console.log(globalVar);

// const
const a = 'b';


// Arrow Functions
const names = [
    {name, age},
    {name2: 'Marco', age: '25'}
]

let listOfNames = names.map(function (item) {
console.log(item.name)
});

let listOfNames2 = names.map(item => console.log(item.name));

/*
const listOfNames3 = (name, age, country) => {
    ...
}

const listOfName4 = name => {
    ...
}

const square = num => num * num;
*/

// Promesas

const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log( 'hola' ))
    .catch(error => console.log(error))
// Parametros en objetos
//es5
obj = {name: name, age:age };
//es6
obj2 = {name, age };
console.log(obj2);

// Clases

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// import and export

//import { hello } from '../module';

//hello();

// Generators

function* helloWorld() {
    if (true){
        yield 'Hello, ';
    }
    if ( true ) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

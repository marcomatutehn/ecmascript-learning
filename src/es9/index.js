const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX',
};

// Propagacion de ..all para destructurar los elementos de un objeto
// Permite dejar listo un objeto con los datos que yo necesito
let { name, ...all } = obj;
console.log( name, all);

const obj2 = {
    name: 'oscar',
    age: 32,
};

// Union de dos objetos
const obj3 = {
    ...obj2,
    country: 'MX',
};

const helloWorld = () => {
    return new Promise((resolve , reject )=>{
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

//Agregan finaly en las promesas
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

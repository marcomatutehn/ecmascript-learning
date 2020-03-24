const data = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
};
// Crea un nuevo arreglo con la informacion de un objeto
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
};
// Transforma un objeto a un array sacando los valores sin su respectivo indice
const values = Object.values(data2);
console.log(values);

// Agregar caracteres en el string
const string = 'hello';
console.log(string.padStart(8,'hi '));
console.log(string.padEnd(12,' Worlddd'));

// Async and Await
//1. Funcion
const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

// 2. Async
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//Forma recomendada
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (e) {
        console.log(e);
    }
}

anotherFunction();

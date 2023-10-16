// Infinity, -Infinity, NaN

console.log(1 / 0);  //Infinity

console.log(('text' / 10 * 4) ** 0); //NaN

console.log(-1 / 0);  //-Infinity

console.log(NaN == Infinity);

//Виды кавычек 

let age = 25;
let str = 'Hello World';  //''
let str2 = "Hello World"; //""
let str3 = `Меня зовут Коля, мне ${(5 + 7.5) * 2} лет`; //``
let str4 = 'Меня зовут Коля, мне ${(5 + 7.5) * 2} лет';

console.log(str4);

// true and false
// true-истина
// false-ложь

let a = 10 > 3;
console.log(a);

// null - ничего, пусто, значение не известно

//underfind - значение не присвоено.

let test;

console.log(test);

// typeof() - возвращает тип аргумента

console.log(typeof (a));

//BigInt

const BigInt = 12345678901234567890123456789012345678901234567890123456789012345678901234567890n;

console.log(BigInt)
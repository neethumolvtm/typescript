console.log('Neethu start to study TypeScript!');


// Arrow function
//in normal function we used 'this' key word but not need in array
const food = [{ name: 'Biriyani', count: 2 }];
const myFood = food.map(function (foodItem) {
    return foodItem.name.toUpperCase();
});
console.log(myFood); //BIRIYANI
//remove function and add arrow
const myFood1 = food.map((foodItem) => {
    return foodItem.name.toUpperCase();
});
console.log(myFood1); //BIRIYANI
//Most simple code, not required return and bracket
const myFood2 = food.map(foodItem => foodItem.name.toUpperCase());
console.log(myFood2); //BIRIYANI



//Default function parameter
function multiply(a: number, b = 5) {
    return a * b;
}
console.log(multiply(5));//if b is not there b=5//out:25
console.log(multiply(5, 2));//out:10



//object literal improvement
const car = [{ name: 'benz', description: 'Big Benz' }];
const allArray = { food, car };
console.log(allArray);


//REST Parameter
//Add n array numbers
function add(hi: string, ...arr: any[]) {
    console.log(arguments);//reserved keyword ,all object map  will print here
    console.log(hi);
    return arr.reduce((prev, next) => prev + next);
}
const sum = add('hii', 1, 2, 3, 4, 5);
console.log(sum);//out 15
//..arr=[1,2,3]


//Spread Operator
const allData = [...car, ...food];//copy into new array
console.log(allData);


//Destructuring Arrays and Objects
// const student = { name: 'neethu', age: 25 };
// function studentData({ name, age }) {
//     console.log(name, age);
// }
// studentData(student);
const { x, y } = { x: 11, y: 8 };
console.log(x); console.log(y);
const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni'],
};
const toppings = ['pepperoni', 'bacon', 'chilli'];
const [first, second, third] = toppings;
function logToppings([first, second, third]: any) {
    console.log(first, second, third);
}
logToppings(toppings);


//Number type
const numberTyp: number = 25;
const nubertyp2: number = 5;
function sumOfTwo(numberTyp: number, nubertyp2: number): number {
    return numberTyp + nubertyp2;
}
const sumOfTwoData = sumOfTwo(89, 90);
console.log(`SUM OF 2 number is ${sumOfTwoData}`);


//String Typeconst
const stringTyp: string = 'neethu';
const stringTyp2: string = 'Thomas';
function dataTwo(stringTyp: string, stringTyp2: string): string {
    return stringTyp2 + stringTyp;
}
const dataTwo1 = dataTwo(stringTyp2, stringTyp);
console.log(`SUM OF 2 number is ${dataTwo1}`);


//boolean type
function dataNumber(no: number): boolean {
    return no > 5;
}
const numb = dataNumber(5);
console.log(numb);


//any
let coupon: any;
coupon = 5; coupon = "hi"; coupon = true;
console.log(coupon);


//implicit vs explicit
let implicitData: string = "new Data";//implicit type
let explicitData: string;
explicitData = "exp data";


//void is opposite of any,no data returning
let firstWord = "neethu";
function voidType(stringTyp: string): void {
    firstWord = stringTyp;
}
console.log(firstWord);
const funFirstWord = voidType('thomas');
console.log(firstWord);

//never Type
// function neverType(error: string): never {
//     throw new Error(error);//never return a value
// }

// const err = neverType('Something went wrong');
// console.log(err);

//null vd undefined
//strict check null
let pizzaType: string | null = "chicken pizza";


// Union and Literal Types
function unionType(uni: 'thomas' | 'varghese'): void {
    firstWord = uni;
}
const unionData = unionType('thomas');
console.log('Union type:', firstWord);


//Function Type
let sumfun: (price: number, size: number) => number;
sumfun = (x, y) => x * y;
console.log(sumfun(2, 4));


//Functions and Optional Arguments using?
let sumfunc: (price: number, size?: number) => number;
sumfunc = (x, y) => {
    if (y) { return x * y; }
    else return x;
}
console.log(sumfunc(2));


//Typed Functions and Default Params
let sumfuncy: (price: number, size?: number) => number;
sumfuncy = (x, y) => {
    let q = y || 2;
    return x * q;
}
console.log(sumfuncy(2));
let sumfuncd: (price: number, size?: number) => number;
sumfuncd = (x, y = 5) => x * y;
console.log(sumfuncd(2));


//Array type
const numbA: number[] = [1, 2, 3];
const strgA: string[] = ['nee', '2,3'];

//Array contain string
let toppingq: Array<string>;
toppingq = ['nee', "1"];

//tuple type of  array
let top123: [string, number, boolean]
top123 = ['ff', 1, true];


//type alias
let pizaSize;
type Size = 'small' | 'large' | 'medium';
function data(size: Size) {
    pizaSize = size;
}
data('small');
console.log(pizaSize);

type pizaSize1 = 'small' | 'large' | 'medium';
type callBack = (size: pizaSize1) => void;
const data1: callBack=(x) => pizaSize = x;
data1('medium');
console.log(pizaSize);

type Pizza = { name: string; toppings: number };
const pizza123: Pizza = { name: 'Blazing Inferno', toppings: 5 };
const serialized = JSON.stringify(pizza123);
function getNameFromJSON(obj: string) {
  // return (<Pizza>JSON.parse(obj)).name;
  return (JSON.parse(obj) as Pizza).name;
}

//Type Assertions
console.log(getNameFromJSON(serialized));
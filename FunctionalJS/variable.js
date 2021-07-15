// 1. Use Strict
'use strict'

// 2. Varialbe
// let (added in ES6)

let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    
}

// var (don't ever use this ! )
// var hoisting : 어디 선언한것에 관계 없이 끌어 올려서 할당 하는 것
// has no block scope : 어느곳에서도 호출 가능
age = 4;
var age;

// 이에 따라 let이 나옴

// 3. Contants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

const dayInWeek = 7;
const maxNumber = 5;


// number - speicia numeric values : infinity, - infinity, NaN
const infinity = 1/0;
const negativeInfinitiy = -1/0;
const nAn = 'not a numer' / 2;
console.log(infinity);
console.log(negativeInfinitiy);
console.log(nAn);


// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(`value : ${symbol1.description}`)

// 4. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7'+5;
console.log(`value : ${text}, type : ${typeof text}`);

text = '8'/'2';
// type이 넘버로 변하기 때문에
// console.log(text.charAt(0)); 했을때 에러 발생
// typescript가 나온 이유
console.log(`value : ${text}, type : ${typeof text}`);

// 5. object, real-life object, data structure
const ellie = { name: 'ellie' , age : 20};
ellie.age=21;
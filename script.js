// Declare
function printMe() {
    console.log('printing...')
}

printMe()

function printThis(param) {
    console.log(param)
}
printThis('tapas');

const printMeAgain = function(){
    console.log('print')
};
printMeAgain();

const printMeAgainParam = function(a, b) {
    console.log(a, b);
}
printMeAgainParam(10, 20)

// Return
function sum(a, b) {
    let ret = a + b;
    return ret;    
}

console.log(sum(1,2))


// default function
function calc(a, b = 0) {
    return (2* (a + b));
}

console.log(calc(2,3))
console.log(calc(3,3))
console.log(calc(3))

// Rest Parameter
function colletThings(x,...y) {
    console.log(x)
    console.log(y)
}
colletThings(1,2,3,4,5,6,7,8,9)


//Arrow Function
const add = (x,y) => {
    return x + y;
}
/** 
 const add = x => x;
*/
console.log(add(2,3))

// Nested Function
function outer() {
    console.log('outer')
    function inner() {
        console.log('inner')
    }
    inner()
}
outer()

// Scope Function
function doSomething() {
    let x = 10;
    const y  = 20;
    var z = 30;
    console.log(x,y,z);
}
doSomething()

let a = 10;
const b = 20;
var c = 30

function doSomething2() {
    console.log(a,b,c)
}

doSomething2()

// closures

function outer2(x) {
    function inner2(y) {
        return x + y;
    }
    return inner2
}
const outerReturn = outer2(10)
console.log(outerReturn)
console.log(outerReturn(2))

// callback function
function foo(bar) {
    bar()
}
foo(function() {
    console.log('bar')
})

function named() {
    console.log('bar2')
}
foo(named)

function foo2(bar) {
    if (itsNight) {
        bar()
    }

    if (isDinkOverCheckOnline) {
        bar()
    }
}

// Higher Order Function -
// 1. It takes one or more functions as argument
// 2. It may return a function
function getCapture(camera) {
    camera()
}
getCapture(function() {
    console.log('canon')
});

function returnFn() {
    return function() {
        console.log('returning')
    }
}
const fn = returnFn()
fn()

// Pure Function
let greeting = 'hello'
function sayGreeting(name) {
    return `${greeting} ${name}`;
}

console.log(sayGreeting('Tapas'))
console.log(greeting = 'hola')
console.log(sayGreeting('Tapas'))

//IIFE
// function x() {    
// }
// x()
// (function () {
//     console.log('IIFE')
// })()

//recursion
//base condition
// function recurse() {
//     if (base_condition) {
//         return;
//     }

//     recurse();
// }

function fetchwater(count) {
    if(count === 0){
        console.log('No more water left!')
        return;
    }

    console.log('Fetching water...');
    fetchwater(count - 1);
}
console.log(fetchwater(5))
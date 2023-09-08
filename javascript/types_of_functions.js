// Types of functions:-

// 1) Named functions
// 2)Anonymous functions

// 2)Anonymous functions:- we will not give function Name

// But we have to assign a variable to a function



// let sum=function(num1,num2){
//     var result=num1+num2;
//     return result;
// }
// console.log(sum(2,4));


// 3) IIFE:- Immediately invoked function expression

// It is used to execute a function immediately where they created,IIFE used.

// (function defination)();

(function add (num1,num2){
    var result=num1+num2
    console.log(result);
})(10,20);


var sum=(function add(num1,num2){
    var result=num1+num2;
    return result;
})(40,120);
console.log(sum);


// Arrow functions :-

var product=(num1,num2)=>{
    var result=num1*num2;
    return result;
}
console.log(product(3,4));

 product=(num1,num2)=>{
    var result=num1*num2;
    console.log(result);
}
product(3,4);


// Arrow function forms are:-
// 1)
// If only one statement in function body

var product=(num1,num2)=>num1*num2;
console.log(product(9,8));

// If only one parameter

var cube=num3 => num3*num3*num3;
console.log("Cube of num3 is:" +cube(5));

// If no arguments in function

greet=()=> console.log("Hello world");
greet();

greet=_ =>{
    console.log("Welcome to javascript");
}




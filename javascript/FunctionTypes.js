//  Anonymous Functions

var sum = function(num1,num2){
    const result=num1-num2;
    return result;

}
console.log(sum(20,10));


//  Immediately Invoked Function Expression

var sum=(function add(num1,num2){
    var result=num1+num2
    return result;
})(2,5);
console.log(sum);

var sum=(function add(num1,num2){
    var result=num1+num2
    console.log(result);
})(2,5);

//  Arrow Functions

var product=(a1,a2)=>{
    var result=a1*a2;
    return result;
}
console.log(product(2,5));

 product=(a1,a2)=>{
    var result=a1*a2;
    console.log(result);
}
product(2,5);

// Only one parameter]

var add= (a,b)=> a+b
console.log(add(5,4));

// cube of a number one argument

let value=(c)=> c*c*c
console.log(value(5));

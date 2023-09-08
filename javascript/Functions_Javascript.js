// Function is block of code written to do a particular task

// Ex:- {
//     statement 1;
//     statement 2;
//     statement n;
// }

// function functionName(parameter1,parameter2,....parameter n){

// }



for(i=0;i<10;++i){
 
console.log("Hello");   
}

function sum(num1,num2){
    var result=num1+num2
    return result;
}
console.log(sum(6,7))
console.log(sum(12,13))
console.log("Sum of 50,100:" +sum(50,100));



console.log("Adding two numbers of 25,35:"+sum(25,35));

var res=sum(1,2)
console.log(res);


//  Function Expression 

function add(num1,num2){
    var result=num1+num2
    return result;
}

console.log("The two number sum is:" +add(100,200));

var res=add(123,456);
console.log(res);






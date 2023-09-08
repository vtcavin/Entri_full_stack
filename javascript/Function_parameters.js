function sub(num1,num2){
var result=num1-num2;
return result;
}
console.log(sub(9,4));

//  Example for default parameters if we not pass it shows undefined and NAN


function product(num1,num2){
    console.log(num1,num2,num1*num2);
}
product(2)


function product(num1=1,num2=2,...rest){
    var result=num1*num2;
    for(num of rest){
        result=result*num;
    }
    console.log(result);
}
product(3,4,5,6,7,8)



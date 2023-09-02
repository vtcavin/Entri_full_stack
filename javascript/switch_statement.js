var num1=+prompt("Enter number 1");
var num2=+prompt("Enter number 2");
var operation=prompt("Enter whuch operation to do(+/-/*/ /");
switch(operation){
    case '+':
        console.log("Sum of two numbers is"+ (num1+num2));
        break;
    case '-':
        console.log("Sum of two numbers is"+ (num1-num2));
        break;
    case '*':
        console.log("Sum of two numbers is"+ (num1*num2));
        break;
    case '/':
         console.log("Sum of two numbers is"+ (num1/num2));
         break;
    default:
        console.log("Enter valid operation");

}
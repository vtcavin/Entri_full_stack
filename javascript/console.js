console.log(console)
console.log("cavin");

console.error("This is an error");

// console.assert(5>53);

console.assert();

// console.clear();


obj={a:1,b:2,c:3}
console.log(obj);
console.table(obj);

console.warn("Please do not drink cooldrink");

console.info("This is an important message");

// Info and log comes in same section in web broswer console

console.table(console);

console.time("a");

console.timeEnd("a");

// Ex

console.time("for loop");
for (let i=0;i<10;i++){
    console.log(50);
}
console.timeEnd("for loop");

// While loop example
console.time("while");

let i=0;
while (i<10) {
    console.log(50);
    i++;
}
console.timeEnd("while");

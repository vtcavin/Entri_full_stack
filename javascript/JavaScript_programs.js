// Sum of natural numbers

const n=5;
let sum=0;
for(let i=1;i<=n;i++){
    sum+=i;
}
console.log(sum);

// Factorial of a Numbers

const p=5;
let factorial=1;
for(let i=1;i<=p;i++){
    factorial*=i;
}
console.log(factorial);

// Fibonacci series

const z=8;
let first=0,second=1,next;
console.log(second);
for(let i=2;i<z;i++){
    next=first+second;
    console.log(next);
    first=second;
    second=next;
}

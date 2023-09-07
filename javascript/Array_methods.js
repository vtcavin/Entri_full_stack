// Methods on arrays:-
// Push()
// Pop()
// Unshift() 
// Shift() 
// Indexof()
// Slice()


var arr=[33,44,55,66,77,88];
arr.push(101);
console.log(arr);
console.log(arr.length);

let cavin=["Sonunigam","Kumar sanu","Udit Narayan"];
cavin.pop("Udit Narayan");
console.log(cavin);


let arr1=[101,102,103,104,105];
arr1.unshift(201);
console.log(arr1);

/// Unshift - Adds element on first
// Shift - Removes elemnents on first

var cars=["I20","i10","breeza","swift","I20"];
// var cars=cars.shift();
// console.log("Removeed is:" + cars);

// console.log(cars);

console.log(cars.indexOf("I20"));

var arr2=[1020,2023,3568,8516];
console.log(arr2.slice(0,3))

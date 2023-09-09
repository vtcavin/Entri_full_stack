// Set:-  Collection of unique values
// Array:- Collection of values

// let set1 = new Set() 
// set1.add(2)
// set1.add(20)
// set1.add(40)
//     .add(80)
//     .add(90)
//     .add(100)
//     .add(100)
// console.log(set1);


arr1=[20,20,30,40,50,60]
console.log(arr1)

let arr2=new Set(arr1)
console.log(arr2);

string1="Hyderabad"
console.log(string1);

var set2=new Set(string1)
console.log(set2);
set2.delete("d")
console.log(set2);

// let status=set2.has("H")
// console.log(status);

let status=set2.has("z")
console.log(status);

console.log(set2.size);

// set2.clear()
// console.log(set2);

for(ele of set2){
    console.log(ele)
}

set2.forEach(function(ele,index,s){
    console.log(ele);
    console.log(index);
    console.log(s);
})


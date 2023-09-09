var salaries=[50000,45000,55000,60000,]
salaries.forEach((salary,index,arr)=>{
    console.log(salary);
    console.log(index);
    console.log(arr);
})


var salaries=[50000,45000,55000,60000,]
salaries.forEach((salary)=>{
    console.log(salary);
  
})


Using arrow method

var salaries=[50000,45000,55000,60000]
console.log(salaries);
salaries.forEach((salary,index)=>{
    let increment=salary/10
    salaries[index]=salary+increment
    
  
})
console.log(salaries);

// Anoynmous function

var salaries=[50000,45000,55000,60000]
console.log(salaries);
salaries.forEach(function (salary,index){
    var increment=salary/10
    salaries[index]=salary+increment
    
  
})
console.log(salaries);

// Named functions

var salaries=[50000,45000,55000,60000]
console.log(salaries);
salaries.forEach(increment)
    
    function increment(salary,index){
    var increment=salary/10
    salaries[index]=salary+increment
    
  
}
console.log(salaries);





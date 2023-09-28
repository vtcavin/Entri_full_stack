// Using String Literal

let name={fname:"Cavin",Car:"Grandi10",place:"Hyderabad"}
console.log(name);
console.log(typeof(name));

console.log(name["fname"])
console.log(name.Car)

name.graduation="Btech"
console.log(name);

name.place="Bairamalguda"
console.log(name);


// Using New Operator Object Constructor

let company=new Object()
company.name="Hyundai"
company.model=2015
company.cname="Ferrari"
console.log(company);

// Using New Operator Constructor function

function user(name,age,place){
    this.name=name;
    this.age=age;
    this.place=place;
}

let user1=new user("abc",25,"Hyd")
console.log(user1);

var user2=new user("xyz",26,"Banglore")
user2.phonenumber=9502403197
console.log(user2);
console.log(user2.name);



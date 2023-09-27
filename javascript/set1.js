let s1=new Set()
console.log(typeof(s1));
s1.add(20);
console.log(s1);

var s2=new Set()
s2.add(40);
s2.add(50);
console.log(s2);


var a=[20,50,60,70]
console.log(a);

let s=new Set(a)
console.log(s);


var s3="Hyd"
console.log(s3);

let b=new Set(s3)
console.log(s3);
cavin= b.has("H");
console.log(cavin);

let c=new Set()
console.log(c);
c.add(20);
c.add(30);
console.log(c);
c.delete(20);
console.log(c);

var z1="cavin"
var z2=new Set(z1)
for(ele of z2){
    console.log(ele);
}

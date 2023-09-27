//  Rest parameters

function add(n1=5,n2=10,...rest){
    var result=n1+n2;
    for(n of rest){
        result=result+n;
    }
    console.log(result);
}
add();




function add(n1=5,n2=10,...rest){
    var result=n1+n2;
    for(n of rest){
        result=result+n;
    }
    console.log(result);
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
}
add(10,20,30);










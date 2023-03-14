//Pass by refernce vs pass by value
var a=7;
var b=a;
console.log("a : " +a);
console.log("b : " +b);

b=5;
console.log("after b update");
console.log("a : " +a);
console.log("b : " +b);    //pass by value



var a= {
    x : 7
};
var b=a;
console.log(a);
console.log(b);

b.x=5;
console.log("after b.x update");
console.log(a);
console.log(b);            //pass by reference



function changeprimitive(primvalue){
    console.log("in changeprimitive....");
    console.log("before");
    console.log(primvalue);

    primvalue=5;
    console.log("after");
    console.log(primvalue);
}

var value=7;
changeprimitive(value);
console.log("after change primitive , orig value: ");
console.log(value);                        //pass by value


function changeobject(objvalue){
    console.log("in change object....");
    console.log("before");
    console.log(objvalue);

    objvalue.x=5;
    console.log("after");
    console.log(objvalue);
}

value = { x: 7};
changeobject(value);
console.log("after change object, orig value");
console.log(value);
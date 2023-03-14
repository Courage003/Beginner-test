//Function are first-class Data types
//Function are objects

function multiply(x,y){
    return x*y;
}

console.log(multiply(2,3));
multiply.version = "v.1.0.0";
console.log(multiply.version);

//Function Factory
function makeMultiplier(multiplier){
    var myFunc=function(x){
       return multiplier*x; 
    };
    return myFunc;
}

var multiplyBy3=makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleall=makeMultiplier(2);
console.log(doubleall(100));


//passing functin as arguments
function doOperationOn(x,operation){
    return operation(x);
}
var result=doOperationOn(5,multiplyBy3);
console.log(result);

var ans=doOperationOn(100,doubleall);
console.log(ans);
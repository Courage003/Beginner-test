/*var string="Hello";
string+="World";
console.log(string + "!");   //concatenation of string */


//****Regular math operators : + - * / */
/*console.log((5+4)/3);
console.log(undefined/5);
function test1 (a){
    console.log(a/5);

}

test1();*/


// ****Equality
/*var x=4,y=4;
if(x==y){
    console.log("x=4 is equal to y=4");
}
x="4";
if(x==y){
    console.log("x='4'is equal to y=4" );
}

//**** Strict Equality */
/*if(x===y){
    console.log("Strict: x='4'is equal to y=4" );
}
else{
    console.log("Strict: x='4'is not equal to y=4" );
}*/


// ****If statement (all false)
/*if(false || null || undefined || "" || NaN){
    console.log("This line wont ever execute");
}
else{
    console.log("All false");
}

// ***If statement (all true)
if(true && "hello" && 1 && -1 && "false"){
    console.log("All true");
}*/


// ***Best practice for {} style
/*function a()
{
    return
    {
        name: "Dhruv"

    };
}
function b(){
    return{
        name:"Dhruv"
    };
}
console.log(a());
console.log(b());*/

// For loop
var sum=0;
for(var i=0;i<10;i++){
    console.log(i);
    sum+=i;
}
console.log("Sum of 0 through 9 is:" + sum);

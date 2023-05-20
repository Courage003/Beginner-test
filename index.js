
/*for(let i=0;i<10;i+=2){
    console.log(i);
}

for(let i=1;i<10;i+=2){
    console.log(i);
}*/

//Printing odd and even numbers


//While loop
/*let i=0;
while(i<10){
    console.log("Namaste World!");
    i++;
    
}*/

/*let i=0;
do{
    console.log("Hello Dhruv!");
    i++;
}
while(i<10)*/


//For...in
//objects
let animal={
    name:"zebra",
    leg:4
};

for(let key in animal){
    console.log(key,animal[key]);
}


//arrays
let names=["Dhruv","Aryaman","Mohit","Satwik"];
for(let index in names){
    console.log(index,names[index]);
}



//For..of
for(let name of names){
    console.log(name);
}

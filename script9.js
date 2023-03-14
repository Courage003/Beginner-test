/*var array = new Array();
array[0]="Dhruv";
array[1]=2;
array[2]=function(name){
    console.log("Hello " + name);
};
array[3]={course: "HTML,CSS & Js"};
console.log(array);
array[2]("Dhruv");
console.log(array[3].course);*/



//Short hand array creation
/*var names = ["Dhruv", "Soumyajit" , "Bodhisatwa"];
//console.log(names);
for(var i=0;i<names.length;i++){
    console.log("Hello " +names[i]);
}

names[100]=["Aryaman"];                       //Issue with arrays in javascipt
for(var i=0;i<names.length;i++){
    console.log("Hello " +names[i]);
}*/


var names2 = ["Dhruv", "Soumyajit" , "Bodhisatwa"];
/*var obj = {
    name : "Dhruv",
    course : "HTML/CSS/Js",
    platform : "Coursera"
};
for(var prop in obj){
    console.log(prop + ": " + obj[prop]);
}*/


for(var name in names2){
    console.log("Hello " + names2[name]);
}
/*function test(){
    console.log(this);
    this.myname="Dhruv";
}

test();
console.log(window.myname);*/


//Function Constructors
/*function Circle(radius){
    this.radius=radius;
    this.getArea=
    function(){
        return Math.PI*Math.pow(this.radius,2);
    }
}
var myCircle = new Circle(10);
console.log(myCircle.getArea());*/


//Function Prototype
function Circle(radius){
    this.radius=radius;
}
Circle.prototype.getArea=
    function(){
        return Math.PI*Math.pow(this.radius,2);
    };
    
var myCircle = new Circle(10);
console.log(myCircle.getArea());

var my2ndCircle = new Circle(20);
console.log(my2ndCircle.getArea());
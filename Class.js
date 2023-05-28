//Declaring a class
/*class Product{
    constructor(itemName,price,discount,itemCode){
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.itemCode=itemCode;
    }
}

let pencil=new Product('Pencil',20,2,'A24');
console.log(pencil);



//Declaring class using expressions
/*const Product1=class Product{
    constructor(itemName,price,discount,itemCode){
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.itemCode=itemCode;
    }
    get getDiscountValue(){
        return this.dsicount
    }
    set setDiscountValue(value){
        this.discount=value;
    }
    //Method definition
    discountValue(){
        return this.discount*this.price/100
    }
};

///let chair=new Product1('Chair',499,50,'A24');
//console.log(chair);

chair.setDiscountValue=10
chair.getDiscountValue*/


//Extending a class
class Product{
    constructor(itemName){
        this.itemName=itemName;
    }

    getItemName(){
        return this.ItemName + " is a Product";
    }
}

class Furniture extends Product{
    constructor(itemName){
        super(itemName);  //super function calls the constructor of the parent class

    }
    getItemName(){
        return this.itemName + " is a Furniture";
    }

}

let pencil=new Product('Pencil',20,2,'A24');
let chair=new Furniture('Chair',499,15,'C10');

console.log(pencil.getItemName);
console.log(chair);
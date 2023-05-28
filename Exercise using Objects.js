//Exercise using Objects
//itemName
//price
//discount
//itemCode
const ecom={
    itemName:'Dove',
    price:1000,
    discount:'50%',
    itemCode:52
};
console.log(ecom);


//Using Factory Function
function details(name,price,discount,itemCode){
    return{
        itemName:name,
        price:price,
        discount:discount,
        itemCode:itemCode

    }
}

const market=details('Dove',1000,'50%',52);
console.log(market);


//Using Constructor Function
function Details(name,price,discount,itemCode){
    this.itemName=name,
    this.price=price,
    this.discount=discount,
    this.itemCode=itemCode
}

const market1=new Details('Dove',1000,'50%',52)
console.log(market1);

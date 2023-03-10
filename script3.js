function orderChickenWith(sidedish){
    /*if(sidedish===undefined){
        sidedish="maggie";
    }*/
    //shortcut in js
    sidedish=sidedish || "maggie";
    console.log("Chicken with " +  sidedish);
}
orderChickenWith("noodles");
orderChickenWith();
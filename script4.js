/*var company = new Object();
company.name="Google";
company.ceo = new Object();
company.ceo.firstname = "Dhruv";
company.ceo.favcolor = "blue";
console.log(company); 
console.log("Company CEO name is " 
+ company.ceo.firstname); 
console.log(company["name"]);
company.$stock = 110;
console.log(company);   //Object Creation  */

//Better way : Object Literal
var facebook = {
    name : "Facebook",
    ceo : {
        firstName : "Dhruv",
        favcolor : "Blue"

    },
    $stock : 110
};
console.log(facebook);
console.log(facebook.ceo.firstName);
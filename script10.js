//Closures
function makemultiplier(multiplier){
    //var multiplier=2
    function b(){
        console.log("Mulitplier is " +multiplier);
    }
    b();
    return(
        function(x){
            return multiplier*x;
        }
    );
    }

var doubleAll = makemultiplier(2);
console.log(doubleAll(10));  //its getting its own execution environment
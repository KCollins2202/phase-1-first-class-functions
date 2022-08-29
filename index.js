import { spy } from "chai";

function receivesAFunction(callback){

   callback();
}

function returnsANamedFunction(alert){
    return returnsANamedFunction;
}
function returnsAnAnonymousFunction(){
return function(){};
}
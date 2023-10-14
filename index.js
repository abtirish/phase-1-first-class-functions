
function callback(value) {
    console.log(value);
}

function receivesAFunction(callback) {
    const chai = "chai"
    callback(chai)

};


console.log(receivesAFunction(callback))


function returnsANamedFunction() {
    console.log(twoCallBack());
    return twoCallBack;
};

function twoCallBack(parameterHere) {
    console.log (parameterHere)

}
 //console.log(twoCallBack("henlo"))
console.log(returnsANamedFunction())



let anonFxn = function() {
    console.log("the ACTUAL value of anonymous fxn");
};


console.log(anonFxn);

function returnsAnAnonymousFunction() {
    return function () {
        console.log("value of the anonymous fxn");
    }
}

returnsAnAnonymousFunction();
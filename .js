let multiply = function (x, y){
    console.log(x * y);
}
let multiply = function(x){
    return function(y){
        console.log(x + y);
    }
}
let multiplyByTwo = multiply.bind(this, );
multiplyByTwo(2, 5);
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

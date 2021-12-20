function addNumbers(num1 , num2){
    //console.log(arguments[3]);
    var sum = 0;
    for(let i = 0; i < arguments.length; i++){
        const num = arguments[i];
        console.log(num);
    }
         return num1+num2;
}
var result = addNumbers(3,7, 7, 9);
console.log(result);
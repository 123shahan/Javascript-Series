console.log(100 == 100);// true
console.log(100===100);// true
console.log("100" == 100);//true
console.log("100" === 100);//false

console.log("5" + 1);//type coercian and then concatenate output is 51
console.log("5" - 1);//type coercian and then perform subtraction output is 4

//in case of boolean

let shahan = "hello";//result is true because string is not empty
if(shahan){
    console.log("he is handsome");
}

let hamid = "";// in case of empty string the result is falsy
if(hamid){
    console.log("he is good");
}

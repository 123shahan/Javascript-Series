// remove duplicate from array
let shahan = [1,2,3,5,4,2,1,6,5,4];
let newnumber = [...new Set(shahan)];// using ...new Set() or also filter,reduce is used for removes duplicates
console.log(newnumber);



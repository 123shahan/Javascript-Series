const officers = [
   
   {name: "shahan", age: 25},
   {name: "shazan", age: 35},
   {name: "zeeshan", age: 30},


];
officers.sort((a, b)=> a.age - b.age);
console.log(officers);



//output
// [
//     { name: 'shahan', age: 25 },
//     { name: 'zeeshan', age: 30 },
//     { name: 'shazan', age: 35 }
//   ]
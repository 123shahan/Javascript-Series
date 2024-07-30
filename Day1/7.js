// sort the object using priority case

const data = [
    { value: 'apple', priority: 3 },
    { value: 'banana', priority: 1 },
    { value: 'cherry', priority: 2 }
];
data.sort((a, b) => a.priority - b.priority);
console.log(data);


// Output: [
//   { value: 'banana', priority: 1 },
//   { value: 'cherry', priority: 2 },
//   { value: 'apple', priority: 3 }
// ]

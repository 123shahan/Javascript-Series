let count = 0;
const increment = () => count++;
const decrement = () => ++count;
increment();// return 0 but increments the value it becomes 1
decrement();// preincrement 1 and become 2 and also return 2
decrement()// preincremnt 2 and become 3 and return 3 
console.log(count);// 3 is the output
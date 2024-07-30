const array1 = [2,5,3,1];
array1.sort((a, b) =>  a - b);
console.log(array1);

// sort Method: The sort method is used to sort the elements of an array in place. It modifies the original array and sorts it based on the return value of the provided comparison function.
// Comparison Function: The function (a, b) => a - b is a comparison function that determines the order of elements:
// Parameters: a and b are two elements being compared.
// Return Value:
// If a - b is negative, a is sorted before b.
// If a - b is positive, b is sorted before a.
// If a - b is zero, a and b are considered equal in terms of sorting order.
// How It Works:

// The comparison function is called multiple times by the sort method to determine the correct order of elements.
// For example:
// Compare 10 and 5: 10 - 5 equals 5, so 10 comes after 5.
// Compare 5 and 100: 5 - 100 equals -95, so 5 comes before 100.
// Continue this comparison for all elements to sort the array in ascending order

//for decresseing just use b - a
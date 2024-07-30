// check property exist in an object or not

const officer = {
    id: 1,
    name: "shahan",
    salary: 10000,
};

// check salary is exist in the object or not we can easily check this with the help of in operator

const salaryispresent = 'salary' in officer;
console.log(salaryispresent);

// if salary is exist then what is the salary of the employee using . notation or bracket officer['salary']
if(salaryispresent){
const salaryvalue = officer.salary;
console.log(salaryvalue);
}

const rollnumberispresent = 'rollnumber' in officer;
console.log(rollnumberispresent);// gives false because in ofiicer object the roll number is not present.
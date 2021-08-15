// .slice() method - 0 argument
const prime = [2, 3, 5, 7];

const copyofprime = prime.slice();

console.log(copyofprime);
//=> [ 2, 3, 5, 7 ]
console.log(prime);
//=> [ 2, 3, 5, 7 ]


// .slice() method - 1 argument
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const copyOfNum = num.slice(2);

console.log(copyOfNum);
//=> [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(num);
//=> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// .slice() method - 1 argument (negative number)
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const copyOfNum2 = num2.slice(-3);

console.log(copyOfNum2);
//=> [ 8, 9, 10 ]
console.log(num2);
//=> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// .slice() method - 2 argument
const number = ['one', 'two', 'three', 'four', 'five'];

const copyOfNumber = number.slice(1, 3);
const copyOfNumber2 = number.slice(1, number.length-2);
const copyOfNumber3 = number.slice(1, -1);

console.log(copyOfNumber);
//=> [ 'two', 'three' ]
console.log(copyOfNumber2);
//=> [ 'two', 'three' ]
console.log(copyOfNumber3);
//=> [ 'two', 'three', 'four' ]
console.log(number);
//=> [ 'one', 'two', 'three', 'four', 'five' ]


// .slice() method experiments 
const experiments = [1, 2, 3, 4, 5];

experiments.slice(-4, -2);
//=> [ 2, 3 ]
experiments;
//=> [ 1, 2, 3, 4, 5 ]



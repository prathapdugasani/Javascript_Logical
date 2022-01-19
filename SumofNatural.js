// Sum of N Natural Number 
const num = parseInt(prompt('Enter the number: '))

let sum = 0;

for (let i = 1; i <= num; i++){
    //! Sum of N Natural numbers
    // sum += i;
    //! Sum of Squares of N Natural numbers
    sum += i ** 2;

}
console.log('Sum of Natural numbers :', sum)
// To check Even Or Odd
// const num = prompt('Enter the Number: ');
// const result = num % 2 == 0 ? 'even' : 'odd';

// console.log(`The number is ${result}`);

// multiply with 2 in even placed

const num = parseInt(prompt('Enter the number: '));
for (let i = 1; num <= i;i++){
    if (i % 2 == 0) {
        console.log( i*2);
    }
}
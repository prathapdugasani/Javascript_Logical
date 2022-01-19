// Calculator

const operator = prompt('Select the operation among these(+,-,*,/):');

const num1 = parseInt(prompt('Enter the first number :'));
const num2 = parseInt(prompt('Enter the Second number :'));
// ! Using For loop
let result;
// using ifElse
// if (operator == '+') {
//     result = num1 + num2;
// } else if (operator == '-') {
//     result = num1 - num2;
// }else if (operator == '*') {
//     result = num1*num2
// } else{
//     result = num1/num2
// }

// console.log(`${num1} ${operator} ${num2} = ${result}`);


//! using Switch cases
switch (operator) {
  case '+':
    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    break;
  case '-':
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
    break;
  case '*':
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
    break;
  case '/':
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
    break;
    default:
        console.log('Invalid Operator');
    break;
}
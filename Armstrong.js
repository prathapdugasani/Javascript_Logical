// Armstrong number

let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');
const numberOfDigits = number.length;

// create a temporary variable
let temp = number;
while (temp>0) {
    
    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}

if (sum == number) {
    console.log(`${number} is an Armstrong number `);
}
else {
    console.log(`${number} is not an Armstrong number`);
}
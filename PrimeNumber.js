// ! Prime number

let number = parseInt(prompt('Enter the number'));

let isPrime = true;

if (number === 1) {
    console.log("1 is not a prime number");
}

else if (number > 1) {
    for (let i = 2; i < number; i++){
        if (number % i ==0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is not a prime number`);
    }
}
else {
    console.log("Number is not a prime");
}
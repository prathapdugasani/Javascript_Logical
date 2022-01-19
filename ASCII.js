// ASCII value of a Character using charCodeAt()

const string = prompt('Enter a Character :');

//! convert into ASCII value
const result = string.charCodeAt(0);

console.log(`The ASCII value is : ${result}`);

//ASCII  value of a Character using codePointAt()

const string = prompt('Enter a Character: ');

const result = string.codePointAt(0);

console.log(`The ASCII value is : ${result }`);
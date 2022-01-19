/// Alphabetical order

const string = prompt('Enter a Sentence :');

const words = string.split(' ');

words.sort();

console.log('The sorted words are');

for (const element of words) {
    console.log(element);
}
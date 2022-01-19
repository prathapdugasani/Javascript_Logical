//First method

function reverseString(str) {
    var strArr = str.split("");
    var reverseStrArray = strArr.reverse();
    var reversedString = reverseStrArray.join("");
    return reversedString;

}

console.log(reverseString("hello there how are you"));

//second method

function reverseString(str) {
     let revStr = str.split('').reverse().join('');
    return revStr;
}
console.log(reverseString("hello there how are you"));

//Third method

function reverseString(str) {
  var final = '';
  for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
  }
  return final;
}
console.log(reverseString('hello'));

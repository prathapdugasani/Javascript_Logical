//Longest Method
// method 1
function findLongestWord(str) {
    var words = str.split(" ");
    var longest = "";
    for (var word of words) {
        if (word.length > longest.length)
            longest = word;
         
    }
    return longest.length;
}
console.log(findLongestWord('The longest word in the string'));

// method 2
function findLongestWord(str) {
    return str.split(" ").sort(function (a, b) { return b.length - a.length })[0];
}

console.log(findLongestWord('The longest word in the string'));

//method 3
var longestString = function (str) {
  var newstr = str.split(' ');
  var longestWord = 0;
  for (var i = 0; i < newstr.length; i++) {
    if (newstr[i].length > longestWord) {
      longestWord = newstr[i].length;
    }
  }
  console.log(longestWord);
};
longestString('Hi I am prathap');
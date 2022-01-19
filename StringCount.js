
function Charcount(string) {
  var length = 0;
  while (string[length]) {
    length++;
  }
  return length;
}
console.log(Charcount('sikandar'));

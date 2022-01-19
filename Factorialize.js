function factoralize(num) {
  var dig = 1;
  for (let i = 1; i <= num; i++) {
    dig *= i;
  }
  return dig;
}
console.log(factoralize(3));

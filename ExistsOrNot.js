function elementExist(element) {
  var arr = [1, 2, 3, 4, 5, 6, 7];
  if (arr.indexOf(element) !== -1) {
    console.log('Element Exist...');
  } else {
    console.log('Element does not exists...');
  }
}
elementExist(2);

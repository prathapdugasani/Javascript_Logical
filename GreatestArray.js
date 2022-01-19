function greatestVal(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log('Greatest value in the array', max);
}
maxVal([4, 3, 6, 9]);

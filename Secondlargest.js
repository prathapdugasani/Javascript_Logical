//Second Largest

//  function Secondlargest(arr) {
//      let max = arr[0];
//      for (let i = 0; i < arr.length-1; i++) {
//          if (max < arr[i]) {
//              max = arr[i];
//          }
         
//      }
//     console.log(max);
// }

// Secondlargest([12,4,1,9])

//Second largest

let arr = [55, 33, 89, 45, 96, 25, 17,108,111];
let assc = [];
for (let i = 1; i < arr.length; i++){
    for (let j = 0; j < i; j++){
        if (arr[i]<arr[j]) {
            let temp = arr[i];
             arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

for (let k = arr.length - 2; k >= 0; k--){
  if (arr[k] != arr[arr.length]) {
      console.log(arr[k]);
  }
}
//console.log(arr[arr.length-2]);
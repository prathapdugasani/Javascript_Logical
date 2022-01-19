//1)Sum of all elements/numbers

//i)Method-using reducer()

var arr = [1, 2, 3, 4, 5, 6]

var sum = arr.reduce((a, i) => {
    return a + i;
});
document.write(sum);

//ii) Method- using Loops

var arr = [1, 2, 3, 4, 5];

var sum = 0;

for (let i in arr ){
    sum += arr[i];

}
document.write(sum);

//2) OutPut of the code

//i)
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < 10; i++){
//     setInterval(() => console.log(a[i]), 1000);
// }

// for (var i = 0; i < 10; i++){
//     setTimeout(()=>console.log(a[i],1000))
// }

// var a = 3;
// var b = --a;
// var c = a--;
// console.log(a, b, c);

// convert an Object {} into an Array [] in JavaScript

// let obj = {
//     id: 1,
//     name: "Test User",
//     age: "25",
//     profession: "Developer"
// };

//Meethod 1: Convert keys to Array using - Object.keys()
// console.log(Object.keys(obj));

// console.log(Object.values(obj));

// console.log(Object.entries(obj));

//convert an Array [] to Object {} in JavaScript
 
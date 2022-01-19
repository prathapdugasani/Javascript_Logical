// Area Of triangle
// formula to find area of triangle
// s=(a+b+c+)/2
// area = squ-root(s(s-a)*(s-b)*(s-c))
const side1 = parseInt(prompt('Enter for side1: '));
const side2 = parseInt(prompt('Enter for side2: '));
const side3 = parseInt(prompt('Enter for side3: '));

//Calculate the semi-perimeter

const s = (side1 + side2 + side3) / 2;

//Calculate the area

const areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(`The area of the triangle is ${areaValue}`);

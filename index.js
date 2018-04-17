global.console.log('Hellow, world!');
const circle = require('./circle');
console.log('Area of a circle = '+ circle.area(3));
console.log('Circumference of a circle = '+ circle.circum(3));
console.log('PI = '+ circle.pi);

const square = require('./square');
let mySquare = square(4);
console.log('Area of a square = '+mySquare.area());
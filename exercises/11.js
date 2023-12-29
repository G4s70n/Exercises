/* 
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
 */


// function isTriangle(a, b, c) {
//     if(a === b & c > a+b) return true;
//     if(a === c & b > a+c) return true;
//     if(c === a & b > c+a) return true;
//     if(c === b & a < c+b) return true;
//   return false;
// }

function isTriangle(a, b, c) {
  let numbers = [a, b, c];
  let diff = numbers.find((value, index, self) => {
    return self.indexOf(value) === self.lastIndexOf(value);
  });

  console.log(diff);
  return (numbers[0] === numbers[1]) & (numbers[2] > numbers[0] + numbers[1])
    ? true
    : false;
}

//El numero que es distinto no puede ser mayor a la suma de los otros dos

console.log(isTriangle(1,2,2));
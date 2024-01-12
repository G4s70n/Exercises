/* 
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
 */


function getMiddle(s)
{
  let totalCharacters = s.length;
  if(totalCharacters < 2) return s;
  if(totalCharacters > 3 && totalCharacters % 2 === 0) {
   return s[totalCharacters / 2 - 1] + s[totalCharacters / 2]
  }
  if(totalCharacters > 2 && totalCharacters % 2 === 1){
    return s[(totalCharacters + 1) / 2 - 1]
  }

}

// Determinar cantidad caracteres
// Checkear si es par o impar
// Si es par y mayor a 3, devolver los 2 caracteres del medio del string
// (total / 2 -1  y total / 2 + 1)
// Si el numero es inpar y mayor a 2, devolver el caracter del medio.
// (total + 1 / 2 - 1)

console.log(getMiddle('gat'))
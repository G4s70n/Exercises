/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/


function duplicateEncode(word){
    let result = '';
    word = word.toLowerCase().split('');
     word.map(e => {
        word.filter(value => value === e).length > 1 ? result += ')': result += '('
    }) 

    return result
}


function duplicateEncode2(word){
    let result = '';
    for(i = 0; word.length > i; i++){
        let regex = new RegExp(`[${word[i]}]`, 'gi');
        word.match(regex).length > 1 ? result += ')' : result += '('
    }

    return result
}



console.log(duplicateEncode2("success"))

let word = 'holaa';
console.log(word.lastIndexOf('a'));
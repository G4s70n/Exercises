/* 
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
Example
s'12:01:00PM'
Return '12:01:00'.
s12:01:00AM'
Return '00:01:00'.
Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
timeConversion has the following parameter(s):
⚫ string s: a time in 12 hour format
Returns
⚫ string: the time in 24 hour format
Input Format
A single strings that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).
Constraints
• All input times are valid
Sample Input
07:05:45PM
Sample Output
19:05:45
*/



function timeConversion(s) {
    s.includes('P')
    ? s = s.replace('P', ' P')
    : s = s.replace('A', ' A');

    let hours24 = new Date("2000-01-01 " + s).toLocaleTimeString('en-US', {hour12: false});

    if(hours24[0] === '2')hours24 = hours24.replace('24:', '00:');
    
    return hours24
 
}


console.log(timeConversion('12:40:22AM'));
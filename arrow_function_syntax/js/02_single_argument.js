/*
const square = (x) => {
    return x * x;
}

const cube = (x) => {
    return square(x) * x;
}
*/


/* 
Even more concise 
If there is only one argument, no parenthesis
Only one line of code, no curly braces or return
*/
const square = x => x * x;

const cube = x => square(x) * x;
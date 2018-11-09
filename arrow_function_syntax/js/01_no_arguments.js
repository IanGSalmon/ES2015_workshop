const name = "Andrew";

/*
Example: this is a function declaration (starts with keyword 'function')
function sayName() {
    const message = "My name is " + name;
    console.log(message);
}

Example: this is a function expression (assign function to variable)
const sayName = function() {
    const message = "My name is " + name;
    console.log(message);
}
*/

// this is an arrow function
const sayName = () => {
    const message = "My name is " + name;
    console.log(message);
}

const sayBye = () => console.log("Bye " + name);
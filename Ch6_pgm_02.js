// Using an argument to determine the return value

// Define a function getHelloTo with one parameter 'name'
var getHelloTo = function (name) {
    return "Hello to " + name;
};

// Call getHelloTo with "Kandra" and store the return value in fullMessage
var fullMessage = getHelloTo("Kandra");

// Output the fullMessage
console.log(fullMessage);

/* Further Adventures */

// Modify getHelloTo to accept two parameters, name1 and name2
getHelloTo = function (name1, name2) {
    return "Hello to " + name1 + " and " + name2;
};

// Call getHelloTo with "Kandra" and "Dax" and store the return value in fullMessage
fullMessage = getHelloTo("Kandra", "Dax");

// Output the updated fullMessage
console.log(fullMessage);



/* Further Adventures
 *
 * 1) Change the definition of getHelloTo
 *    to accept two parameters, name1 and name2.
 *
 * 2) Make the function return a string of
 *    the form "Hello to Kandra and Dax"
 *
 */
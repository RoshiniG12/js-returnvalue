// A collection of functions that return values

var getMessage = function () {
    return "I’m going on an adventure!"; 
};

var getHelloTo = function (name) {
    return "Hello to " + name;
};

var sum = function (number1, number2) {
    return number1 + number2;
};

var totalCost = function (callOutCharge, costPerHour, numberOfHours) {
    return callOutCharge + costPerHour * numberOfHours;
};

// Testing the functions
console.log(getMessage()); // Output: I’m going on an adventure!
console.log(getHelloTo("Dax")); // Output: Hello to Dax
console.log(sum(5, 10)); // Output: 15
console.log(totalCost(30, 40, 3)); // Output: 150
console.log(totalCost(25, 15, 8)); // Output: 145



/* Further Adventures
 *
 * 1) Run the program.
 *
 * There is nothing logged to the console.
 * However, the functions will now be
 * available for calling.
 *
 * 2) At the console prompt, type
 *    getMessage()
 *    and press enter.
 *
 * The return value of the function is
 * logged to the console.
 *
 * 3) At the console prompt, type
 *    getHelloTo("Dax")
 *    and press enter.
 *
 * The argument, "Dax", forms part of the
 * return value.
 *
 * 4) Call the getHelloTo function
 *    with different arguments.
 *
 * 5) Call the sum and totalCost functions,
 *    using different arguments each time.
 *
 */
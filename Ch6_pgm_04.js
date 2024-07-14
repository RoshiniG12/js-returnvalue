// Returning the sum of two numbers

// Function to add two numbers and return the sum
var add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

// Using the add function to find and display the sum of different numbers
var sum1 = add(50, 23);
console.log("Sum of 50 and 23:", sum1);

var sum2 = add(75, 42);
console.log("Sum of 75 and 42:", sum2);

// Using the add function to display a custom message with the sum
console.log('The sum of 50 and 23 is ' + add(50, 23));

// Nesting add function calls to add more than two numbers
var sum3 = add(add(10, 20), 30); // Adds 10 + 20 + 30
console.log("Sum of 10, 20, and 30:", sum3);

// Function to sum three numbers using the add function
var sumThree = function (num1, num2, num3) {
    var result = add(add(num1, num2), num3);
    return result;
};

var sum4 = sumThree(10, 20, 30);
console.log("Sum of 10, 20, and 30 (using sumThree function):", sum4);




/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */
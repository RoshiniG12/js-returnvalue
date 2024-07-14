// A function with three arguments

// Function to calculate total cost with callOutCharge, costPerHour, numberOfHours, and optional discount
var totalCost = function (callOutCharge, costPerHour, numberOfHours, discount = 0) {
    var subtotal = callOutCharge + costPerHour * numberOfHours;
    var total = subtotal - discount;
    return total;
};

// Calculating total cost for 3 hours of work without discount
console.log("$" + totalCost(30, 40, 3));

// Calculating total cost for 12 hours of work without discount
console.log("$" + totalCost(30, 40, 12));

// Calculating total cost for 3 hours of work with a $20 discount coupon
console.log("$" + totalCost(30, 40, 3, 20));


/* Further Adventures
 *
 * 1) What is the cost for 12 hours work?
 *
 * 2) The plumber sometimes issues discount coupons.
 *    Add a fourth parameter to the totalCost
 *    function definition to account for discounts.
 *
 * 3) Update the function to subtract the discount
 *    from the total before returning it.
 *
 * 4) If a customer has a $20 off coupon,
 *    update the call to totalCost
 *    to display the total cost.
 *    It should now be $130 for 3 hours.
 *
 */
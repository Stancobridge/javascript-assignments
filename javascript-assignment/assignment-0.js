/**
 * 
 * In this assignment we will try to work with Parameters in Javascript
 * Make sure you read-up what we have in the links below
 * 
 * Javascript Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 * Arrow Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * Parameters and Arguments in JS Functions: https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04
 */

// Firstly, you need to understand functions and how parameter/arguments works in functions
// You need to understand default parameter value in ES6

/**
 * Secondly you need to understand that every function has arguments variable in it's scope, which
 * holds all the arguments passed when calling that function in an Array Like Arguments object
 * Read about it here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 *  let say we have this function
 */

  function myFunc() {
    console.log(arguments)
  }
  
 /* 
 * As we can see, we logged arguments in the but we did not declare any arguments variable anywhere in
 * myFunc or outside it, this arguments variable is a javascript keyword that can only 
 * be used inside a function to get the arguments that was passed when the function is called,
 *  not when it is declared, so if we call myFunc() it will console an empty Array like Arguments 
 * object, because we did not pass any argument to it when we are calling it
 * 
 * but if we say myFunc(1,2,3,4,6) it will console [1,2,3,4,6] 
 * (remember that this is held in arguments variable),
 * note that this Argument Object is not an array, is your work to learn 
 * how to convert this Array like to Array using Array.from() or spread pattern
 * 
 * NOTE THIS arguments variable won't work in ES6 arrow function
 * 
 */

/**
 * Here is the assignment
 *  *  */



/**
 * Create a function that will convert from any number in time unit to another of it's time equivalent,
 * call It timeConverter, this function will take three parameters, timeIn, convertFrom, convertTo
 * 
 * the work of this function is to convert the number entered in timeIn, from the value in convertFrom, 
 * to the value in convertTo
 * 
 * let say we call timeConverter(10, "mins", "milliseconds") this should return 600000 
 * and timeConverter(300, "milliseconds", "mins") should return 0.005
 * 
 * Remember your function should return not logging it to the console.log
 * 
 * Use this as your time unit equivalent to know which to convert from and which to convert to,
 * milliseconds = milliseconds
 * scs = seconds
 * mins = minutes 
 * hrs = hours
 * dys = day
 * wks = weeks
 * mnt = months
 * yrs = years
 * 
 * Apply all the conversion mathematically
 *  */ 
// Use ES6 throughout

let timeConverter = (timeIn, convertFrom, convertTo) => {
    // Write your code here
};

// Test
timeConverter(3, "wks", "dys") // Should return 21days

/* **
 * How to submit, create repository with name idevjs in github account and upload it there
 * Email me soromgawide@gmail.com with your the repository link I will score and commit corrections if any 


 ================================================
 ||                                            ||
 ||                  GOOD LUCK                 ||
 ||                                            ||
 ================================================

 Twitter: @idevosm

*/
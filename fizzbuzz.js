// FizzBuzz

// Objective: count through numbers 1-20 and check if each one is divisible by 3, 5 or both 

// for each number, perform the following check:

// check if number divisible by 3
// if so, check if number is also divisible by 5
// if numbrer is divisible by 3 AND 5 --> print FizzBuzz
// if number is only divisible by 3 --> print Fizz

// check if number is divisible by 5
// if number is divisibule by 5 --> print Buzz

// check if number is NOT divisible by 3 or 5
// if number is not divisible by 3 and 5 --> print number

// ------------------------------------------------------------------------------------------------------------------------------------

var rangeLimit = 100;

for (i = 1; i <= rangeLimit; i++){
  if (i % 3 === 0) {
    
    if (i % 5 === 0) {
      console.log('FizzBuzz'); 
    } else {
      console.log('Fizz');
    }
  }
  
  else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    
    console.log(i);
  }
}
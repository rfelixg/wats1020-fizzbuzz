// Place your FizzBuzz code here. 

var rangeLimit = 100;

for (i = 1; i <= rangeLimit; i++){
  // for each number, perform the following check:

  // check if number divisible by 3
  if (i % 3 === 0) {
    // % modulus checks if it's an even division. In this case if it's an even division that means the number is in fact divisible by 3
    
  // if so, check if number is also divisible by 5
    if (i % 5 === 0) {
        // if numbrer is divisible by 3 AND 5 --> print FizzBuzz
      console.log('FizzBuzz'); 
    } else {
        // if number is only divisible by 3 --> print Fizz
      console.log('Fizz');
    }
  }
 
  // check if number is divisible by 5
  else if (i % 5 === 0) {
      // if number is divisibule by 5 --> print Buzz
    console.log('Buzz');
  } else {
  // if number is not divisible by 3 and 5 --> print number
    console.log(i);
  }
}
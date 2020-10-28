// TDD - FizzBuzz
// write a function : should return fizz for number  
// divisible by 3, buzz for number divisible by 5 and 
// fizzbuzz for number divisible by 3 and 5

function fizzBuzz(number) {
    // if (number % 15 === 0) return 'fizzbuzz';
    // if (number % 3 === 0) return 'fizz';
    // if (number % 5 === 0) return 'buzz';
    // return number;
    let string = '';
    if (number % 3 === 0) string += 'fizz';
    if (number % 5 === 0) string += 'buzz';
    return string || number
}
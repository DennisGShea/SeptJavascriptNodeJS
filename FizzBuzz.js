// FizzBuzz


function isItDivBy3(x) {
    return((x%3) ===0)}
  
  function isItDivBy5(x) {
    return((x%5) ===0)}
  
  function FizzBuzz (seqLength) { 
    for (let i = 1; i <= seqLength; i++)  {
     if ( isItDivBy5(i) && isItDivBy3(i) ) 
           string_out = "Fizz Buzz";
       else  if (isItDivBy3(i)) string_out = "Fizz";
       else  if (isItDivBy5(i)) string_out = "Fuzz";
       else string_out = i;
    console.log(string_out);
    }
  }
  
  FizzBuzz(100)no
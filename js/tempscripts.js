var fh = function(number1){
  return number1 * 1.8 + 32;
};

var number1 = parseInt(prompt("Enter the temperature in Celsius:"));

var cel = fh(number1);

alert(cel);

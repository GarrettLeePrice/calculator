var weight = function(number1, kilo){
	return number1 / kilo
};

var number1 = parseInt(prompt("Enter your weight in lbs:"));
var kilo = parseFloat(2.2);

var mass = (weight(number1, kilo));


var height = function(number2, meter){
	return number2 / meter
};

var number2 = parseInt(prompt("Enter your height in inches:"));
var meter = parseFloat(39.37);

var vertical = (height(number2, meter));


var bmi = function(mass, vertical){
  return mass / vertical
};
  alert( "Your BMI is: " + bmi(mass, vertical));



// var num1 = +prompt("Enter Your First Number:");
// var num2 = +prompt("Enter Your Second Number:");
// // var operator = +prompt("Enter your Operator");


// // var calculate = num1 ,operator, num2;

// // alert(calculate);

// var add = num1 + num2;
// var sub = num1 - num2;
// var mul = num1 * num2;
// var divi = num1 / num2;
// var modul = num1 % num2;

// alert("Addition: " + add +
//     "\nSubtract: " + sub +
//     "\nMultiple: " + mul +
//     "\nDivision: " + divi +
//     "\nModulus: " + modul);


var eng = +prompt("Enter your English number:");
var chem = +prompt("Enter your Chemistry number:");
var phy = +prompt("Enter your Physics number:");
var math = +prompt("Enter your Math number:");
var bio = +prompt("Enter your Biology number:");

var total = 500;
var obtain = eng + chem + phy + math + bio;
var percentage = (obtain / total) * 100;
percentage = Math.round(percentage); // Corrected Math.round()

if (percentage <= 50) {
    alert(percentage + "% " + "You Suck");
} else if (percentage <= 60) {
    alert(percentage + "% " + "You can do Better");
} else if (percentage <= 70) {
    alert(percentage + "% " + "Not Bad");
} else if (percentage <= 80) {
    alert(percentage + "% " + "Great Job");
} else if (percentage <= 100) { 
    alert(percentage + "% " + "Never Doubted You");
} else {
    alert("Invalid percentage value. Please check the input.");
}

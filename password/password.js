"use strict";

$(document).ready(function() {

var getRandomNumber = function(max) {

var random;

if (!isNaN(max)) {

random = Math.random(); //value >= 0.0 and < 1.0
random = Math.floor(random * max); //value is an integer between 0 and max - 1
random = random + 1; //value is an integer between 1 and max

}

return random;

};

  

$("#generate").click(function() {

$("#password").val( "" ); // clear previous entry

var len = $("#num").val(); //Get value in number

//Check whether the number entered is a number

if(typeof len == 'number' || isNaN(len)) //check whetther typeof len is number or len is Not a number using isNan()

{

alert("Please enter a valid number"); //Show the alert

} else {

var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";

var max = chars.length; //Get length of chars array

var pass = ""; //Set passwrod variable empty

for(var i = 0; i < len; ++i) // Loop through len times to generate length len password.

{

var num = getRandomNumber(max-1); //Get a random number

pass += chars[num]; //Append to password

}

$("#password").val( pass ); //Set password variable

}

}); // end click()

$("#clear").click(function() {

$("#num").val( "" );

$("#password").val( "" );

$("#num").focus();

}); // end click()

  

// set focus on initial load

$("#num").focus();

}); // end ready()
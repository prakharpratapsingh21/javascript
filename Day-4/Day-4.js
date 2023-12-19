//Create the Example for Logical Operators 


//Logical (||) OR 
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


//Logical (&&) And 
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


// Logical (!) Not
alert( !true ); // false
alert( !0 ); // true



//Take input from user and find the odd and even number.
// program to check if the number is even or odd
// take input from the user
let number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
//Q1.Find Grades

function findGrades() {
    switch (true) {
        case (marks >= 0 && marks <=10):
        console.log("Grade-E");
        break;

        case (marks >=11 && marks <=20):
        console.log("Grade-D");
        break;

        case (marks >=21 && marks <=30):
        console.log("Grade-c");
        break;

        case (marks >=31 && marks <=40):
        console.log("Grade-B");
        break;

        case (marks >=41 && marks <=100):
        console.log("Grade-A");
        break;

        default:
            console.log("Fail")
    }
}
let marks = Number(prompt("Enter marks here:"));
findGrades();


//Q2. Get Value

let val = prompt("Enter a alphabet here");
function getValue(){
    if (val == "p" || val == "P") {
        console.log("PreBytes");
    } else if (val == "z" || val == "Z") {
        console.log("Zenith");
    } else if (val == "e" || val == "E") {
        console.log("Expert Coder");
    } else if (val == "d" || val == "D") {
        console.log("Data Structure");
    }
    else{
        console.log("oops.... invalid input");
    }
}
getValue();


//Q3. Find the maximum out of three numbers.

let A= parseInt(prompt("Enter first number"));
console.log(A);
let B = parseInt(prompt("Enter second number"));
console.log(B);
let C = parseInt(prompt("Enter third number"));
console.log(C);
function Max_out_of_three(){
       if (A > B && A > C)
        {
              console.log("A is the greatest");
        } 
        else if (B < A && B > C)
        {
             console.log("B is the greatest");
        } 
       else if (C > A  && C > B) 
       {
       console.log("C is the greatest");
       }
       else{
        console.log("All are equal")
       }
}
Max_out_of_three();


//Q4. Second Smallest

let X = parseInt(prompt("Enter first number"));
console.log(X);
let Y = parseInt(prompt("Enter second number"));
console.log(Y);
let Z = parseInt(prompt("Enter third number"));
console.log(Z);

function findSecSmallest() {
    if ((X > Y && X < Z) || (X < Y && X > Z)) {
        console.log(X + `number is second smallest`);
    }
    else if ((Y > X && Y < Z) || (Y < X && Y > Z)) {
        console.log(Y  + ` number is second smallest`);
    }
    else {
        console.log(Z + ` number is second smallest`);
    }
}
findSecSmallest();

//Q5. Check whether the triangle is Acute or Obtuse
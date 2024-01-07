//Q.1 Write a JavaScript function to check whether an input is an array or not.

function checkarray(){
    let arr=[1,2,3,4,5,6];
    result= Array.isArray(arr);
    console.log(result);
}
checkarray();


//Q2.  Write a JavaScript program that prints the elements of the following array.Note : Use nested for loops.

let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let i=0; i<arr2.length; i++){
    for(j=0; j<arr2[i].length; j++){
        console.log(arr2[i][j]);
    }
}


//Q3. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array. 
// Sample array : array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13];

// let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];

if(array1.length<array2.length){
    for(let i=0; i<array1.length; i++){
        array2[i]=array1[i]+array2[i];
    }
    console.log(array2);
}
else{
    for(let i=0; i<array2.length; i++){
        array1[i]= array1[i]+array2[i];
    }
    console.log(array1);
}

//Q4. Write a simple JavaScript program to join all elements of the following array into a string.
//Sample Array: myColor = ["Red", "Green", "White", "Black"];

let myColor = ["Red", "Green", "White", "Black"];
let result='';
let result1='';
let result2='';
for(let i=0;i<myColor.length;i++){
     result=result.concat(myColor[i]);
}
console.log(result);

for (let i = 0; i < myColor.length; i++) {
    result1 = result1.concat(myColor[i]);
    if (i < myColor.length - 1) {
        result1 = result1.concat(",");
    }
}

console.log(result1);

for(let i=0; i<myColor.length; i++){
    result2= result2.concat(myColor[i]);
    if(i<myColor.length-1){
        result2= result2.concat("+");
    }
}
console.log(result2);

//Q5. Write a JavaScript program to sort the items of an array.
//Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

function sort(){
    var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1];
    console.log(arr1.sort());
}
sort();
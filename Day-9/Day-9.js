
// Q.1 Write a JS code to print Even numbers in given array ,[13,23,12,45,22,48,66,100]

function findEven(){
    arr1=[13,23,12,45,22,48,66,100];
    for(let i=0; i<=arr1.length; i++){
        if(arr1[i]%2==0){
            console.log(arr1[i]);
        }
    }
}
findEven();

//Q.2 Write a JS code to print a pattern using for loop 
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7 
// 1 2 3 4 5 6 7 8 

for(let i=1;i<=8;i++){
    console.log(i)
    for(let j=1;j<=i;j++){
        console.log(" "+j);
    }
}

//Q.3 Write a JS code to find the largest number in an array

let arr1=[2, 45, 3, 67, 34, 567, 34, 345, 623];
let maxNumber = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > maxNumber) {
        maxNumber = arr1[i];
    }
}
console.log("The largest number in the array is: " + maxNumber);

//Q.4 Write a JS code to find duplicate values in a given array 
//let arr= [4,2,34,4,1,12,1,4];

//Q.5 Write a JS code to print a 2D array 
let arr = [[1, 2],
            [3, 4],
            [5, 6]]; 

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
        }
}
 console.log(arr);


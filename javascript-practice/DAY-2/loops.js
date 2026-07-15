// 1) For loop
for (let i=0;i<9;i++){
    console.log(i)
}
// program to add first n natural numbers
// const readline = require("readline-sync");

// let sum = 0;
// let n = readline.question("Enter a value of n: ");
// n = parseInt(n);

// for (let i = 0; i < n; i++) {
//     sum += (i + 1);
// }

// console.log("Sum of first " + n + " natural numbers is " + sum);

//2)for in loop
let obj ={
    harry:98,
    shubh:45,
    Ritika:67,
    shiv:28
}
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}

//3)for of loop
for(let b of "Ananya"){
    console.log(b)
}

//4) While loop
let l =7;
let i =0;
while (i<l){
    console.log(i)
    i++;
}

//5) Do While
let j=4;
let k = 0;
do{
    console.log(k)
    k++;
}while (k<j)
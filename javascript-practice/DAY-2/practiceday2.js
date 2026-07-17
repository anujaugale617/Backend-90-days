//1)Even and Odd Number Counter: Print numbers from 1 to 50, check each number using %, and count how many are even and odd
let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i + " is Even");
        evenCount++;
    } else {
        console.log(i + " is Odd");
        oddCount++;
    }
}

console.log("Total Even:", evenCount);
console.log("Total Odd:", oddCount);

//2)FizzBuzz: Loop from 1 to 100. If divisible by both 3 and 5, print "FizzBuzz";
//  only 3 → "Fizz"; only 5 → "Buzz"; otherwise print the number.

for (let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if (i%3==0){
        console.log("Fizz");

    }
    else if (i%5==0){
        console.log("Buzz");

    }else{
        console.log(i)
    }
    
}

//3)Multiplication Table with Classification: Print the table of a given number from 1 to 10. 
// For every result, check whether it is even or odd.

let number = 5;

for (let i = 1; i <= 10; i++) {
    let result = number * i;

    if (result % 2 === 0) {
        console.log(number + " x " + i + " = " + result + " - Even");
    } else {
        console.log(number + " x " + i + " = " + result + " - Odd");
    }
}

//4)Number Divisibility Checker: Loop from 1 to 100 and print numbers divisible by 3, 5, or both.

for (let i=1;i<=100;i++){
      if(i%3==0 && i%5==0){
        console.log(i);
    }
    else if (i%3==0){
        console.log(i);

    }
    else if (i%5==0){
        console.log(i);

    }
}

//5)Student Marks Analyzer: Store marks of multiple students in an array. 
// Using a loop, check each student's marks and print Pass or Fail. Also calculate the total and average marks.
let Student_marks=[35,78,90,45,28,68]
for(i=0;i<Student_marks.length;i++){
    if(Student_marks[i]>40){
        console.log("Student is pass with ",Student_marks[i])
    }else{
        console.log("Student is fail with ",Student_marks[i])
    }
}

//6)Grade Calculator: Store multiple marks in an array. 
// Loop through them and assign grades A, B, C, D, or Fail using conditions.


const marks = [95, 85, 75, 65, 45, 30];

for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 90) {
        console.log(marks[i] + " - Grade A");
    } else if (marks[i] >= 80) {
        console.log(marks[i] + " - Grade B");
    } else if (marks[i] >= 70) {
        console.log(marks[i] + " - Grade C");
    } else if (marks[i] >= 60) {
        console.log(marks[i] + " - Grade D");
    } else {
        console.log(marks[i] + " - Fail");
    }
}


//7)Shopping Discount Calculator: Store multiple product prices in an array. 
// Loop through the prices, calculate the total using operators, 
// then apply a discount based on the total purchase amount.

const prices = [500, 1000, 1500, 2000];
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}
let discount = 0;
if (total >= 5000) {
    discount = total * 0.20;
} else if (total >= 3000) {
    discount = total * 0.10;
} else {
    discount = 0;
}
let finalAmount = total - discount;
console.log("Total:", total);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

//8)ATM Withdrawal Simulation: Start with a balance. 
// Process multiple withdrawal amounts using a loop. 
// For each withdrawal, check whether the balance is sufficient, then subtract the amount if allowed.

let balance = 10000;
const withdrawals = [2000, 5000, 4000];
for (let i = 0; i < withdrawals.length; i++) {
    let amount = withdrawals[i];

    if (amount <= balance) {
        balance = balance - amount;

        console.log("Withdrawal Successful");
        console.log("Remaining Balance:", balance);
    } else {
        console.log("Insufficient Balance");
    }
}


//9)Prime Number Finder: Loop from 1 to 100. 
// Use operators and conditions inside nested loops to find and print all prime numbers.
for (let number = 2; number <= 100; number++) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number);
    }
}


//10)Mini Number Game: Loop through numbers from 1 to 50.
//  Print "Even" for even numbers, "Odd" for odd numbers, and "Special" if the number is divisible by both 5 and 10.

for (let i = 1; i <= 50; i++) {
    if (i % 10 === 0) {
        console.log(i + " - Special");
    } else if (i % 2 === 0) {
        console.log(i + " - Even");
    } else {
        console.log(i + " - Odd");
    }
}
// 1) if statement
let a = 78 
console.log(typeof a)
if (a>0){
    console.log("This is the valid age!!");
}
//2) if and else statement
if (a<0){
    console.log("This is the valid age!!");
}
else{
    console.log("Invalid age");
}

//3)if else else if statement 
if (a<0){
    console.log("Invalid age");
}
else if(a<9) {
    console.log("you are a kid ");
}
else{
    console.log("Valid age");
}

//Switch satement  

const name="Ram";
switch(name){
    case "Radha":
        console.log("She is a girl");
        break;
    case "Yash":
        console.log("He is good at study");
        break;
    case "Ram":
        console.log("He is a boy")
        break;
    default:
        console.log("Sorry Wrong Input ")
}

//Ternary Opeartor
console.log("You can ", a<18? "Not Drive" : "Drive")
//
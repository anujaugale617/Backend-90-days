function oneplusAvg(x,y){
    return Math.round(1 + (x+y)/2)
    

}
let a=4;
let b=6;
let c=3;
console.log(("One plus Average of a and b is ", oneplusAvg(a,b)))
console.log(("One plus Average of a and b is ", oneplusAvg(c,b)))
console.log(("One plus Average of a and b is ", oneplusAvg(c,a)))

//modern method = Arrow Functions
const hello =()=>{
    console.log("Hello I am Fine !!")
    return "hi"
}
let v =hello();
console.log(v)
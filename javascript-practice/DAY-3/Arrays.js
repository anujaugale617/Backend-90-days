let marks=[91,80,65,45,null,"NOT PRESENT"]
console.log(marks)
console.log("The length of the marks is ",marks.length)
console.log(marks[7]) // will be undefined because index 7 not existed
marks[6]=37 //Adding new value to the Array
console.log(marks)
marks[0]=98 //Changing the value in the array
console.log(marks)
console.log(typeof(marks))

//use for loop to print an array 
for(i=0;i<marks.length;i++){
    console.log(marks[i])
}


//METHODS OF THE ARRAY
let num =[1,2,3,34,4]
let b=num.toString()
console.log(b)
console.log(typeof(b))

//1) JOIN METHOD - IT JOIN THE TWO ARRAYS
let c=num.join(" and ")
console.log(c)
console.log(typeof(c))

//2)POP METHOD- IT REMOVE LAST ELEMENT FROM THE ARRAY

let r=num.pop() //pop returns the popped element
console.log(num,r)

//3) PUSH METHOD-ADDS A NEW ELMENT TO ARRAY

let u=num.push(56) //push returns the new array
console.log(num,u)

//3)SHIFT METHOD -REMOVE FIRST ELEMNT AND RETURN IT 
let z =num.shift()
console.log(num,z)

//4) UNSHIFT METHOD - ADDS THE ELEMENT TO THE START OF ARRAY
let v=num.unshift(78)
console.log(num,v)

//5)DELETE METHOD 
let num1=[1,2,3,4,5,6,7,8,9]
delete num1[0]
console.log(num1)
console.log(num1.length)

//6)CONCAT METHOD-USED TO JOIN THE ARRAYS
let num2=[11,45,67,9,0,3,4,3]
let num3=[3,67,5,34,87,90]
let num4=[567,89,234,23,45,67,80,52]
let newarray = num2.concat(num3,num4)
console.log(newarray)

//7)SORT- SORT AN ARRAY ALPHABETICALLY 
num2.sort()
console.log(num2)
//to sort decendingly
let compare =(a,b)=>{
    return b-a
}
num2.sort(compare)
console.log(num2)

//to sort asendingly 
let compare2=(a,b)=>{
    return a-b
}
num2.sort(compare2)
console.log(num2)

//8)REVERSE METHOD - IT IS USED TO REVERSE ARRAY
num2.reverse()
console.log(num2)

//9)SPLICE METHOD- USED TO ADD ELEMENTS (AT POSITION,HOWMANY,ELEMENTS)
num3.splice(3,2,567,543)
console.log(num3)


//10) SLICE METHOD-SLICE OUT A PIECE FROM ARRAY IT CREEATE A NEW ARRAY
let newnum=num4.slice(3,7)
console.log(newnum)


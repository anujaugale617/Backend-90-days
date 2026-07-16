//String basics
let name="JavaScript"
console.log(name)
console.log(name[4])
let friend ="Sakshi"
console.log(friend)
//let myfriend ='Radha" Dont do this it cause the error

//Template literals
let boy1="Yash"
let boy2="Shubh"
//Shubh is friend of Yash
let sentence =`${boy2} is friend of ${boy1} `
console.log(sentence)

//if we write like this:
// let sentence =`boy2 is friend of boy1 `
// console.log(sentence) - It will give op as a :boy2 is friend of boy1-

//Escape Sequence Characters
let fruit='bana\'na'
console.log(fruit)
let fruit2="man\"go"
console.log(fruit2)

//String Methods 
let name1="Priya"
console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1.slice(2,4))
console.log(name1.slice(1,4))
console.log(name1.slice(2))
let me="Shyamrao"
console.log(me.replace("rao","Bhai")) // use to replace words in string
console.log(name1.concat(" is the friend of ",me)) //use to join two string

let me2="    Riya    "
console.log(me2)
console.log(me2.trim())// use to remove space 

//use forr loop to print string
let n="Shiv"
for (i=0;i<n.length;i++){
    console.log(n[i])
}
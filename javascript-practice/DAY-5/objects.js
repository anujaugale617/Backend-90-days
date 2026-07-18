// const mysymbol= Symbol("KEY1")
// let user={
//     name:"Ram",
//     "Fullname":"Ram Kapor",
//     [mysymbol]:"KEY1",
//     age:19,
//     location:"Pune",
//     email:"ram@gmail.com",
//     islogged:false,
//     lastloginday:["Tuesday","Friday"]
// }
// console.log(user)
// console.log(user.email)
// console.log(user.Fullname)
// console.log(user[mysymbol])
// console.log(typeof user[mysymbol])

// user.email="ram@chatgpt.com"
// console.log(user)
// Object.freeze(user)
// user.email="ram@microsoft.com"
// console.log(user)


const tinderuser= {}
tinderuser.id="123abc"
tinderuser.email="uaer@gmail.com"
tinderuser.islogged=false

console.log(tinderuser);

const regularuser={
    email:"some@gmail.com",
    Fullname:{
        username:{
            Firstname:"Radha",
            lastname:"Yadav"
        }
    }
}
console.log(regularuser.Fullname);
console.log(regularuser.Fullname.username);
console.log(regularuser.Fullname.username.Firstname);

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1, ...obj2}
console.log(obj3)

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
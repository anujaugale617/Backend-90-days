let myDate= new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let mycreatedDate= new Date(2025,0,17)
console.log(mycreatedDate)
console.log(mycreatedDate.toDateString())

let date2=new Date(2026,5,21,8,9)
console.log(date2.toLocaleString())

let date3=new Date("04-30-2027")
console.log(date3.toLocaleString())

let myTimestamp =Date.now()
console.log(myTimestamp);
console.log(date3.getTime())

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})
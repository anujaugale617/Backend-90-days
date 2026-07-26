const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task-2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async task-2 resolved")
})


const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Javascript",email:"javascript@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true  //Here can be False then o/p will be : first whole resolved function and then username
        if(!error){
            resolve({username:"Java",password:"1234"})
        }else{
            reject('ERROR : Something went Wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("Promise is either resolved or rejected")
})


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true //Here can be False then o/p will be : first whole resolved function
        if(!error){
            resolve({username:"python",password:"1234@"})
        }else{
            reject('ERROR : python went Wrong')
        }
    },1000)

})

async function consumepromiseFive() {
    try {
        const response=await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    
}
consumepromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
alert('Promiss');
console.log('this is  Promises');


// let prom1 = new Promise((resolve, reject) =>{

//     let a = Math.random();
//     if(a<0.5){
//         reject("No radom number was not supporting you")
//     }
//     else{
//         setTimeout(() => {
//             console.log("Yes I am done")
//             resolve("Harry")
//         },3000);
//     }

    
// })

// prom1.then((a)=>{
//     console.log(a);
    
// }).catch((err) => {
//     console.log(err)
    
// })

let prom1 = new Promise((resolve, reject) =>{

    let a = Math.random();
    if(a<0.5){
        reject("No radom number was not supporting you")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        },3000);
    }

    
})

let prom2 = new Promise((resolve, reject) =>{

    let a = Math.random();
    if(a<0.5){
        reject("No radom number was not supporting you 2")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Amit")
        },3000);
    }

    
})

// let p3 = Promise.all([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
    
// })
// let p3 = Promise.allSettled([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
    
// })
// let p3 = Promise.race([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
    
// })
// let p3 = Promise.any([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
    
// })
// let p3 = Promise.resolve([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
    
// })
let p3 = Promise.reject([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
    
})


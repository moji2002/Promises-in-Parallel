const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("some async operation 1");
        resolve(1)
    },2000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("some async operation 2");
        resolve(2)
    },2500)
})

// this will execute when all promises resolevd
Promise.all([p1,p2]).then(res=>console.log(res))
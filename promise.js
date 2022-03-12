var chech=false;
let mypromise= new Promise((resolve,reject)=>{
    if (chech)
    resolve("Success")
    else
    reject("Error")
});
mypromise.then((data)=>console.log(data)).catch((data)=>console.log(data))


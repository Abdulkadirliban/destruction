fetch("https://jsonplaceholder.typicode.com/posts").then((Response)=>{
    return Response.json()
}).catch((data)=>console.log(data))
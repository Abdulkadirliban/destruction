let requers= new XMLHttpRequest();
requers.open('Get','https://jsonplaceholder.typicode.com/posts');
requers.send();
console.log(requers);
requers.addEventListener('readystatechange',()=>{
    console.log(requers.readyState)
    if(requers.readyState==4){
        console.log(requers.responseText)
    }
})
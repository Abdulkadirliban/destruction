//---function callback---

function getname(name){
    console.log("Name is: "+name)

}

function inputUser(callback){
    let name=prompt("Enter u name: ")
    callback(name)
}
inputUser(getname);
// let fun=getname;
// console.log(fun);
// fun("Ali");
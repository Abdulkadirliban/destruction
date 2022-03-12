//------Array destruction ------

let std={id:585,name:"Abdul",age:23,phone:617055631};
let{id,name,age,phone}=std;
console.log(std);
console.log(`ID:${id} Name:${name} Age ${age} Phone ${phone}`);

//------Object destruction ------
const std2={
    username:"farah",
    ID:567,
    Age:23
};
const{username,ID,Age}=std2
console.log(`Username: ${username} Id: ${ID} AGE: ${Age}`)
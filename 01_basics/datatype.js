// primitive
//7 types:string,Number,Boolean,BigInt,null,undefined,symbol

//Reference
// Array,Function,Object
const heros=["blackpanther","batman"];
let myobj={
name:"xoxo",
age:21,
}

const myfunc=function(){
    console.log("hello world");
}

//************************************** 

//stack(primitive),Heap(non primitive)

let mychannel="mrbeast"
let anotherchannel=mychannel
anotherchannel="ishowspeed"
console.log(mychannel);
console.log(anotherchannel);

let userone={
    email:"abc@gmail",
    upi:123
}
let usertwo=userone

usertwo.email="aa@gmail"
console.log(userone.email);
console.log(usertwo.email);

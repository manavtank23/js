//singleton
//Object.create

//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"manav",
    age:20,
    [mySym]:"mykey1",
    email:"ss@gmail.com",
    isLoggedIn:true,
    location:"mumbai"
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email="aassmicrosodt@gmail.com"
//Object.freeze(JsUser)
JsUser.email="hitesh@chatgpt.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log(`hello user ,${this.email}`);
}
console.log(JsUser.greeting());
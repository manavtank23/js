function sayMyName(){
    console.log("m");
    console.log("n");
    console.log("v");

}
// sayMyName();

function addTwoNumbers(num1,num2){
    return num1+num2
}
const result=addTwoNumbers(2,3)
// console.log("result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("enter a username");
        return
    }
    return `${username} jsut logged in`

}
// console.log(loginUserMessage("manav"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(100,200,300,400));

const user={
    username:"manav",
    price:200
};

function handleObject(anyobject){
    console.log(`ussername is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:200
})

const newArray=[100,200300,400]
function getSecondValue(getArray){
    return getArray[0]

}
console.log(getSecondValue(newArray))
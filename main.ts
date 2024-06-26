// QUIZ GAME FOR STUDENT
import inquirer from "inquirer";

console.log("to win the game you need 4 point")
console.log("ready you quiz start from here")

let point=0

let question1=await inquirer.prompt([
    {
        type:'list',
        name:'one',
        message:'what is capital of Pakistan',
        choices:["Islamabad","Karachi","Lahore"]
    }
])
if(question1.one==="islamabad"){
    console.log("your answer is right")
    point++
}
else{
    console.log("your answer is wrong")
}
 let question2=await inquirer.prompt([
    {
        type:'list',
        name:'two',
        message:'who is first prime minister of pakistan',
        choices:["liaquat","ali jinnah","syed ahmed khan"]
    }
 ])
 if (question2.two==="liaquat"){
    console.log("your answer is write")
    point++
 }
 else{
    console.log("your answer is wrong")
 }
 let question3=await inquirer.prompt([
    {
        type:'list',
        name:'three',
        message:'which is largest city of pakistan',
        choices:["karachi","lahore","islamabad"]
    }
 ])
 if(question3.three==="karachi"){
    console.log("your answer is right")
    point++
 }
 else{
    console.log("your answer is wrong")
 }
 let question4=await inquirer.prompt([
    {
        type:'list',
        name:'four',
        message:'who is captain of pakistan cricket team',
        choices:["babar","rizwan","shaheen"]

    }
 ])
 if(question4.four==="babar"){
    console.log("your answer is right")
    point++
 }else{
    console.log("your answer is wrong");
    
 }
 if(point>=4){
    console.log(`you win your point is${point}`)
 }
 else{
    console.log(`you lose ${point}`);
    
 }
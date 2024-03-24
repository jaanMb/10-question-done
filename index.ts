// importing of inquirer
import inquirer from "inquirer";
let loop = true;


while(loop){

const userinput = await inquirer.prompt([
 {
    type: "number",
    name: "num1",
    message: "enter frist number"
 },
 {

    type: "number",
    name: "num2",
    message: "enter second number"
 },
 {type: "list",
 name: "operator",
 choices: ["Addition","subtraction","multiplication","division"],
message:"select the operator"
}
]);
const num1 = userinput.num1;
const num2 = userinput.num2;
const operator = userinput.operator;
console.log(num1, num2, operator);
// now we use some conditions here
if(num1 && num2)
{if(operator === "Addition"){
    console.log(`\nThe answer of ${num1} + ${num2} = ${num1 + num2}`);
}else if(operator ==="subtraction")
console.log(`\nThe answer of ${num1} - ${num2} = ${num1 - num2}`);
else if(operator ==="multiplication")
console.log(`\nThe answer of ${num1} * ${num2} = ${num1 * num2}`);
else if(operator ==="division")
console.log(`\nThe answer of ${num1} / ${num2} = ${num1 / num2}`);
}else{// if num1 and num2 empty or not a nmuber this will run
    console.log('please enter a valid number')
}
const calculatemore = await inquirer.prompt({
    type: "confirm",
    name:"more",
    message:"do you want more calculations?",
    default: false  // if user not write yes or no 
});
if(!calculatemore.more){
    loop = false
    console.log(`\nThank you for watching this video!`)
}
}

// let me show 
// extera future include if user want more then caculator at same time

function add(){
    let firstNum = parseFloat(document.getElementById("num1").value); 
    let secondNum = parseFloat(document.getElementById("num2").value); 
    let result = firstNum + secondNum;
    document.getElementById ("result").innerHTML = result
}
function subtract(){
    let firstNum = parseFloat(document.getElementById("num1").value); 
    let secondNum = parseFloat(document.getElementById("num2").value); 
    let result = firstNum - secondNum;
    document.getElementById ("result").innerHTML = result
}
function mutiply(){
    let firstNum = parseFloat(document.getElementById("num1").value); 
    let secondNum = parseFloat(document.getElementById("num2").value); 
    let result = firstNum * secondNum;
    document.getElementById ("result").innerHTML = result
}
function Divided(){
    let firstNum = parseFloat(document.getElementById("num1").value); 
    let secondNum = parseFloat(document.getElementById("num2").value); 
    let result = firstNum / secondNum;
    document.getElementById ("result").innerHTML = result;

    document.getElementById("result").innerHTML = result;
}
function SquareRoot(){
let firstNum = parseFloat(document.getElementById("num1").value); 
let result = Math.sqrt(firstNum);
document.getElementById ("result").innerHTML = result;
}
function Power(){
let firstNum = parseFloat(document.getElementById("num2").value); 
let secondNumNum = parseFloat(document.getElementById("num2").value); 
let result = Math.pow(firstNum,secondNumNum);
document.getElementById ("result").innerHTML = result;
}

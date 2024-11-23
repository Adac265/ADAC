
const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output");
let currentAnswer = 0; 

function appendToDisplay(input){
    inputDisplay.value += input;
}

function clearDisplay(){
    inputDisplay.value = "";
    outputDisplay.textContent = "0";
}

function calculate(){
    try{
        if(inputDisplay.value !== ""){
            outputDisplay.textContent = eval(inputDisplay.value);
            currentAnswer = eval(inputDisplay.value);
        }
        else{
            outputDisplay.textContent = "0";
        }
    }
    catch(error){
        inputDisplay.value = "Syntax error";
    }
    
}

function deleteBtn(){
    inputDisplay.value = "Currently not working.";
}

function currentAns(){
    outputDisplay.textContent = currentAnswer;
}

function powerBtn(callback){
    inputDisplay.value = "Currently not working.";
}
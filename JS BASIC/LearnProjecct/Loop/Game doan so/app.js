let btnStart = document.getElementById("btn-start");
let minNumber = document.getElementById("min-number");
let maxNumber = document.getElementById("max-number");
let min = 0;
let max = 0;
let randomNum = 0;
let result = 0;

btnStart.onclick = function(){
    min = parseInt(minNumber.value);
    max = parseInt(maxNumber.value);
    if(min < max){
        randomNum = inputRange(min,max);
        guessNumber();
    }else{
        minNumber.value = "";
        maxNumber.value = "";
        alert("Nhap lai dai so");
    }
}

function inputRange(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function guessNumber() {
    let j = 0;
    while(j < 3) {
        result = prompt("Nhập giá trị bạn đoán: ")
        if(result == randomNum){
            alert("Chuc mung!")
            return;
        }
        j++;

    }
    alert("Chuc ban mau man lan sau!");
}
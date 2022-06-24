function metertoFeet(meter){
    return 3.279 * meter
}

function feettoMeter(feet){
    return 0.305*feet
}
let inputNumber = document.getElementById("inputNumber")
let result = document.getElementById("result")
let FTM = document.getElementById("Feet-to-Meter")
let TFM = document.getElementById("Meter-to-Feet")

FTM.onclick = function(){
    result.innerHTML = feettoMeter(inputNumber.value) + " m"
}
TFM.onclick = function(){
    result.innerHTML = metertoFeet(inputNumber.value) + " feet"
}
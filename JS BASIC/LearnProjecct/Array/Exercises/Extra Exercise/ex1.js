const numArray = [1,2,4,5,6,8,13,15,16,20]

let count = 0;

function checkEvenNumber(num){
    if(num%2==0){
        count++;
        return num;
    }
}

const newNumArray = numArray.filter(checkEvenNumber)

alert(`So phan tu chan: ${count}; Phan tu chan: ${newNumArray.join(", ")}`)
let num = prompt("Nhap vao mot so: ");

let count = 0;

let N = 2;

let sout = "";

while(count < num){
    checkPrimeNumber(N)
    if(checkPrimeNumber()){
        
        count++;
    }
}

function checkPrimeNumber(N){
    for(let i = 2; i < N - 1; i++){
        if(N%i == 0){
            return false;
        }
    }
    return true;

}
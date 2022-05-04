let i = 1;
let count = 0;
let sout = "";
let n1,n2,n3;

count = prompt("Nhap 1 so: ");

while(i <= count){
    if(i == 1){
        sout = "<span>1</span>";
        i++;
        n1 = 1;
    }
    if(i == 2){
        sout = sout + "<span>, 1</span>";
        i++;
        n2 = 1;
    }
    if(i > 2){
        n3 = n1 + n2;
        sout = sout + "<span>, " + n3 + "</span>"
        n1 = n2;
        n2 = n3;
        i++;
    }
}
document.write(sout);
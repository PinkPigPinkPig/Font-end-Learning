let sout;
sout = "<table border='1' width='500' cellspacing='0' cellpadding='3'>";
for (i = 1; i <= 9; i++) {
    sout = sout + "<tr>";
    for (j = 2; j <= 9; j++) {
        sout = sout + "<td>"+ j + " x " + i + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);
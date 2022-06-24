function padTo(number, length) {

    number = number + '';// Forces the number into a string representation.

    // Returning the number this way combines the elements of the array
    // (which are indicated by ""), placing a zero between each number  
    // (e.g. "0" + "" + "0" + ""...).
    var result = number.length >= length ? number : new Array(length - number.length + 1).join('0') + number;
    
    return result
}
var currentDate = new Date ();
  var year = padTo (currentDate.getFullYear (), 4);
  console.log (year)
// console.log(padTo(9,2))
/**
 * One-hundred bottles of beer on the wall,
One-hundred bottles of beer!
Take one down,
Pass it around,
Ninety-nine bottles of beer on the wall!


Two bottles of beer on the wall,
Two bottles of beer!
Take one down,
Pass it around,
One bottle of beer on the wall!

One bottle of beer on the wall,
One bottle of beer!
Take it down,
Pass it around,
No more bottles of beer on the wall!
 *
 *
 */
const line1 = " bottles of beer on the wall, \n";
const line2 = " bottles of beer! \n";
const line3And4 = "Take one down,\nPass it around, \n";
const line5 = " bottles of beer on the wall!\n";
var onesMap = new Map([
    [9, "nine"],
    [8, "eight"],
    [7, "seven"],
    [6, "six"],
    [5, "five"],
    [4, "four"],
    [3, "three"],
    [2, "two"],
    [1, "one"],
    [0, "zero"],
]);
var tensMap = new Map([
    [9, "Ninety"],
    [8, "Eigthy"],
    [7, "Seventy"],
    [6, "Sixty"],
    [5, "Fifty"],
    [4, "Forty"],
    [3, "Thirty"],
    [2, "Twenty"],
    [1, "Ten"]
]);
var teensMap = new Map([
    [19, "Nineteen"],
    [18, "Eighteen"],
    [17, "Seventeen"],
    [16, "Sixteen"],
    [15, "Fifteen"],
    [14, "Fourteen"],
    [13, "Thirteen"],
    [12, "Twelve"],
    [11, "Eleven"]
]);
console.log("");
var totalNumBottles = 10;
for (var c = totalNumBottles; c > 0; c--) {
    printLyrics(c);
}
function printLyrics(numberBottles) {
    var lastMsg = (numberBottles - 1 == 0) ? "No more" : convertNumberToWords(numberBottles - 1);
    var numStr = convertNumberToWords(numberBottles);
    var msg = numStr + line1 +
        numStr + line2 +
        line3And4 + lastMsg + line5;
    console.log(msg);
}
function convertNumberToWords(numberBottles) {
    if (100 == numberBottles) {
        return "One-hundred";
    }
    var rem = numberBottles % 10;
    var quo = Math.floor(numberBottles / 10); //parseInt((numberBottles / 10).toFixed());
    //console.log("numberBottles:"+numberBottles + " quotient:"+ quo + " rem:"+rem);
    //console.log("numberBottles:"+numberBottles);
    if (rem <= 0) {
        return tensMap.get(quo);
    }
    else if (numberBottles > 10 && numberBottles < 20) {
        return teensMap.get(numberBottles);
    }
    else if (numberBottles < 10) {
        return onesMap.get(numberBottles);
    }
    else {
        return tensMap.get(quo) + "-" + onesMap.get(rem);
    }
}

/**
https://lyricsplayground.com/alpha/songs/numbers/99bottlesofbeeronthewall.html *
One-hundred bottles of beer on the wall,
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

const LINE1 = " of beer on the wall, \n";
const LINE2 = " of beer! \n";
const LINE3And4 = "Take one down,\nPass it around, \n";
const LINE5 = " bottles of beer on the wall!\n";
const NO_MORE = "No more";
const ONE_BOTTLE = "One bottle of beer on the wall!\n";

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
var totalNumBottles: number = 100;
for (var c = totalNumBottles; c > 0; c--) {
	printLyrics(c);
}

function printLyrics(numberBottles: number) {	
	var numStr: string = convertNumberToWords(numberBottles);
	var bottleWord: string = getBottleWord(numberBottles);
	var msg = numStr + bottleWord + LINE1 + 
			  numStr + bottleWord + LINE2 + 
			  LINE3And4 + 
			  getLastLine(numberBottles);
	
	console.log(msg);
}

function getLastLine(numberBottles: number){
		var lastMsg: string;
		if(numberBottles-1 == 0){
			lastMsg = NO_MORE + LINE5;
		}else if(numberBottles-1 == 1){
			lastMsg = ONE_BOTTLE;
		} else {
			lastMsg = convertNumberToWords(numberBottles-1) + LINE5;
		}
	
		return lastMsg;
}

function convertNumberToWords(numberBottles: number) {
	if (100 == numberBottles) {
		return "One-hundred";
	}
	var rem: number = numberBottles % 10;
	var quo: number = Math.floor(numberBottles / 10) ;//parseInt((numberBottles / 10).toFixed());

	if(rem<=0){
		return tensMap.get(quo);
	}else if(numberBottles>10&&numberBottles<20){
		return teensMap.get(numberBottles);
	}else if(numberBottles<10){				
		return toUpperCaseFirstLetter(onesMap.get(numberBottles));
	}else{
		return tensMap.get(quo) + "-" + onesMap.get(rem);
	}

}

function toUpperCaseFirstLetter(figure:string){
	
	return figure.charAt(0).toUpperCase() + figure.slice(1);
}

function getBottleWord(numberBottles: number){
	return (numberBottles == 1 ? " bottle":" bottles");
	
}


/**

Armstrong Number
Learn about armstrong numbers here.
Define a function that allows the user to check whether a given number is armstrong number or not.
Hint: To do this, first determine the number of digits of the given number. Call that n. Then take every digit in the number and raise it to the nth power. Add them, and if your answer is the original number then it is an Armstrong number.
Example: Take 1634. Four digits. So, 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634. So 1634 is an Armstrong number.
Tip: All single digit numbers are Armstrong numbers.

 test123 added intelli-j-staging-branch
 * 
 */

for(let p = 1; p < 10000; p++){
	isArmStrongNumber(p);	
}

function isArmStrongNumber(inputNum:number){

	
	let numS: string  = inputNum.toString();
	let n: number = numS.length;
	let sum: number = 0;
	for(let p = 0; p < n; p++){
		sum += Math.pow(parseInt(numS.charAt(p)),n)		
	}

	if(sum==inputNum){
		console.log("Is " + inputNum + " an Armstrong number? TRUE ");
	}
	
	

}


/*Create a function that checks if a string is a palindrome.  
(A palindrome is a word/sentence that is spelled the same way backwards). 

Examples of palendromes:
mom
dad
anna
ana
a toyotas a toyota
If a string is a palindrome, return true. Otherwise, return false.  In order 
to pass, your code MUST account for strings that contain spaces. */

'use strict'; 
 
 function reversePalindrome(str){

 	var reversed = '';
 	var noSpaces = /[\W_]/g;
 	str=str.toLowerCase().replace(noSpaces, "");
 	for (var i = str.length - 1; i >= 0; i--) {
 		str[i]
 		reversed+= str[i]
 	}

 	 if (str === reversed) {
 	 	return true ;
 	 } else{
 	 	return false ; 
 	 }
 	
 }
 reversePalindrome('mom');

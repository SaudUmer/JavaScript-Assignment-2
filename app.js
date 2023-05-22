// <======== chp 21  (Changing Case) =========> 

// ===== Task 1 ===== //

/* Type the characters that are missing from this code. var allLower = userInput.toLowerCase; 
Note: Correct this statement by yourself.*/

var userInput = "HELLO WORLD"
var allLower = userInput.toLowerCase();
console.log(allLower);

// ===== Task 2 ===== //

/* Convert the string represented by x to lower-case and assign the result to the same variable. */

var x = "KARACHI";
x = x.toLowerCase();
console.log(x);

// ===== Task 3 ===== //

/* Convert the string represented by y to upper-case and assign the result to the same variable */

var y = "pakistan";
y = y.toUpperCase();
console.log;

// ===== Task 4 ===== //

/* Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand. */

var x = "KARACHI";
var y = x.toLowerCase();
console.log;

// ===== Task 5 ===== //

/* Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand. */

var arr = ["ISLAMABAD"];
var arrLower = arr[0].toLowerCase();
console.log(arrLower);

// ===== Task 6 ===== //

/* Display in an alert the upper-case version of the string represented by a variable. */

var x = "australia";
x = x.toUpperCase();
// alert(x);

// ===== Task 7 ===== //

/* var cityName = “kaRacHi”;
Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase. */

var cityName = "kaRacHi";
var firstLetter = cityName.slice(0, 1).toUpperCase();
var otherwords = cityName.slice(1).toLowerCase();
console.log(firstLetter + otherwords);

// <======== chp 22-25 (Strings) =========> 

// ===== Task 1 ===== //

/* "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it. */

var sameWords = "captain";
var letters = sameWords.slice(1, 3);
console.log(letters);

// ===== Task 2 ===== //

/*  */

// ===== Task 3 ===== //

/* The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand. */

var animal = "elephant";
var seg = animal.slice(2, 6);
console.log(seg);

// ===== Task 4 ===== //

/* Find the number of characters in the string represented by a variable and assign the number to a second variable. */

var a = "Shahzaib";
var b = a.length;
console.log(b);

// ===== Task 5 ===== //

/* In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand. */

var name = "Arsalan";
var chars = name.length;
var nameFirtLetter = name.slice(0, 1);
var nameLastLetter = name.slice(4, 7);
var result = nameFirtLetter + nameLastLetter;
console.log("Lenght of the name " + chars);
console.log(result);

// ===== Task 6 ===== //

/* var text = "To be or not to be.";
var indx = text.indexOf("be");
What is the value of indx? */

var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx); // index is 3

// ===== Task 7 ===== //

/* var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
What is the value of indx?
 */

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx); // index is 16

// ===== Task 8 ===== //

/* Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand. */

var text = "I have to go to the class today and after that I will go to eat the dinner with my friends";
var indx = text.lastIndexOf("go");
console.log(indx); // index is 54;

// ===== Task 9 ===== //

/* Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string. */

var arr = ["Apple", "Orange", "Banana"];
var check = arr.indexOf("Apple");
if (check > -1) {
    console.log("Found");
} else {
    console.log("Not Found")
}

// ===== Task 10 ===== //

/* In this string "abcde", what character is at index 2? (Use charAt) */

var word = "abcde";
var check = word.charAt(2);
console.log(check);

// ===== Task 11 ===== //

/* Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand. */

var text = "Hello World";
var check = text.charAt(10);
console.log(check);

// ===== Task 12 ===== //

/* Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand. */

var str = "Hellow World";
var x = str.charAt(str.length - 1);
console.log(x);

// ===== Task 13 ===== //

/* Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand. */

var str = "Hellow World";
var cha = str.charAt(5);
console.log(cha);

// ===== Task 14 ===== //

/* Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character */

var text = "Shahzaib";
var check = text.charAt(2);
if (check == "a") {
    console.log("Character Found")
} else {
    console.log("Character Not Found");
}

// ===== Task 15 ===== //

/* Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand. */

var name = "Shahzaib";
var arr = [];
for(var i = 0; i < name.length; i++){
    arr[i] = name[i];
    console.log(arr);
}

// ===== Task 16 ===== //

/* In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand. */

var para = "Do you want to go to the washroom, Yes";
var x = para.replace("Yes", "no");
console.log(x)
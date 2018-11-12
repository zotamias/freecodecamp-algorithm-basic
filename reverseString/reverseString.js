// Reverse A String

/*

Used built-in functions in order to solve this algorithm.
-split() method splits the string into an array of characters
-reverse() method reverses the array
-join() method joins all of the arrays into a string

*/


// My solution 

function reverseString(str) {
  return str.split([]).reverse().join([]);
}

reverseString("hello");

//reverseString("hello"); becomes "olleh"
//reverseString("Howdy"); becomes "ydwoH"
//reverseString("Greetings from Earth"); becomes "htraE morf sgniteerG"

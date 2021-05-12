/**
 * Functions that takes an array of strings and returns 
 * an array only containing unique values in the array.
 */

// This version removes any duplicates but will keep one copy.
const uniqueArrayItems = (arr: Array<string>): Array<string> => arr.filter((value, index, self) => self.indexOf(value) === index);

// This version removes non unique items entirely.
const removedUniqueArrayItems = (arr: Array<string>): Array<string> => arr.filter((value, index, self) => self.lastIndexOf(value) === self.indexOf(value));

console.log(uniqueArrayItems(["test", "test", "foo", "bar", "foo"]))
console.log(removedUniqueArrayItems(["test", "test", "test", "bar", "foo"]))
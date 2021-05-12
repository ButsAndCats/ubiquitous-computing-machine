/**
 * A function that takes an array of strings and returns 
 * the an array only containing unique values in the array.
 */
const uniqueArrayItems = (arr: Array<string>): Array<string> => arr.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArrayItems(["test", "test", "foo", "bar", "foo"]))
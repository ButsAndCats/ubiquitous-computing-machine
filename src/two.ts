/**
 * Write a function `parse` that takes a full url and extracts out query params
 * and returns them as a object {[key: string]: string | undefined}
 * One catch, you can't use the js URL class
 **/ 

const parse = (url: string): Record<string, string> => Object.fromEntries(new URLSearchParams(url.split("?")[1]).entries());

// {test: 'true', name: 'jon', email: 'jon@mindfulness.com'}
console.log(parse('https://mindfulness.com/download?test=true&name=jon&email=jon%40mindfulness.com'));

console.log(parse('https://mindfulness.com/download')); // {}
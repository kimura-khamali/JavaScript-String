//Extract the last four characters from the string below;"extravaganza"

let test = "extravaganza";
let result = test.substring(8,12);
console.log(result);
// let test = "extravaganza";
// console.log(a[8]+n[9]+g[10]+[z11]);


/*//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"*/

//const food = "The quick fox jumped over the lazy dog";
//const food1 = "quick fox jumped over the lazy dog";


//console.log(`${food} eat${food1} `);
//console.log(food.splice(4))

const food = "The quick fox jumped over the lazy dog";
console.log(food.slice(0,4)) + "eat" + food.slice(4)
console.log(food)

//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const story= "The quick brown fox jumps over the lazy dog"
const count = (story.match(/\bthe\b/ig)|| []).length;
const countthe = (story.match(/\bbrown\b/ig)|| []).length;
console.log(count)
console.log(countthe)
//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
const y = string1.include
console.log({ index: string1.indexOf(`are`) });

console.log({ index: string2.indexOf(`sitting`) });

//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"*/

let name1 = "wonderful";
let name2 = "amazing";
let name3 = "UndERneath";
let name4 = "A wonderful world";
console.log(name1.toUpperCase());
console.log(name2.toLowerCase());
console.log(name3.toLowerCase());

//console.log(name4.toUpperCase());
 //const m = name4.toLowerCase().replace(/\bw/g, (match)) ,match => name4.toUpperCase();
  //console.log(m)
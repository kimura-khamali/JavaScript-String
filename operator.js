//Extract the last four characters from the string below;"extravaganza"

let test = "extravaganza";
let result = test.substring(0, 8);
console.log(result);

/*//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"*/

const food = "The quick fox jumped";
const food1 = "over the lazy dog";

console.log(`${food} eat  ${food1} `);
//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const story = "The quick brown fox jumps over the lazy dog";

function countWord(story) {
  const result = {};

  const arr = story.split(" ");

  for (let word of arr) {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
}

console.log(countWord("The brown the"));

//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
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

function toTitleCase(str) {
  if (!str) {
    return "";
  }

  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase().concat(word.substr(1));
    })
    .join(" ");
}

console.log(toTitleCase("A wonderful world"));

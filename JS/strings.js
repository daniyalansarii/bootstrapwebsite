//strings is the fundamental datatype in JS ,It can be single or double quotes

const str = "Daniyal ansari";

console.log(str.indexOf('ansari')); //it start with zero index

//convert string into an array

const arr = Array.from(str) //it is a method to convert string into an array 
console.log(arr);

//search method in string

const result = str.search(/d/i); // /it is expression i means ignore case-sensitivity /
console.log(result);

//match 
// it is method to match value we search
// it returns new array and give all basic values

let match = str.match("ansari");
console.log(match);

//includes
// it's a method to check if values includes it returns true, otherwise false

const strr = "Hello JavaScript"
let res = strr.includes('Java')
console.log(res);

//startswith

const myName = "My name is daniyal ansari";

const check = myName.startsWith("name") //it returns false because it starts with "My" 
console.log(check);

//endswith

const end = myName.endsWith("ansari") //it returns true because it ends with "ansari"
console.log(end);

//slice 
//it slices a value

const string = "I am learning JavaScript"

let n = string.slice(0,4)

console.log(n);

//replace()
const namme = "Hello ali, How are you"
const replace = namme.replace("ali","daniyal")
console.log(replace);

//char at

let char = namme.charAt(0)
console.log(char);

//split

const fruit = "apple,mango,banana";

const split = fruit.split(",");
console.log(split);

//print a to z
for(let char = 65; char<=122; char++){
    console.log(String.fromCharCode(char));
}

// write function vowel is present

const checkAllVowelPresentOrNot = (params)=>{
    const vowels = "aeiou";
    for(let char of vowels){
        
        if (!params.includes(char)) {
            return false
        }
    }
    return true
   
}
console.log(checkAllVowelPresentOrNot("My name is daniyal"));


//count vowels

const countVowels = (param)=>{

    const vowelss = "aeiou"
    let count = 0
    for(let char of param){
        if (vowelss.includes(char)) {
            count++
        }
    }
    return count
}
console.log(countVowels('daniyal ansari'));

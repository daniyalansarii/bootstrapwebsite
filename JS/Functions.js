//Function is a block of reuseable code to perform specific task

function greet(){
    
    return 'hello world'
}
var result = greet(); 
console.log(result);

//function with params

//params take a value
//argument give the value to params when function call or invoke

function sum(a,b) {

    console.log(a+b);
}
sum(10,5)

function welcome(namee) {
    console.log(`hello ${namee} welcome`);
}
welcome("Daniyal");
welcome("Ali");


//function expression
// it means we can store a function into a variable is called function expression

var result = function multiplication(num1,num2) {
    console.log(num1 * num2);
}
result(5,5)

//anonymous function
//it means function without name

var subtract = function (a,b) {
    console.log(a - b);
}
subtract(10,5)


//calculator

function calculator(number1,number2,opt) {
    if (opt == '+') {
        console.log(number1 + number2);
    }
    else if (opt == '-') {
        console.log(number1 - number2);
        
    } 
    else if (opt == '*') {
        console.log(number1 * number2);
    } 
    else if (opt == '/') {
        if (number1 === 0 || number2 === 0) {
            console.log('0 is not allowed');
        }
        else{
        console.log(number1 / number2);
        }
    } 
}

calculator(10,20,'+');
calculator(10,0,'*');
calculator(10,0,'/')






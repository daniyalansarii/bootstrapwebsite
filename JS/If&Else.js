//if else

var temp = 32

if (temp > 30) {
    console.log("Go to beach 🤩");
    
} else {
    console.log('at home');
}

var userAge = 18;
var isCitizen = true;
var isRegistered = true;

if(userAge >= 18 && isCitizen && isRegistered){
    console.log('you can vote');
    
}
else if(userAge < 18){
    console.log("you can't vote due to age");
    
}
else if(isCitizen == false){
    console.log("you can't vote due to citizenship");
}
else if(isRegistered == false){
    console.log("you can't vote due to registration");
    
}
else{
    console.log('something wrong');
    
}


var num = 5;

if (num % 2 == 0) {
    console.log('even');
    
} else {
    console.log('odd');
    
}

var number = -5;

if (number === 0) {
    console.log('zero');
    
} else if(number > 0) {
    console.log('positive');
}
else{
    console.log('negative');
    
}
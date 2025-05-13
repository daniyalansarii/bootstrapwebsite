//while loop
// loop means repetition of work

let num = 1;

while (num <= 10) {
    console.log(num);
    num++;
}

//let's create table of 5 with while loop

let n = 1;

while (n <=10) {
    console.log(`5 x ${n} = ${5*n}`);
    n++;
}


//do-while loop

//this do-while at least works on a one time then check condition

let q = 1;

do {
    console.log(q);
    q++;
} while (q<=2);

//let's create table with do-while loop

var tab = 1;

do {
    console.log(`2 x ${tab} = ${2*tab}`);
    tab++
} while (tab<=10);


//for loop

for(var i = 1; i<=10; i++){
    console.log(`${i} Love`);
}

//let's create table with for loop

for(var w = 1; w <=10; w++){
    console.log(`3 x ${w} = ${3*w}`);
    
}

for(var z= 1; z<=6; z++){
    var pattern = "";
    for(var m=1; m<=z; m++){
        pattern = pattern +" *"
    }
    console.log(pattern);
    
}
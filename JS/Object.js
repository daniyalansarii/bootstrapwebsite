const person = {
    name: 'Daniyal',
    age:20,
    is_student: true,
    "clas's":10,
    greet: function (){
        return 'Welcome to JS'
    }
}
//access value
console.log(person.name);
//if we want to access class in obj we used square bracket
console.log(person["clas's"]);

// adding
person.job = 'web dev'
//modifying
person.age = 25

console.log(person);


//how to access method in obj

console.log(person.greet());

const pers = {
    name:'ali',
    greet: function (){
        console.log(this);
    }
}
console.log(pers);


let laptop = {
    name: 'hp',
    model:'E256',
    processor:'i5 5th generation',
}

//object methods

// if we want to access key

let keys = Object.keys(laptop)
console.log(keys);


// if we want to access values

let values = Object.values(laptop)
console.log(values);

for(let values in laptop){
    console.log(laptop[values]);
    
}

//for both key and values

for(keys in laptop){
    console.log(keys, laptop[keys]);
}

const object = { a: 1, b: 2, c: 3 };

for (property in object) {
  console.log(`${property}: ${object[property]}`);
}

// spread operator

const sum = (...numbers)=>{

   return numbers.reduce((accum,curVal)=>
      ( accum = accum + curVal ),0);
}
console.log(sum(5,5,5));

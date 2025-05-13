//array 
//it is a special type of variable that can hold more than one value

let persons = ['ali','uzair','talha'];

console.log(persons);

//we can access through index number it starts with zero

console.log(persons[1]);


//modify a data in array

persons[0]='daniyal'
console.log(persons);

//for of loop
//if we want to access all values of array 

for(let item of persons){
    console.log(item);
}

// forin loop
//if we want to access index number 
for(let item in persons){
    console.log(item);
}

// for each
// if we want both index and values 
//for each never return anything

let fruits = ['mango','pineapple','orange','banana']

fruits.forEach((item,index)=>{
    console.log(`Index is ${index} and item is ${item}`);
})

//map method
//same as forEach but they return an array

let map = fruits.map((item)=>{
    return  item
})
console.log(map);

//push
//it is a method we want to add element in the last of an array

let cities = ['karachi','lahore','islamabad']

cities.push('peshawar')
console.log(cities);


//pop
//it is a method we want to remove element in the last of an array

let cars = ['corolla','civic','jaguar']

cars.pop()
console.log(cars);

//unshift
//it is a method we want to add element in the starting of an array

let furniture = ['divider','sofa']

furniture.unshift('bed')

console.log(furniture);

//shift
//it is a method we want to remove element in the starting of an array

let crockery = ['plates','spoons','glass']

crockery.shift()

console.log(crockery);

//these all methods are work on starting or ending of an array

//splice()
//it is a method where we can delete or add a data in desired position of an index

let names = ['ashar','muneeb','kamran','ubaid']

names.splice(2,1,'saim') //add saim deleting to kamran
console.log(names);

let nn = ['daniyal','zohaib','uraib','osama']
nn.splice(3,0,'farooq')
console.log(nn);


//indexof
//it is a method if we want to find index number of an element

let students = ['zohaib','uraib','shoaib'];

console.log(students.indexOf('uraib')); //we find in which index number uraib element take


//includes
//it is also method to check values exist in array if they find value it returns true otherwise false

let nums = [0,1,2,3,4,5,6];

console.log(nums.includes(5));


//tasks
//add dec at the end of an array
let months = ['jan','feb','march'];

months.push('dec')
console.log(months);

//update march to March
months.splice(2,1,'March')
console.log(months);

//delete feb on an array
months.splice(1,1)
console.log(months);

//filter 
//it is a method to filter a values

let ages = [10,15,18,25,30]

const res = ages.filter((item)=>{
    return item > 18
})
console.log(res);


//lets do filtering products whose price less than 500

const product = [
    {namee:'laptop',price:5000},
    {namee:'tablet',price:500},
    {namee:'mobile',price:200},
    {namee:'watch',price:150}
]

const filterproduct = product.filter((item)=>{
    return item.price < 500;
})
console.log(filterproduct);

//sort()
//it is a method to sort a values a to z

const letters = ['c','z','k','q','l','a']

console.log(letters.sort());


//reduce

const prices = [500,1500,2500]

const total = prices.reduce((accum,item)=>{
    return accum + item
},0)

console.log(total);


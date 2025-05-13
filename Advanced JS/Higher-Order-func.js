
function user(name,greet){
    console.log('Receive input ' + name);
    greet(name)
}

function greet(name){
    console.log('hello ' + name);
}

user('daniyal',greet)


const math = (a,b,operations)=>{
    return operations(a,b)
}

const add = (a,b)=>{
    return a+b
}

console.log(math(5,5,add))

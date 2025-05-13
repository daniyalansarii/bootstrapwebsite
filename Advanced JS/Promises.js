//syntax is

const pr = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        
        reject('I not miss you')
        
    }, 2000);

})

pr.then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('I miss you no matter if you miss me aur not');
})


const student = 'Daniyal'

const enrollStudent = (student)=>{
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const isSuccessfull = Math.random()>0.4
            if (isSuccessfull) {
                resolve('you are enrolled')
            } else {
                reject('Enrollment failed')
            }
        }, 2000);

    })
}

enrollStudent(student)
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('Process completed');
    
})
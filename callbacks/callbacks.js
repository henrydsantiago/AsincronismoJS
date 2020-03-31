function sumar (num1, num2){
    return num1+num2
}
function calc(num1, num2, callback){
    return callback(num1,num2)
}

console.log(calc(6,5,sumar))


function date(callback){
    setTimeout(()=>{
        let date = new Date
        callback(date)
    },1500)
}

function printDate(dateNow){
    console.log(dateNow)
}

date(printDate)


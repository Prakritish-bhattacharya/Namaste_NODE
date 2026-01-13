console.log("I am SUM.js page")

function calculateSum(a,b){
    const sum = a+b
    console.log(sum)
}
function calculateSubtraction(a,b){
    const subtraction = a-b
    console.log(subtraction)
}
module.exports = {
    Sum : calculateSum,
    Subtraction : calculateSubtraction
}  


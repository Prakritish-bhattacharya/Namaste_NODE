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

/*
    Node.js has an event-driven architecture capable of asynchronous I/O.
    These design choices aim to optimize throughout and scalability in web applications with 
    many input output operations as well as for real-time web application.
*/
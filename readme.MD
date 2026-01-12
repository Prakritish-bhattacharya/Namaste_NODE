1) Modules are protectes their variables and functions from leaking
#---------------------------
    to access any variables or functions from one module to another , then first we need exports then import
    like thet-->
        ===============================Function access=========================
        =>module.exports = functionName----->export from main origin where function or variables are decleared

        =>const functionName = require("file path")----->import where we want to access it
        
        But, if You want to export multiple  thing then You need to use object
        <=SYNTAX=>
            module.exports = {
                first : firstFunction,
                second : secondFunction
            }
        But how to access it....
        <=SYNTAX=>
            const object = require("file path")
            object.firstFunction()
#---------------------------
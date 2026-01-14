const { MongoClient } = require("mongodb") // import mongo db from npm
const { url } = require("node:inspector")
//  creating remote mongo db and connect with local
const uri = "mongodb+srv://namastedev:3kvd6ndaCDAuSvdT@namastenode.6y1z85y.mongodb.net/"
//  create a new MongoClient reference
const client = new MongoClient(uri)
//  select database name
const dbName = 'HelloWorld'

async function main(){
    await client.connect()
    console.log("Connected successfully to server")
    const db = client.db(dbName)
    const collection = db.collection('User')

    // insert data
    const data = {
        firstname: "Sohini",
        lastname: "Chatterjee",
        city: "Mumbai",
        phoneNumber: "9609669849"
    }
    // insert above data to Database
    const insertResult = await collection.insertMany([data])
    console.log("Inserted documents =>", insertResult)
    // get user from Database
    const findResult = await collection.find({}).toArray()
    console.log("Found documents =>", findResult)
    //  the following code examples can be pasted here...
    return 'done.'
}

// call the function
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())
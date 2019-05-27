/* CRUD operations */

/*
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID
*/
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    /*Insert a simple ocument into user's collection */
    db.collection('users').insertOne({
        _id: id,
        name: 'suzy',
        age: 30 
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })

    /*Bulk insert documents into collection */
    /*
    db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        },
        {
            name: 'Gunther',
            age: 27
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }
        console.log(result.ops)
    })
    */

    /* Challenge: Insert 3 tasks into a new tasks collection
     * 1. Use insertMany to insert three documents
     * for each documents, have description (string) and completed (boolean)
     * 2. Setup callback to handle error or print ops
     * 3. run the script
    */
    /*
    db.collection('tasks').insertMany([
        {
            description: "Send email for job",
            completed: false
        },
        {
            description: "do the laundry",
            completed: true
        },
        {
            description: "call home",
            completed: true
        }
    ], (error, result) => {
        if (error){
            return console.log('Unable to insert documents into tasks collection')
        }
        console.log(result.ops)
    })
    */


})






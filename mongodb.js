/* CRUD operations */
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    /* Delete operation */
    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    /* update operation */
    /*
    db.collection('users').updateOne({
        _id: new ObjectID("5cdd6eb4ed627d33cce04024")
    }, {
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    */
    /* update many */
    /*
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
    */

    /* Find user by name property */
    /*
    db.collection('users').findOne({_id: new ObjectID("5cdd72fb6472bc3b0f148ecf")}, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(user)
    })
    */
    
    /*return list of all users with age 27 */
    /*
    db.collection('users').find( {age: 27}).toArray((error, users) => {
        console.log(users)
    })
    db.collection('users').find( {age: 27}).count((error, count) => {
        console.log(count)
    })
    */

    /* fetch last task by its id */
    /*
    db.collection('tasks').findOne({_id: new ObjectID("5cdd7667afbd763eb9f34ade")}, (error, task)=> {
        console.log(task)
    })
    */
    /* fetch all tasks that are not completed */
    /*
    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    })
    */
    


})






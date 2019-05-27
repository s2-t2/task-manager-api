const express = require('express')
require('./db/mongoose') /* db connection */
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 

/* Middleware function for maintenance mode */
/*
app.use((req, res, next) => {
    res.status(503).send('Site under maintenance, Check back soon!')
})
*/

/* Automatically parse incoming JSON to an objeect 
 * so we can access it in our request handlers
 */
app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

/*
 * Without middleware: new request -> run route handler
 *
 * With middleware: new request -> do something -> run route handler
 */

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})









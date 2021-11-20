//require all packages
const express = require('express')
require('dotenv').config()
const app = express()

//get all routes
const index = require('./routes/index')
const report = require('./routes/report')
const template = require('./routes/template')
const group = require('./routes/group')
const contact = require('./routes/contact')

//use body-parser feature from express
app.use(express.json())

//set where each route should be accessed
app.use('/api/', index, report)
app.use('/api/template', template)
app.use('/api/group', group)
app.use('/api/contact', contact)

// handle not found errors
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

// main Error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      status: error.status || 500,
      message: error.message
    }
  })
})

//define port on which server will run
const port = process.env.PORT || 5001

//define start async function to start server
const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

//start server using the start() function
start()

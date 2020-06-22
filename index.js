const express = require('express')
const app = express()
const mongoose = require("mongoose")

// import routes
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

require('dotenv').config()

// connect to db
mongoose.connect(process.env.DB_CONNECT , 
    { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', () => console.log('connect to db'))

// middleware 
app.use(express.json())

// route middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)

app.listen(3000, () => console.log('Server up'))

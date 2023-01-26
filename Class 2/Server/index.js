// packages
const express = require('express')
const app = express()

const mongoose = require('mongoose')


// file import
const taskSchema = require('./model/Task')

const Task = mongoose.model("Tasks", taskSchema)

const mongoDBAccess = 'mongodb+srv://adminuser:adminuser123@mernstackclass2.mxfdkkk.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(mongoDBAccess, { useNewUrlParser: true }).then(()=>{
    console.log('you app has been connected to mongoDB')
}).catch((err)=>{
    console.log(err)
})

// creating new task to the DB

const newTask = new Task({
    name:'have dinner',
    date: '26/01/2023',
    isCompleted: false
})


newTask.save()

const port = 8000

app.listen(port,()=>{
    console.log(` we are in port ${port}`)
})








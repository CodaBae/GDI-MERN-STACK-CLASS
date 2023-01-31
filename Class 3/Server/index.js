// packages
const express = require('express')
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))


// file import
const taskSchema = require('./model/Task')

const Task = mongoose.model("Tasks", taskSchema)

const mongoDBAccess = 'mongodb+srv://adminuser:adminuser123@codeability.l9qip.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);
mongoose.connect(mongoDBAccess, { useNewUrlParser: true }).then(() => {
    console.log('you app has been connected to mongoDB')
}).catch((err) => {
    console.log(err)
})


// creating new task to the DB

// const Task2 = new Task( {
//     name:'new task testing delete',
//     date: '26/01/2023',
//     isCompleted: false
// })

// Task2.save()

// Read task from the DB

// Task.find((err,tasks)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(tasks)
// })

// Update a task in the DB

// Task.findOneAndUpdate({name:'task 2'}, {date:'30/01/2023'}, (err,task)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(task)
// })

// Delete a task

// Task.findOneAndDelete({_id:'63d840303a464f33ec4a1670'},(err,task)=>{
//     if (err) {
//         console.log(err)
//     }
//     else{
//         console.log(task, 'task deleted')
//     }
// })

app.get('/task', (req, res) => {
    Task.find((err, task) => {
        if (err) {
            res.send(err)
        }
        res.send(task)
    })
})


app.post('/task', (req, res) => {
    const newTask = new Task({
        name: req.body.name,
        date: req.body.date,
        isCompleted: req.body.isCompleted
    })

    newTask.save().then((task) => res.send('task created')).catch((err) => res.send(err))

})

 





const port = 8000

app.listen(port, () => {
    console.log(` we are in port ${port}`)
})








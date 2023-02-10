const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: String,
    date: String,
    isCompleted: Boolean
})

module.exports = taskSchema
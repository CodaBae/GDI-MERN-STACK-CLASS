# Create a MongoDB Atlas Account

- Go to the MongoDB Atlas website (https://www.mongodb.com/cloud/atlas) and click on "Start Free" to create a new account.

- Fill in your email and password to create a new account, and verify your email address.

- Once logged in, click on "Create a New Project" to create a new project.

- Enter a name for your project and select a cloud provider and region.

- Click on "Create Project" to create your project.


# Create a Cluster

- Once your project is created, you will be taken to the Clusters page. Click on "Build a New Cluster" to create a new cluster.

- Select the "Free" tier and choose the cloud provider and region for your cluster.

- Click on "Create Cluster" to create your cluster.

- Create a Database User

- Once your cluster is created, click on "Connect" to connect to your cluster.

- Select "Add a New User" and enter a username and password for your new user.

- Click on "Add User" to create your user.

- Whitelist Your IP Address

- Click on "Add IP Address" and enter your IP address to whitelist it.

- Click on "Confirm" to whitelist your IP address.


# Mongoose 

Mongoose is an Object Document Mapper (ODM) for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data. Mongoose allows you to define a schema for your documents, and then interact with MongoDB using that schema, rather than interacting with the raw JSON data directly.

- Some of the features of Mongoose include:

Defining schemas: Mongoose allows you to define a schema for your documents, which specifies the structure of the data and the types of fields. The schema also allows you to specify validation rules and default values for fields.

Creating models: Once you have defined a schema, you can create a model, which can be use to interact with the corresponding collection in MongoDB.

CRUD operations: You can perform CRUD (Create, Read, Update, and Delete) operations on your MongoDB collections using the methods provided by Mongoose models.


# Install Mongoose

In your Node.js app, install the Mongoose package using npm by running the following command:

- npm install mongoose


# Connect to MongoDB Atlas

- In your Node.js app, import the Mongoose module and connect to your MongoDB Atlas cluster using the following code:

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>",
    { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(() => {
        console.log("Couldn't connect to MongoDB");
    })


app.use(express.json())


app.listen(8800, () => {
    console.log("Backend server is running!")
})

- Make sure to replace <username> and <password> with your MongoDB Atlas username and password, and <dbname> with the name of your desired database.


# Define a Mongoose Schema

- To create a Mongoose model, you need to define a Mongoose schema first. A schema defines the structure of the documents within a collection in MongoDB. Here is an example of a schema for a "Task" collection:

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: String,
  taskDescription: String,
  taskDueDate: Date
});

module.exports = taskSchema;


# Perform CRUD Operations

You can now use the Task model to perform CRUD (create, read, update, and delete) operations on your MongoDB Atlas database. Here are some examples:

const taskSchema = require('./taskSchema');

const Task = mongoose.model('Task', taskSchema);

- // Create a new task
const newTask = new Task({
  taskName: 'My Task',
  taskDescription: 'This is my task.',
  taskDueDate: new Date()
});
newTask.save();

- // Read all tasks
Task.find((err, tasks) => {
  if (err) return console.error(err);
  console.log(tasks);
});

- // Update a task
Task.findOneAndUpdate({ taskName: 'My Task' }, { taskDescription: 'Updated task description.' }, (err, task) => {
  if (err) return console.error(err);
  console.log(task);
});

- // Delete a task
Task.findOneAndDelete({ taskName: 'My Task' }, (err) => {
  if (err) return console.error(err);
  console.log('Task deleted.');
});


- Please keep in mind that you need to have a MongoDB Atlas account and a cluster set up, as well as a user and IP whitelisted, in order to connect and perform operations on your database.



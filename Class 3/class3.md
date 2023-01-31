# CRUD
- Create, Read, Update and Delete

- Create a new task
const newTask = new Task({
  taskName: 'My Task',
  taskDescription: 'This is my task.',
  taskDueDate: new Date()
});
newTask.save();

- Read all tasks
Task.find((err, tasks) => {
  if (err) return console.error(err);
  console.log(tasks);
});

- Update a task
Task.findOneAndUpdate({ taskName: 'My Task' }, { taskDescription: 'Updated task description.' }, (err, task) => {
  if (err) return console.error(err);
  console.log(task);
});

- Delete a task
Task.findOneAndDelete({ taskName: 'My Task' }, (err) => {
  if (err) return console.error(err);
  console.log('Task deleted.');
});


# Implement the following routes for the task API:

a. GET /tasks - to retrieve all tasks
b. POST /tasks - to create a new task
c. GET /tasks/:id - to retrieve a specific task by ID
d. PUT /tasks/:id - to update a task by ID
e. DELETE /tasks/:id - to delete a task by ID


# Test the API using Postman or a similar tool.

- Download Postman - https://www.postman.com/downloads/

- npm install body-parser

- import
const bodyParser = require('body-parser');

- parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

- parse application/json
app.use(bodyParser.json());


# Here is sample code to implement the above steps:

- Get all tasks
app.get('/tasks', (req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json({ success: false }));
});

- Create a task
app.post('/tasks', (req, res) => {
  const newTask = new Task({
    name: req.body.name
  });

  newTask
    .save()
    .then(task => res.json({ task, success: true }))
    .catch(err => res.status(400).json({ success: false }));
});

- Get a task by ID
app.get('/tasks/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json({ success: false }));
});

- Update a task by ID
app.put('/tasks/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then(task => res.json({ task, success: true }))
    .catch(err => res.status(400).json({ success: false }));
});

- Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(task => res.json({ task, success: true }))
    .catch(err => res.status(400).json({ success: false }));
});

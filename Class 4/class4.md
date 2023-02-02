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

# Deployment of API & Documentation

- Cyclic - https://www.cyclic.sh/

- Postman - https://www.postman.com/api-documentation-tool/ 

# Setup Frontend project

- Folder stucture

- Component Structure
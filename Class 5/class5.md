# Setup Frontend project

- Folder stucture

- Component Structure

# Call API in React.js

The TaskList component defines several functions to interact with the API. These functions are used to retrieve, add, update and delete tasks from the API.

import React, { useState, useEffect } from "react";

import axios from "axios";

const API_ENDPOINT = "https://your-api-endpoint.com/tasks";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);


# Here is a more detailed explanation of each function:

- getTasks function: This function retrieves the tasks from the API and updates the tasks state using the setTasks method. It uses the axios.get method to send a GET request to the API endpoint. The response data is stored in the res variable, which is then passed as an argument to the setTasks method. In case of any error, it logs the error message to the console.

  // Get all tasks
  const getTasks = async () => {
    try {
      const res = await axios.get(API_ENDPOINT);
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

- postTask function: This function adds a new task to the API. It uses the axios.post method to send a POST request to the API endpoint with the task data as the payload. After the task is added successfully, it calls the getTasks function to refresh the tasks list. In case of any error, it logs the error message to the console.

  // Post a task
  const postTask = async (task) => {
    try {
      await axios.post(API_ENDPOINT, task);
      getTasks();
    } catch (error) {
      console.error(error);
    }
  };

- updateTask function: This function updates an existing task. It uses the axios.put method to send a PUT request to the API endpoint with the updated task data as the payload. The endpoint URL contains the task id to identify the task to be updated. After the task is updated successfully, it calls the getTasks function to refresh the tasks list. In case of any error, it logs the error message to the console.

 // Update a task
  const updateTask = async (task) => {
    try {
      await axios.put(`${API_ENDPOINT}/${task.id}`, task);
      getTasks();
    } catch (error) {
      console.error(error);
    }
  };

- deleteTask function: This function deletes a task. It uses the axios.delete method to send a DELETE request to the API endpoint with the task id as a URL parameter. After the task is deleted successfully, it calls the getTasks function to refresh the tasks list. In case of any error, it logs the error message to the console.

 // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_ENDPOINT}/${id}`);
      getTasks();
    } catch (error) {
      console.error(error);
    }
  };


# More
The TaskList component also uses the useEffect hook to call the getTasks function when the component is first rendered. This makes sure that the tasks state is initialized with the latest data from the API. The [] passed as the second argument to the useEffect hook ensures that this effect is only run once on component mount.

# Finally:
The component returns the task list UI, which is a list of tasks with a delete button for each task and a form to add a new task. The form uses the onSubmit event handler to handle form submissions and calls the postTask function to add the task.


 useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{" "}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          postTask({ title: event.target.task.value });
          event.target.task.value = "";
        }}
      >
        <input name="task" type="text" placeholder="Add task" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskList;


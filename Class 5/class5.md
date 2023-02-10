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

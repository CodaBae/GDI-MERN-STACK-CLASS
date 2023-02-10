import axios from "axios"
const TaskList = (props) => {

    const API_ENDPOINT = props.API_ENDPOINT

    const id = props.id

    const updateTask = async (task) => {
        let data = await axios.put(`${API_ENDPOINT}/task/${id}`, task)
        props.getTask()

        console.log(data)
    }
    const deleteTask = async () => {
        let data = await axios.delete(`${API_ENDPOINT}/task/${id}`)
        props.getTask()

        console.log(data)
    }

    return (
        <div id='task_list_div'>
            <div>
                <h4>{props.taskName ? props.taskName : 'no name'}</h4>
                <p>{props.date ? props.date : 'no date'}</p>
            </div>
            <div id='btn_div'>
                {props.isCompleted ? <button style={{ background: 'green' }} onClick={() => {
                    updateTask({ isCompleted: !props.isCompleted })
                }}>Done</button> : <button onClick={() => {
                    updateTask({ isCompleted: !props.isCompleted })
                }} style={{ background: 'red' }}>unDone</button>}


                <button onClick={deleteTask}>Delete</button>

            </div>
        </div>
    )
}

export default TaskList
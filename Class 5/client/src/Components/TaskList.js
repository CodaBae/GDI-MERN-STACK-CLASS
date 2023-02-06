const TaskList = (props) =>{
    return(
        <div id='task_list_div'>
            <div>
            <h4>{props.taskName ? props.taskName : 'no name'}</h4>
            <p>{props.date ? props.date : 'no date'}</p>
            </div>
            <div id='btn_div'>
                {props.isCompleted? <button style={{background:'green'}}>Done</button> : <button style={{background:'red'}}>Done</button>}
                <button>Delete</button>

            </div>
        </div>
    )
}

export default TaskList
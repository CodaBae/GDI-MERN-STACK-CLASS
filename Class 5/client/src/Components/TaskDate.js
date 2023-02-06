const TaskDate = () => {
    let today = new Date()
    let splitDate = today.toDateString().split(' ')

    let date = `${splitDate[0]} ${splitDate[2]}`
    let time = today.toLocaleTimeString()

    return(
        <div id='task_div'>
            <h6>{date}</h6>
            <h1>{time}</h1>
        </div>
    )
}

export default TaskDate
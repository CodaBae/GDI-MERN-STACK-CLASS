import axios from 'axios'

const CreateTask = (props) => {
    const API_ENDPOINT = props.API_ENDPOINT

    let today = new Date()
    let splitDate = today.toDateString().split(' ')

    let date = `${splitDate[0]} ${splitDate[2]}`

    const postTask = async (task) => {
        try {
            let data = await axios.post(`${API_ENDPOINT}/task`, task)
            props.getTask()
            console.log(data)
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            postTask({ name: event.target.name.value, date: date, isCompleted: false })
            event.target.name.value = ''
        }}>
            <input name='name' type='text' />
            <button>add</button>
        </form>
    )
}

export default CreateTask
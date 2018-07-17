import React, { Component } from "react"
import Task from "./Task"


export default class TaskList extends Component {
    state = {
        tasks: []
    }

    deleteTask = (taskId) => {
        // Delete the specified task from the API
        fetch(`http://localhost:5002/tasks/${taskId}`, {
            method: "DELETE"
        })
        // When DELETE is finished, retrieve the new list of tasks
        .then(() => {
            // Remember you HAVE TO return this fetch to the subsequenet `then()`
            return fetch("http://localhost:5002/tasks")
        })
        // Once the new array of tasks is retrieved, set the state
        .then(a => a.json())
        .then(taskList => {
            this.setState({
                tasks: taskList
            })
        })
    }

    // componentDidMount () {
    //     fetch("http://localhost:5002/tasks")
    //     .then(e => e.json())
    //     .then(tasks => 
    //         console.log("fetching tasks", tasks)
    //         ,this.setState({ tasks: tasks }))
    // }

    taskFormInput = (event) => {
        const stateToChange = {}
            stateToChange[event.target.id] = event.target.value
            console.log("stateToChange", stateToChange)
            this.setState(stateToChange)
            // console.log("this.state", this.state)
    }

    addTask (event){
        event.preventDefault()
        const newObject = {name: this.state.name, dueDate: this.state.dueDate}
        fetch("http://localhost:5002/tasks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newObject)
        })
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.addTask.bind(this)}>
                <h1 className="h3 mb-3 font-weight-normal">Task List</h1>
                <label htmlFor="TaskName">
                    Task Name
                </label>
                <input onChange={this.taskFormInput} type="text"
                       id="TaskName"
                       placeholder="Task Name"
                       required="" autoFocus="" />
                <label htmlFor="DueDate">
                    Expected Completion Date
                </label>
                <input onChange={this.taskFormInput} type="text"
                       id="DueDate"
                       placeholder="Due Date"
                       required="" />
                <button type="submit">
                    Add Task
                </button>
            </form>
                {
                    this.state.tasks.map(task =>
                        <Task key={task.id} task={task} deleteTask={this.deleteTask}>
                            {task.name}
                        </Task>
                    )
                }
            </React.Fragment>
        )
    }
}
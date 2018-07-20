import React, { Component } from "react"
import Task from "./Task"
import Database from "../APIManager"


export default class TaskList extends Component {
    state = {
        tasks: [],
        tasksToEdit: {}
    }
    // getting all tasks that read as "false", setting the state
    componentDidMount() {
        Database.getAllTasks()
            .then(tasks => this.setState({ tasks: tasks }))
    }
    //checking to see if the state has changed
    taskFormInput = (event) => {
        const stateToChange = {}
        console.log("stateToChange", stateToChange)
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
        console.log(event, "event")
    }
    //passing in id, getting tasks and setting state
    completeTask = (passingIn) => {
        console.log(Database.updateOneItem)
        Database.updateOneItem(passingIn)
            .then((gettingTasks) => {
                console.log(gettingTasks, "getting tasks")
                Database.getAllTasks()
                    .then(tasks => this.setState({ tasks: tasks }))

            })
    }
    // posting tasks to the dom
    addTask(event) {
        event.preventDefault()
        const newObject = { name: this.state.TaskName, DueDate: this.state.DueDate, completed: false }
        console.log("event", event)
        console.log("newObject", newObject)
        fetch("http://localhost:5002/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newObject)
        })
            // When POST is finished, retrieve the new list of tasks
            .then(() => {
                Database.getAllTasks()
                    .then(tasks => this.setState({ tasks: tasks }))

            })
    }
    // edit button

    handleEdit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:5002/tasks/${this.state.tasksToEdit.id}`, {
            method: "PUT",
            body: JSON.stringify(this.state.tasksToEdit),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => { return fetch("http://localhost:5002/tasks") })
            .then(a => a.json())
            .then(TaskList => {
                this.setState({
                    tasks: TaskList
                })
            })
    }

    EditTask = (taskId) => {
        console.log("taskId", taskId)
        // Delete the specified animal from the API
        fetch(`http://localhost:5002/tasks/${taskId}`)

            // Once the new array of animals is retrieved, set the state
            .then(a => a.json())
            .then(TaskList => {
                console.log(TaskList, "tasklist")
                this.setState({
                    tasksToEdit: TaskList
                })
            })
    }
    //checking to see if the state has changed
    taskFormInput = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        // console.log("stateToChange", stateToChange)
        this.setState(stateToChange)
        // console.log("this.state", this.state)
    }
    handleFieldChange = (event) => {
        const stateToChange = this.state.tasksToEdit
        console.log(stateToChange, "state to change")
        stateToChange[event.target.id] = event.target.value
        console.log(stateToChange, "State to change 2")
        this.setState({ tasksToEdit: stateToChange })
    }

    // creating the form
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
                        <Task key={task.id} task={task} completeTask={this.completeTask} EditTask={this.EditTask}>
                            {task.name}
                        </Task>

                    )
                }
                {
                    (
                        <form onSubmit={this.handleEdit.bind(this)}>
                            <input onChange={this.handleFieldChange} type="text"
                                id="name"
                                placeholder="Edit Message"
                                value={this.state.tasksToEdit.name}
                                required="" autoFocus="" />
                            <button type="submit">
                                Update
                        </button>
                        </form>
                    )
                }
            </React.Fragment>
        )
    }
}
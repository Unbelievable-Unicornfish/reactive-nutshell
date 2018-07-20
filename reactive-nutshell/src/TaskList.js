import React, { Component } from "react"
import Task from "./Task"
import Database from "./APIManager"


export default class TaskList extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        Database.getAllTasks()
            .then(tasks => this.setState({ tasks: tasks }))
    }
    //checking to see if the state has changed
    taskFormInput = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        console.log("stateToChange", stateToChange)
        this.setState(stateToChange)
    }

    completeTask = (passingIn) => {
        console.log(Database.updateOneItem)
        Database.updateOneItem(passingIn)
            .then((gettingTasks) => {
                console.log(gettingTasks, "getting tasks")
                Database.getAllTasks()
                .then(tasks => this.setState({ tasks: tasks }))
               
            })
        
    }

    addTask(event) {
        event.preventDefault()
        const newObject = { name: this.state.TaskName, DueDate: this.state.DueDate, completed: false}
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
                        <Task key={task.id} task={task} completeTask={this.completeTask}>
                            {task.name}
                        </Task>
                    )
                }
            </React.Fragment>
        )
    }
}
import React, { Component } from "react"
import Task from "./Task"
import Database from "../APIManager"
import { FormControl, FormGroup, ControlLabel } from "../../node_modules/react-bootstrap";


export default class TaskList extends Component {
    state = {
        tasks: [],
        tasksToEdit: {},
        loadingInitialTasks: {}
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
    // edit button calling event handler

    handleEdit = (event) => {
        const eventList = this.state.tasksToEdit
        event.preventDefault()
        console.log(this.state.tasksToEdit,"tasks")
        Database.handleEdit(eventList)
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

            // Once the new array is retrieved, set the state
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
        this.setState(stateToChange)
    }
    handleFieldChange = (event) => {
        const stateToChange = this.state.tasksToEdit
        stateToChange[event.target.id] = event.target.value
        this.setState({ tasksToEdit: stateToChange })
    }

    // creating the form
    render() {
        return (
            <div className="task">
                <form onSubmit={this.addTask.bind(this)}>
                    <h1 id="task-title" className="h3 mb-3 font-weight-normal">Task List</h1>
                    <label htmlFor="TaskName">
                        Task Name:
                </label>
                <FormGroup>
                    <FormControl onChange={this.taskFormInput} type="text"
                        id="TaskName"
                        placeholder="Task Name"
                        required="" autoFocus="" />
                        </FormGroup>
                    <ControlLabel htmlFor="DueDate">
                        Expected Completion Date:
                </ControlLabel>
                <FormGroup>
                    <FormControl onChange={this.taskFormInput} type="text"
                        id="DueDate"
                        placeholder="Due Date"
                        required="" />
                        </FormGroup>
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
                
    {/* creating edit message field/submit button          */}
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

            </div>


        )
    }
}
import { Route } from "react-router-dom";
import React, { Component } from "react";
import Login from "./Login"
import App from "./App"


export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (

            <React.Fragment>
                <Route exact path="/" render={props => {
                    if (this.isAuthenticated()) {
                        return <App />
                        
                    } else {
                        return <Login{...props}/>
                    }
                }} />
                <Route path="/App" component={App} />
            </React.Fragment>
        )
    }
}

{/* <Route path="/locations/:locationId" render={(props) => {
    return <Location location={props.location.state.location} />
  }} /> */}
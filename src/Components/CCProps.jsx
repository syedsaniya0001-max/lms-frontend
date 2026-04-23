import React from "react";
import { Component } from "react";
class Props2 extends Component{
    render(){
        return(
            <>
            <h1>Name is {this.props.name}</h1>
            <h1>Age is{this.props.age}</h1>
            </>


        )
    }
}
export default Props2
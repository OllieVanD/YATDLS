import React, {Component} from "react"

class YATDL extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: "",
        message: ""}
    }

    addMessage = (item) => {
        this.setState({message: item.target.value})
    }
    
    addToList = () => {
        this.setState({list: this.state.message})
    }


    strikeFromList= () => {}

    clearList= () => {}

    render(){

        return(
        <div>
            <h1>Yet Another Todo List</h1>
            <input type="string" placeholder="Enter your tasks here" onChange ={event => this.addMessage(event)}></input>
            <button onClick={this.addToList}>Add</button>
            <p onClick={this.clearList}>clear</p>
            <p>{this.state.list}</p>

        </div>

        )
    }

}

export default YATDL
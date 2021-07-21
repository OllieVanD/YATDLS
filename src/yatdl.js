 import React, {Component} from "react"


 class YATDL extends Component{
    constructor(props){
        super(props)
        this.state = {list: [],
        message : ""};
    }
  

    addMessage = (item) => {
        this.setState({message: item.target.value})
        
    }
    
    addToList = () => {
        this.setState(prevState => ({list: [...prevState.list, this.state.message]}))//this.state.message  //[...prevState.list, this.input]
        document.getElementById("input").value="";
    }

    clearList= () => {
        this.setState({list: []})
    };
 
    crossLine = event => {
        const element = event.target;
        element.classList.toggle("crossed-line");
    };


    render(){

        return(
        <div>
            <h1>Yet Another To Do List</h1>
            <div id="formBox" >
                <input id="input"placeholder="Enter your tasks here" onChange ={event => this.addMessage(event)}></input>
                <button onClick={this.addToList}>Add</button>
            </div>
            <div id="itemArea">
                {this.state.list.map((item, index ) => <li onClick={this.crossLine} key ={index}>{item} </li>)}
            </div>
            <p id="clearButton" onClick={this.clearList} onMouseOver={({target})=>target.style.color="gray"} onMouseOut={({target})=>target.style.color="white"}>clear</p>
        </div>   

        )
    }

}

export default YATDL
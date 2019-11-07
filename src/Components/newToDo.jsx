import React, { Component } from 'react';
import "../bootstrap.css";
class ToDoApp extends Component {
    state = { 
        value:"",
        toDoItem:[],
     }
    onChangeHandeler(e){
        let value=e.target.value;
        this.setState({
            value:value,
        })
        // console.log(this.state.value)

    }
    addItem(e){
        let value=this.state.value //jo bhe value user ny input ke wo lai aaiga
        console.log(value)
        let toDoItem=this.state.toDoItem;
        toDoItem.push(value);
        console.log(toDoItem);
        this.setState(e.target.value.length>0?{
            value:"",
            toDoItem:toDoItem,
        }: null)
        console.log(this.state.toDoItem)
       
    }
    deletItem(){
        let toDoItem=this.state.toDoItem
        toDoItem.pop()
        console.log(toDoItem);
        this.setState({
            value:"",
            toDoItem:toDoItem,
        })
    }
    render() { 
        return ( 
            <div className="mainDiv App">
                <div className="Header">To Do list App</div>
                <div className="Body"></div>
                <div className="Footer">
                    <input type="text" value={this.state.value} onChange={this.onChangeHandeler.bind(this)} className="form-control-sm  "/>
                    <br/>
                    <p>{this.state.toDoItem.map(list=><span key={list+Math.random()}>{list}<button onClick={this.deletItem.bind(this)}>-</button><br/></span>)}</p>
                    <button className="btn btn-success" onClick={this.addItem.bind(this)}>Add</button>
                </div>
            </div>
         );
    }
}
 
export default ToDoApp;
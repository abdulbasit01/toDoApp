import React, { Component } from 'react'

class toDoList extends Component {
    state={
        userInput:"",
        list:[],
    }
    userInput(input){
        this.setState({
            userInput:input,
        },()=>{console.log(input)})
    }
    addList(){
        this.setState(previousVal=>{
            return{
                userInput:"",
                list:previousVal.list.concat(previousVal.userInput),
                
            }
        })
    }
    style={
        listStyleType:"none"
    }
    // updateInput(key,value){
    //     this.setState({
    //         [key]:value,
    //     })
    // }
    // // addList(){
    // // //     const userInput={
    // // //         id:1+Math.random(),
    // // //         value:this.state.userInput.slice(),
    // // //     }
    // // //     const list=[...this.state.list]
    // // //     list.push(userInput);
    // // //     console.log(list)
    // // //     this.setState({
    // // //         list,
    // // //         userInput:"",
    // // //     })
    // // // }
    remove=()=>{
        const listNew=this.state.list
        const list=[...listNew]
        const nList=list.pop()
        this.setState({
            list:nList,
        })
        console.log(this.state.list);
    }
    render() {
        return (
            <div>
               <input value={this.state.userInput} onChange={(e)=>{this.userInput(e.target.value)}}/>
               <button onClick={this.addList.bind(this)}>Add To Do List</button>
              
               <ul style={this.style}>
                   {this.state.list.map(list=>(<li onClick={} key={list}>{list}<button> X</button></li>))}
               </ul>

            </div>
        )
    }
}

export default toDoList

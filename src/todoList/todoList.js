import "./todoList.css";
import React from "react";
import moment from "moment";
import Todos from "../listItem/listItem";

class Todo extends React.Component{
  constructor(){
    super();
    this.state = {
      todos: [
        { id:0, content: "read a book", isdone: false },
        { id:1, content: "buy milk", isdone: false }
      ],
      input: ""
    };
    this.changeIsDone = this.changeIsDone.bind(this);
    this.handleList = this.handleList.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  changeIsDone(key){
    this.setState(state => ({
      todos: state.todos.map(
      item => (item.id === key ? Object.assign(item, { isdone: !state.isdone }) : item)
    )
  }));
}

  handleList(e){
    this.setState({ input: e.target.value });
  }

  addItem(){
    if(this.state.input){
      this.setState({
        todos: [
          ...this.state.todos,
          {
            content: this.state.input,
            id: 2,
            isdone:false
          }
        ],
        input:"qaw"
      });
    }
  }



  render(){

    return (
      <div className = "wrapper">
        <div className = "date">
          <div className = "yearDayMonth">
            <div className = "day">{moment().format("D")}</div>
            <div className = "yearMonth">
              <div>{moment().format("MMM")}</div>
              <div className = "year">{moment().format("YYYY")}</div>
            </div>
          </div>
          <div className = "nameOfDay">{moment().format("dddd")}</div>
        </div>
        <Todos todosList = {this.state.todos}
          changeIsDone = {this.changeIsDone}
        />
        <input type = "text"
        placeholder = "...write todo"
        className = "inputTodo"
        value = {this.state.input}
        onChange = {this.handleList}
        ></input>
        <div className = "addbtnwrap">
          <button className = "addbtn" onClick = {this.addItem}>+</button>
        </div>
        
      </div>
    );
  }
}


export default Todo;




// this.setState(state => {
//   let todos = state.todos.forEach(item => {
//     if(key === item.id){
     
//     }
//   });
//   return { ...todos, };
// });
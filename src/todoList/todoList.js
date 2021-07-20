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
      ]
    };
    this.changeIsDone = this.changeIsDone.bind(this);
  }

  changeIsDone(key){
    this.setState(state => ({
      todos: state.todos.map(
      item => (item.id === key ? Object.assign(item, { isdone: "!isdone" }) : item)
    )
  }));
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
        <input type = "text" placeholder = "...write todo" className = "inputTodo"></input>
        <div className = "addbtnwrap">
          <button className = "addbtn">+</button>
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
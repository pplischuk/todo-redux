import "./todoList.css";
import React from "react";
import moment from "moment";
import ListItemContainer from "../../containers/listItemContainer";

class Todo extends React.Component{
  constructor(props){
    super(props);
    // this.changeIsDone = this.changeIsDone.bind(this);
    this.handleList = this.handleList.bind(this);
    this.addItem = this.addItem.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
  }

  handleList(e){
    this.props.handleList(e.target.value);
  }

  addItem(){
    this.props.addItem.content = this.props.input;
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
        <ListItemContainer/>
        <input type = "text"
        placeholder = "...write todo"
        className = "inputTodo"
        value = {this.props.input}
        onChange = {this.handleList}
        ></input>
        <div className = "addbtnwrap">
          <button className = "addbtn" onClick = { this.props.addItem }>+</button>
        </div>
      </div>
    );
  }
}

export default Todo;
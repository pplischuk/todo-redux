import "./todoList.css";
import React from "react";
import moment from "moment";
import ListItemContainer from "../../containers/listItemContainer";

class Todo extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        content: "",
    };
  }

  handleInput = e => {
    this.setState({ content: e.target.value });
  }

  addItem = () => {
    const objNewTodo = {
      content: this.state.content,
      id: Date.now(),
    };

    this.state.content.length > 3 ?
    this.props.addItem(objNewTodo):
    alert("must be more then 3 symbols");
    this.setState({ content: "" });
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
          value={this.state.content}
          placeholder = "...write todo"
          className = "inputTodo"
          onChange = {this.handleInput}
        ></input>
        <div className = "addbtnwrap">
          <button className = "addbtn" onClick = {this.addItem}>+</button>
        </div>
      </div>
    );
  }
}

export default Todo;
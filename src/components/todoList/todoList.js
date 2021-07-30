import "./todoList.css";
import React from "react";
import moment from "moment";
import Todos from "../listItem/listItem";

class Todo extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   id:0,
    //   todos: [],
    //   input: ""
    // };
    // this.changeIsDone = this.changeIsDone.bind(this);
    this.handleList = this.handleList.bind(this);
    // this.addItem = this.addItem.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
  }

  // changeIsDone(key){
  //   this.setState(state => ({
  //     todos: state.todos.map(
  //     item => (item.id === key ? Object.assign(item, { isdone: !state.isdone }) : item)
  //   )
  // }));
  // }

  // deleteItem(key){
  //   this.setState(state => {

  //     return {
  //       id: state.id - 1,
  //       todos: state.todos.filter(item => item.id !== key)
  //     };
  //   });
  // }

  handleList(e){
    this.props.handleList(e.target.value);
  }



  // addItem(){
  //   if(this.state.input){
  //     this.setState(state => {

  //       return{
  //         id: state.id + 1,
  //         todos: [
  //           ...this.state.todos,
  //           {
  //             content: this.state.input,
  //             id: state.id,
  //             isdone:false
  //           }
  //         ],
  //         input:""
  //       };
  //     });
  //   }
  // }

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
        <Todos/>
        <input type = "text"
        placeholder = "...write todo"
        className = "inputTodo"
        value = {this.props.input}
        onChange = {this.handleList}
        ></input>
        <div className = "addbtnwrap">
          <button className = "addbtn">+</button>
        </div>
      </div>
    );
  }
}

export default Todo;
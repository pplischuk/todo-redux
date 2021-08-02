import React from "react";
import { connect } from "react-redux";
import { addItem } from "../store/actions";
import Todo from "../components/todoList/todoList";

class TodoContainer extends React.Component{
  constructor(){
    super();
  }

  render(){

    return (
      <Todo addItem = { this.props.addItem } />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: payload => dispatch(addItem(payload)),
});

export default connect(null, mapDispatchToProps)(TodoContainer);
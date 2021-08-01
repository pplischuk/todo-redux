import React from "react";
import { connect } from "react-redux";
import { handleList, addItem } from "../store/actions";
import Todo from "../components/todoList/todoList";

class TodoContainer extends React.Component{
  constructor(){
    super();
  }

  render(){

    return (
      <Todo
      handleList = {this.props.handleList}
      input = {this.props.input}
      addItem = { this.props.addItem }
      />
    );
  }
}

const mapStateToProps = state => {
	return {
		input: state.input
	};
};

const mapDispatchToProps = {
	handleList,
  addItem
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
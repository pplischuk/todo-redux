import React from "react";
import { connect } from "react-redux";
import Todos from "../components/listItem/listItem";
import { changeIsDone, deleteItem } from "../store/actions";

class ListItemContainer extends React.Component{
  constructor(){
    super();
  }

  toggleIsDone = todoId => {
    const { todos } = this.props;
    todos.forEach(item => {
      if (item.id === todoId) item.isdone = !item.isdone;
    });

    this.props.changeIsDone(todos);
  }

  deleteItem = todoId => {
    const { todos } = this.props;
    const filteredTodos = todos.filter(item => item.id !== todoId);

    this.props.deleteItem(filteredTodos);
  }

  render(){

    return (
      <Todos todos = {this.props.todos}
        changeIsDone = { this.toggleIsDone }
        deleteItem = { this.deleteItem }
      />
    );
  }
}

const mapStateToProps = state => {

	return {
		todos: state.reducers.todos
	};
};

const mapDispatchToProps = {
  changeIsDone,
  deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItemContainer);
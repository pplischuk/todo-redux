import React from "react";
import { connect } from "react-redux";
import Todos from "../components/listItem/listItem";
import { changeIsDone } from "../store/actions";

class ListItemContainer extends React.Component{
  constructor(){
    super();
  }

  toggleIsDone = todoId => {
    console.log(todoId);
    const { todos } = this.props;
    todos.forEach(item => {
      if (item.id === todoId) item.isdone = !item.isdone;
    });

    this.props.changeIsDone(todos);
  }


  render(){

    return (
      <Todos todos = {this.props.todos}
        changeIsDone = { this.toggleIsDone }
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
  changeIsDone
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItemContainer);
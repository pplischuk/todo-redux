import React from "react";
import { connect } from "react-redux";
import Todos from "../components/listItem/listItem";
import { changeIsDone } from "../store/actions";

class ListItemContainer extends React.Component{
  constructor(){
    super();
  }

  render(){

    return (
      <Todos todos = {this.props.todos}
        changeIsDone = { this.props.changeIsDone }
      />
    );
  }
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

const mapDispatchToProps = {
  changeIsDone
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItemContainer);
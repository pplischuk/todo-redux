import React from "react";
import { connect } from "react-redux";
import Todos from "../components/listItem/listItem";

class ListItemContainer extends React.Component{
  constructor(){
    super();
  }

  render(){

    return (
      <Todos todos = {this.props.todos}/>
    );
  }
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps)(ListItemContainer);
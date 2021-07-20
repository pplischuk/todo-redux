import React from "react";
import "./listItem.css";


class Todos extends React.Component{
	constructor(props){
		super(props);

		this.list = this.list.bind(this);
	}

	list(a){
			if(a.todosList && a.todosList.length){
			return a.todosList.map(todo => (
					<div className = "listItemWrapper" key = {todo.id}>
						<span className = {todo.isdone ? "listItem_done" : "listItem"}>{todo.content}</span>
						<button onClick = {() => {
						this.props.changeIsDone(todo.id);
					}} className = {todo.isdone ? "btn_done" : "btn"}></button>
					</div>
				));
		}
	}
	
	render(){
		return(
			<div className = "todosItem">
				{this.list(this.props)}
			</div>
			);
	}
}

export default Todos;
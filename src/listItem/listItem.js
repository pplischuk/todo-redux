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
						<span className = "listItem">{todo.content}</span>
						<button className = "btn"></button>
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
import React from "react";

class Todos extends React.Component{
	constructor(props){
		super(props);

		this.list = this.list.bind(this);
	}

	list(a){
			if(a.todosList && a.todosList.length){
			return a.todosList.map(todo => (
					<div key = {todo.id}>
						<span>{todo.content}</span>
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
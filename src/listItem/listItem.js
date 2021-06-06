import React from "react";

class Todos extends React.Component{
	constructor(props){
		super(props);

		this.list = this.list.bind(this);
	}

	list(props){
		if(props.length){
			props.map(todo => {
				<div key = {todo.id}>
					<span>{todo.content}</span>
				</div>;
			});
		} else {
			<p>u`ve not any todo</p>;
		}
	}
	
	render(){
		return(
			<div className = "todosItem">
				{this.list()}
			</div>
			);
	}
}
export default Todos;
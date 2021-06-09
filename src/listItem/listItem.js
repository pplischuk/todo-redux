import React from "react";
import "./listItem.css";

class Todos extends React.Component{
	constructor(props){
		super(props);

		this.list = this.list.bind(this);
	}

	list(a){
			console.log(this.props);
			if(a.todosList && a.todosList.length){
			return a.todosList.map(todo => (
					<div className = "listItemWrapper" key = {todo.id}>
						<span className = "listItem">{todo.content}</span>
						<button onClick = {() => {
							this.props.changeIsDone ;
						}} className = "btn"></button>
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
import React from "react";

const Todos = ({ todos }) => {
	const list = todos.lenght ? (
		todos.map(todo => {
			return (
				<div key = {todo.id}>
					<span>{todo.content}</span>
				</div>
			);
		})
	) : (
		<span>u haven`t any todo</span>
	);
	return(
	<div className = "todosItem">
		{list}
	</div>
	);
};
export default Todos;
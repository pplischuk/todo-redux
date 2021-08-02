import { HANDLE_LIST_ITEM, ADD_ITEM, CHANGE_IS_DONE } from "./constans";

const initialState = {
	id:0,
	todos: [],
	input: ""
};

const reducers = (state = initialState, action) => {
	console.log(state);
	switch(action.type){
		case HANDLE_LIST_ITEM:
			return {
				...state,
				input:action.payload
			};
		case ADD_ITEM:
			console.log(action);
			return{
				...state,
				todos: [
					...state.todos,
					{
						id: action.id,
						content: state.input,
						isdone: false
					}
				],
				input: ""
			};
		case CHANGE_IS_DONE:
			console.log(state.todos, "id");
			state.todos.map(item => {
				if(item.id == action.id){
					return {
						...state,
						todos:[
							item.isdone = !item.isdone
						]
					};
				}
			});
	}

	return state;
};

export default reducers;
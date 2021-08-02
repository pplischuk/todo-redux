import { HANDLE_LIST_ITEM, ADD_ITEM, CHANGE_IS_DONE } from "./constans";

const initialState = {
	id:0,
	todos: [],
	input: ""
};

const reducers = (state = initialState, action) => {

	switch(action.type){
		case HANDLE_LIST_ITEM:
			return {
				...state,
				input:action.payload
			};
		case ADD_ITEM:

			return{
				...state,
				todos: [
					...state.todos,
					{
						id: action.payload.id,
						content: action.payload.content,
						isdone: false
					}
				]
			};
		case CHANGE_IS_DONE:
			return {
				...state,
				todos:[...action.payload]
			};
	}

	return state;
};

export default reducers;
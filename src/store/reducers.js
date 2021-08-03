import { HANDLE_LIST_ITEM, ADD_ITEM, CHANGE_IS_DONE, DELETE_ITEM } from "./constans";

const initialState = {
	todos: [],
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

		case DELETE_ITEM:
			return {
				...state,
				todos:[...action.payload]
			};
	}

	return state;
};

export default reducers;
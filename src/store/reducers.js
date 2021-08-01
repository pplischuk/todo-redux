import { HANDLE_LIST_ITEM, ADD_ITEM } from "./constans";

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
	}

	return state;
};

export default reducers;
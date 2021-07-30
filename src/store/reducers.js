import { HANDLE_LIST_ITEM } from "./actions";

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
	}

	return state;
};

export default reducers;
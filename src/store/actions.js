import { HANDLE_LIST_ITEM, ADD_ITEM, CHANGE_IS_DONE } from "./constans";

export const handleList = text => ({
	type: HANDLE_LIST_ITEM,
	payload: text
});

export const addItem = payload => {
	console.log(payload);

	return {
		type: ADD_ITEM,
		payload: payload,
	};
};

export const changeIsDone = payload =>({
	type: CHANGE_IS_DONE,
	payload,
});
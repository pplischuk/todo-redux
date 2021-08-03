import { HANDLE_LIST_ITEM, ADD_ITEM, CHANGE_IS_DONE, DELETE_ITEM } from "./constans";

export const handleList = text => ({
	type: HANDLE_LIST_ITEM,
	payload: text
});

export const addItem = payload => {
	console.log(payload);

	return {
		type: ADD_ITEM,
		payload,
	};
};

export const changeIsDone = payload =>({
	type: CHANGE_IS_DONE,
	payload,

});export const deleteItem = payload =>({
	type: DELETE_ITEM,
	payload,
});
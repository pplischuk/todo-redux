export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const HANDLE_LIST_ITEM = "HANDLE_LIST_ITEM";
export const CHANGE_IS_DONE = "CHANGE_IS_DONE";

export const handleList = text => ({
	type: HANDLE_LIST_ITEM,
	payload: text
});
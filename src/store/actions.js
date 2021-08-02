let nextId = 0;

import { HANDLE_LIST_ITEM, ADD_ITEM, CHANGE_IS_DONE } from "./constans";

export const handleList = text => ({
	type: HANDLE_LIST_ITEM,
	payload: text
});

export const addItem = () => ({
	type: ADD_ITEM,
	id: nextId++,
});

export const changeIsDone = (id) =>({
	type: CHANGE_IS_DONE,
	id
});
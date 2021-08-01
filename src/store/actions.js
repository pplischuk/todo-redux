let nextId = 0;

import { HANDLE_LIST_ITEM,ADD_ITEM } from "./constans";

export const handleList = text => ({
	type: HANDLE_LIST_ITEM,
	payload: text
});

export const addItem = () => ({
	type: ADD_ITEM,
	id: nextId++,
});


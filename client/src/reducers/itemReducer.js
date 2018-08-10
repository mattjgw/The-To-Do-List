import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
	items: [
		{ id: uuid(), name: 'Wake up'},
		{ id: uuid(), name: 'Brush teeth'},
		{ id: uuid(), name: 'Eat breakfast'},
		{ id: uuid(), name: 'Go to school'},
		]
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_ITEMS:
			return {
				...state
			}
		default:
			return state;
	}
}
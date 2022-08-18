import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => {
	return {
		todos: [],
		addTodo: name => {
			set(state => {
				return {todos: [...state.todos, {name, id: nanoid()}]};
			});
		},
	};
});

export default useStore;

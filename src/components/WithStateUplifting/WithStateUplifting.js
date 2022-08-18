import {nanoid} from 'nanoid';
import {useState} from 'react';

import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

export default function WithStateUplifting() {
	const [todos, setTodos] = useState([]);

	function addTodo(name) {
		setTodos([
			...todos,
			{
				id: nanoid(),
				name,
			},
		]);
	}

	return (
		<>
			<h2>With State Uplifting</h2>
			<Form onSubmit={addTodo} />
			<TodoList todos={todos} />
		</>
	);
}

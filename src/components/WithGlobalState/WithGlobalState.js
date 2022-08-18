import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

export default function WithGlobalState() {
	return (
		<>
			<h2>With global state</h2>
			<Form />
			<TodoList />
		</>
	);
}

import useStore from '../../../hooks/useStore';
import TodoItem from '../../TodoItem/TodoItem';

export default function TodoList() {
	const todos = useStore(state => state.todos);

	return (
		<ul>
			{todos.map(todo => (
				<TodoItem name={todo.name} key={todo.id} />
			))}
		</ul>
	);
}

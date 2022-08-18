import TodoItem from '../../TodoItem/TodoItem';

export default function TodoList({todos}) {
	return (
		<ul>
			{todos.map(todo => (
				<TodoItem name={todo.name} key={todo.id} />
			))}
		</ul>
	);
}

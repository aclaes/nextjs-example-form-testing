import useStore from '../../../hooks/useStore';

export default function Form() {
	const addTodo = useStore(state => state.addTodo);

	function handleSubmit(event) {
		event.preventDefault();

		addTodo(event.target.elements.todo.value);

		event.target.reset();
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Todo:
					<input required type="text" name="todo" />
				</label>
				<button type="submit">add</button>
			</form>
		</>
	);
}

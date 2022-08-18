export default function Form({onSubmit}) {
	function handleSubmit(event) {
		event.preventDefault();

		onSubmit(event.target.elements.todo.value);

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

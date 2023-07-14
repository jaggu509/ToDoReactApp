export default function TodoItem({
	completed,
	title,
	id,
	toggleTodo,
	deleteTodo,
}) {
	return (
		<li className="todo-item" key={id}>
			<input
				onChange={(e) => toggleTodo(id, e.target.checked)}
				type="checkbox"
				id="checkbox-item"
				checked={completed}
			/>
			{title}
			<button
				onClick={(e) => deleteTodo(id)}
				type="button"
				className="btn btn-delete"
			>
				Delete
			</button>
		</li>
	);
}

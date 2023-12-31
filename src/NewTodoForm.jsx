import { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
	const [newItem, setNewItem] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		newItem === "" ? alert("Please enter something") : onSubmit(newItem);

		setNewItem("");
	}

	return (
		<form onSubmit={handleSubmit} className="new-item-form">
			<div className="form-row">
				<label htmlFor="item">New Item</label>
				<input
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
					type="text"
					id="item"
				/>
				<button className="btn btn-add">Add</button>
			</div>
		</form>
	);
}

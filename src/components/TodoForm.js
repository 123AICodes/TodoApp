import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {

	const [value, setValue] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(value);
		setValue("");
	}

	return (
		<form className='todo-form' onSubmit={handleSubmit}>
			<input type='text' className='todo-input' placeholder='What is the task today?'
				onChange={(e) => setValue(e.target.value)} value={value} />
			<button type="submit" className="todo-btn">Add Task</button>
		</form>
	)
}

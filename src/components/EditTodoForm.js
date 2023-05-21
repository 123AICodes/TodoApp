import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {

	const [value, setValue] = useState(task.task);
	const handleSubmit = (e) => {
		e.preventDefault();
		editTodo(value, task.id);
		setValue("");
	}

	return (
		<form className='todo-form' onSubmit={handleSubmit}>
			<input type='text' className='todo-input' placeholder='Update your task'
				onChange={(e) => setValue(e.target.value)} value={value} />
			<button type="submit" className="todo-btn">Update Task</button>
		</form>
	)
}

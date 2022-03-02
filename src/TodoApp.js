import { useState } from 'react';

export const TodoApp = () => {
	const [todoInput, setTodoInput] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<>
			<input
				name='username'
				onChange={(event) => {
					setTodoInput(event.target.value);
				}}
				value={todoInput}
			/>
			<button
				onClick={() => {
					// console.log(todoInput);
					const newTodos = [...todos, todoInput];
					setTodos(newTodos);
					setTodoInput('');
				}}
			>
				Submit
			</button>
			{
				todos.length === 0 ?
					<h1>No todos yet</h1>
					:
					todos.map(todo => <p>{todo}</p>)
			}
		</>
	);
};

export default TodoApp;

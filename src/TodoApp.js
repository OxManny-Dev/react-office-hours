import { useState } from 'react';

export const TodoApp = () => {
	const [formInputs, setFormInputs] = useState({
		username: '',
		password: '',
	});
	const [todos, setTodos] = useState([]);
	return (
		<>
			<input
				name='username'
				onChange={(event) => {
					setFormInputs({
						...formInputs,
						username: event.target.value,
					});
				}}
				value={formInputs.username}
			/>
			<input
				name='password'
				onChange={(event) => {
					setFormInputs({
						...formInputs,
						password: event.target.value,
					});
				}}
				value={formInputs.password}
			/>
			<button
				onClick={() => {
					console.log(formInputs);
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

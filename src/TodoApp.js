import { useState, useEffect } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

import axios from 'axios';


export const TodoApp = () => {
	const [todoInput, setTodoInput] = useState('');
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading ] = useState(false);
	//Use useEffect is meant for making API requests to GET data and setting initial state
	// that's coming from a database or some 3rd party service
	// useEffect is all react life cycle methods in 1
	// by default useEffect behaves like componentDidMount
	// componentDidMount - After this component returns it's html, the function inside of useEffect will be called 1 time
	// or many times depending on the 2nd parameter
	// componentDidUpdate - 2nd parameter plays a big role here, if there's any elements in the array for the 2nd argument,
	// every time one of those elements in the array changes, the function in the 1st parameter gets called again
	// componentWillUnmount - A function to call when this component leaves the page
	//
	useEffect(() => {
		//	this is where we do our api fetching
		(async () => {
			setIsLoading(true);
			const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
			setTodos(data);
			setIsLoading(false);
		})();
		// if useEffect returns a function, that function will be called when this component
		//	leaves the page
		return () => {
			console.log('IM LEAVING THE PAGE');
			//	 we normally remove all of the subscriptions or events to listen for
			//	in the componentWillUnmount
		}
	}, []);

	return isLoading ?
		<div>
			<PacmanLoader
				size={30}
				margin={2}
			/>
		</div>
		:
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
					todos.map(todo => <p>{todo.title}</p>)
			}
		</>
};

export default TodoApp;

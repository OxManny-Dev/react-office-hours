import { Component } from 'react';

class TodoAppV2 extends Component {
	state = {
		todoInput: '',
		todos: [],
	}

	// Component will mount fires after constructor but before render
	// the react team recommended that we do all of our data fetching
	// inside of componentWillMount
	componentWillMount() {
		console.log('inside of component will mount');
	//	 make api requests here to update the state
	}

	// ! This gets called only once!!!!!
	// and it gets called after render is called
	// Now, this is the most recommended place to make api requests
	componentDidMount() {
		console.log('inside of component did mount');
	}


	handleSubmit = () => {
		const newTodo = {
			id: this.state.todos.length + 1,
			title: this.state.todoInput,
		};

		const newTodosState = [...this.state.todos, newTodo ];

		this.setState({
			todoInput: '',
			todos: newTodosState,
		});
	}

	handleChange = (event) => {
		this.setState({ ...this.state, todoInput: event.target.value });
	}

	render() {
		//every time state changes, render gets called again
		return (
			<>
				<input
					name='username'
					onChange={this.handleChange}
					value={this.state.todoInput}
				/>
				<button
					onClick={this.handleSubmit}
				>
					Submit
				</button>
				{
					this.state.todos.length === 0 ?
						<h1>No todos yet</h1>
						:
						this.state.todos.map(todo => <p>{todo.title}</p>)
				}
			</>
		)
	}

}

export default TodoAppV2;

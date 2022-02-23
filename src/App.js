import Counter from './Counter';
// A functional component
// components are functions that just
// returns HTML
// you can think of components as partials
const App = () => {
	return (
		<>
			<Counter/>
			<Counter/>
		</>
	);
};

export default App;

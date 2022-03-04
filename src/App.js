import Counter from './Counter';
import List from './List';
import TodoApp from './TodoApp';
import TodoAppV2 from './TodoAppV2';
// A functional component
// components are functions that just
// returns HTML
// you can think of components as partials
const App = () => {
	const myFaveFoods = [ "Oatmeal", 'Chicken', "Steak"];
	const myFaveCryptos = [ 'XRP', 'XLM', 'XDC'];
	const msg1 = 'My favorite foods are.'
	const msg2 = 'My favorite cryptos are.'
	return (
		// JSX Fragment
		<>
			<TodoApp/>
			<Counter/>
			<List
				myString='Manny is cool'
				isHungry={true}
				message={msg1}
				items={myFaveFoods}
				myObj={{
					name: 'manny',
					lastName: 'jucaban'
				}}
				clickMe={() => console.log('I was clicked')}
			/>
		</>
	);
};

export default App;

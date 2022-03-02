export const List = (props) => {

	return (
		<>
			<button onClick={props.clickMe}>ClickMe</button>
			<p>{props.message}</p>
			<ul>
				{ props.items.map(item => <li>{item}</li>) }
			</ul>
		</>
	);
};

export default List;

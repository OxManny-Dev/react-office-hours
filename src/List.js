export const List = (props) => {
	return (
		<>
			<p>{props.message}</p>
			<ul>
				{ props.items.map(item => <li>{item}</li>) }
			</ul>
		</>
	);
};
export default List;

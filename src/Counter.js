import { useState } from 'react';
export const Counter = () => {
	const [count, setCount ] = useState(0);
	return (
		<div>
			<p
				style={{
					color: count % 2 === 0 ? 'blue' : 'red',
					fontSize: '100px',
				}}
			>
				Count: {count}
			</p>
			<button
				onClick={() => setCount(count + 1)}
			>
				Increment
			</button>
			<button

				onClick={() => setCount(count - 1)}
			>
				Decrement
			</button>
		</div>
	);
};

export default Counter;


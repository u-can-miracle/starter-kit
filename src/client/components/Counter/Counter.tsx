import * as React from 'react'

const Counter = ({ counter, increaseCounter, reduceCounter }) =>
	(
		<div>
			<button
				onClick={increaseCounter}
			>
				increase count (+)
			</button>
			{counter}
			<button
				onClick={reduceCounter}
			>
				reduce count (-)
			</button>
		</div>
	)

export default Counter

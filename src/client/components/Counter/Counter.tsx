import * as React from 'react'

const Counter = ({
	counter,
	increaseCounter,
	reduceCounter,
	increaseCounterAsync,
	reduceCounterAsync,
}) =>
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
			<hr />
			<div>
			<button
				onClick={increaseCounterAsync}
			>
				increase async (+)
			</button>
			{counter}
			<button
				onClick={reduceCounterAsync}
			>
				reduce async (-)
			</button>
			</div>
		</div>
	)

export default Counter

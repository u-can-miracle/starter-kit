import { INCREASE_COUNTER, REDUCE_COUNTER } from './actions'

interface ICounter {
	value: number
}

const initialState: ICounter = {
	value: 0
}

export default function counterReducer(state = initialState, action): ICounter {
	switch (action.type) {
		case INCREASE_COUNTER:
			return {
				...state,
				value: ++state.value
			}

		case REDUCE_COUNTER:
			return {
				...state,
				value: --state.value
			}

		default:
			return state
	}
}

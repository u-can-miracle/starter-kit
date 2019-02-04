import { all } from 'redux-saga/effects'

import {
	watchAsyncIncrement,
	watchAsyncDecrement
} from './counter/saga'

export default function* rootSaga(){
	yield all([
		watchAsyncIncrement(),
		watchAsyncDecrement()
	])
}

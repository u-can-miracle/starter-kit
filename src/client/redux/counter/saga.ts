import { put, takeEvery, call, delay } from 'redux-saga/effects'

import {
	INCREASE_COUNTER_ASYNC,
	REDUCE_COUNTER_ASYNC,
	increaseCounter,
	reduceCounter,
} from './actions'

export function* asyncIncrement(){
	yield delay(2000)

	yield put(increaseCounter())
}
export function* watchAsyncIncrement(){
	yield takeEvery(INCREASE_COUNTER_ASYNC, asyncIncrement)
}

export function* asyncDecrement(){
	yield delay(2000)

	yield put(reduceCounter())
}
export function* watchAsyncDecrement(){
	yield takeEvery(REDUCE_COUNTER_ASYNC, asyncDecrement)
}

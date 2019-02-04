
import { connect } from 'react-redux'

import Counter from './Counter'
import {
	increaseCounter,
	reduceCounter,
	increaseCounterAsync,
	reduceCounterAsync,
} from '../../redux/counter/actions'
import { counterSelector } from '../../redux/counter/selectors'

const mapStateToProps = (state, props) => ({
	counter: counterSelector(state)
})

const mapDispatchToProps = (dispatch, props) => ({
	increaseCounter: () => dispatch(increaseCounter()),
	reduceCounter: () => dispatch(reduceCounter()),
	increaseCounterAsync: () => dispatch(increaseCounterAsync()),
	reduceCounterAsync: () => dispatch(reduceCounterAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

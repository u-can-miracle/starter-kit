
import { connect } from 'react-redux'

import Counter from './Counter'
import { increaseCounter, reduceCounter } from '../../redux/counter/actions'
import { counterSelector } from '../../redux/counter/selectors'

const mapStateToProps = (state, props) => ({
	counter: counterSelector(state)
})

const mapDispatchToProps = (dispatch, props) => ({
	increaseCounter: () => dispatch(increaseCounter()),
	reduceCounter: () => dispatch(reduceCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

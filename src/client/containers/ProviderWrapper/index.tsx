import * as React from 'react'
import { Provider } from 'react-redux'

import Counter from '../../components/Counter'
import getSingletoneStore from '../../redux/store/get-singletone-store'
import sagaMiddleware from '../../redux/middlewares/sagaMiddleware'
import rootSaga from '../../redux/rootSaga'

const store = getSingletoneStore()

sagaMiddleware.run(rootSaga)

const ProviderWrapper = () => (
	<Provider store={store}>
		<Counter />
	</Provider>
)

export default ProviderWrapper

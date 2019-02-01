import * as React from 'react'
import { Provider } from 'react-redux'

import Counter from '../../components/Counter'
import getSingletoneStore from '../../redux/store/get-singletone-store'

const store = getSingletoneStore()

const ProviderWrapper = () => (
	<Provider store={store}>
		<Counter />
	</Provider>
)

export default ProviderWrapper

import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import ProviderWrapper from '../ProviderWrapper'

const App = () => (
		<div>
			<h1>Hello, world. 123</h1>
			<ProviderWrapper />
		</div>
	)

export default hot(App)

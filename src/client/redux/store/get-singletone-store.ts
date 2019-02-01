import configureStore from './configureStore'
// import isBrowser from '../../services/isBrowser'

let store

function getSingletoneStore() {
	if (store) {
		return store
	}

	// if(isBrowser()){
	// 	const preloadedState = window.__INITIAL_STATE__
	// 	delete window.__INITIAL_STATE__
	//
	// 	store = configureStore(preloadedState)
	// } else {
	// 	store = configureStore()
	// }

	store = configureStore()

	return store
}

export default getSingletoneStore

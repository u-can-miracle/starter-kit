import * as express from 'express'

import expressConfig from './config'

const app = express()

expressConfig(app)

app.listen(3000, () => {
	// tslint:disable-next-line
	console.log('dev1.server starts')
})

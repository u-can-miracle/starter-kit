import * as express from 'express'
import * as webpack from 'webpack'
import * as bodyParser from 'body-parser'
// import proxyMiddlware from 'http-proxy-middleware'

import * as webpackDevMiddleware from 'webpack-dev-middleware'
import * as webpackHotMiddleware from 'webpack-hot-middleware'

// import config from './'
// import filterUrls from '../helpers/filterUrls'

// import throw error while compile
import * as webpackConfig from '../../webpack/webpack.config.dev'
// const webpackConfig = require('./webpack.config.dev')
const compiler = webpack(webpackConfig)

// const { client, api: { protocol, url, port } } = config

// const proxy = proxyMiddlware(
// 	filterUrls,
// 	{
// 		target: `${protocol}://${url}:${port}`,
// 		// changeOrigin: true, // needed for virtual hosted site
// 		router: {
// 			// when request.headers.host == 'dev.localhost:3000',
// 			// override target 'http://www.example.org' to 'http://localhost:8000'
// 			[`${client.protocol}://${client.url}:${client.port}`] : `${protocol}://${url}:${port}`
// 		}
// 	}
// )
export default function configExpressApp(app: express.Application) {
	// app.use(proxy)
	app.use(express.static('src/client')) // index
	app.use(express.static('dist/assets/')) // fonts
	app.use(express.static('dist/assets/favicons'))
	app.use(express.static('dist/')) // bundle

	app.use(bodyParser.json())

	// app.use(webpackDevMiddleware(compiler, {
	// 	noInfo: true,
	// 	publicPath: webpackConfig.output.publicPath
	// }))
	//
	// app.use(webpackHotMiddleware(compiler))

	app.use(webpackDevMiddleware(compiler, {
		// hot: true,
		// noInfo: true,
		publicPath: webpackConfig.output.publicPath,
		watchOptions: {
			aggregateTimeout: 750
		},
		// quiet: true
	}))

	app.use(webpackHotMiddleware(compiler, {
			log: false,
			heartbeat: 2000
		}
	))
}

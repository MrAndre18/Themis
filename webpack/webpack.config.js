// Libraries
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SVGSpriteMapPlugin = require('svg-spritemap-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const ImageMinMozJpeg = require('imagemin-mozjpeg');
// const PurgeCssPlugin = require('purgecss-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

// Files
const utils = require('./utils');
// const PATHS = {
// 	src: path.join(__dirname, '../src')
// };

// Configuration
module.exports = env => {
	return {
		context: path.resolve(__dirname, '../src'),
		entry: {
			app: './app.js'
		},
		output: {
			path: path.resolve(__dirname, '../dist'),
			publicPath: '',
			filename: 'assets/[name].js'
		},
		devServer: {
			contentBase: path.resolve(__dirname, '../src'),
			openPage: 'index',
		},
		devtool: (env.NODE_ENV === 'development') ? 'source-map' : false,
		resolve: {
			modules: [path.resolve(__dirname, '../src'), 'node_modules'],
			extensions: ['.js', '.css', '.scss'],
			alias: {
				Images: path.resolve(__dirname, '../src/assets/images'), // Relative path of images
				Styles: path.resolve(__dirname, '../src/assets/styles'), // Relative path of styles
				Scripts: path.resolve(__dirname, '../src/assets/scripts'), // Relative path of scripts
			}
		},

		performance: {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000
		},
		/*
      Loaders with configurations
    */
		module: {
			rules: [
				{
					test: /\.json$/,
					loader: 'json-loader'
				},
				{
					test: /\.js$/,
					exclude: [/node_modules/],
					use: [
						{
							loader: 'babel-loader',
							options: {presets: ['@babel/preset-env']}
						}
					]
				},
				{
					test: /\.css$/,
					use: [
						env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								sourceMap: true
							},
						},
					],
				},
				{
					test: /\.scss$/,
					use: [
						env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
						{loader: 'css-loader', options: {importLoaders: 1, sourceMap: true}},
						{
							loader: 'sass-loader',
							options: {
								sassOptions: {
									importer: globImporter()
								},
								webpackImporter: true
							}
						}
					]
				},
				{
					test: /\.pug$/,
					loaders: [
						'pug-loader',
						{
							loader: 'pug-html-loader',
							// options: {
							// 	data: {
							// 		menu: require('../src/views/data/menu.json'),
							// 		index: require('../src/views/data/index.json'),
							// 	}
							// }
						}
					]
				},
				{
					test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
					loaders: [
						{
							loader: 'url-loader',
							options: {
								limit: 3000,
								name: 'assets/images/[name].[hash:7].[ext]'
							}
						}
					]
				},
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 5000,
						name: 'assets/fonts/[name].[hash:7].[ext]'
					}
				},
			]
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					cache: true,
					parallel: true,
					sourceMap: true,
				}),
			],
			splitChunks: {
				cacheGroups: {
					default: false,
					vendors: false,
					// vendor chunk
					vendor: {
						filename: 'assets/vendor.js',
						// sync + async chunks
						chunks: 'all',
						// import file path containing node_modules
						test: /node_modules/
					},
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						enforce: true
					}
				}
			}
		},

		plugins: [
			new CopyWebpackPlugin({
				patterns: [
					{from: 'assets/images/favicons/favicon.svg', to: 'assets/favicon.svg'},
					{from: 'assets/images', to: 'assets/images'},
					{from: 'assets/fonts', to: 'assets/fonts'},
				]
			}),

			// new ImageMinPlugin({
			// 	cacheFolder: './.cache',
			// 	test: /\.(jpe?g|png|gif)$/i,
			// 	pngquant: {
			// 		quality: '70'
			// 	},
			// 	plugins: [
			// 		ImageMinMozJpeg({
			// 			quality: 70,
			// 			progressive: true
			// 		})
			// 	]
			// }),

			new SVGSpriteMapPlugin('src/sprites/**/*.svg', {
				styles: path.join(__dirname, '../src/assets/styles/_sprites.scss'),
				output: {
					filename: 'assets/sprite.svg'
				}
			}),

			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: 'vendors.css',
			}),

			/*
        Pages
      */
			...utils.pages(env.NODE_ENV),

			new HtmlBeautifyPlugin({
				config: {
					html: {
						end_with_newline: true,
						indent_size: 2,
						indent_with_tabs: true,
						indent_inner_html: true,
						preserve_newlines: true
					}
				}
			}),

			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.$': 'jquery',
				'window.jQuery': 'jquery'
			}),

			// new PurgeCssPlugin({
			// 	paths: glob.sync(`${PATHS.src}/**/*`, {nodir: true}),
			// 	only: ['app'],
			// 	whitelistPatterns: [/select2/, /my-mfp/, /swiper/], // add plugin's classes to exclude from purge
			// }),

			new WebpackNotifierPlugin({
				title: 'Noob__ui',
				contentImage: path.join(__dirname, '../src/assets/images/logo.svg'),
			}),
		]
	};
};

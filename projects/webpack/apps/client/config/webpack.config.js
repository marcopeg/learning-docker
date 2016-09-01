
var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'sourcemaps',
	entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080/',
            'webpack/hot/only-dev-server',
            path.join(process.cwd(), 'client/app.dev'),
        ],
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].js',
        publicPath: '/',
        library: 'app',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: [
            'node_modules',
            path.join(process.cwd(), 'client'),
            path.join(process.cwd(), 'tests'),
        ],
		alias: {
            'utils/main': 'utils/main-dev',
            'utils/store': 'utils/store-dev',
        },
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /(node_modules|bower_components)/,
                include: process.cwd(),
            },
			{
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
			{
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
            },
			{
                test: /\.less$/,
                loaders: ['style', 'css', 'less'],
            },
			{
                test: /\.json$/,
                loader: 'json-loader',
            },
			{
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url!img?optimizationLevel=7',
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/font-woff',
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/font-woff',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/octet-stream',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/vnd.ms-fontobject',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=image/svg+xml',
            },
        ],
    },
    babel: {
    	presets: ['es2015', 'react'],
		plugins: [
			'transform-decorators-legacy',
			'transform-class-properties',
			'transform-object-rest-spread'
		],
    },
    devServer: {
        hot: true,
        historyApiFallback: {
            index: '/config/client.html',
        },
        stats: {
            colors: true,
        },
		proxy: {
			'/api': {
				target: 'http://api:8080/',
				pathRewrite: {'^/api' : ''},
			},
		},
    },
};

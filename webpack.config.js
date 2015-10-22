var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
      client: './source/scripts/client/react-modules/index.jsx'
    },
    root: path.resolve('./'),
    output: {
        path: path.resolve(__dirname, './public/build/'),
        publicPath: '/build/',
        filename: '[name].bundle.js'
    },
    module: {
        resolve: {
          extensions: ['', '.js', '.jsx', '.css', '.styl']
        },
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css", "css-loader") },
            { test: /\.styl$/, loader: ExtractTextPlugin.extract("stylus", "css-loader!stylus-loader") },
            {
              test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
              loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            { test: /\.ico$/, loader: "url-loader?mimetype=image/ico" }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation failed
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("style.css", {allChunks: true}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.ProvidePlugin({
            _: "lodash",
            "window._": "lodash"
        }),
        new webpack.ProvidePlugin({
            Reflux: "reflux",
            "window.Reflux": "reflux"
        }),
        new webpack.ProvidePlugin({
            React: "react",
            "window.React": "react"
        }),
        new webpack.ProvidePlugin({
            moment: "moment",
            "window.moment": "moment"
        })
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};

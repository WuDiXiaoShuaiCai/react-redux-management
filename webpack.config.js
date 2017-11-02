var proxy = require('http-proxy-middleware');
const webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports  ={
    entry:'./index.js',
    output:{
        publicPath:'',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,exclude:/node_modules/,
                loader:'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
            }
            /* {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: "css-loader"}
                    ],
                })
            },
            {
                test: /\.(less)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: "css-loader"},
                        {loader: "less-loader"},
                    ],
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]?[hash]'
                }
              } */
        ]
    },
    devServer:{
        proxy:{
            '/api':{
                target: 'http://api.douban.com',
                pathRewrite: {'^/api': '/'},
                changeOrigin: true
            }
        }
    }
    /* plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        }),
        new ExtractTextPlugin("styles.css"),  
    ] */
}

// es2015 -- babel-preset-es2015
// react -- babel-preset-react
// babel-loader --- babel-core babel-loader
// webpack-dev-server

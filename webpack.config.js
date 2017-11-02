var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require("path");
var proxy = require('http-proxy-middleware');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: "build/",
    filename: 'bundle.js'
  },
  resolve: {
    // 第一个参数是有空格的
    extensions: [' ', '.js', '.jsx'],
  },
  // babel-preset-es2015 babel-preset-react
  module: {
    loaders:[
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader!babel-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'},
    ]
  },
  devServer: {
      proxy: {
        '/api': { // api表示当前项目请求的key
          target: 'http://api.douban.com', // 代理服务器路径
          pathRewrite: {'^/api' : '/'}, // 重写路径
          changeOrigin: true
        }
      }
    }
 /*  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ] */
};

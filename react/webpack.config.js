// 该配置基于webpack2.0 详情查看 https://webpack.js.org/guides/migrating/
const path = require('path'); // 导入路径包
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map', //开启sourceMap便于调试
    entry: './app/index.jsx', //入口文件
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: 'bundle.js' 
    },
	
	resolve:{
        extensions:['.js','.jsx']
    },
	
    // 使用loader模块
    module: {
        /* 在webpack2.0版本已经将 module.loaders 改为 module.rules 为了兼容性考虑以前的声明方法任然可用，同时链式loader(用!连接)只适用于module.loader
        同时-loader不可省略 */
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', {
                    loader: 'css-loader',
                    options: {
                        // modules: true // 设置css模块化,详情参考https://github.com/css-modules/css-modules
                    }
                }, {
                    loader: 'postcss-loader',
                    // 在这里进行配置，也可以在postcss.config.js中进行配置，详情参考https://github.com/postcss/postcss-loader
                    options: {
                        plugins: function() {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }
            ]
        }, {
            test: /\.styl(us)?$/,
            use: [
                'style-loader', 'css-loader', {
                    loader: "postcss-loader",
                    options: {
                        plugins: function() {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }, 'stylus-loader'
            ]
        }, {
            test: /\.less$/,
            use: [
                'style-loader', 'css-loader', {
                    loader: "postcss-loader",
                    options: {
                        plugins: function() {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }, 'less-loader'
            ]
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader', //此处不能用use，不知道为啥
            exclude: /node_modules/ //需要排除的目录
        },{
			test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
			loader:'url-loader?limit=5000'
		},{
			test:/\.(png|gif|jpg|jpeg|bmp)$/i,
			loader:'url-loader?limit=5000'
		}]
    },
	
    // 配置devServer各种参数
    devServer: {
		proxy: { 
			'/api': { target: 'http://localhost:3000', secure: false } 
		},
        // contentBase: "./", // 本地服务器所加载的页面所在的目录
        hot: true, // 配置HMR之后可以选择开启
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    },
	
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.tmpl.html' // 模版文件
        }),
		
		// 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),
		
		// 打开浏览器
        new OpenBrowserPlugin({
          url: 'http://localhost:8080'
        }),
		
        new webpack.HotModuleReplacementPlugin() // 热加载插件
    ]
}

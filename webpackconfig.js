// var path = require('path')
// var webpack = require('webpack')
// // var VueVideoPlayer = require('vue-video-player')
// //IP地址
// var IPAddress = getIPAdress();
// var serverHost = IPAddress;
// module.exports = {
//     entry: './src/main.js', //值可以是字符串、数组或对象
//     output: {
//         path: path.resolve(__dirname, './dist'), //Webpack结果存储
//         publicPath: '/dist/', //懵懂，懵逼，//然而“publicPath”项则被许多Webpack的插件用于在生产模式和开发模式下下更新内嵌到css、html，img文件里的url值
//         filename: 'build.js'
//     },
//     module: {
//         rules: [{
//                 test: /.vue$/,
//                 loader: 'vue-loader',
//                 options: {
//                     loaders: {}
//                     // other vue-loader options go here
//                 }
//             },
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.(png|jpg|gif|svg)$/,
//                 loader: 'file-loader',
//                 options: {
//                     name: '[name].[ext]?[hash]'
//                 }
//             }
//             //自己加的
//             ,
//             {
//                 test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
//                 loader: 'file-loader'
//             },
//             {
//                 test: /\.css$/,
//                 loader: "style-loader!css-loader"
//             },
//             {
//                 test: /\.(scss|sass)$/,
//                 loader: "style-loader!css-loader!sass-loader"
//             }
//             // {
//             // test: /\.(scss|sass)$/,
//             // loader: "style-loader!css-loader!sass-loader!sass!scss-loader!vue-style-loader"
//             // }
//             // },
//             // {
//             // test: /\.scss$/,
//             // loader: 'style!css!sass'
//             // }
//             // {
//             // test: /\.scss$/,
//             // loader: ExtractTextPlugin.extract('style', 'css!sass')
//             // }
//             // {
//             // test: /\.scss$/,
//             // loader: 'style!css!ruby-sass?compass=1'
//             // }
//         ]
//     },
//     //使用webpack-dev-server
//     devServer: {
//         contentBase: path.join(__dirname, "/"),
//         host: serverHost,
//         port: 9090, //默认9090
//         inline: true, //可以监控js变化
//         hot: true //热启动
//     },
//     resolve: {
//         alias: {
//             vue: 'vue/dist/vue.js',
//             'jquery': 'jquery'
//         },
//         extensions: ['.js', '.scss', '.vue', '.json'] // 可以不加后缀, 直接使用 import xx from 'xx' 的语法
//     },
//     resolveLoader: {
//         alias: {
//             'scss-loader': 'sass-loader',
//         },
//     }
// }
// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = '#source-map'
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.ProvidePlugin({
//             jQuery: "jquery",
//             $: "jquery"
//         }),
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             },
//         }),
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             compress: {
//                 warnings: false
//             }
//         }),
//         new webpack.LoaderOptionsPlugin({
//             minimize: true
//         })
//     ])
// }

// function getIPAdress() {
//     var interfaces = require('os').networkInterfaces();
//     for (var devName in interfaces) {
//         var iface = interfaces[devName];
//         for (var i = 0; i < iface.length; i++) {
//             var alias = iface[i];
//             if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
//                 return alias.address;
//             }
//         }
//     }
// }
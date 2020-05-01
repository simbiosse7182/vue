const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');  
require("babel-polyfill");


module.exports = {
    entry: ["babel-polyfill",'./src/index.js'], 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        historyApiFallback: true,  
    }, 
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader', 
                exclude: /node_modules/
            },
            {
                test: /\.s(c|a)ss$/,
                use: [ 
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader' 
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                    limit: 10 * 1024,
                    noquotes: true,
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            },
                            bypassOnDebug: true
                        }
                    },
                ],
            }
        ]
    },
    resolve: {
        alias: {
         vue$: "vue/dist/vue.esm.js" 
        },
        extensions: ["*", ".js", ".vue", ".json"]
       }, 
    plugins: [
        new VueLoaderPlugin(), 
    ],
   
} 
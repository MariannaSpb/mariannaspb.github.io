const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash'); // добавили плагин

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
// указали путь к файлу, в квадратных скобках куда вставлять сгенерированный хеш
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use:  [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            // пример настройки плагина image-webpack-loader
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                    'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
                    {
                      loader: 'image-webpack-loader',
                      options: {},
                    },
                  ],
              },
              {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]',
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
        ],
    },
    plugins: [ 
        new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/vacancy.html',
            filename: 'vacancy.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/profile-employer.html',
            filename: 'profile-employer.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/default-page.html',
            filename: 'default-page.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/profile.html',
            filename: 'profile.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/add-resume.html',
            filename: 'add-resume.html'
        }),
        new WebpackMd5Hash()
    ]
};
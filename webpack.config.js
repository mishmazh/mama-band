const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.mode || 'development';
const isDev = mode === 'development';
const PORT = process.env.port || 3000;

const buildPlugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
];

const buildResolves = {
    extensions: ['.js', '.jsx'],
};

const buildDevServer = {
    port: PORT,
    historyApiFallback: true,
    open: true,
};

module.exports = {
    mode: mode,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'assets/[name].[contenthash][ext]',
        publicPath: '/',
        clean: true,
    },
    plugins: buildPlugins,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic',
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: buildResolves,
    devServer: isDev ? buildDevServer : undefined,
};

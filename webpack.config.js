const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = process.env.mode || 'development';
const isDev = mode === 'development';
const PORT = process.env.port || 3000;

function buildPlugins(isDev) {
     const plugins =[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: './public/favicon.gif',
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash:8].css',
            chunkFilename: 'styles/[name].[contenthash:8].css',
        }),
    ];

    // if (isDev) {
    //     plugins.push(
    //         new BundleAnalyzerPlugin({
    //             openAnalyzer: false
    //         })
    //     );
    // }

    return plugins;
}

function buildLoaders() {
    const babelLoader = {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath) => Boolean(resPath.includes('.module.')),
                        localIdentName: '[local]__[hash:base64:5]',
                        exportLocalsConvention: 'dashes',
                    },
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [['postcss-preset-env']],
                    },
                },
            },
            'sass-loader',
        ],
    };

    const imgLoader = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const fontsLoader = {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/fonts/[name].[ext]',
        },
    };

    return [imgLoader, fontsLoader, babelLoader, cssLoader];
}

function buildDevServer() {
    return {
        port: PORT,
        historyApiFallback: true,
        open: true,
    };
}

function buildResolves() {
    return {
        extensions: ['.js', '.jsx'],
        preferAbsolute: true,
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}

module.exports = {
    mode: mode,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'assets/images/[name].[contenthash][ext]',
        publicPath: '/',
        clean: true,
    },
    plugins: buildPlugins(isDev),
    module: {
        rules: buildLoaders(),
    },
    resolve: buildResolves(),
    devServer: isDev ? buildDevServer() : undefined,
};

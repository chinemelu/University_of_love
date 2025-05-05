const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const fileArray = [
        'home',
        'contact',
        'about',
        'content_pages',
        'course',
        'course_content'
]

const generatedHTMLWebpackPlugins = function(arr) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        const fileName = arr[i]

        res.push(
            new HtmlWebpackPlugin({
                template: `src/views/${fileName}/index.html`,
                inject: true,
                chunks: [fileName],
                filename: `${fileName}.html`,
                // publicPath: '/'  this will add / to the file path e.g /home.3a5ecb32702fb8edadc2.js
            })
        )
    }
    return res
}

module.exports = {
    entry: {
        home: './src/views/home/index.ts',
        contact: './src/views/contact/index.ts',
        about: './src/views/about/index.ts',
        course: './src/views/course/index.ts',
        course_content: './src/views/course_content/index.ts',
        content_pages: './src/views/content_pages/index.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // {
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            // },
            {
                test: /\.(png|jpe?g|svg|ico|webp|avif)/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        ...generatedHTMLWebpackPlugins(fileArray)
    ]
};
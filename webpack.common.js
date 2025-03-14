const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const fileArray = [
        'home',
        'about',
        'content_pages',
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
        about: './src/views/about/index.ts',
        course_content: './src/views/course_content/index.ts',
        content_pages: './src/views/content_pages/index.ts'
    },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     assetModuleFilename: 'assets/[name][ext]',
    //     clean: true
    // },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|svg|ico)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.(html)$/,
                use: 'html-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            images: path.resolve(__dirname, 'src/images')
        }
    },
    plugins: generatedHTMLWebpackPlugins(fileArray),
};
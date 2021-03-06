const path = require(`path`);

module.exports = {
    entry: `./src/index.js`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `public`)
    },
    devServer: {
        contentBase: path.join(__dirname, `public`),
        open: false,
        liveReload: false,
        port: 1337,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                },
            }
        ],
    },
    mode: 'development',
    performance: {
        hints: false,
    },
    devtool: `source-map`,
};

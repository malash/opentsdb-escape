module.exports = {
    entry: './lib/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'opentsdb-escape.min.js',
        library: 'OpentsdbEscape',
        libraryTarget: 'umd'
    }
};
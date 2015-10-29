module.exports = {
    entry: './lib/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'opentsdb-escape.js',
        library: 'OpentsdbEscape',
        libraryTarget: 'umd'
    }
};
/*
 * This project use advanced Javascript encodeURIComponent function as OpenTSDB
 *   escape function based on the difference between their valid characters.
 * encodeURIComponent valid characters: a-z, A-Z, 0-9, - _ . ! ~ * ' ( )
 * OpenTSDB valid characters: a-z, A-Z, 0-9, -, _, ., /
 *
 * Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#Description
 * http://opentsdb.net/docs/build/html/user_guide/writing.html
 */
module.exports = {
    escape: function(d) {
        var ret = encodeURIComponent(d)
            .replace(/\_/g, '%5f')
            .replace(/\*/g, '%2a')
            .replace(/\!/g, '%21')
            .replace(/\'/g, '%27')
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29')
            .replace(/\~/g, '%7e')
            .replace(/\%/g, '_');
        return ret;
    },
    unescape: function(d) {
        return decodeURIComponent(d.replace(/\_/g, '%'));
    }
}
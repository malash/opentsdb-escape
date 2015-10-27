# OpenTSDB Escape for Javascript

This project use advanced Javascript `encodeURIComponent` function as OpenTSDB `escape` function based on the difference between their valid characters.

encodeURIComponent valid characters: ```a-z, A-Z, 0-9, - _ . ! ~' ( )```

OpenTSDB valid characters: ```a-z, A-Z, 0-9, -, _, ., /```

## Demo

```javascript
var tsdb = require('opentsdb-escape');
var originStr = '!\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
var escapedStr = tsdb.escape(originStr);
console.log(escapedStr);
// _21_22_23_24_25_26_27_28_29_2a_2B_2C-._2F0123456789_3A_3B_3C_3D_3E_3F_40ABCDEFGHIJKLMNOPQRSTUVWXYZ_5B_5C_5D_5E_5f_60abcdefghijklmnopqrstuvwxyz_7B_7C_7D_7e
console.log(tsdb.unescape(escapedStr) === originStr);
// true
```

## Documentation

### tsdb.escape

Escape an Unicode string.

### tsdb.unescape


Unescape an escaped string.

That's all!

## Refer

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#Description)

[http://opentsdb.net/docs/build/html/user_guide/writing.html#metrics-and-tags](http://opentsdb.net/docs/build/html/user_guide/writing.html#metrics-and-tags)

## License

The MIT License (MIT)

Copyright (c) 2015 [Malash](https://malash.me/) <<i@malash.me>>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

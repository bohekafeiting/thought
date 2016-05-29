'use strict';

function thousands_separators(num) {
	 var num = (num || 0).toString(),
	  re = /\d{3}$/,
	  result = '';
    while ( re.test(num) ) {
        result = RegExp.lastMatch + result;
        if (num !== RegExp.lastMatch) {
            result = ',' + result;
            num = RegExp.leftContext;
        } else {
            num = '';
            break;
        }
    }
    if (num) { result = num + result; }
    return result;
}
module.exports = thousands_separators;

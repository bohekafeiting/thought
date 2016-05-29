'use strict';

function thousands_separators(num) {
	 var numString = num.toString(),
	flag = numString.indexOf("."),
	_length = numString.length,
	_point = "",
	_int = "";
	if (/\d+/.test(numString) && !isNaN(num)) {
	if (flag != -1) {
	_point = numString.substring(flag, _length);
	_int = numString.substring(0, flag).split('').reverse().join('').replace(/(\d{3})/g, '$1,').replace(/\,$/, '').split('').reverse().join('');
	} 
	else {
	_int = numString.split('').reverse().join('').replace(/(\d{3})/g, '$1,').replace(/\,$/, '').split('').reverse().join('');
	}
	return num = _int + _point;
	} 
}
module.exports = thousands_separators;

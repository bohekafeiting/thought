'use strict';

function thousands_separators(num) {
if(!((/^(\+|-)?(\d+)(\.\d+)?$/).test(num))){ 
		return num; 
 	} 
	var a = RegExp.$1,b = RegExp.$2,c = RegExp.$3; 
	var re = new RegExp().compile("(\\d)(\\d{3})(,|$)"); 
	while(re.test(b)){ 
 		b=b.replace(re,"$1,$2$3"); 
 	} 
	return a +""+ b +""+ c; 
}

module.exports = thousands_separators;

"use strict";var t;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/t={exports:{}},function(){var r={}.hasOwnProperty;function e(){for(var t=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var o=typeof i;if("string"===o||"number"===o)t.push(i);else if(Array.isArray(i)){if(i.length){var s=e.apply(null,i);s&&t.push(s)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){t.push(i.toString());continue}for(var a in i)r.call(i,a)&&i[a]&&t.push(a)}}}return t.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e}();

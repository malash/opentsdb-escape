(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["OpentsdbEscape"] = factory();
	else
		root["OpentsdbEscape"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/*
	 * This project use advanced Javascript encodeURIComponent function as OpenTSDB
	 *   escape function based on the difference between their valid characters.
	 * encodeURIComponent valid characters: a-z, A-Z, 0-9, - _ . ! ~ * ' ( )
	 * OpenTSDB valid characters: a-z, A-Z, 0-9, -, _, ., /
	 *
	 * Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#Description
	 * http://opentsdb.net/docs/build/html/user_guide/writing.html#metrics-and-tags
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
	};

/***/ }
/******/ ])
});
;
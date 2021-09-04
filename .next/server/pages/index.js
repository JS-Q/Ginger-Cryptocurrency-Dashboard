module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var coingecko_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! coingecko-api */ \"coingecko-api\");\n/* harmony import */ var coingecko_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(coingecko_api__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/sq/Documents/GitHub/Ginger-Cryptocurrency-Dashboard/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst coinGeckoClient = new coingecko_api__WEBPACK_IMPORTED_MODULE_3___default.a();\nfunction Home(props) {\n  const {\n    data\n  } = props.result;\n\n  const formatPercent = number => `${new Number(number).toFixed(2)}%`;\n\n  const formatDollar = (number, maximumSignificantDigits) => new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n    maximumSignificantDigits\n  }).format(number);\n\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \" JavaCrypt Dashboard\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  })), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, \" \"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \" \"), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"JavaCrypt Dashboard\"), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \" **Search Bar here**\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, \" \"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \" \"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, \" \"), __jsx(\"table\", {\n    className: \"table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"tr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"Symbol\"), __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, \"24H Change\"), __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"Price\"), __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"Market cap\"))), __jsx(\"tbody\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, data.map(coin => __jsx(\"tr\", {\n    key: coin.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(\"td\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: coin.image,\n    style: {\n      width: 25,\n      height: 25,\n      marginRight: 10\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }), coin.symbol.toUpperCase()), __jsx(\"td\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  }, __jsx(\"span\", {\n    className: coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }, formatPercent(coin.price_change_percentage_24h))), __jsx(\"td\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, formatDollar(coin.current_price, 20)), __jsx(\"td\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 15\n    }\n  }, formatDollar(coin.market_cap, 12)))))));\n}\nasync function getServerSideProps(context) {\n  const params = {\n    order: coingecko_api__WEBPACK_IMPORTED_MODULE_3___default.a.ORDER.MARKET_CAP_DESC\n  };\n  const result = await coinGeckoClient.coins.markets({\n    params\n  });\n  return {\n    props: {\n      result\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImNvaW5HZWNrb0NsaWVudCIsIkNvaW5HZWNrbyIsIkhvbWUiLCJwcm9wcyIsImRhdGEiLCJyZXN1bHQiLCJmb3JtYXRQZXJjZW50IiwibnVtYmVyIiwiTnVtYmVyIiwidG9GaXhlZCIsImZvcm1hdERvbGxhciIsIm1heGltdW1TaWduaWZpY2FudERpZ2l0cyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFwIiwiY29pbiIsImlkIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0Iiwic3ltYm9sIiwidG9VcHBlckNhc2UiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgiLCJjdXJyZW50X3ByaWNlIiwibWFya2V0X2NhcCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJvcmRlciIsIk9SREVSIiwiTUFSS0VUX0NBUF9ERVNDIiwiY29pbnMiLCJtYXJrZXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLGVBQWUsR0FBRyxJQUFJQyxvREFBSixFQUF4QjtBQUVlLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNsQyxRQUFNO0FBQUVDO0FBQUYsTUFBV0QsS0FBSyxDQUFDRSxNQUF2Qjs7QUFFQSxRQUFNQyxhQUFhLEdBQUdDLE1BQU0sSUFDekIsR0FBRSxJQUFJQyxNQUFKLENBQVdELE1BQVgsRUFBbUJFLE9BQW5CLENBQTJCLENBQTNCLENBQThCLEdBRG5DOztBQUdBLFFBQU1DLFlBQVksR0FBRyxDQUFDSCxNQUFELEVBQVNJLHdCQUFULEtBQ25CLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUNFLE9BREYsRUFFRTtBQUNFQyxTQUFLLEVBQUUsVUFEVDtBQUVFQyxZQUFRLEVBQUUs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QUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxRQUFNQyxNQUFNLEdBQUc7QUFDYkMsU0FBSyxFQUFFakMsb0RBQVMsQ0FBQ2tDLEtBQVYsQ0FBZ0JDO0FBRFYsR0FBZjtBQUdBLFFBQU0vQixNQUFNLEdBQUcsTUFBTUwsZUFBZSxDQUFDcUMsS0FBaEIsQ0FBc0JDLE9BQXRCLENBQThCO0FBQUNMO0FBQUQsR0FBOUIsQ0FBckI7QUFDQSxTQUFPO0FBQ0w5QixTQUFLLEVBQUU7QUFDTEU7QUFESztBQURGLEdBQVA7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IENvaW5HZWNrbyBmcm9tICdjb2luZ2Vja28tYXBpJztcbmNvbnN0IGNvaW5HZWNrb0NsaWVudCA9IG5ldyBDb2luR2Vja28oKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzLnJlc3VsdDtcblxuICBjb25zdCBmb3JtYXRQZXJjZW50ID0gbnVtYmVyID0+IFxuICAgIGAke25ldyBOdW1iZXIobnVtYmVyKS50b0ZpeGVkKDIpfSVgXG5cbiAgY29uc3QgZm9ybWF0RG9sbGFyID0gKG51bWJlciwgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzKSA9PlxuICAgIG5ldyBJbnRsLk51bWJlckZvcm1hdChcbiAgICAgICdlbi1VUycsIFxuICAgICAgeyBcbiAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsIFxuICAgICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgICAgIG1heGltdW1TaWduaWZpY2FudERpZ2l0c1xuICAgICAgfSlcbiAgICAgIC5mb3JtYXQobnVtYmVyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+IEphdmFDcnlwdCBEYXNoYm9hcmQ8L3RpdGxlPlxuXG5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8cD4gPC9wPlxuICAgICAgPHA+IDwvcD5cbiAgICAgIFxuICAgICAgPGgxPkphdmFDcnlwdCBEYXNoYm9hcmQ8L2gxPlxuICAgICAgPGgxPiAqKlNlYXJjaCBCYXIgaGVyZSoqPC9oMT5cblxuICAgICAgPHA+IDwvcD5cbiAgICAgIDxwPiA8L3A+XG4gICAgICA8cD4gPC9wPlxuICAgICAgXG5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlN5bWJvbDwvdGg+XG4gICAgICAgICAgICA8dGg+MjRIIENoYW5nZTwvdGg+XG4gICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgPHRoPk1hcmtldCBjYXA8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGF0YS5tYXAoY29pbiA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtjb2luLmlkfT5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICBzcmM9e2NvaW4uaW1hZ2V9IFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMjUsIGhlaWdodDogMjUsIG1hcmdpblJpZ2h0OiAxMH19IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2NvaW4uc3ltYm9sLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4gXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29pbi5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1zdWNjZXNzJyBcbiAgICAgICAgICAgICAgICAgICkgOiAndGV4dC1kYW5nZXInfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0UGVyY2VudChjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2Zvcm1hdERvbGxhcihjb2luLmN1cnJlbnRfcHJpY2UsIDIwKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2Zvcm1hdERvbGxhcihjb2luLm1hcmtldF9jYXAsIDEyKX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIG9yZGVyOiBDb2luR2Vja28uT1JERVIuTUFSS0VUX0NBUF9ERVNDXG4gIH07XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvaW5HZWNrb0NsaWVudC5jb2lucy5tYXJrZXRzKHtwYXJhbXN9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcmVzdWx0XG4gICAgfSxcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzRmYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "coingecko-api":
/*!********************************!*\
  !*** external "coingecko-api" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"coingecko-api\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2luZ2Vja28tYXBpXCI/NzVkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb2luZ2Vja28tYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29pbmdlY2tvLWFwaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///coingecko-api\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
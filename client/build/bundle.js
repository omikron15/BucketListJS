/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(1);
const BucketList = __webpack_require__(3)
const AllCountriesView = __webpack_require__(2)

const countryRequest = new Request('https://restcountries.eu/rest/v2/all');
const allCountriesView = new AllCountriesView();
const bucketList = new BucketList();
const appStart = function(){



  countryRequest.get(getAllCountriesComplete);








}

const getAllCountriesComplete = function(allCountries){
  allCountries.forEach(function(country){
    allCountriesView.addCountry(country);

  });
  const addCountryButton = document.querySelector("#add-country-button")
  allCountriesView.makebuttonVisible(addCountryButton);
  addCountryButton.addEventListener("click", handleAddCountry);
}

const handleAddCountry = function() {
  const selectedCountry = document.querySelector("option");
  bucketList.add(selectedCountry)
  
}










window.addEventListener('load', appStart);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const Request = function(url) {
  this.url = url;
}

Request.prototype.get = function (next) {
  const request = new XMLHttpRequest();
  request.open("GET", this.url);
  request.addEventListener("load", function(){
    if(this.status !== 200) return;
    const responseBody = JSON.parse(this.response);
    next(responseBody);
  })
  request.send()
};

module.exports = Request;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var allCountriesView = function(){

}

allCountriesView.prototype.addCountry = function (country) {
    const select = document.querySelector("#countries-list");
    const option = document.createElement("option");
    option.textContent = country.name
    select.appendChild(option);
};

allCountriesView.prototype.makebuttonVisible = function (button) {
  button.hidden = false;

};

module.exports = allCountriesView


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const BucketList = function(){
  this.bucketlist = [];
}

BucketList.prototype.add = function (selectedCountry) {
  this.bucketlist.push(selectedCountry);
};




module.exports = BucketList;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
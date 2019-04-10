(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-image\">\n    <ion-img src=\"/assets/siemens.png\"></ion-img>   \n    </ion-card>\n<ion-card class=\"esco \">\n    <ion-img cache=\"true\" src=\"/assets/esco2Logo.png\" ></ion-img>\n</ion-card>\n    <ion-card class=\"welcome-card\">\n      <ion-card-header>\n        <ion-card-subtitle>Apex Software</ion-card-subtitle>\n        <ion-card-title>Siemens Co-Gen Power Plant Project</ion-card-title>        \n      </ion-card-header>\n      <ion-card-content>\n        <p>The system requirement is to evaluate the data from Siemens Co-Gen power plant and create meaningful results about the patterns in the data.</p>\n      </ion-card-content>\n    </ion-card>    \n      <ion-card>\n        <ion-card-header>\n        <ion-card-title>Siemens Canada</ion-card-title>\n      </ion-card-header>\n        <ion-card-content>Siemens Canada is a supplier of steam and gas turbines used for power generation. \n            Siemens has facilities across Canada including the co-generation power plant at Algonquin College. \n            This is part of the collaboration between Siemens and the College. This plant uses natural gas \n            to generate enough power to cover the baseline power requirements at the Woodroffe campus.</ion-card-content>\n          </ion-card>\n\n        <ion-card>\n        <ion-card-header>\n        <ion-card-title>Algonquin College</ion-card-title>\n        </ion-card-header>\n\n        \n        <ion-card-content>The collaboration between Siemens and Algonquin creates opportunities for students to gain hands-on \n          learning in the energy field and the data gathered from the plant can be used for analysis.\n          The Siemens Co-Gen Power Plant functions to power Algonquin College and produces a large \n          amount of data about the generated electricity and carbon dioxide. </ion-card-content>\n        </ion-card>\n\n      <ion-list lines=\"none\">\n      <ion-item [routerLink]=\"[ '/signup']\" >\n        <ion-icon slot=\"start\" color=\"medium\" name=\"checkmark-circle\"></ion-icon>\n        <ion-label>Sign Up</ion-label>\n      </ion-item>      \n      <ion-item [routerLink]=\"[ '/login']\" >\n        <ion-icon slot=\"start\" color=\"medium\" name=\"log-in\"></ion-icon>\n        <ion-label>Log In</ion-label>\n      </ion-item>      \n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.welcome-image ion-img {\n  max-height: 36vh;\n  overflow: hidden; }\n\n.esco ion-img {\n  max-height: 80vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DYXJ5b3VyZGF5L0xlYXJuaW5nL2NvZ2VuYXBwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuLndlbGNvbWUtaW1hZ2UgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM2dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5lc2NvIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map
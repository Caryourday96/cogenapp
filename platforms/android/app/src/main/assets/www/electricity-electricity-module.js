(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["electricity-electricity-module"],{

/***/ "./src/app/electricity/electricity.module.ts":
/*!***************************************************!*\
  !*** ./src/app/electricity/electricity.module.ts ***!
  \***************************************************/
/*! exports provided: ElectricityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityPageModule", function() { return ElectricityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _electricity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./electricity.page */ "./src/app/electricity/electricity.page.ts");







var routes = [
    {
        path: '',
        component: _electricity_page__WEBPACK_IMPORTED_MODULE_6__["ElectricityPage"]
    }
];
var ElectricityPageModule = /** @class */ (function () {
    function ElectricityPageModule() {
    }
    ElectricityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_electricity_page__WEBPACK_IMPORTED_MODULE_6__["ElectricityPage"]]
        })
    ], ElectricityPageModule);
    return ElectricityPageModule;
}());



/***/ }),

/***/ "./src/app/electricity/electricity.page.html":
/*!***************************************************!*\
  !*** ./src/app/electricity/electricity.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>electricity</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<p>\n  <button ion-button large block>Electricity Daily </button>\n</p>\n<p>\n  <button ion-button large full>Electricity Weekly</button>\n</p>\n<p>\n  <button ion-button large full>Electricity Monthly</button>\n</p>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/electricity/electricity.page.scss":
/*!***************************************************!*\
  !*** ./src/app/electricity/electricity.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZWN0cmljaXR5L2VsZWN0cmljaXR5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/electricity/electricity.page.ts":
/*!*************************************************!*\
  !*** ./src/app/electricity/electricity.page.ts ***!
  \*************************************************/
/*! exports provided: ElectricityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityPage", function() { return ElectricityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ElectricityPage = /** @class */ (function () {
    function ElectricityPage() {
    }
    ElectricityPage.prototype.ngOnInit = function () {
    };
    ElectricityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-electricity',
            template: __webpack_require__(/*! ./electricity.page.html */ "./src/app/electricity/electricity.page.html"),
            styles: [__webpack_require__(/*! ./electricity.page.scss */ "./src/app/electricity/electricity.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ElectricityPage);
    return ElectricityPage;
}());



/***/ })

}]);
//# sourceMappingURL=electricity-electricity-module.js.map
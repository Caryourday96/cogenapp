(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carbon-carbon-module"],{

/***/ "./src/app/carbon/carbon.module.ts":
/*!*****************************************!*\
  !*** ./src/app/carbon/carbon.module.ts ***!
  \*****************************************/
/*! exports provided: CarbonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarbonPageModule", function() { return CarbonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _carbon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carbon.page */ "./src/app/carbon/carbon.page.ts");







var routes = [
    {
        path: '',
        component: _carbon_page__WEBPACK_IMPORTED_MODULE_6__["CarbonPage"]
    }
];
var CarbonPageModule = /** @class */ (function () {
    function CarbonPageModule() {
    }
    CarbonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_carbon_page__WEBPACK_IMPORTED_MODULE_6__["CarbonPage"]]
        })
    ], CarbonPageModule);
    return CarbonPageModule;
}());



/***/ }),

/***/ "./src/app/carbon/carbon.page.html":
/*!*****************************************!*\
  !*** ./src/app/carbon/carbon.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>List of Carbon Level Charts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<p>\n    <button ion-button large block [routerLink]=\"[ '/co2-daily']\">Carbon Daily </button>\n</p>\n<p>\n    <button ion-button large block [routerLink]=\"[ '/co2-weekly']\" full>Carbon Weekly</button>\n</p>\n<p>\n    <button ion-button large block [routerLink]=\"[ '/co2-monthly']\" full>Carbon Monthly</button>\n</p>\n\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/carbon/carbon.page.scss":
/*!*****************************************!*\
  !*** ./src/app/carbon/carbon.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmJvbi9jYXJib24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/carbon/carbon.page.ts":
/*!***************************************!*\
  !*** ./src/app/carbon/carbon.page.ts ***!
  \***************************************/
/*! exports provided: CarbonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarbonPage", function() { return CarbonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CarbonPage = /** @class */ (function () {
    function CarbonPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CarbonPage.prototype.ngOnInit = function () {
    };
    CarbonPage.prototype.gotoDaily = function () {
        this.navCtrl.navigateRoot('Co2DailyPage');
    };
    CarbonPage.prototype.gotoWeekly = function () {
        this.navCtrl.navigateRoot('Co2WeeklyPage');
    };
    CarbonPage.prototype.gotoMonthly = function () {
        this.navCtrl.navigateRoot('Co2MonthlyPage');
    };
    CarbonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-carbon',
            template: __webpack_require__(/*! ./carbon.page.html */ "./src/app/carbon/carbon.page.html"),
            styles: [__webpack_require__(/*! ./carbon.page.scss */ "./src/app/carbon/carbon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], CarbonPage);
    return CarbonPage;
}());



/***/ })

}]);
//# sourceMappingURL=carbon-carbon-module.js.map
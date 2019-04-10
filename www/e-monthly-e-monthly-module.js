(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["e-monthly-e-monthly-module"],{

/***/ "./src/app/e-monthly/e-monthly.module.ts":
/*!***********************************************!*\
  !*** ./src/app/e-monthly/e-monthly.module.ts ***!
  \***********************************************/
/*! exports provided: EMonthlyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMonthlyPageModule", function() { return EMonthlyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_monthly_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-monthly.page */ "./src/app/e-monthly/e-monthly.page.ts");







var routes = [
    {
        path: '',
        component: _e_monthly_page__WEBPACK_IMPORTED_MODULE_6__["EMonthlyPage"]
    }
];
var EMonthlyPageModule = /** @class */ (function () {
    function EMonthlyPageModule() {
    }
    EMonthlyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_e_monthly_page__WEBPACK_IMPORTED_MODULE_6__["EMonthlyPage"]]
        })
    ], EMonthlyPageModule);
    return EMonthlyPageModule;
}());



/***/ }),

/***/ "./src/app/e-monthly/e-monthly.page.html":
/*!***********************************************!*\
  !*** ./src/app/e-monthly/e-monthly.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Electric Monthly</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <canvas #barCanvas></canvas>\n  <ion-card>\n      <ion-card-header>\n      <p><ion-card-subtitle>Min Value -  1.2 </ion-card-subtitle></p>\n      <p><ion-card-subtitle>Max Value -  9.6 </ion-card-subtitle></p>\n      <p><ion-card-subtitle>Average Value - 6.65  </ion-card-subtitle></p>\n    </ion-card-header>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/e-monthly/e-monthly.page.scss":
/*!***********************************************!*\
  !*** ./src/app/e-monthly/e-monthly.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2UtbW9udGhseS9lLW1vbnRobHkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/e-monthly/e-monthly.page.ts":
/*!*********************************************!*\
  !*** ./src/app/e-monthly/e-monthly.page.ts ***!
  \*********************************************/
/*! exports provided: EMonthlyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMonthlyPage", function() { return EMonthlyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var EMonthlyPage = /** @class */ (function () {
    function EMonthlyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EMonthlyPage.prototype.ngOnInit = function () {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["November", "December", "January", "February", "March", "April"],
                datasets: [{
                        label: '# Monthly Electricity Levels',
                        data: [7.5, 9.6, 3.3, 5.0, 7.8, 5.5, 1.2],
                        backgroundColor: [
                            'rgb(0,0,255,0.6)',
                            'rgb(0,0,255,0.6)',
                            'rgb(0,0,255,0.6)',
                            'rgb(0,0,255,0.6)',
                            'rgb(0,0,255,0.6)',
                            'rgb(0,0,255,0.6)',
                            'rgb(0,0,255,0.6)'
                        ],
                        borderColor: [
                            'rgb(0,0,255,0)',
                            'rgb(0,0,255,0)',
                            'rgb(0,0,255,0)',
                            'rgb(0,0,255,0)',
                            'rgb(0,0,255,0)',
                            'rgb(0,0,255,0)',
                            'rgb(0,0,255,0)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EMonthlyPage.prototype, "barCanvas", void 0);
    EMonthlyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e-monthly',
            template: __webpack_require__(/*! ./e-monthly.page.html */ "./src/app/e-monthly/e-monthly.page.html"),
            styles: [__webpack_require__(/*! ./e-monthly.page.scss */ "./src/app/e-monthly/e-monthly.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], EMonthlyPage);
    return EMonthlyPage;
}());



/***/ })

}]);
//# sourceMappingURL=e-monthly-e-monthly-module.js.map
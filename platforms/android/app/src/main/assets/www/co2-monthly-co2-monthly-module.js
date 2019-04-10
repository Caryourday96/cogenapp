(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["co2-monthly-co2-monthly-module"],{

/***/ "./src/app/co2-monthly/co2-monthly.module.ts":
/*!***************************************************!*\
  !*** ./src/app/co2-monthly/co2-monthly.module.ts ***!
  \***************************************************/
/*! exports provided: Co2MonthlyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Co2MonthlyPageModule", function() { return Co2MonthlyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _co2_monthly_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./co2-monthly.page */ "./src/app/co2-monthly/co2-monthly.page.ts");







var routes = [
    {
        path: '',
        component: _co2_monthly_page__WEBPACK_IMPORTED_MODULE_6__["Co2MonthlyPage"]
    }
];
var Co2MonthlyPageModule = /** @class */ (function () {
    function Co2MonthlyPageModule() {
    }
    Co2MonthlyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_co2_monthly_page__WEBPACK_IMPORTED_MODULE_6__["Co2MonthlyPage"]]
        })
    ], Co2MonthlyPageModule);
    return Co2MonthlyPageModule;
}());



/***/ }),

/***/ "./src/app/co2-monthly/co2-monthly.page.html":
/*!***************************************************!*\
  !*** ./src/app/co2-monthly/co2-monthly.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Carbon Monthly</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <canvas #barCanvas></canvas>\n  <ion-card>\n      <ion-card-header>\n      <p><ion-card-subtitle>Min Value -  5 </ion-card-subtitle></p>\n      <p><ion-card-subtitle>Max Value -  75 </ion-card-subtitle></p>\n      <p><ion-card-subtitle>Average Value - 40  </ion-card-subtitle></p>\n    </ion-card-header>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/co2-monthly/co2-monthly.page.scss":
/*!***************************************************!*\
  !*** ./src/app/co2-monthly/co2-monthly.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvMi1tb250aGx5L2NvMi1tb250aGx5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/co2-monthly/co2-monthly.page.ts":
/*!*************************************************!*\
  !*** ./src/app/co2-monthly/co2-monthly.page.ts ***!
  \*************************************************/
/*! exports provided: Co2MonthlyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Co2MonthlyPage", function() { return Co2MonthlyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var Co2MonthlyPage = /** @class */ (function () {
    function Co2MonthlyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Co2MonthlyPage.prototype.ngOnInit = function () {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["November", "December", "January", "February", "March", "April"],
                datasets: [{
                        label: '# Monthly Carbon ',
                        data: [20, 75, 35, 20, 30, 55, 5],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(255,99,132,1)',
                            'rgba(255,99,132,1)',
                            'rgba(255,99,132,1)',
                            'rgba(255,99,132,1)',
                            'rgba(255,99,132,1)'
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
    ], Co2MonthlyPage.prototype, "barCanvas", void 0);
    Co2MonthlyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-co2-monthly',
            template: __webpack_require__(/*! ./co2-monthly.page.html */ "./src/app/co2-monthly/co2-monthly.page.html"),
            styles: [__webpack_require__(/*! ./co2-monthly.page.scss */ "./src/app/co2-monthly/co2-monthly.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], Co2MonthlyPage);
    return Co2MonthlyPage;
}());



/***/ })

}]);
//# sourceMappingURL=co2-monthly-co2-monthly-module.js.map
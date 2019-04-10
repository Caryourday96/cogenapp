(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["co2-daily-co2-daily-module"],{

/***/ "./src/app/co2-daily/co2-daily.module.ts":
/*!***********************************************!*\
  !*** ./src/app/co2-daily/co2-daily.module.ts ***!
  \***********************************************/
/*! exports provided: Co2DailyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Co2DailyPageModule", function() { return Co2DailyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _co2_daily_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./co2-daily.page */ "./src/app/co2-daily/co2-daily.page.ts");







var routes = [
    {
        path: '',
        component: _co2_daily_page__WEBPACK_IMPORTED_MODULE_6__["Co2DailyPage"]
    }
];
var Co2DailyPageModule = /** @class */ (function () {
    function Co2DailyPageModule() {
    }
    Co2DailyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_co2_daily_page__WEBPACK_IMPORTED_MODULE_6__["Co2DailyPage"]]
        })
    ], Co2DailyPageModule);
    return Co2DailyPageModule;
}());



/***/ }),

/***/ "./src/app/co2-daily/co2-daily.page.html":
/*!***********************************************!*\
  !*** ./src/app/co2-daily/co2-daily.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Carbon Daily</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <canvas #barCanvas></canvas>\n\n  <ion-card>\n  <ion-card-header>\n  <p><ion-card-subtitle>Min Value -  5 </ion-card-subtitle></p>\n  <p><ion-card-subtitle>Max Value -  95 </ion-card-subtitle></p>\n  <p><ion-card-subtitle>Average Value - 39.2  </ion-card-subtitle></p>\n</ion-card-header>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/co2-daily/co2-daily.page.scss":
/*!***********************************************!*\
  !*** ./src/app/co2-daily/co2-daily.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvMi1kYWlseS9jbzItZGFpbHkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/co2-daily/co2-daily.page.ts":
/*!*********************************************!*\
  !*** ./src/app/co2-daily/co2-daily.page.ts ***!
  \*********************************************/
/*! exports provided: Co2DailyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Co2DailyPage", function() { return Co2DailyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var Co2DailyPage = /** @class */ (function () {
    function Co2DailyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Co2DailyPage.prototype.ngOnInit = function () {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                        label: '# Daily Carbon Levels',
                        data: [20, 30, 25, 60, 5, 40, 95],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
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
    ], Co2DailyPage.prototype, "barCanvas", void 0);
    Co2DailyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-co2-daily',
            template: __webpack_require__(/*! ./co2-daily.page.html */ "./src/app/co2-daily/co2-daily.page.html"),
            styles: [__webpack_require__(/*! ./co2-daily.page.scss */ "./src/app/co2-daily/co2-daily.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], Co2DailyPage);
    return Co2DailyPage;
}());



/***/ })

}]);
//# sourceMappingURL=co2-daily-co2-daily-module.js.map
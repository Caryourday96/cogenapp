(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["e-daily-e-daily-module"],{

/***/ "./src/app/e-daily/e-daily.module.ts":
/*!*******************************************!*\
  !*** ./src/app/e-daily/e-daily.module.ts ***!
  \*******************************************/
/*! exports provided: EDailyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDailyPageModule", function() { return EDailyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_daily_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-daily.page */ "./src/app/e-daily/e-daily.page.ts");







var routes = [
    {
        path: '',
        component: _e_daily_page__WEBPACK_IMPORTED_MODULE_6__["EDailyPage"]
    }
];
var EDailyPageModule = /** @class */ (function () {
    function EDailyPageModule() {
    }
    EDailyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_e_daily_page__WEBPACK_IMPORTED_MODULE_6__["EDailyPage"]]
        })
    ], EDailyPageModule);
    return EDailyPageModule;
}());



/***/ }),

/***/ "./src/app/e-daily/e-daily.page.html":
/*!*******************************************!*\
  !*** ./src/app/e-daily/e-daily.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Electric Daily</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <canvas #barCanvas></canvas>\n  <ion-card>\n      <ion-card-header>\n      <p><ion-card-subtitle>Min Value -  2.0 </ion-card-subtitle></p>\n      <p><ion-card-subtitle>Max Value -  9.5 </ion-card-subtitle></p>\n      <p><ion-card-subtitle>Average Value - 5.45  </ion-card-subtitle></p>\n    </ion-card-header>\n      </ion-card>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/e-daily/e-daily.page.scss":
/*!*******************************************!*\
  !*** ./src/app/e-daily/e-daily.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2UtZGFpbHkvZS1kYWlseS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/e-daily/e-daily.page.ts":
/*!*****************************************!*\
  !*** ./src/app/e-daily/e-daily.page.ts ***!
  \*****************************************/
/*! exports provided: EDailyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDailyPage", function() { return EDailyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var EDailyPage = /** @class */ (function () {
    function EDailyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EDailyPage.prototype.ngOnInit = function () {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                        label: '# Daily Electricity Levels',
                        data: [6.0, 3.0, 2.5, 2.0, 5.3, 4.4, 9.5],
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
    ], EDailyPage.prototype, "barCanvas", void 0);
    EDailyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e-daily',
            template: __webpack_require__(/*! ./e-daily.page.html */ "./src/app/e-daily/e-daily.page.html"),
            styles: [__webpack_require__(/*! ./e-daily.page.scss */ "./src/app/e-daily/e-daily.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], EDailyPage);
    return EDailyPage;
}());



/***/ })

}]);
//# sourceMappingURL=e-daily-e-daily-module.js.map
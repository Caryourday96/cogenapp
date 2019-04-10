(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["e-weekly-e-weekly-module"],{

/***/ "./src/app/e-weekly/e-weekly.module.ts":
/*!*********************************************!*\
  !*** ./src/app/e-weekly/e-weekly.module.ts ***!
  \*********************************************/
/*! exports provided: EWeeklyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EWeeklyPageModule", function() { return EWeeklyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_weekly_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-weekly.page */ "./src/app/e-weekly/e-weekly.page.ts");







var routes = [
    {
        path: '',
        component: _e_weekly_page__WEBPACK_IMPORTED_MODULE_6__["EWeeklyPage"]
    }
];
var EWeeklyPageModule = /** @class */ (function () {
    function EWeeklyPageModule() {
    }
    EWeeklyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_e_weekly_page__WEBPACK_IMPORTED_MODULE_6__["EWeeklyPage"]]
        })
    ], EWeeklyPageModule);
    return EWeeklyPageModule;
}());



/***/ }),

/***/ "./src/app/e-weekly/e-weekly.page.html":
/*!*********************************************!*\
  !*** ./src/app/e-weekly/e-weekly.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Electric Weekly</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <canvas #barCanvas></canvas>\n  <ion-card>\n      <ion-card-header>\n      <p><ion-card-subtitle>Min Value -  1.5 </ion-card-subtitle></p>\n      <p><ion-card-subtitle>Max Value -  7.5 </ion-card-subtitle></p>\n      <p><ion-card-subtitle>Average Value - 4.5  </ion-card-subtitle></p>\n    </ion-card-header>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/e-weekly/e-weekly.page.scss":
/*!*********************************************!*\
  !*** ./src/app/e-weekly/e-weekly.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Utd2Vla2x5L2Utd2Vla2x5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/e-weekly/e-weekly.page.ts":
/*!*******************************************!*\
  !*** ./src/app/e-weekly/e-weekly.page.ts ***!
  \*******************************************/
/*! exports provided: EWeeklyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EWeeklyPage", function() { return EWeeklyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var EWeeklyPage = /** @class */ (function () {
    function EWeeklyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EWeeklyPage.prototype.ngOnInit = function () {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barCanvas.nativeElement, {
            type: 'horizontalBar',
            data: {
                labels: ["-5_Weeks", "-4_Weeks", "-3_Weeks", "-2_Weeks", "-1_Weeks", "Current_Week"],
                datasets: [{
                        label: '# Weekly Electricity',
                        data: [7.0, 3.2, 7.5, 3.8, 1.5, 2.0, 3.5],
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
    ], EWeeklyPage.prototype, "barCanvas", void 0);
    EWeeklyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e-weekly',
            template: __webpack_require__(/*! ./e-weekly.page.html */ "./src/app/e-weekly/e-weekly.page.html"),
            styles: [__webpack_require__(/*! ./e-weekly.page.scss */ "./src/app/e-weekly/e-weekly.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], EWeeklyPage);
    return EWeeklyPage;
}());



/***/ })

}]);
//# sourceMappingURL=e-weekly-e-weekly-module.js.map
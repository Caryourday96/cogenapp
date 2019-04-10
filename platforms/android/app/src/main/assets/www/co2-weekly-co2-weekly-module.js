(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["co2-weekly-co2-weekly-module"],{

/***/ "./src/app/co2-weekly/co2-weekly.module.ts":
/*!*************************************************!*\
  !*** ./src/app/co2-weekly/co2-weekly.module.ts ***!
  \*************************************************/
/*! exports provided: Co2WeeklyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Co2WeeklyPageModule", function() { return Co2WeeklyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _co2_weekly_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./co2-weekly.page */ "./src/app/co2-weekly/co2-weekly.page.ts");







var routes = [
    {
        path: '',
        component: _co2_weekly_page__WEBPACK_IMPORTED_MODULE_6__["Co2WeeklyPage"]
    }
];
var Co2WeeklyPageModule = /** @class */ (function () {
    function Co2WeeklyPageModule() {
    }
    Co2WeeklyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_co2_weekly_page__WEBPACK_IMPORTED_MODULE_6__["Co2WeeklyPage"]]
        })
    ], Co2WeeklyPageModule);
    return Co2WeeklyPageModule;
}());



/***/ }),

/***/ "./src/app/co2-weekly/co2-weekly.page.html":
/*!*************************************************!*\
  !*** ./src/app/co2-weekly/co2-weekly.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Carbon Weekly</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <canvas #barCanvas></canvas>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/co2-weekly/co2-weekly.page.scss":
/*!*************************************************!*\
  !*** ./src/app/co2-weekly/co2-weekly.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvMi13ZWVrbHkvY28yLXdlZWtseS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/co2-weekly/co2-weekly.page.ts":
/*!***********************************************!*\
  !*** ./src/app/co2-weekly/co2-weekly.page.ts ***!
  \***********************************************/
/*! exports provided: Co2WeeklyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Co2WeeklyPage", function() { return Co2WeeklyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var Co2WeeklyPage = /** @class */ (function () {
    function Co2WeeklyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Co2WeeklyPage.prototype.ngOnInit = function () {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                        label: '# Daily Electricity',
                        data: [100, 50, 75, 30, 15, 20, 35],
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
    ], Co2WeeklyPage.prototype, "barCanvas", void 0);
    Co2WeeklyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-co2-weekly',
            template: __webpack_require__(/*! ./co2-weekly.page.html */ "./src/app/co2-weekly/co2-weekly.page.html"),
            styles: [__webpack_require__(/*! ./co2-weekly.page.scss */ "./src/app/co2-weekly/co2-weekly.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], Co2WeeklyPage);
    return Co2WeeklyPage;
}());



/***/ })

}]);
//# sourceMappingURL=co2-weekly-co2-weekly-module.js.map
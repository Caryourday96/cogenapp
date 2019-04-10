(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart3d-chart3d-module"],{

/***/ "./src/app/chart3d/chart3d.module.ts":
/*!*******************************************!*\
  !*** ./src/app/chart3d/chart3d.module.ts ***!
  \*******************************************/
/*! exports provided: Chart3dPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart3dPageModule", function() { return Chart3dPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chart3d_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart3d.page */ "./src/app/chart3d/chart3d.page.ts");







var routes = [
    {
        path: '',
        component: _chart3d_page__WEBPACK_IMPORTED_MODULE_6__["Chart3dPage"]
    }
];
var Chart3dPageModule = /** @class */ (function () {
    function Chart3dPageModule() {
    }
    Chart3dPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chart3d_page__WEBPACK_IMPORTED_MODULE_6__["Chart3dPage"]]
        })
    ], Chart3dPageModule);
    return Chart3dPageModule;
}());



/***/ }),

/***/ "./src/app/chart3d/chart3d.page.html":
/*!*******************************************!*\
  !*** ./src/app/chart3d/chart3d.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>3D CHART</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <canvas #barCanvas></canvas>\n    <ion-card>\n        <ion-card-header>\n        \n      </ion-card-header>\n        </ion-card>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/chart3d/chart3d.page.scss":
/*!*******************************************!*\
  !*** ./src/app/chart3d/chart3d.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0M2QvY2hhcnQzZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chart3d/chart3d.page.ts":
/*!*****************************************!*\
  !*** ./src/app/chart3d/chart3d.page.ts ***!
  \*****************************************/
/*! exports provided: Chart3dPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart3dPage", function() { return Chart3dPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var Chart3dPage = /** @class */ (function () {
    function Chart3dPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Chart3dPage.prototype.ngOnInit = function () {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barCanvas.nativeElement, {
            type: 'radar',
            data: {
                labels: ["November", "December", "January", "February", "March"],
                datasets: [
                    {
                        label: '#Carbon',
                        fill: true,
                        backgroundColor: "rgba(179,181,198,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        pointBorderColor: "#fff",
                        pointBackgroundColor: "rgba(179,181,198,1)",
                        data: [35.48, 54.16, 29.61, 38.06, 14.45]
                    }, {
                        label: '#Electricity',
                        fill: true,
                        backgroundColor: "rgb(0,0,255,0.7)",
                        borderColor: "rgb(0,255,255,0.5)",
                        pointBorderColor: "#fff",
                        pointBackgroundColor: "rgb(0,0,128,0.4)",
                        data: [28.77, 55.61, 21.69, 36.62, 36.82]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Distribution of '
                }
            },
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Chart3dPage.prototype, "barCanvas", void 0);
    Chart3dPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart3d',
            template: __webpack_require__(/*! ./chart3d.page.html */ "./src/app/chart3d/chart3d.page.html"),
            styles: [__webpack_require__(/*! ./chart3d.page.scss */ "./src/app/chart3d/chart3d.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], Chart3dPage);
    return Chart3dPage;
}());



/***/ })

}]);
//# sourceMappingURL=chart3d-chart3d-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./src/modules/statistics/components/chart.appointments-date.tsx":
/*!***********************************************************************!*\
  !*** ./src/modules/statistics/components/chart.appointments-date.tsx ***!
  \***********************************************************************/
/*! exports provided: AppointmentsByDateChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppointmentsByDateChart\", function() { return AppointmentsByDateChart; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nlet AppointmentsByDateChart = class AppointmentsByDateChart extends react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"] {\n    get values() {\n        const initialValue = {\n            days: [],\n            missed: [],\n            outstanding: [],\n            paid: []\n        };\n        return this.props.selectedAppointmentsByDay.reduce((acc, val) => {\n            acc.paid.push(val.appointments.filter(a => a.isPaid && !a.isMissed).length);\n            acc.outstanding.push(val.appointments.filter(a => a.isOutstanding).length);\n            acc.missed.push(val.appointments.filter(a => a.isMissed).length);\n            acc.days.push(Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(val.day.getTime(), _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"date_format\")));\n            return acc;\n        }, initialValue);\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"BarChartComponent\"], Object.assign({}, {\n            height: 400,\n            data: {\n                xLabels: this.values.days,\n                bars: [\n                    {\n                        label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Missed\"),\n                        data: this.values.missed\n                    },\n                    {\n                        label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Paid\"),\n                        data: this.values.paid\n                    },\n                    {\n                        label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Outstanding\"),\n                        data: this.values.outstanding\n                    }\n                ]\n            }\n        })));\n    }\n};\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], AppointmentsByDateChart.prototype, \"values\", null);\nAppointmentsByDateChart = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], AppointmentsByDateChart);\n\n\n\n//# sourceURL=webpack:///./src/modules/statistics/components/chart.appointments-date.tsx?");

/***/ })

}]);
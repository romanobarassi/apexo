(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/modules/patients/components/dental-history.tsx":
/*!************************************************************!*\
  !*** ./src/modules/patients/components/dental-history.tsx ***!
  \************************************************************/
/*! exports provided: DentalHistoryPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DentalHistoryPanel\", function() { return DentalHistoryPanel; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nconst EditableListComponent = react_loadable__WEBPACK_IMPORTED_MODULE_8__({\n    loading: () => react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Shimmer\"], null),\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () { return (yield __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! common-components/editable-list */ \"./src/common-components/editable-list.tsx\"))).EditableListComponent; })\n});\nconst TeethDeciduousChart = react_loadable__WEBPACK_IMPORTED_MODULE_8__({\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! modules/patients/components/teeth-deciduous */ \"./src/modules/patients/components/teeth-deciduous.tsx\")))\n            .TeethDeciduousChart;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Shimmer\"], null)\n});\nconst TeethPermanentChart = react_loadable__WEBPACK_IMPORTED_MODULE_8__({\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! modules/patients/components/teeth-permanent */ \"./src/modules/patients/components/teeth-permanent.tsx\")))\n            .TeethPermanentChart;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Shimmer\"], null)\n});\nlet DentalHistoryPanel = class DentalHistoryPanel extends react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.viewChart = true;\n    }\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.canEditPatients;\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"dental-history teeth m-t-10\" },\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", null,\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Toggle\"], { defaultChecked: true, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"View graphic chart\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"View sorted table\"), onChange: (ev, newVal) => {\n                        this.viewChart = newVal;\n                    }, className: \"hidden-xs\" }),\n                this.viewChart ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"chart\" },\n                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Permanent Teeth`) },\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](TeethPermanentChart, { teeth: this.props.patient.teeth, onClick: number => _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({\n                                sub: number.toString()\n                            }) })),\n                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Deciduous Teeth`) },\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](TeethDeciduousChart, { teeth: this.props.patient.teeth, onClick: number => _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({\n                                sub: number.toString()\n                            }) })))) : (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"tabulated\" },\n                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Permanent Teeth`) },\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"table\", { className: \"permanent\" },\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"tbody\", null,\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"tr\", null, [\n                                    this.mapQuadrant(11, 18, true),\n                                    this.mapQuadrant(21, 28, false)\n                                ]),\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"tr\", null, [\n                                    this.mapQuadrant(41, 48, true),\n                                    this.mapQuadrant(31, 38, false)\n                                ])))),\n                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Deciduous Teeth`) },\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"table\", { className: \"deciduous\" },\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"tbody\", null,\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"tr\", null, [\n                                    this.mapQuadrant(51, 55, true),\n                                    this.mapQuadrant(61, 65, false)\n                                ]),\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"tr\", null, [\n                                    this.mapQuadrant(81, 85, true),\n                                    this.mapQuadrant(71, 75, false)\n                                ]))))))),\n            this.props.patient.teeth[Number(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedSub)] ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Panel\"], { isOpen: !!this.props.patient.teeth[Number(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedSub)], type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"PanelType\"].smallFixedFar, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].unSelectSub(), onRenderNavigation: () => {\n                    const tooth = this.props.patient.teeth[Number(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedSub)];\n                    return (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"panel-heading panel-heading-tooth\" },\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PanelTop\"], { title: `ISO: ${tooth ? tooth.ISO : \"\"} - Universal: ${tooth ? tooth.Universal : \"\"}`, type: tooth.Name, onDismiss: () => _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].unSelectSub(), initials: react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Icon\"], { iconName: \"teeth\" }), initialsColor: Object(_modules__WEBPACK_IMPORTED_MODULE_3__[\"conditionToColor\"])(tooth.condition), square: true }),\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PanelTabs\"], { currentSelectedKey: \"details\", onSelect: () => { }, items: [\n                                {\n                                    key: \"details\",\n                                    icon: \"teeth\",\n                                    title: \"Tooth Details\"\n                                }\n                            ] })));\n                } }, this.props.patient.teeth[Number(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedSub)] ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"tooth-details\" },\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Tooth condition`), onChange: (ev, newVal) => {\n                        this.props.patient.teeth[Number(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedSub)].condition = newVal.key.toString();\n                        this.props.patient.saveToPouch();\n                    }, selectedKey: this.props.patient.teeth[Number(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedSub)].condition, className: \"single-tooth-condition\", options: Object.keys(_modules__WEBPACK_IMPORTED_MODULE_3__[\"ToothCondition\"]).map(c => ({\n                        key: c,\n                        text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(c)\n                    })), disabled: !this.canEdit }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](EditableListComponent, { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Tooth history\"), value: this.props.patient.teeth[Number(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedSub)].notes, disabled: !this.canEdit, onChange: e => {\n                        this.props.patient.teeth[Number(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedSub)].notes = e;\n                        this.props.patient.saveToPouch();\n                    } }))) : (\"\"))) : (\"\")));\n    }\n    mapQuadrant(min, max, reverse) {\n        let arr = this.props.patient.teeth;\n        arr = arr.filter(tooth => tooth.ISO >= min && tooth.ISO <= max);\n        arr = reverse ? arr.reverse() : arr;\n        return arr.map(tooth => (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"td\", { key: \"tooth\" + tooth.ISO, style: { background: Object(_modules__WEBPACK_IMPORTED_MODULE_3__[\"conditionToColor\"])(tooth.condition) }, onClick: () => _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({ sub: tooth.ISO.toString() }) },\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"span\", { className: \"has-notes\", style: tooth.notes.length ? {} : { display: \"none\" } }),\n            tooth.ISO)));\n    }\n};\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]\n], DentalHistoryPanel.prototype, \"viewChart\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], DentalHistoryPanel.prototype, \"canEdit\", null);\nDentalHistoryPanel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx_react__WEBPACK_IMPORTED_MODULE_5__[\"observer\"]\n], DentalHistoryPanel);\n\n\n\n//# sourceURL=webpack:///./src/modules/patients/components/dental-history.tsx?");

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/main-components/user.tsx":
/*!**************************************!*\
  !*** ./src/main-components/user.tsx ***!
  \**************************************/
/*! exports provided: UserPanelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserPanelView\", function() { return UserPanelView; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n\nconst AppointmentEditorPanel = react_loadable__WEBPACK_IMPORTED_MODULE_8__({\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! modules/appointments/components/appointment-editor */ \"./src/modules/appointments/components/appointment-editor.tsx\")))\n            .AppointmentEditorPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Shimmer\"], null)\n});\nlet UserPanelView = class UserPanelView extends react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.selectedAppointmentId = \"\";\n    }\n    get selectedAppointment() {\n        return _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].docs.find(x => x._id === this.selectedAppointmentId);\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Panel\"], { className: \"user-component\", type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"PanelType\"].medium, isLightDismiss: true, isOpen: _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedMain === \"user\", onDismiss: () => _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].hide(), \"data-testid\": \"user-panel\", onRenderNavigation: () => (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"panel-heading\" },\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PanelTop\"], { title: _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.name, type: \"Staff member\", onDismiss: () => _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].hide() }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PanelTabs\"], { currentSelectedKey: _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab, onSelect: key => {\n                        _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({ tab: key });\n                    }, items: [\n                        {\n                            key: \"today\",\n                            icon: \"GotoToday\",\n                            title: \"Appointments for Today\"\n                        },\n                        {\n                            key: \"upcoming\",\n                            icon: \"Calendar\",\n                            title: \"Upcoming appointments\"\n                        },\n                        {\n                            key: \"actions\",\n                            icon: \"Lock\",\n                            title: \"Actions\"\n                        }\n                    ] }))) },\n            _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"today\" ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Appointments for today\") }, _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].todayAppointments.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBarType\"].info, \"data-testid\": \"no-appointments\" }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No appointments today\"))) : (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"appointments-listing\", \"data-testid\": \"appointments-list\" }, react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"AppointmentsListNoDate\"], { appointments: _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].todayAppointments, onClick: id => {\n                    this.selectedAppointmentId = id;\n                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({\n                        sub: \"details\"\n                    });\n                }, canDelete: false }))))) : (\"\"),\n            _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"upcoming\" ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"All upcoming appointments\") }, _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.upcomingAppointments.length ===\n                0 ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBarType\"].info, \"data-testid\": \"no-appointments\" }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No upcoming appointments\"))) : (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"appointments-listing\", \"data-testid\": \"appointments-list\" }, react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"AppointmentsListNoDate\"], { appointments: _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser\n                    .upcomingAppointments, onClick: id => {\n                    this.selectedAppointmentId = id;\n                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({\n                        sub: \"details\"\n                    });\n                }, canDelete: false }))))) : (\"\"),\n            _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"actions\" ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"m-t-20\", style: { textAlign: \"center\" } },\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"PrimaryButton\"], { className: \"m-5\", text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Logout\"), iconProps: { iconName: \"lock\" }, onClick: () => _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].logout(), \"data-testid\": \"logout\" }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"DefaultButton\"], { iconProps: { iconName: \"ContactInfo\" }, className: \"m-5\", text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Switch user\"), onClick: () => _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].resetUser(), \"data-testid\": \"switch\" }))) : (\"\"),\n            this.selectedAppointment && _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedSub ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](AppointmentEditorPanel, { appointment: this.selectedAppointment, onDismiss: () => {\n                    this.selectedAppointmentId = \"\";\n                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].unSelectSub();\n                } })) : (\"\")));\n    }\n};\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]\n], UserPanelView.prototype, \"selectedAppointmentId\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], UserPanelView.prototype, \"selectedAppointment\", null);\nUserPanelView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx_react__WEBPACK_IMPORTED_MODULE_5__[\"observer\"]\n], UserPanelView);\n\n\n\n//# sourceURL=webpack:///./src/main-components/user.tsx?");

/***/ })

}]);
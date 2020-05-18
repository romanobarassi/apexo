(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./src/modules/staff/components/page.staff.tsx":
/*!*****************************************************!*\
  !*** ./src/modules/staff/components/page.staff.tsx ***!
  \*****************************************************/
/*! exports provided: StaffPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StaffPage\", function() { return StaffPage; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobx-react.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst AppointmentEditorPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! modules/appointments/components/appointment-editor */ \"./src/modules/appointments/components/appointment-editor.tsx\")))\n            .AppointmentEditorPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nlet StaffPage = class StaffPage extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.selectedAppointmentId = \"\";\n        this.tabs = [\n            {\n                key: \"details\",\n                title: \"Staff Member Details\",\n                icon: \"DietPlanNotebook\"\n            },\n            {\n                key: \"permission\",\n                title: \"Level and Permission\",\n                icon: \"Permissions\"\n            },\n            {\n                key: \"appointments\",\n                title: \"Upcoming Appointments\",\n                icon: \"Calendar\",\n                hidden: !_core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.canViewAppointments\n            },\n            {\n                key: \"delete\",\n                title: \"Delete\",\n                icon: \"Trash\",\n                hidden: !this.canEdit\n            }\n        ];\n    }\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.canEditStaff;\n    }\n    get sameUser() {\n        return (_core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser._id ===\n            (this.selectedMember || { _id: \"\" })._id);\n    }\n    get selectedAppointment() {\n        return _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].docs.find(x => x._id === this.selectedAppointmentId);\n    }\n    get selectedMember() {\n        return _modules__WEBPACK_IMPORTED_MODULE_3__[\"staff\"].docs.find(x => x._id === _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedID);\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-component\" },\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"DataTableComponent\"], { maxItemsOnLoad: 10, heads: [\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Staff Member\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Last/Next Appointment\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Contact Details\")\n                ], rows: _modules__WEBPACK_IMPORTED_MODULE_3__[\"staff\"].docs.map(member => ({\n                    id: member._id,\n                    searchableString: member.searchableString,\n                    actions: this.tabs\n                        .filter(x => !x.hidden)\n                        .map(x => ({\n                        key: x.key,\n                        title: x.title,\n                        icon: x.icon,\n                        onClick: () => {\n                            if (x.key === \"delete\") {\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"staff\"].deleteModal(member._id);\n                            }\n                            else {\n                                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({\n                                    id: member._id,\n                                    tab: x.key\n                                });\n                            }\n                        }\n                    })),\n                    cells: [\n                        {\n                            dataValue: member.name,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { name: member.name, secondaryElement: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", { className: \"itl\" },\n                                        member\n                                            .upcomingAppointments\n                                            .length,\n                                        \" \",\n                                        Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"upcoming appointments\")), size: 3 }),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null))),\n                            className: \"no-label\",\n                            onClick: () => {\n                                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({\n                                    id: member._id,\n                                    tab: \"details\"\n                                });\n                            }\n                        },\n                        {\n                            dataValue: (member.lastAppointment ||\n                                member.nextAppointment || {\n                                date: 0\n                            }).date,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"LastNextAppointment\"], { lastAppointment: member.lastAppointment, nextAppointment: member.nextAppointment, onClick: id => {\n                                    this.selectedAppointmentId = id;\n                                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({\n                                        sub: \"details\"\n                                    });\n                                } })),\n                            className: \"hidden-xs\"\n                        },\n                        {\n                            dataValue: member.phone || member.email,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: member.phone, subText: member.phone\n                                        ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Phone number\")\n                                        : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No phone number\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Phone\" })), initialsColor: member.phone\n                                        ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].teal\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: member.email, subText: member.email\n                                        ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Email\")\n                                        : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No Email\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Mail\" })), initialsColor: member.email\n                                        ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].teal\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }))),\n                            className: \"hidden-xs\"\n                        }\n                    ]\n                })), commands: this.canEdit\n                    ? [\n                        {\n                            key: \"addNew\",\n                            title: \"Add new\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Add new\"),\n                            onClick: () => {\n                                const member = _modules__WEBPACK_IMPORTED_MODULE_3__[\"staff\"].new();\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"staff\"].add(member);\n                                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({\n                                    id: member._id,\n                                    tab: \"details\"\n                                });\n                            },\n                            iconProps: {\n                                iconName: \"Add\"\n                            }\n                        }\n                    ]\n                    : [] }),\n            this.selectedMember &&\n                [\"appointments\", \"details\", \"delete\", \"permission\"].indexOf(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab) > -1 ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Panel\"], { isOpen: !!this.selectedMember, type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PanelType\"].medium, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].unSelect();\n                }, onRenderNavigation: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"panel-heading\" },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PanelTop\"], { title: this.selectedMember.name, type: \"Staff Member\", onDismiss: () => _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].unSelect() }),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PanelTabs\"], { currentSelectedKey: _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab, onSelect: key => {\n                            _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({ tab: key });\n                        }, items: this.tabs }))) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-editor\" },\n                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"details\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Basic Info`) },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-input\" },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Name\"), value: this.selectedMember.name, onChange: (ev, val) => (this.selectedMember.name = val), disabled: !this.canEdit, \"data-testid\": \"staff-name\" })),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-input\" },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Label\"], null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Days on duty\")),\n                                _utils__WEBPACK_IMPORTED_MODULE_4__[\"dateNames\"]\n                                    .days()\n                                    .map((day, x) => {\n                                    const y = Number(_modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"weekend_num\"));\n                                    return {\n                                        el: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Checkbox\"], { className: \"day-selector\", key: day, disabled: !this\n                                                .canEdit, label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(_utils__WEBPACK_IMPORTED_MODULE_4__[\"dateNames\"].daysShort()[x]), checked: this.selectedMember.onDutyDays.indexOf(day) > -1, onChange: (ev, checked) => {\n                                                if (checked) {\n                                                    this.selectedMember.onDutyDays.push(day);\n                                                }\n                                                else {\n                                                    this.selectedMember.onDutyDays.splice(this.selectedMember.onDutyDays.indexOf(day), 1);\n                                                }\n                                            } })),\n                                        s: x > y\n                                            ? x - y\n                                            : x + y + 7\n                                    };\n                                })\n                                    .sort((a, b) => {\n                                    return a.s - b.s;\n                                })\n                                    .map(x => x.el))),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Contact Details`) },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], { gutter: 8 },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { sm: 12 },\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-input\" },\n                                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Phone number\"), value: this.selectedMember\n                                                .phone, onChange: (ev, val) => (this.selectedMember.phone = val), disabled: !this.canEdit, \"data-testid\": \"phone-number\" }))),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { sm: 12 },\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-input\" },\n                                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Email\"), value: this.selectedMember\n                                                .email, onChange: (ev, val) => (this.selectedMember.email = val), disabled: !this.canEdit, \"data-testid\": \"email\" }))))))) : (\"\"),\n                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"permission\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                        this.selectedMember._id ===\n                            _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser._id ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Login PIN`) },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-input\" },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { id: \"login-pin\", label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Login PIN\"), value: this.selectedMember.pin, onChange: (ev, v) => {\n                                        if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(v) < 10000) {\n                                            this.selectedMember.pin = v.toString();\n                                        }\n                                        else {\n                                            this.forceUpdate();\n                                        }\n                                    }, type: \"number\", max: 9999 })),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].info }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Only you can edit this PIN, and it can only be 4 numbers\")))) : (\"\"),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Permission`) },\n                            this.sameUser ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"You can't edit your own level and permissions\")),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null))) : (\"\"),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember.operates, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Operates on patients\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Doesn't operate on patients\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.operates = newVal;\n                                } }),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember.canViewStaff, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view staff page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view staff page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewStaff = newVal;\n                                } }),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canViewPatients, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view patients page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view patients page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewPatients = newVal;\n                                } }),\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"module_orthodontics\") ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canViewOrtho, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view orthodontics page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view orthodontics page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewOrtho = newVal;\n                                } })) : (\"\"),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canViewAppointments, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view appointments page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view appointments page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewAppointments = newVal;\n                                } }),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canViewTreatments, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view treatments page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view treatments page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewTreatments = newVal;\n                                } }),\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"module_prescriptions\") ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canViewPrescriptions, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view prescriptions page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view prescriptions page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewPrescriptions = newVal;\n                                } })) : (\"\"),\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"module_statistics\") ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canViewStats, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view statistics page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view statistics page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewStats = newVal;\n                                } })) : (\"\"),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canViewSettings, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view settings page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view settings page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewSettings = newVal;\n                                } }),\n                            this.selectedMember.canViewStaff ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canEditStaff, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit staff page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit staff page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditStaff = newVal;\n                                } })) : (\"\"),\n                            this.selectedMember.canViewPatients ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canEditPatients, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit patients page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit patients page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditPatients = newVal;\n                                } })) : (\"\"),\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"module_orthodontics\") &&\n                                this.selectedMember.canViewOrtho ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canEditOrtho, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit orthodontics page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit orthodontics page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditOrtho = newVal;\n                                } })) : (\"\"),\n                            this.selectedMember\n                                .canViewAppointments ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canEditAppointments, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit appointments page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit appointments page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditAppointments = newVal;\n                                } })) : (\"\"),\n                            this.selectedMember\n                                .canViewTreatments ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canEditTreatments, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit treatments page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit treatments page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditTreatments = newVal;\n                                } })) : (\"\"),\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"module_prescriptions\") &&\n                                this.selectedMember\n                                    .canViewPrescriptions ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canEditPrescriptions, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit prescriptions page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit prescriptions page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditPrescriptions = newVal;\n                                } })) : (\"\"),\n                            this.selectedMember.canViewSettings ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.selectedMember\n                                    .canEditSettings, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit settings page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit settings page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditSettings = newVal;\n                                } })) : (\"\")))) : (\"\"),\n                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"appointments\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Upcoming Appointments`) }, this.selectedMember.upcomingAppointments\n                        .length ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_3__[\"AppointmentsList\"], { list: this.selectedMember\n                            .upcomingAppointments })) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].info }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"There are no upcoming appointments for this staff member\"))))) : (\"\"),\n                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"delete\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Are you sure you want to delete\")),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PrimaryButton\"], { className: \"delete\", iconProps: {\n                                iconName: \"delete\"\n                            }, text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Delete\"), onClick: () => {\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"staff\"].delete(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedID);\n                                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].unSelect();\n                            } }))) : (\"\")))) : (\"\"),\n            this.selectedAppointment ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](AppointmentEditorPanel, { appointment: this.selectedAppointment, onDismiss: () => (this.selectedAppointmentId = \"\") })) : (\"\")));\n    }\n};\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], StaffPage.prototype, \"selectedAppointmentId\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], StaffPage.prototype, \"canEdit\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], StaffPage.prototype, \"sameUser\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], StaffPage.prototype, \"selectedAppointment\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], StaffPage.prototype, \"selectedMember\", null);\nStaffPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], StaffPage);\n\n\n\n//# sourceURL=webpack:///./src/modules/staff/components/page.staff.tsx?");

/***/ })

}]);
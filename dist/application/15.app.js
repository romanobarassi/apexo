(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/core/demo.ts":
/*!**************************!*\
  !*** ./src/core/demo.ts ***!
  \**************************/
/*! exports provided: loadDemoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadDemoData\", function() { return loadDemoData; });\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n\n\nfunction randomInRange(minimum, maximum) {\n    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;\n}\nfunction randomDate() {\n    const now = new Date().getTime();\n    const diff = _utils__WEBPACK_IMPORTED_MODULE_1__[\"day\"] * 50;\n    return randomInRange(now - diff, now + diff);\n}\nfunction randomFromArray(array, canBeUndefined) {\n    return array[randomInRange(0, array.length - 1)];\n}\nfunction randomLabels() {\n    const labels = [\n        \"VIP\",\n        \"comprehensive\",\n        \"ideal\",\n        \"friend\",\n        \"colleague\",\n        \"co-worker\",\n        \"relative\",\n        \"TM\",\n        \"hesitant\",\n        \"introvert\",\n        \"cooperative\",\n        \"family-plan\",\n        \"religious\",\n        \"frail\",\n        \"old\"\n    ];\n    const label = randomFromArray(labels, true);\n    const result = [];\n    if (label) {\n        result.push({ text: label, type: Object(_common_components__WEBPACK_IMPORTED_MODULE_0__[\"getRandomTagType\"])(label) });\n    }\n    return result;\n}\nfunction randomAddress() {\n    const addresses = [\n        \"6031 Vest Dr, Dublin, VA, 24084\",\n        \"19638 Deer Run Rd, Warrenton, MO, 63383\",\n        \"380 32nd St NE, Paris, TX, 75460\",\n        \"5118 W Scioto Dr, Fairfield, OH, 45014\",\n        \"6250 Mirons 16.8 Ln, Rapid River, MI, 49878\",\n        \"26933 State 3 Rte #3, Watertown, NY, 13601\",\n        \"6031 Vest Dr, Dublin, VA, 24084\",\n        \"19638 Deer Run Rd, Warrenton, MO, 63383\",\n        \"380 32nd St NE, Paris, TX, 75460\",\n        \"1244 W Lebanon St, Mount Airy, NC, 27030\",\n        \"5118 W Scioto Dr, Fairfield, OH, 45014\"\n    ];\n    return randomFromArray(addresses, false);\n}\nfunction randomPhoneNumber() {\n    const addresses = [\n        \"07874653871\",\n        \"07387462516\",\n        \"07839847564\",\n        \"07184758493\",\n        \"07878362531\",\n        \"07654578123\",\n        \"07809032513\",\n        \"07800983726\",\n        \"07829477772\"\n    ];\n    return randomFromArray(addresses, false);\n}\nfunction randomCondition() {\n    const addresses = [\"filled\", \"sound\", \"compromised\", \"endo\", \"missing\"];\n    return randomFromArray(addresses, false);\n}\nfunction loadDemoData() {\n    return new Promise((resolve, reject) => {\n        /*\n        // TODO: fix this\n        const Http = new XMLHttpRequest();\n        const url = \"./demo.json\";\n        Http.open(\"GET\", url);\n        Http.send();\n        Http.onreadystatechange = function(e) {\n            if (this.readyState === 4) {\n                const demoData: any = JSON.parse(Http.responseText);\n\n                treatments.list = demoData.treatmentsData.treatments.list.map(\n                    (x: any) => new Treatment(x)\n                );\n                setting.list = demoData.settingsData.settings.list.map(\n                    (x: any) => new SettingsItem(x)\n                );\n                staff.list = demoData.staffData.staffMembers.list.map(\n                    (x: any) => new StaffMember(x)\n                );\n                (prescriptions as any).__list = demoData.prescriptionsData.prescriptions.list.map(\n                    (x: any) => new PrescriptionItem(x as any)\n                );\n                patients.list = demoData.patientsData.patients.list.map(\n                    (x: any) => new Patient(x as any)\n                );\n                orthoCases.list = demoData.orthoData.cases.list.map(\n                    (x: any) => new OrthoCase(x)\n                );\n                appointments.list = demoData.appointmentsData.appointments.list.map(\n                    (x: any) => new Appointment(x)\n                );\n\n                patients.list.forEach((patient, i) => {\n                    patients.list[i].labels = randomLabels();\n                    patients.list[i].address = randomAddress();\n                    patients.list[i].phone = randomPhoneNumber();\n                    patients.list[i].email =\n                        patients.list[i].name.toLowerCase().replace(/\\W/g, \"\") +\n                        \"@gmail.com\";\n                    patients.list[i].birthYear =\n                        Math.floor(Math.random() * 49) + 12;\n                    patients.list[i].teeth.forEach((x, ti) => {\n                        if (Math.floor(Math.random() * 49) + 12 < 35) {\n                            patients.list[i].teeth[\n                                ti\n                            ].condition = randomCondition() as any;\n                        }\n                    });\n                });\n\n                staff.list.forEach((member, i) => {\n                    staff.list[i].phone = randomPhoneNumber();\n                    staff.list[i].email =\n                        staff.list[i].name.toLowerCase().replace(/\\W/g, \"\") +\n                        \"@gmail.com\";\n                });\n\n                appointments.list.forEach((appointment, i) => {\n                    appointments.list[i].date = randomDate();\n                    appointments.list[i].treatmentID =\n                        randomFromArray(\n                            treatments.list.map(x => x._id),\n                            false\n                        ) || treatments.list[0]._id;\n\n                    appointments.list[i].finalPrice =\n                        appointment.expenses + randomInRange(0, 30);\n\n                    if (randomInRange(0, 10) > 8) {\n                        appointments.list[i].paidAmount =\n                            appointment.finalPrice + randomInRange(-10, 0);\n                    } else {\n                        appointments.list[i].paidAmount =\n                            appointment.finalPrice;\n                    }\n\n                    appointments.list[i].staffID = [\n                        randomFromArray(\n                            staff.list.filter(x => x.operates).map(x => x._id),\n                            false\n                        )\n                    ];\n\n                    appointments.list[i].isDone =\n                        appointment.date < new Date().getTime();\n                });\n\n                store.set(\"user_id\", \"89ab37f032d6f1b11512\");\n                resolve();\n            }\n        };\n        */\n    });\n}\n\n\n//# sourceURL=webpack:///./src/core/demo.ts?");

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/_components/alert.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_components/alert.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav -->\n\n    \n    <!-- main app container \n    <div class=\"jumbotron\">\n        <table align=\"center\"> -->\n                \n                    <alert></alert>\n                    <router-outlet></router-outlet>\n        <!--</table>\n    </div>-->\n<style>\n.jumbotron{\n    background: #691101;\n}\nbody {\n    margin: 0;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    /* width: 50%; */\n    padding: 73px 400px 0;\n}\n</style>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/empdetail/empdetail.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/empdetail/empdetail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-toolbar color=\"primary\" class=\"navbar\">\n    <div>P.I.C.T - MIS SYSTEM </div>\n    <div>\n    <span>Home</span>\n    <span>logout</span>\n      </div>\n  </mat-toolbar> \n-->\n <!-- \n  <mat-sidenav-container>\n    <mat-sidenav mode=\"over\" [(opened)]=\"opened\">Sidenav\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\">close</button>\n        <div><button color=\"primary\" mat-raised-button>New emplyee</button></div>\n        <div><button color=\"primary\" mat-raised-button>View specific Employee</button></div>\n        <div><button color=\"primary\" mat-raised-button>Report</button></div>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\">Menu</button>\n            </mat-sidenav-content>\n  </mat-sidenav-container>\n    -->\n        <!--\n          main page\n        -->\n        <section>\n          <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n              <div class=\"navbar-nav\">\n                  <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n                  <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n              </div>\n          </nav>\n        </section>\n\n        <div class=\"jumbotron\">\n            \n            <mat-horizontal-stepper linear>\n\n              <mat-step label=\"Data entery sec 1\">\n              <p>Data entery sec 1</p>\n           \n              <form class=\"example-form\" [formGroup]=\"EmpForm\" (ngSubmit)=\"onSubmit(EmpForm)\" novalidate>\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Employee\" formControlName=\"empid\">\n                  </mat-form-field>\n                  <div class=\"alert alert-danger\" [hidden]=\"EmpForm.controls.empid.valid\">EMP ID is required</div>\n                  <!--[formControl]=\"salutationControl\"-->\n                  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n                    <td><mat-form-field>\n                        <mat-label>Salutation</mat-label>\n                        <mat-select formControlName=\"salutation\" required>\n                          <mat-option >--</mat-option>\n                          <mat-option *ngFor=\"let sal of salutation\" [value]=\"sal\">\n                            {{sal}}\n                          </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"salutationControl.hasError('required')\">Please choose an Salutation</mat-error>\n                      </mat-form-field></td>\n                    <td><mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"First name\" formControlName=\"fname\" required>\n                    </mat-form-field></td>\n                    <td><mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Middle name\" formControlName=\"mname\" required>\n                      </mat-form-field></td>\n                    <td><mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Last Name\" formControlName=\"lname\" required>\n                    </mat-form-field></td>\n                  </tr>\n                 \n                  \n                  <tr>\n                      <td colspan=\"2\"><mat-form-field class=\"example-full-width\">\n                         <textarea matInput formControlName=\"caddress\" placeholder=\"Address\"></textarea>\n                       </mat-form-field></td>\n                       <td><mat-form-field class=\"example-full-width\">\n                        <input matInput #postalCode maxlength=\"6\" placeholder=\"Postal Code\" value=\"xxxxxx\">\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 6</mat-hint>\n                      </mat-form-field></td>\n                      </tr>\n                      <tr>\n                      <td colspan=\"2\"><mat-form-field class=\"example-full-width\">\n                        <textarea matInput formControlName=\"paddress\" placeholder=\"Permanent Address\"></textarea>\n                      </mat-form-field></td>\n                      <td><mat-form-field class=\"example-full-width\">\n                        <input matInput #postalCode maxlength=\"6\" placeholder=\"Postal Code\" value=\"xxxxxx\">\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 6</mat-hint>\n                      </mat-form-field></td>\n                    </tr>\n                    \n                    \n                    <tr>\n\n                            <td><mat-label>Matrital Status: </mat-label>\n                              <mat-radio-group formControlName=\"mstatus\">\n                                <td><mat-radio-button value=\"Single\" color=\"primary\">Single</mat-radio-button></td>\n                                  <td><mat-radio-button value=\"Married\" color=\"accent\">Married</mat-radio-button></td>\n                                  </mat-radio-group>\n\n\n                      <td><mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"number\" formControlName=\"nchild\" placeholder=\"No. of children\" required>\n                      </mat-form-field></td>\n                      <td><mat-form-field class=\"example-full-width\">\n                        <input matInput formControlName=\"religion\" placeholder=\"Religion\" required>\n                      </mat-form-field></td>\n                      \n                    </tr>\n                      \n                    \n                    <tr>\n                      <td><mat-label>Gender: </mat-label>\n                        <mat-radio-group formControlName=\"gender\">\n                          <td><mat-radio-button value=\"Male\" color=\"primary\">Male</mat-radio-button></td>\n                            <td><mat-radio-button value=\"Female\" color=\"accent\">Female</mat-radio-button></td>\n                            </mat-radio-group>\n                          <td><mat-form-field class=\"example-full-width\">\n                            <input formControlName=\"caste\" matInput placeholder=\"Caste\" required>\n                          </mat-form-field></td>\n                          <td><mat-form-field>\n                              <input formControlName=\"dob\" matInput [matDatepicker]=\"myDatePicker\" placeholder=\"Dateofbirth\">\n                              <mat-datepicker-toggle matSuffix [for]=\"myDatePicker\"></mat-datepicker-toggle>\n                              <mat-datepicker #myDatePicker></mat-datepicker>\n                            </mat-form-field></td>\n                        </tr>\n                  \n                  <tr>\n                   <td><mat-label>Adhar card</mat-label></td>\n                    <td><mat-form-field class=\"example-full-width\">\n                      <input formControlName=\"aadhar\"  matInput #postalCode maxlength=\"14\" placeholder=\"Adhar Number\" value=\"xxxx-xxxx-xxxx\">\n                      <mat-hint align=\"end\">{{postalCode.value.length}} / 12</mat-hint>\n                    </mat-form-field></td>\n                    <td><mat-label>Pan card</mat-label></td>\n                    <td><mat-form-field class=\"example-full-width\">\n                      <input matInput formControlName=\"pan\"  #postalCode maxlength=\"14\" placeholder=\"Pan Number\" value=\"xxxx-xxxx-xxxx\">\n                      <mat-hint align=\"end\">{{postalCode.value.length}} / 12</mat-hint>\n                    </mat-form-field></td>\n                    \n                  </tr>\n\n                  <tr>\n                    \n                    <td>\n                    <mat-form-field class=\"example-full-width\">\n                      <span matPrefix>+1 &nbsp;</span>\n                      <input type=\"tel\" maxlength=\"10\" formControlName=\"phone\"  matInput placeholder=\"Telephone\">\n                      <mat-icon matSuffix>mode_edit</mat-icon>\n                    </mat-form-field>\n                  </td>\n                      <td><mat-form-field class=\"email\" >\n                          <input formControlName=\"pemail\" matInput placeholder=\"Personal Emil-Id\" required>\n                        </mat-form-field></td>\n      \n                      <td> <mat-form-field class=\"email\" >\n                            <input formControlName=\"oemail\" matInput placeholder=\"Official Emil-Id\" required>\n                          </mat-form-field></td>\n                          </tr>\n                          </table>\n    \n                          <table align=\"center\">\n                            <td><button mat-raised-button matStepperSubmit color=\"accent\" >Submit</button></td>\n                            <td><button mat-raised-button matStepperNext color=\"primary\">Next</button></td>\n                          </table>\n\n                 </form>\n                  \n            </mat-step>\n            \n    \n\n            </mat-horizontal-stepper>\n  </div>\n      <!----\n      <button color=\"primary\" mat-raised-button>hi</button>\n      \n      <button color=\"primary\" mat-button>hi</button>\n      \n      <div>\n        <mat-icon>grade</mat-icon>\n        <mat-icon color=\"primary\">\n            grade\n          </mat-icon>\n      </div>\n      \n      <mat-radio-group>\n      <mat-radio-button value=\"Male\" color=\"primary\">Male</mat-radio-button>\n      <mat-radio-button value=\"Female\" color=\"accent\">Female</mat-radio-button>\n      </mat-radio-group>\n    \n    -->\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/experience/experience.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/experience/experience.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav mode=\"over\" [(opened)]=\"opened\"><mat-icon>home</mat-icon>PICT MIS SYSTEM\n        <mat-icon mat-button (click)=\"opened=!opened\" aria-hidden=\"false\" aria-label=\"Example home icon\">close</mat-icon>\n        <mat-list role=\"list\">\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/staff-form\" mat-raised-button>Emplyee Form</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/report\" mat-raised-button>Report</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/salary\" mat-raised-button>salary</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/experience\" mat-raised-button>Experience</button></mat-list-item>\n        </mat-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n       \n        \n<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <div class=\"navbar-nav\">\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\"><mat-icon>menu</mat-icon></button>\n        <a class=\"nav-item nav-link\" routerLink=\"/home\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n  </nav>\n  <div class=\"jumbotron\">\n<mat-card>\n    <h3>Date:4/4/2019</h3>\n    <br>\n    <br>\n<section>\n    <h1>Experience CERTIFICATE</h1>\n    </section>\n    <br>\n    <br>\n    <section >\n        <h5>\n        This is to certify that {{name}}___________ is working in this institute as detailed below :-\n        </h5>\n    </section>\n    <section>\n         \n                <head> \n                   \n                    <style> \n                        table, th, td { \n                            border: 1px solid black; \n                            border-collapse: collapse; \n                            padding: 6px; \n                        } \n                        body{\n                            background: none;\n                            color: black;\n                        }\n                    </style> \n                </head> \n                \n                <body style = \"text-align:center\"> \n                   \n                    <br>\n                    <table> \n                    <tr> \n                        <th>Name</th> \n                        <th>Designation</th>\n                        <th>Period</th>\n                        <th>Department</th>\n                        </tr> \n                    <tr> \n                        <td rowspan=\"5\">Name</td> \n                        <td>Professor</td>\n                        <td>From ____To ____</td>\n                        <td>I.T</td> \n                    </tr> \n                    <tr> \n                        <td>Associate Professor</td>\n                        <td>From ____To ____</td>\n                        <td>I.T</td> \n                    </tr> \n                    <tr>\n                        <td>Associate Professor</td>\n                        <td>From ____To ____</td>\n                        <td>I.T</td> \n                    </tr> \n                    <tr> \n                        <td>Associate Professor</td>\n                        <td>From ____To ____</td>\n                        <td>Computer</td> \n                    </tr>  \n                    <tr>\n                        <td>Lecturer</td>\n                        <td>From ____To ____</td>\n                        <td>Computer</td> \n                    </tr> \n                  \n                    <!-- The last row \n                    <tr> \n                        // This td will span two columns, that is \n                          //  a single column will take up the space of 2 \n                        <td colspan=\"2\">Sum: $18</td> \n                    </tr> -->\n                    </table>\n                    <br>\n                    <br>\n                    <p>\n                        This certificate is issued on request of ____________________ without any financial obligation /liability on the part of institution ; netither this certificate should be treated as any commitment from the institution in whatsover matter.\n                    </p> \n                  \n                </body> \n           \n    </section>\n    <br>\n    <br>\n    <br>\n    <br>\n    <div>\n        <label  align=\"left\">Asstt. Registrar</label>\n    </div>\n    <div align=\"right\">\n        <label>Principal</label>\n    </div>\n</mat-card>\n<!--\n<div align=\"right\">\n    <button mat-raised-button>Download as PDF</button>\n</div>\n-->\n</div>\n</mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/form/form.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/form/form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-toolbar color=\"primary\" class=\"navbar\">\r\n    <div>P.I.C.T - MIS SYSTEM </div>\r\n    <div>\r\n    <span>Home</span>\r\n    <span>logout</span>\r\n      </div>\r\n  </mat-toolbar> \r\n-->\r\n <!-- \r\n  <mat-sidenav-container>\r\n    <mat-sidenav mode=\"over\" [(opened)]=\"opened\">Sidenav\r\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\">close</button>\r\n        <div><button color=\"primary\" mat-raised-button>New emplyee</button></div>\r\n        <div><button color=\"primary\" mat-raised-button>View specific Employee</button></div>\r\n        <div><button color=\"primary\" mat-raised-button>Report</button></div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\">Menu</button>\r\n            </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n    -->\r\n        <!--\r\n          main page\r\n        -->\r\n        <section>\r\n          <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\r\n              <div class=\"navbar-nav\">\r\n                  <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\r\n                  <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\r\n              </div>\r\n          </nav>\r\n        </section>\r\n\r\n        <div class=\"jumbotron\">\r\n\r\n            \r\n             \r\n           \r\n               <!-- <form [formGroup]=\"form\">\r\n                  <table align=\"center\">\r\n                \r\n            \r\n         \r\n                    <td><mat-form-field >\r\n                        <input formControlName=\"empid\" matInput placeholder=\"Employ-Id\">\r\n                        </mat-form-field></td>\r\n                    <td><button mat-raised-button color=\"primary\" (click)=\"detail()\" >Submit</button></td>\r\n                  </table>\r\n                </form> -->\r\n            \r\n            <mat-horizontal-stepper linear>\r\n\r\n             <!-- <mat-step label=\"Data entery sec 1\">\r\n              <p>Data entery sec 1</p>\r\n           \r\n              <form class=\"example-form\" [formGroup]=\"EmpForm\" (ngSubmit)=\"onSubmit(EmpForm)\" >\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Employee\" formControlName=\"empid\">\r\n                    <div class=\"alert alert-danger\" [hidden]=\"EmpForm.controls.empid.valid\">EMP ID is required</div>\r\n                  </mat-form-field>\r\n                  <!--[formControl]=\"salutationControl\"\r\n                  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                    <td><mat-form-field>\r\n                        <mat-label>Salutation</mat-label>\r\n                        <mat-select formControlName=\"salutation\" required>\r\n                          <mat-option >--</mat-option>\r\n                          <mat-option *ngFor=\"let sal of salutation\" [value]=\"sal\">\r\n                            {{sal}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"salutationControl.hasError('required')\">Please choose an Salutation</mat-error>\r\n                      </mat-form-field></td>\r\n                    <td><mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"First name\" formControlName=\"fname\" required>\r\n                    </mat-form-field></td>\r\n                    <td><mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Middle name\" formControlName=\"mname\" required>\r\n                      </mat-form-field></td>\r\n                    <td><mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Last Name\" formControlName=\"lname\" required>\r\n                    </mat-form-field></td>\r\n                  </tr>\r\n                 \r\n                  \r\n                  <tr>\r\n                      <td colspan=\"2\"><mat-form-field class=\"example-full-width\">\r\n                         <textarea matInput formControlName=\"caddress\" placeholder=\"Address\"></textarea>\r\n                       </mat-form-field></td>\r\n                       <td><mat-form-field class=\"example-full-width\">\r\n                        <input matInput #postalCode maxlength=\"6\" placeholder=\"Postal Code\" formControlName=\"aadhar\" value=\"xxxxxx\">\r\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 6</mat-hint>\r\n                      </mat-form-field></td>\r\n                      </tr>\r\n                      <tr>\r\n                      <td colspan=\"2\"><mat-form-field class=\"example-full-width\">\r\n                        <textarea matInput formControlName=\"paddress\" placeholder=\"Permanent Address\"></textarea>\r\n                      </mat-form-field></td>\r\n                      <td><mat-form-field class=\"example-full-width\">\r\n                        <input matInput #postalCode maxlength=\"6\" placeholder=\"Postal Code\" value=\"xxxxxx\">\r\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 6</mat-hint>\r\n                      </mat-form-field></td>\r\n                    </tr>\r\n                    \r\n                    \r\n                    <tr>\r\n\r\n                            <td><mat-label>Matrital Status: </mat-label>\r\n                              <mat-radio-group formControlName=\"mstatus\">\r\n                                <td><mat-radio-button value=\"Male\" color=\"primary\">Single</mat-radio-button></td>\r\n                                  <td><mat-radio-button value=\"Female\" color=\"accent\">Marrried</mat-radio-button></td>\r\n                                  </mat-radio-group>\r\n\r\n\r\n                      <td><mat-form-field class=\"example-full-width\">\r\n                        <input matInput type=\"number\" formControlName=\"nchild\" placeholder=\"No. of children\" required>\r\n                      </mat-form-field></td>\r\n                      <td><mat-form-field class=\"example-full-width\">\r\n                        <input matInput formControlName=\"religion\" placeholder=\"Religion\" required>\r\n                      </mat-form-field></td>\r\n                      \r\n                    </tr>\r\n                      \r\n                    \r\n                    <tr>\r\n                      <td><mat-label>Gender: </mat-label>\r\n                        <mat-radio-group formControlName=\"gender\">\r\n                          <td><mat-radio-button value=\"Male\" color=\"primary\">Male</mat-radio-button></td>\r\n                            <td><mat-radio-button value=\"Female\" color=\"accent\">Female</mat-radio-button></td>\r\n                            </mat-radio-group>\r\n                          <td><mat-form-field class=\"example-full-width\">\r\n                            <input formControlName=\"caste\" matInput placeholder=\"Caste\" required>\r\n                          </mat-form-field></td>\r\n                          <td><mat-form-field>\r\n                              <input formControlName=\"dob\" matInput [matDatepicker]=\"myDatePicker\" placeholder=\"Dateofbirth\">\r\n                              <mat-datepicker-toggle matSuffix [for]=\"myDatePicker\"></mat-datepicker-toggle>\r\n                              <mat-datepicker #myDatePicker></mat-datepicker>\r\n                            </mat-form-field></td>\r\n                        </tr>\r\n                  \r\n                  <tr>\r\n                   <td><mat-label>Adhar card</mat-label></td>\r\n                    <td><mat-form-field class=\"example-full-width\">\r\n                      <input formControlName=\"aadhar\"  matInput #postalCode maxlength=\"14\" placeholder=\"Adhar Number\" value=\"xxxx-xxxx-xxxx\">\r\n                      <mat-hint align=\"end\">{{postalCode.value.length}} / 12</mat-hint>\r\n                    </mat-form-field></td>\r\n                    <td><mat-label>Pan card</mat-label></td>\r\n                    <td><mat-form-field class=\"example-full-width\">\r\n                      <input matInput formControlName=\"pan\"  #postalCode maxlength=\"14\" placeholder=\"Pan Number\" value=\"xxxx-xxxx-xxxx\">\r\n                      <mat-hint align=\"end\">{{postalCode.value.length}} / 12</mat-hint>\r\n                    </mat-form-field></td>\r\n                    \r\n                  </tr>\r\n\r\n                  <tr>\r\n                    \r\n                    <td>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <span matPrefix>+1 &nbsp;</span>\r\n                      <input type=\"tel\" maxlength=\"10\" formControlName=\"phone\"  matInput placeholder=\"Telephone\">\r\n                      <mat-icon matSuffix>mode_edit</mat-icon>\r\n                    </mat-form-field>\r\n                  </td>\r\n                      <td><mat-form-field class=\"email\" >\r\n                          <input formControlName=\"pemail\" matInput placeholder=\"Personal Emil-Id\" required>\r\n                        </mat-form-field></td>\r\n      \r\n                      <td> <mat-form-field class=\"email\" >\r\n                            <input formControlName=\"oemail\" matInput placeholder=\"Official Emil-Id\" required>\r\n                          </mat-form-field></td>\r\n                          </tr>\r\n                          </table>\r\n    \r\n                          <table align=\"center\">\r\n                            <td><button mat-raised-button matStepperSubmit color=\"accent\" >Submit</button></td>\r\n                            <td><button mat-raised-button matStepperNext color=\"primary\">Next</button></td>\r\n                          </table>\r\n\r\n                 </form>\r\n                  \r\n            </mat-step> -->\r\n           \r\n    \r\n              <mat-step label=\"Data entery sec 1\" > \r\n                \r\n              <p>Data entery sec 1</p>\r\n              \r\n                  <form #formcontrol class=\"example-form\" [formGroup]=\"des2\" novalidate>\r\n                    \r\n                      <table cellspacing=\"0\"><tr>\r\n                         \r\n                            \r\n                            <td><mat-form-field >\r\n                                <input formControlName=\"empid\" matInput placeholder=\"Employ-Id\">\r\n                                </mat-form-field></td>\r\n\r\n                      </tr>\r\n\r\n                      </table>\r\n                        <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                         \r\n                          <td><mat-form-field class=\"col1\">\r\n                              <input formControlName=\"diploma\" matInput placeholder=\"Qualification\" value=\"Diploma\" required>\r\n                            </mat-form-field></td>\r\n                           <td><mat-form-field class=\"example-full-width\">\r\n                              <input formControlName=\"class_diploma\" matInput placeholder=\"Clas/Grade Diploma\" required>\r\n                            </mat-form-field></td>\r\n                            \r\n                            <td><mat-form-field class=\"col1\">\r\n                                <input formControlName=\"diplomainst\" matInput placeholder=\"Diploma-Institute\" >\r\n                              </mat-form-field></td>\r\n                              <td><mat-form-field class=\"col1\">\r\n                                  <input formControlName=\"diplomaboard\" matInput placeholder=\"Diploma-Board\">\r\n                                </mat-form-field></td>\r\n\r\n                                <td><mat-form-field class=\"example-full-width\">\r\n                                    <input formControlName=\"diplomamonthyr\" type=\"date\" matInput placeholder=\"Passing Month&year\" >\r\n                                  </mat-form-field></td>\r\n\r\n                                \r\n    \r\n    \r\n                              </tr>\r\n                      </table>\r\n                        \r\n                         \r\n                      <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                        <td><mat-form-field class=\"col1\">\r\n                            <input formControlName=\"pgqual\" matInput placeholder=\"Qualification PG(Subject)\" >\r\n                          </mat-form-field></td>\r\n                         <td><mat-form-field class=\"example-full-width\">\r\n                            <input formControlName=\"pgclass\" matInput placeholder=\"Clas/Grade PG\" >\r\n                          </mat-form-field></td>\r\n                          \r\n                          <td><mat-form-field class=\"col1\">\r\n                              <input formControlName=\"pginst\" matInput placeholder=\"PG-Institute\" >\r\n                            </mat-form-field></td>\r\n                            <td><mat-form-field class=\"col1\">\r\n                                <input formControlName=\"pguniversity\" matInput placeholder=\"PG-University\">\r\n                              </mat-form-field></td>\r\n\r\n\r\n                                <td><mat-form-field class=\"example-full-width\">\r\n                                    <input formControlName=\"pgmonth\" type=\"date\" matInput placeholder=\"Passing Month&year\" >\r\n                                  </mat-form-field></td>\r\n    \r\n                            </tr>\r\n                    </table>\r\n                           \r\n                    <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                      <td><mat-form-field class=\"col1\">\r\n                          <input formControlName=\"qual_ug\" matInput placeholder=\"Qualification UG(Subject)\" >\r\n                        </mat-form-field></td>\r\n                       <td><mat-form-field class=\"example-full-width\">\r\n                          <input formControlName=\"grade_ug\" matInput placeholder=\"Clas/Grade UG\" >\r\n                        </mat-form-field></td>\r\n                        \r\n                        <td><mat-form-field class=\"col1\">\r\n                            <input formControlName=\"uginst\" matInput placeholder=\"UG-Institute\" >\r\n                          </mat-form-field></td>\r\n                          <td><mat-form-field class=\"col1\">\r\n                              <input formControlName=\"uguniversity\" matInput placeholder=\"UG-University\">\r\n                            </mat-form-field></td>\r\n\r\n                             \r\n                            <td><mat-form-field class=\"example-full-width\">\r\n                                <input formControlName=\"ugmonthyr\" type=\"date\" matInput placeholder=\"Passing Month&year\" >\r\n                              </mat-form-field></td>\r\n    \r\n                          </tr>\r\n                  </table>\r\n                    \r\n                  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                    <td><mat-form-field class=\"example-full-width\">\r\n                        <input formControlName=\"phdsubj\" matInput placeholder=\"Ph.D.(Subject)\" >\r\n                      </mat-form-field></td>\r\n                      \r\n                      <td><mat-form-field class=\"col1\">\r\n                          <input formControlName=\"phdinst\" matInput placeholder=\"Ph.D-Institute\" >\r\n                        </mat-form-field></td>\r\n                        <td><mat-form-field class=\"col1\">\r\n                            <input formControlName=\"phduniversity\" matInput placeholder=\"Ph.D-University\">\r\n                          </mat-form-field></td>\r\n                          <td><mat-form-field class=\"example-full-width\">\r\n                              <input formControlName=\"areaspecial\" matInput placeholder=\"Area of specialization NET/SET\">\r\n                            </mat-form-field></td>\r\n\r\n                           \r\n\r\n                            <td><mat-form-field class=\"example-full-width\">\r\n                                <input formControlName=\"phdmonthyr\" type=\"date\" matInput placeholder=\"Passing Month&year\" >\r\n                              </mat-form-field></td>\r\n    \r\n                        </tr>\r\n                </table>\r\n                  \r\n                <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                <!--  <td><mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Other Qualification\" >\r\n                    </mat-form-field></td>\r\n                    \r\n                    <td><mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Class/grade\" >\r\n                      </mat-form-field></td>\r\n                      \r\n    \r\n                      </tr>\r\n              </table>\r\n    \r\n              <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                \r\n                 \r\n                <td><mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Past Teaching Experience\" >\r\n                  </mat-form-field></td>\r\n\r\n\r\n                        <td><mat-form-field>\r\n                          <input formControlName=\"pastteaching\"  matInput [matDatepicker]=\"techDatePicker\" placeholder=\"Month&year\">\r\n                          <mat-datepicker-toggle matSuffix [for]=\"techDatePicker\"></mat-datepicker-toggle>\r\n                          <mat-datepicker #techDatePicker></mat-datepicker>\r\n                        </mat-form-field></td>\r\n        \r\n    \r\n                    </tr>\r\n            </table>\r\n              \r\n            <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n              <td>\r\n                  <mat-label>Past Industrial Experience</mat-label>\r\n                </td>\r\n\r\n                      \r\n                    <td><mat-form-field>\r\n                      <input formControlName=\"pastindustry\"  matInput [matDatepicker]=\"IndDatePicker\" placeholder=\"Month&year\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"IndDatePicker\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #IndDatePicker></mat-datepicker>\r\n                    </mat-form-field></td>\r\n    \r\n                  </tr>\r\n          </table>\r\n          <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n            <td>\r\n                <mat-label>Past Research Experience</mat-label>\r\n            </td>\r\n\r\n                    <td><mat-form-field>\r\n                      <input formControlName=\"pastresearch\"  matInput [matDatepicker]=\"ResDatePicker\" placeholder=\"Month&year\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"ResDatePicker\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #ResDatePicker></mat-datepicker>\r\n                    </mat-form-field></td>\r\n                  -->\r\n                  <!--<td><mat-form-field class=\"pte\">\r\n                    <input formControlName=\"past_teaching\" matInput placeholder=\"Past Teaching Experience\" >\r\n                  </mat-form-field></td>\r\n                  \r\n  \r\n                 \r\n  \r\n                  <td><mat-form-field class=\"example-full-width\">\r\n                    <input formControlName=\"pt_stardate\" type=\"date\" matInput placeholder=\"From\" >\r\n                  </mat-form-field></td>\r\n      \r\n                  <td><mat-form-field class=\"example-full-width\">\r\n                    <input formControlName=\"pt_enddate\" type=\"date\" matInput placeholder=\"To\" >\r\n                  </mat-form-field></td>\r\n                  </tr>\r\n                  <tr>\r\n                  <td><mat-form-field class=\"example-full-width\">\r\n                    <input formControlName=\"past_industry\" matInput placeholder=\"Past Industrial Experience\" >\r\n                  </mat-form-field></td>\r\n  \r\n                  <td><mat-form-field class=\"example-full-width\">\r\n                    <input formControlName=\"pi_startdate\" type=\"date\" matInput placeholder=\"From\" >\r\n                  </mat-form-field></td>\r\n      \r\n                  <td><mat-form-field class=\"example-full-width\">\r\n                    <input formControlName=\"pi_enddate\" type=\"date\" matInput placeholder=\"To\" >\r\n                  </mat-form-field></td>\r\n                  </tr>\r\n                  <tr>\r\n\r\n                  <td><mat-form-field class=\"example-full-width\">\r\n                    <input formControlName=\"past_research\" matInput placeholder=\"Past Research Experience\" >\r\n                  </mat-form-field></td>\r\n                  \r\n                  <td><mat-form-field class=\"example-full-width\">\r\n                    <input formControlName=\"pr_startdate\" type=\"date\" matInput placeholder=\"From\" >\r\n                  </mat-form-field></td>\r\n      \r\n                  <td><mat-form-field class=\"example-full-width\">\r\n                    <input formControlName=\"pr_enddate\" type=\"date\" matInput placeholder=\"To\" >\r\n                  </mat-form-field></td> -->\r\n\r\n                </tr>\r\n        </table>\r\n            \r\n                      \r\n                    </form>\r\n              \r\n    \r\n    \r\n              <div>\r\n                <table align=\"center\"><tr>\r\n                <td><button mat-raised-button matStepperSubmit color=\"accent\" (click)=\"Submit()\" [disabled]=\"des2.invalid\">Submit</button></td>\r\n                <td><button mat-raised-button matStepperNext color=\"primary\">Next</button></td>\r\n              </tr></table>\r\n              </div>\r\n            </mat-step>\r\n              <mat-step label=\"Data entery sec 2\" required>\r\n              <p>Data entery sec 2</p>\r\n    \r\n    \r\n              <form class=\"example-form\" [formGroup]=\"des3\">\r\n    \r\n                <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                  <td><mat-form-field class=\"example-full-width\">\r\n                      <input type=\"number\" formControlName=\"nop\" matInput placeholder=\"No. of Publications(national Journal)\" >\r\n                    </mat-form-field></td>\r\n                    \r\n                   \r\n               \r\n                  <td><mat-form-field class=\"example-full-width\">\r\n                      <input type=\"number\" formControlName=\"nop_int\" matInput placeholder=\"No. of Publications(Intern National Journal)\" >\r\n                    </mat-form-field></td>\r\n                   \r\n                      </tr>\r\n              </table>\r\n              \r\n              <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n              <td><mat-form-field class=\"example-full-width\">\r\n                <input type=\"number\" formControlName=\"nop_conf\" matInput placeholder=\"No. of Publications(national Conference)\" >\r\n              </mat-form-field></td>\r\n              \r\n             \r\n         \r\n            <td><mat-form-field class=\"example-full-width\">\r\n                <input type=\"number\" formControlName=\"nop_intconf\" matInput placeholder=\"No. of Publications(Intern National conference)\" >\r\n              </mat-form-field></td>\r\n             \r\n                </tr>\r\n    \r\n                \r\n        </table>\r\n    \r\n       \r\n      \r\n      <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n      <td><mat-form-field class=\"example-full-width\">\r\n        <input type=\"number\" formControlName=\"nob\" matInput placeholder=\"No. of book published\" >\r\n      </mat-form-field></td>\r\n      \r\n     \r\n    \r\n    <td><mat-form-field class=\"example-full-width\">\r\n        <input type=\"number\" formControlName=\"nopatents\" matInput placeholder=\"No. of patent granted\" >\r\n      </mat-form-field></td>\r\n     \r\n        </tr>\r\n    </table>\r\n    \r\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <textarea formControlName=\"awarddets\" matInput placeholder=\"Awards received(with details)\"></textarea>\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\" required>\r\n      <input formControlName=\"pggrant\" matInput placeholder=\"Grant Received\" required>\r\n    </mat-form-field></td>\r\n    \r\n    \r\n    </tr>\r\n    </table>\r\n              </form>\r\n              \r\n              <table align=\"center\">\r\n                <td><button mat-raised-button matStepperSubmit color=\"accent\" (click)=\"Submit3()\"  [disabled]=\"des3.invalid\" >Submit</button></td>\r\n                <td><button mat-raised-button matStepperNext color=\"primary\">Next</button></td>\r\n              </table>>\r\n            </mat-step>\r\n              <mat-step label=\"Data entry sec 3\" >\r\n              <p>Data entery sec 3</p>\r\n    \r\n              <form class=\"example-form\" [formGroup]=\"des4\">\r\n    \r\n                  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                      <td><mat-label>Bank Account No.</mat-label></td>\r\n                      <td><mat-form-field class=\"example-full-width\">\r\n                        <input formControlName=\"bankaccno\" matInput #postalCode maxlength=\"12\" placeholder=\"Bank Account No.\" value=\"xxxx-xxxx-xxxx\">\r\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 12</mat-hint>\r\n                      </mat-form-field></td>\r\n                      <td><mat-form-field class=\"example-full-width\">\r\n                          <input formControlName=\"bankname\" matInput placeholder=\"Bank Name\" >\r\n                        </mat-form-field></td>\r\n                        \r\n                       \r\n                      \r\n                      <td><mat-form-field class=\"example-full-width\">\r\n                          <input formControlName=\"banknamebr\" matInput placeholder=\"Branch Name\" >\r\n                        </mat-form-field></td>\r\n    </tr>\r\n      \r\n    <tr>\r\n          <td><mat-form-field class=\"example-full-width\">\r\n              <input formControlName=\"dep\" matInput placeholder=\"Department\" >\r\n            </mat-form-field></td>\r\n    <!--\r\n      Department\r\n    -->\r\n    \r\n    <td><mat-form-field>\r\n        <mat-label>Desg</mat-label>\r\n        <mat-select [formControl]=\"desgControl\" required>\r\n          <mat-option>--</mat-option>\r\n          <mat-option *ngFor=\"let desg of desgs\" value=\"salutation\">\r\n            {{desg.value}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"desgControl.hasError('required')\">Please choose an Designation</mat-error>\r\n      </mat-form-field></td>\r\n\r\n        <td><mat-form-field>\r\n          <input formControlName=\"date_join\"  matInput [matDatepicker]=\"JoinDatePicker\" placeholder=\"Date of Joining\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"JoinDatePicker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #JoinDatePicker></mat-datepicker>\r\n        </mat-form-field></td>\r\n\r\n          <td><mat-form-field>\r\n            <input formControlName=\"date_conf\" matInput [matDatepicker]=\"ConfDatePicker\" placeholder=\"Date of Confirmation\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"ConfDatePicker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #ConfDatePicker></mat-datepicker>\r\n          </mat-form-field></td>\r\n    </tr>\r\n   \r\n    <tr>\r\n    <td><mat-label>University approval Number</mat-label></td>\r\n    \r\n    \r\n    \r\n                      <td><mat-form-field class=\"example-full-width\">\r\n                        <input formControlName=\"univapprno\" matInput #postalCode maxlength=\"12\" placeholder=\"University approval No.\" value=\"xxxx-xxxx-xxxx\">\r\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 12</mat-hint>\r\n                      </mat-form-field></td>\r\n\r\n\r\n      \r\n      <td><mat-form-field>\r\n        <input formControlName=\"univapprnodate\" matInput [matDatepicker]=\"UniDatePicker\" placeholder=\"Date of approval\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"UniDatePicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #UniDatePicker></mat-datepicker>\r\n      </mat-form-field></td>\r\n\r\n      \r\n      </tr>\r\n    \r\n                   \r\n              \r\n              \r\n              <tr>\r\n                              <td><mat-label>University approval period</mat-label></td>\r\n\r\n                                <td><mat-form-field>\r\n                                  <input formControlName=\"uni_apprperiodpg\" matInput [matDatepicker]=\"app2DatePicker\" placeholder=\"Date\">\r\n                                  <mat-datepicker-toggle matSuffix [for]=\"app2DatePicker\"></mat-datepicker-toggle>\r\n                                  <mat-datepicker #app2DatePicker></mat-datepicker>\r\n                                </mat-form-field></td>\r\n                              \r\n                                                <td><mat-form-field class=\"example-full-width\">\r\n                                                  <input formControlName=\"uni_apprnumber\" matInput #postalCode maxlength=\"12\" placeholder=\"University approval No.\" value=\"xxxx-xxxx-xxxx\">\r\n                                                  <mat-hint align=\"end\">{{postalCode.value.length}} / 12</mat-hint>\r\n                                                </mat-form-field></td>\r\n                                                \r\n                                                <td><mat-label>Date as PG Teacher</mat-label></td>\r\n                              \r\n\r\n                                <td><mat-form-field>\r\n                                  <input formControlName=\"dateaspg\" matInput [matDatepicker]=\"pgteacher\" placeholder=\"Date as PG Teacher\">\r\n                                  <mat-datepicker-toggle matSuffix [for]=\"pgteacher\"></mat-datepicker-toggle>\r\n                                  <mat-datepicker #pgteacher></mat-datepicker>\r\n                                </mat-form-field></td>\r\n\r\n                                \r\n                                </tr>\r\n                                \r\n                                <tr>\r\n                                                <td><mat-label>University approval period</mat-label></td>\r\n                                               \r\n\r\n                                                  <td><mat-form-field>\r\n                                                    <input formControlName=\"uni_apprperiodphd\" matInput [matDatepicker]=\"app3DatePicker\" placeholder=\"Date \">\r\n                                                    <mat-datepicker-toggle matSuffix [for]=\"app3DatePicker\"></mat-datepicker-toggle>\r\n                                                    <mat-datepicker #app3DatePicker></mat-datepicker>\r\n                                                  </mat-form-field></td>\r\n                                                \r\n                                                                  <td><mat-form-field class=\"example-full-width\">\r\n                                                                    <input formControlName=\"uni_apprnumberphd\" matInput #postalCode maxlength=\"12\" placeholder=\"University approval No.\" value=\"xxxx-xxxx-xxxx\">\r\n                                                                    <mat-hint align=\"end\">{{postalCode.value.length}} / 12</mat-hint>\r\n                                                                  </mat-form-field></td>\r\n                                                                  \r\n                                                                  <td><mat-label>Date as Ph.D Guide</mat-label></td>\r\n                                                \r\n                                                  <td><mat-form-field>\r\n                                                    <input formControlName=\"dateasphd\" matInput [matDatepicker]=\"phdteacher\" placeholder=\"Date as Ph.D Teacher\">\r\n                                                    <mat-datepicker-toggle matSuffix [for]=\"phdteacher\"></mat-datepicker-toggle>\r\n                                                    <mat-datepicker #phdteacher></mat-datepicker>\r\n                                                  </mat-form-field></td>\r\n                                </tr>\r\n                                                  \r\n                                                             \r\n                                                  <tr>\r\n                                                                <td><mat-label>Appointment Expiry Date(if Temporary)</mat-label></td>\r\n                                                                \r\n                                <td><mat-form-field>\r\n                                  <input formControlName=\"app_expiry_temp\" matInput [matDatepicker]=\"expDatePicker\" placeholder=\"If Temporary\">\r\n                                  <mat-datepicker-toggle matSuffix [for]=\"expDatePicker\"></mat-datepicker-toggle>\r\n                                  <mat-datepicker #expDatePicker></mat-datepicker>\r\n                                </mat-form-field></td>\r\n\r\n                                                                  <td><mat-label>Staff:</mat-label>\r\n                                                                    <mat-radio-group formControlName=\"ug_pg\">\r\n                                                                        <td><mat-radio-button value=\"UG\" color=\"primary\">UG</mat-radio-button></td>\r\n                                                                        <td><mat-radio-button value=\"PG\" color=\"accent\">PG</mat-radio-button></td>\r\n                                                                        </mat-radio-group>\r\n\r\n                 \r\n                                                                        <td><mat-label>Present Staff:</mat-label>\r\n                                                                          <mat-radio-group formControlName=\"presentstaff\">\r\n                                                                            <td><mat-radio-button value=\"YES\" color=\"primary\">YES</mat-radio-button></td>\r\n                                                                              <td><mat-radio-button value=\"NO\" color=\"accent\">NO</mat-radio-button></td>\r\n                                                                              </mat-radio-group></td>\r\n                                                                        </tr>\r\n                                                                        \r\n                                                                        \r\n                                                                        <tr>\r\n                                                                          <td><mat-form-field>\r\n                                                                              <mat-label>PAY BAND</mat-label>\r\n                                                                              <span matPrefix>₹ &nbsp;</span>\r\n                                                                              <mat-select [formControl]=\"paybandControl\" required>\r\n                                                                                <mat-option>--</mat-option>\r\n                                                                                <mat-option *ngFor=\"let payband of paybands\" value=\"payband\">\r\n                                                                                  {{payband.value}}\r\n                                                                                </mat-option>\r\n                                                                              </mat-select>\r\n                                                                              <mat-error *ngIf=\"paybandControl.hasError('required')\">Please choose a payband</mat-error>\r\n                                                                            </mat-form-field></td>\r\n                                                                          <td><mat-form-field class=\"example-full-width\">\r\n                                                                              <span matPrefix>₹ &nbsp;</span>\r\n                                                                            <input type=\"number\" formControlName=\"pay\" matInput placeholder=\"PAY\" required>\r\n                                                                          </mat-form-field></td>\r\n                                                                          <td><mat-form-field class=\"example-full-width\">\r\n                                                                              <span matPrefix>₹ &nbsp;</span>\r\n                                                                              <input formControlName=\"paygrade\" matInput placeholder=\"GRADE PAY\" required>\r\n                                                                            </mat-form-field></td>\r\n                                                                           \r\n                                                                            <td><mat-form-field class=\"example-full-width\">\r\n                                                                              <input matInput formControlName=\"uan\" #postalCode maxlength=\"10\" placeholder=\"UAN\" value=\"xxxxxxxxxx\">\r\n                                                                              <mat-hint align=\"end\">{{postalCode.value.length}} / 10</mat-hint>\r\n                                                                            </mat-form-field></td>\r\n                                                                            \r\n                                                                            <td><mat-form-field class=\"example-full-width\">\r\n                                                                              <input matInput formControlName=\"pfaccno\" #postalCode maxlength=\"14\" placeholder=\"PF Account No.\" value=\"xxxx-xxxx-xxxx\">\r\n                                                                              <mat-hint align=\"end\">{{postalCode.value.length}} / 12</mat-hint>\r\n                                                                            </mat-form-field></td>\r\n                                                                            \r\n                                                                        </tr>\r\n                                                                        \r\n                                                                        <tr>\r\n                     \r\n                            <td><mat-label>Resignation Date</mat-label></td>\r\n                  \r\n                                                                \r\n                              <td><mat-form-field>\r\n                                <input formControlName=\"resign_date\" matInput [matDatepicker]=\"regDatePicker\" placeholder=\"Date of resignation\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"regDatePicker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #regDatePicker></mat-datepicker>\r\n                              </mat-form-field></td>\r\n    \r\n                              \r\n                            <td><mat-label>Relieving Date</mat-label></td>\r\n                            \r\n                              <td><mat-form-field>\r\n                                <input formControlName=\"relieve_date\" matInput [matDatepicker]=\"relDatePicker\" placeholder=\"Date of relieving\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"relDatePicker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #relDatePicker></mat-datepicker>\r\n                              </mat-form-field></td>\r\n    \r\n                          </tr>\r\n                  \r\n                          \r\n                          <tr>\r\n                    \r\n                    \r\n\r\n                            <td colspan=\"2\"><mat-label>Staff Type : </mat-label>\r\n                              <mat-radio-group formControlName=\"staff_type\">\r\n                                <td><mat-radio-button value=\"Male\" color=\"primary\">Teaching</mat-radio-button></td>\r\n                                  <td><mat-radio-button value=\"Female\" color=\"accent\">NON-Teaching</mat-radio-button></td>\r\n                                  </mat-radio-group>\r\n    \r\n                    <td><mat-label>Subtype if Non-Teaching : </mat-label>\r\n                      <td><mat-radio-group formControlName=\"sub_staff_type\">\r\n                        <td><mat-radio-button value=\"Male\" color=\"primary\">Teachincal</mat-radio-button></td>\r\n                          <td><mat-radio-button value=\"Female\" color=\"accent\">Non-Teachincal</mat-radio-button></td>\r\n                          </mat-radio-group></td>\r\n                  </tr>\r\n                  \r\n                  <tr>\r\n                     \r\n                    <td><mat-label>Increment Month :</mat-label></td>\r\n\r\n                      <td><mat-form-field>\r\n                        <input formControlName=\"increment_month\" matInput [matDatepicker]=\"incDatePicker\" placeholder=\"Date of increment\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"incDatePicker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #incDatePicker></mat-datepicker>\r\n                      </mat-form-field></td>\r\n                            \r\n                      <td colspan=\"2\"><mat-label>Vacation : </mat-label>\r\n                        <mat-radio-group formControlName=\"vacation\">\r\n                          <td><mat-radio-button value=\"YES\" color=\"primary\">YES</mat-radio-button></td>\r\n                            <td><mat-radio-button value=\"NO\" color=\"accent\">NO</mat-radio-button></td>\r\n                            </mat-radio-group>\r\n    \r\n                  </tr>\r\n\r\n                  <tr>\r\n    \r\n                  <td colspan=\"4\"><mat-form-field class=\"example-full-width\">\r\n                    <textarea formControlName=\"remarks\" matInput placeholder=\"Remark\"></textarea>\r\n                  </mat-form-field></td>\r\n                  </tr>\r\n          </table>\r\n    \r\n    \r\n    \r\n    \r\n                                                                      \r\n   \r\n    \r\n              <table align=\"center\">\r\n                <td><button mat-raised-button matStepperPrevious color=\"accent\">Back</button></td>\r\n                <td><button mat-raised-button matStepperSubmit color=\"accent\" (click)=\"Submit4()\" [disabled]=\"des4.invalid\">Submit</button></td>\r\n              </table>\r\n            </form>\r\n            </mat-step>\r\n            </mat-horizontal-stepper>\r\n  </div>\r\n      <!----\r\n      <button color=\"primary\" mat-raised-button>hi</button>\r\n      \r\n      <button color=\"primary\" mat-button>hi</button>\r\n      \r\n      <div>\r\n        <mat-icon>grade</mat-icon>\r\n        <mat-icon color=\"primary\">\r\n            grade\r\n          </mat-icon>\r\n      </div>\r\n      \r\n      <mat-radio-group>\r\n      <mat-radio-button value=\"Male\" color=\"primary\">Male</mat-radio-button>\r\n      <mat-radio-button value=\"Female\" color=\"accent\">Female</mat-radio-button>\r\n      </mat-radio-group>\r\n    \r\n    -->\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav mode=\"over\" [(opened)]=\"opened\"><mat-icon>home</mat-icon>PICT MIS SYSTEM\n        <mat-icon mat-button (click)=\"opened=!opened\" aria-hidden=\"false\" aria-label=\"Example home icon\">close</mat-icon>\n        <mat-list role=\"list\">\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/empdetail\" mat-raised-button>New Emplyee Form</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/form\" mat-raised-button>Enter Employee Detail</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/reg\" mat-raised-button>View Register Employee</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/new-reg-user\" mat-raised-button>Register new User</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/pdf\" mat-raised-button>pdf_test</button></mat-list-item>\n        </mat-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n       \n        \n<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <div class=\"navbar-nav\">\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\"><mat-icon>menu</mat-icon></button>\n        <a class=\"nav-item nav-link\" routerLink=\"/home\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n  </nav>\n<div class=\"ab\">\n        <ng-marquee>\n                <mark>Hi {{currentUser.firstName}}! </mark>\n            </ng-marquee>\n</div>\n<div class=\"jumbotron\">\n    <section class=\"sec\" align=\"center\"><tr>\n<td><h1>WELCOME TO PICT</h1>\n<p>You're logged in with PICT MIS SYSTEM!!</p></td>\n</tr>\n    </section>\n</div>\n            </mat-sidenav-content>\n  </mat-sidenav-container>\n\n\n<style>\n.jumbotron{\n    background: #1c1c1c;\n   \n}\nbody {\nmargin: 0;\nfont-family: Roboto, \"Helvetica Neue\", sans-serif;\n/* width: 50%; */\npadding: 73px 400px 0;\n}\n    li,p,h1,h2, h3, h4, h5, h6 {\n    margin-bottom: .5rem;\n    font-family: inherit;\n    font-weight: 500;\n    line-height: 1.2;\n    color: white;\n}\ntable {\nborder-collapse: collapse;\ncolor: white;\n}\n.sec{\n    padding: 0 150px 3px 35%;\n}\n\n\n</style>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section1\">\n       <div class=\"img\"> <img mat-card-image color=\"red\" src=\"https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://pict.edu/wp-content/uploads/2015/09/logo-v7.png\" alt=\"PICT-Top Engineering College\">\n       </div>\n\n<div class=\"login\">\n\n    \n    <h2>Admin Login</h2>\n    <form class=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\n            <button routerLink=\"/staff\" class=\"btn btn-primary\">Staff</button>\n        </div>\n       \n    </form>\n    </div>\n    </section>\n    <div>\n    <ng-marquee>\n            <mark>WELCOME TO PICT MIS SYSTEM </mark>\n        </ng-marquee>\n    </div>\n    \n    <style>\n        .section1{\n            padding: 50px 50px 50px;\n        }\n       \n        h2, h3, h4, h5, h6 {\n        margin-bottom: .5rem;\n        font-family: inherit;\n        font-weight: 500;\n        line-height: 1.2;\n        color: white;\n    }\n    .mark, mark {\n        padding: .2em;\n        background-color: transparent;\n        color: white;\n    }\n    .img{\n        padding: 0 0 50px 0;\n    }\n\n    \n    \n    label {\n        display: inline-block;\n        margin-bottom: .3rem;\n        color: white;\n    }\n    /**********************************************************/\n    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n    margin-bottom: .5rem;\n    font-family: inherit;\n    font-weight: 500;\n    line-height: 1.2;\n    color: inherit;\n    padding: 18px 392px 2px;\n}\n.jumbotron {\n    padding: 11px 2rem;\n}\n\n    .form-group {\n    padding: 0px 400px 0;\n}\n.form-control{\n    width: 50%;\n}\n/*img{\n    padding: 10% 400px 0;\n}\n*/\n.login{\n    background-color:#bb10813b; \n    padding: 20px 4rem;\n}\n\n    </style>\n    \n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new-reg-user/new-reg-user.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-reg-user/new-reg-user.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <mat-sidenav-container>\n    <mat-sidenav mode=\"over\" [(opened)]=\"opened\">PICT MIS SYSTEM\n      <mat-icon mat-button (click)=\"opened=!opened\" aria-hidden=\"false\" aria-label=\"Example home icon\">close</mat-icon>\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/empdetail\" mat-raised-button>New Emplyee Form</button></mat-list-item>\n        <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/form\" mat-raised-button>Enter Employee Detail</button></mat-list-item>\n        <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/reg\" mat-raised-button>View Register Employee</button></mat-list-item>\n        <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/new-reg-user\" mat-raised-button>Register new User</button></mat-list-item>\n        </mat-list>\n      </mat-sidenav>\n    <mat-sidenav-content>\n\n            \n<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <div class=\"navbar-nav\">\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\">Menu</button>\n        <a class=\"nav-item nav-link\" routerLink=\"/home\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n  </nav>\n  \n  <div class=\"jumbotron\" align=\"center\">\n          \n   \n       \n  <h2>Register</h2>\n  <section class=\"sec\">\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.username.errors.required\">Username is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n          <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n      </div>\n  </form>\n  </section>\n  </div>\n         </mat-sidenav-content>\n          </mat-sidenav-container>\n <!-- <style>\n          h2, h3, h4, h5, h6 {\n          margin-bottom: .5rem;\n          font-family: inherit;\n          font-weight: 500;\n          line-height: 1.2;\n          color: white;\n      }\n      \n      \n      label {\n          display: inline-block;\n          margin-bottom: .3rem;\n          color: white;\n      }\n      \n      </style>\n    -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pdf/pdf.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pdf/pdf.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>pdf works!</p>\n<button type=\"button\" (click)=\"downloadPDF()\">Download PDF</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reg/reg.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reg/reg.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav mode=\"over\" [(opened)]=\"opened\"><mat-icon>home</mat-icon>PICT MIS SYSTEM\n        <mat-icon mat-button (click)=\"opened=!opened\" aria-hidden=\"false\" aria-label=\"Example home icon\">close</mat-icon>\n        <mat-list role=\"list\">\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/empdetail\" mat-raised-button>New Emplyee Form</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/form\" mat-raised-button>Enter Employee Detail</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/reg\" mat-raised-button>View Register Employee</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/new-reg-user\" mat-raised-button>Register new User</button></mat-list-item>\n          </mat-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n       \n        \n<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <div class=\"navbar-nav\">\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\"><mat-icon>menu</mat-icon></button>\n        <a class=\"nav-item nav-link\" routerLink=\"/home\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n  </nav>\n\n<div class=\"jumbotron\">\n    <table align=\"center\">\n<h3>All registered users:</h3>\n<ul>\n    <li *ngFor=\"let user of users\">\n        {{user.username}} ({{user.firstName}} {{user.lastName}}) \n       \n    </li>\n\n\n</ul>\n</table>\n</div>\n            </mat-sidenav-content>\n  </mat-sidenav-container>\n\n\n<style>\n.jumbotron{\n    background: #1c1c1c;\n   \n}\nbody {\nmargin: 0;\nfont-family: Roboto, \"Helvetica Neue\", sans-serif;\n/* width: 50%; */\npadding: 73px 400px 0;\n}\n    li,p,h1,h2, h3, h4, h5, h6 {\n    margin-bottom: .5rem;\n    font-family: inherit;\n    font-weight: 500;\n    line-height: 1.2;\n    color: white;\n}\ntable {\nborder-collapse: collapse;\ncolor: white;\n}\n\n\n\n</style>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n</div>\n<style>\n        h2, h3, h4, h5, h6 {\n        margin-bottom: .5rem;\n        font-family: inherit;\n        font-weight: 500;\n        line-height: 1.2;\n        color: white;\n    }\n    \n    \n    label {\n        display: inline-block;\n        margin-bottom: .3rem;\n        color: white;\n    }\n    \n    </style>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/report/report.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/report/report.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav mode=\"over\" [(opened)]=\"opened\"><mat-icon>home</mat-icon>PICT MIS SYSTEM\n        <mat-icon mat-button (click)=\"opened=!opened\" aria-hidden=\"false\" aria-label=\"Example home icon\">close</mat-icon>\n        <mat-list role=\"list\">\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/staff-form\" mat-raised-button>Emplyee Form</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/report\" mat-raised-button>Report</button></mat-list-item>\n          </mat-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n       \n        \n<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <div class=\"navbar-nav\">\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\"><mat-icon>menu</mat-icon></button>\n        <a class=\"nav-item nav-link\" routerLink=\"/staff-home\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n  </nav>\n<div class=\"jumbotron\">\n<mat-accordion class=\"example-headers-align\">\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Salary Certificate\n          </mat-panel-title>\n          <mat-panel-description>\n            Inform the date you wish to get Report\n            <mat-icon>date_range</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n    \n        <mat-form-field>\n          <input matInput placeholder=\"From\" [matDatepicker]=\"From1\" (focus)=\"From1.open()\" readonly>\n        </mat-form-field>\n        <mat-datepicker #From1></mat-datepicker>\n\n        <mat-form-field>\n            <input matInput placeholder=\"To\" [matDatepicker]=\"To1\" (focus)=\"To1.open()\" readonly>\n          </mat-form-field>\n          <mat-datepicker #To1></mat-datepicker>\n    \n        <mat-action-row>\n            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n          <button mat-button color=\"warn\" routerLink=\"/salary\" >Request</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Experience Certificate\n            </mat-panel-title>\n            <mat-panel-description>\n                Inform the date you wish to get Report\n              <mat-icon>date_range</mat-icon>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n      \n          <mat-form-field>\n            <input matInput placeholder=\"From\" [matDatepicker]=\"From2\" (focus)=\"From2.open()\" readonly>\n          </mat-form-field>\n          <mat-datepicker #From2></mat-datepicker>\n\n          <mat-form-field>\n          <input matInput placeholder=\"To\" [matDatepicker]=\"To2\" (focus)=\"To2.open()\" readonly>\n        </mat-form-field>\n        <mat-datepicker #To2></mat-datepicker>\n      \n          <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n              <button mat-button color=\"warn\" routerLink=\"/experience\">Request</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n\n  \n    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Offer Letter\n        </mat-panel-title>\n        <mat-panel-description>\n            Inform the date you wish to get Report\n          <mat-icon>date_range</mat-icon>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n  \n      <mat-form-field>\n          <input matInput placeholder=\"From\" [matDatepicker]=\"From3\" (focus)=\"From3.open()\" readonly>\n        </mat-form-field>\n        <mat-datepicker #From3></mat-datepicker>\n\n        <mat-form-field>\n        <input matInput placeholder=\"To\" [matDatepicker]=\"To3\" (focus)=\"To3.open()\" readonly>\n      </mat-form-field>\n      <mat-datepicker #To3></mat-datepicker>\n  \n      <mat-action-row>\n        <button mat-button color=\"primary\" (click)=\"prevStep()\">Previous</button>\n        <button mat-button color=\"warn\" >Request</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n  \n  </mat-accordion>\n  </div>\n  </mat-sidenav-content>\n  </mat-sidenav-container>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/salary/salary.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/salary/salary.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav mode=\"over\" [(opened)]=\"opened\"><mat-icon>home</mat-icon>PICT MIS SYSTEM\n        <mat-icon mat-button (click)=\"opened=!opened\" aria-hidden=\"false\" aria-label=\"Example home icon\">close</mat-icon>\n        <mat-list role=\"list\">\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/staff-form\" mat-raised-button>Emplyee Form</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/report\" mat-raised-button>Report</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/salary\" mat-raised-button>salary</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/experience\" mat-raised-button>Experience</button></mat-list-item>\n        </mat-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n       \n        \n<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <div class=\"navbar-nav\">\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\"><mat-icon>menu</mat-icon></button>\n        <a class=\"nav-item nav-link\" routerLink=\"/home\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n  </nav>\n  <div class=\"jumbotron\">\n<mat-card>\n    <h3>Date:4/4/2019</h3>\n    <br>\n    <br>\n<section>\n    <h1>SALARY CERTIFICATE</h1>\n    </section>\n    <br>\n    <br>\n    <section >\n        <h5>\n        This is to certify that {{name}}___________ is working in this institute as {{Designation}}________________ in {{Department}}____________________ . His/Her salary for the month {{date}}__________ is as below:-\n        </h5>\n    </section>\n    <section>\n         \n                <head> \n                    \n                    <style> \n                        table, th, td { \n                            border: 1px solid black; \n                            border-collapse: collapse; \n                            padding: 6px; \n                        } \n                        body{\n                            background: none;\n                            color: black;\n                        }\n                    </style> \n                </head> \n                \n                <body style = \"text-align:center\"> \n                   \n                    <br>\n                    <br>\n                    <table> \n                    <tr> \n                        <th>Earnings</th> \n                        <th>Month 1</th>\n                        <th>Month 2</th>\n                        <th>Month 3</th>\n                        <th>Deductions</th> \n                        <th>Month 1</th>\n                        <th>Month 2</th>\n                        <th>Month 3</th>\n                    </tr> \n                    <tr> \n                        <td>BASIC PAY/PAY</td> \n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td>P.F.</td>\n                        <td></td>\n                        <td></td>\n                        <td></td> \n                    </tr> \n                    <tr> \n                        <td>D.P/AGP</td> \n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td>PROFESSIONAL TAX</td>\n                        <td></td>\n                        <td></td>\n                        <td></td> \n                    </tr> \n                    <tr> \n                        <td>D.A</td> \n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td>INCOME TAX</td>\n                        <td></td>\n                        <td></td>\n                        <td></td> \n                    </tr> \n                    <tr> \n                        <td>H.R.A</td> \n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td>EVENUE STAMP</td>\n                        <td></td>\n                        <td></td>\n                        <td></td> \n                    </tr> \n                    <tr> \n                        <td>C.C.A</td> \n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td>OTHER DEDUCTIONS</td>\n                        <td></td>\n                        <td></td>\n                        <td></td> \n                    </tr> \n                    <tr> \n                        <td>T.A</td> \n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td>TOTAL DEDUCTIONS</td>\n                        <td></td>\n                        <td></td>\n                        <td></td> \n                    </tr> \n                    <tr> \n                        <td><b>GROSS SALARY(Rs.)</b></td> \n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td><b>NET SALARY(Rs.)</b></td>\n                        <td></td>\n                        <td></td>\n                        <td></td> \n                    </tr> \n                    \n                    <!-- The last row \n                    <tr> \n                        // This td will span two columns, that is \n                          //  a single column will take up the space of 2 \n                        <td colspan=\"2\">Sum: $18</td> \n                    </tr> -->\n                    </table>\n                    <br>\n                    <br>\n                    <p>\n                        This certificate is issued on request of ____________________ without any financial obligation /liability on the part of institution ; netither this certificate should be treated as any commitment from the institution in whatsover matter.\n                    </p> \n                  \n                </body> \n           \n    </section>\n    <br>\n    <br>\n    <br>\n    <br>\n    <div align=\"right\">\n        <label>Principal</label>\n    </div>\n</mat-card>\n<!--\n<div align=\"right\">\n    <button mat-raised-button>Download as PDF</button>\n</div>\n-->\n</div>\n</mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/staff-form/staff-form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/staff-form/staff-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-toolbar color=\"primary\" class=\"navbar\">\n    <div>P.I.C.T - MIS SYSTEM </div>\n    <div>\n    <span>Home</span>\n    <span>logout</span>\n      </div>\n  </mat-toolbar> -->\n\n  <mat-sidenav-container>\n    <mat-sidenav mode=\"over\" [(opened)]=\"opened\">PICT\n      <mat-icon mat-button (click)=\"opened=!opened\" aria-hidden=\"false\" aria-label=\"Example home icon\">close</mat-icon>\n      <mat-list role=\"list\">\n          <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/staff-form\" mat-raised-button>Emplyee Form</button></mat-list-item>\n          <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/report\" mat-raised-button>Report</button></mat-list-item>\n        </mat-list>\n      </mat-sidenav>\n    <mat-sidenav-content>\n\n            \n<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <div class=\"navbar-nav\">\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\">Menu</button>\n        <a class=\"nav-item nav-link\" routerLink=\"/staff-home\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n  </nav>\n  \n        <div class=\"jumbotron\">\n          \n          <table align=\"center\">\n            <mat-horizontal-stepper linear>\n\n             \n            \n    \n              <mat-step label=\"Data entery sec 2\" > \n                <div class=\"login\">\n                <p>Data entery sec 1</p>\n              \n                  <form class=\"example-form\" [formGroup]=\"des2\" >\n                    <mat-form-field>\n                      <input matInput placeholder=\"Emplyee-ID\">\n                    </mat-form-field>\n           \n    \n              <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n              \n                <td><mat-form-field class=\"pte\">\n                  <input formControlName=\"pastteaching\" matInput placeholder=\"Past Teaching Experience\" >\n                </mat-form-field></td>\n                \n\n               \n\n                <td><mat-form-field class=\"example-full-width\">\n                  <input formControlName=\"from1\" type=\"date\" matInput placeholder=\"From\" >\n                </mat-form-field></td>\n    \n                <td><mat-form-field class=\"example-full-width\">\n                  <input formControlName=\"to1\" type=\"date\" matInput placeholder=\"To\" >\n                </mat-form-field></td>\n\n                      \n        \n    \n                    </tr>\n            </table>\n              \n            <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n             \n                \n                <td><mat-form-field class=\"example-full-width\">\n                  <input formControlName=\"pastindustry\" matInput placeholder=\"Past Industrial Experience\" >\n                </mat-form-field></td>\n\n                <td><mat-form-field class=\"example-full-width\">\n                  <input formControlName=\"from2\" type=\"date\" matInput placeholder=\"From\" >\n                </mat-form-field></td>\n    \n                <td><mat-form-field class=\"example-full-width\">\n                  <input formControlName=\"to2\" type=\"date\" matInput placeholder=\"To\" >\n                </mat-form-field></td>\n                      \n                  \n    \n                  </tr>\n          </table>\n          <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n          \n                 \n            <td><mat-form-field class=\"example-full-width\">\n              <input formControlName=\"pastresearch\" matInput placeholder=\"Past Research Experience\" >\n            </mat-form-field></td>\n            \n            <td><mat-form-field class=\"example-full-width\">\n              <input formControlName=\"from3\" type=\"date\" matInput placeholder=\"From\" >\n            </mat-form-field></td>\n\n            <td><mat-form-field class=\"example-full-width\">\n              <input formControlName=\"to3\" type=\"date\" matInput placeholder=\"To\" >\n            </mat-form-field></td>\n\n                  \n    \n                </tr>\n        </table>\n            \n                      \n                    </form>\n    \n    \n              <div>\n                <table align=\"center\"><tr>\n                <td><button [disabled]=\"loading\" mat-raised-button matStepperSubmit color=\"accent\" (click)=\"Submit()\" >Submit</button></td>\n                <td><button mat-raised-button matStepperNext color=\"primary\">Next</button></td>\n              </tr></table>\n              </div>\n              </div>\n            </mat-step>\n              <mat-step label=\"Data entery sec 3\" required>\n              <p>Data entery sec 2</p>\n    \n    <!--\n              <form class=\"example-form\" [formGroup]=\"des3\">\n    \n                <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n                  <td><mat-form-field class=\"example-full-width\">\n                      <input type=\"number\" formControlName=\"nop\" matInput placeholder=\"No. of Publications(national Journal)\" >\n                    </mat-form-field></td>\n                    \n                   \n               \n                  <td><mat-form-field class=\"example-full-width\">\n                      <input type=\"number\" formControlName=\"nop_int\" matInput placeholder=\"No. of Publications(Intern National Journal)\" >\n                    </mat-form-field></td>\n                   \n                      </tr>\n              </table>\n              \n              <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n              <td><mat-form-field class=\"example-full-width\">\n                <input type=\"number\" formControlName=\"nop_conf\" matInput placeholder=\"No. of Publications(national Conference)\" >\n              </mat-form-field></td>\n              \n             \n         \n            <td><mat-form-field class=\"example-full-width\">\n                <input type=\"number\" formControlName=\"nop_intconf\" matInput placeholder=\"No. of Publications(Intern National conference)\" >\n              </mat-form-field></td>\n             \n                </tr>\n    \n                \n        </table>\n    \n       \n      \n      <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n      <td><mat-form-field class=\"example-full-width\">\n        <input type=\"number\" formControlName=\"nob\" matInput placeholder=\"No. of book published\" >\n      </mat-form-field></td>\n      \n     \n    \n    <td><mat-form-field class=\"example-full-width\">\n        <input type=\"number\" formControlName=\"nopatents\" matInput placeholder=\"No. of patent granted\" >\n      </mat-form-field></td>\n     \n        </tr>\n    </table>\n    \n    <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <textarea formControlName=\"awarddets\" matInput placeholder=\"Awards received(with details)\"></textarea>\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\" required>\n      <input formControlName=\"pggrant\" matInput placeholder=\"Grant Received\" required>\n    </mat-form-field></td>\n    \n    \n    </tr>\n    </table>\n  -->\n\n         \n   \n  <!--<div class=\"jumbotron\">-->\n    \n     \n  <mat-accordion class=\"example-headers-align\">\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Publications(National Journal)\n            </mat-panel-title>\n            <mat-panel-description>\n              Click to enter detail\n              <mat-icon>date_range</mat-icon>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          \n          <form class=\"example-form\" [formGroup]=\"des3\">\n          <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n         <mat-form-field>\n            <input formControlName=\"author\" matInput placeholder=\"Name of Author\">\n          </mat-form-field>\n          \n        \n          <mat-form-field>\n            <input matInput placeholder=\"Title of Paper\">\n          </mat-form-field>\n        \n          <mat-form-field>\n            <input matInput placeholder=\"Name of Journal\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"ISSN/FSBN\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Volume No.\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Issue Number\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"pages\">\n          </mat-form-field>\n      \n      \n      \n      \n      \n      \n\n      \n          <mat-form-field>\n            <input matInput placeholder=\"Date\" [matDatepicker]=\"Date1\" (focus)=\"Date1.open()\" readonly>\n          </mat-form-field>\n          <mat-datepicker #Date1></mat-datepicker>\n  \n          </tr>\n          </table>\n          \n            \n      \n          <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            <button mat-button color=\"warn\" (click)=\"Submit3()\">Submit</button>\n          </mat-action-row>\n          </form>\n        </mat-expansion-panel>\n  \n        <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Publications(Inter National Journal)\n              </mat-panel-title>\n              <mat-panel-description>\n                  Inform the date you wish to get Report\n                <mat-icon>date_range</mat-icon>\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n        \n\n            <mat-form-field>\n              <input matInput placeholder=\"Name of Author\">\n            </mat-form-field>\n            \n          \n            <mat-form-field>\n              <input matInput placeholder=\"Title of Paper\">\n            </mat-form-field>\n          \n            <mat-form-field>\n              <input matInput placeholder=\"Name of Journal\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"ISSN/FSBN\">\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              <input matInput placeholder=\"Volume No.\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"Issue Number\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"pages\">\n            </mat-form-field>\n        \n        \n        \n        \n        \n        \n  \n        \n            <mat-form-field>\n              <input matInput placeholder=\"Date\" [matDatepicker]=\"Date2\" (focus)=\"Date2.open()\" readonly>\n            </mat-form-field>\n            <mat-datepicker #Date2></mat-datepicker>\n        \n            <mat-action-row>\n                <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                <button mat-button color=\"warn\" >Submit</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n  \n    \n      <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Publications(National Conference)\n          </mat-panel-title>\n          <mat-panel-description>\n              Inform the date you wish to get Report\n            <mat-icon>date_range</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n    \n        <mat-form-field>\n          <input matInput placeholder=\"Name of Author\">\n        </mat-form-field>\n        \n      \n        <mat-form-field>\n          <input matInput placeholder=\"Title of Paper\">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput placeholder=\"Name of Journal\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"ISSN/FSBN\">\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Volume No.\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Issue Number\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"pages\">\n        </mat-form-field>\n    \n    \n    \n    \n    \n    \n\n    \n        <mat-form-field>\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"Date3\" (focus)=\"Date3.open()\" readonly>\n        </mat-form-field>\n        <mat-datepicker #Date3></mat-datepicker>\n    \n        <mat-action-row>\n            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>>\n          <button mat-button color=\"warn\" >Submit</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Publications(Inter National Conference)\n          </mat-panel-title>\n          <mat-panel-description>\n              Inform the date you wish to get Report\n            <mat-icon>date_range</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n    \n        <mat-form-field>\n          <input matInput placeholder=\"Name of Author\">\n        </mat-form-field>\n        \n      \n        <mat-form-field>\n          <input matInput placeholder=\"Title of Paper\">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput placeholder=\"Name of Journal\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"ISSN/FSBN\">\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Volume No.\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Issue Number\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"pages\">\n        </mat-form-field>\n    \n    \n    \n    \n    \n    \n\n    \n        <mat-form-field>\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"Date4\" (focus)=\"Date4.open()\" readonly>\n        </mat-form-field>\n        <mat-datepicker #Date4></mat-datepicker>\n    \n        <mat-action-row>\n            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n          <button mat-button color=\"warn\" >Submit</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    \n\n      <mat-expansion-panel [expanded]=\"step === 4\" (opened)=\"setStep(4)\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Book Published\n          </mat-panel-title>\n          <mat-panel-description>\n              Inform the date you wish to get Report\n            <mat-icon>date_range</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n    \n       \n\n        <mat-form-field>\n          <input matInput placeholder=\"Name of Author\">\n        </mat-form-field>\n        \n      \n        <mat-form-field>\n          <input matInput placeholder=\"Title of Book\">\n        </mat-form-field>\n      \n        \n        <mat-form-field>\n          <input matInput placeholder=\"Date of Publication\">\n        </mat-form-field>\n        <br>\n        \n        <mat-form-field>\n          <input matInput placeholder=\"pages\">\n        </mat-form-field>\n    \n    \n    \n    \n    \n    \n\n    \n        <mat-form-field>\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"Date5\" (focus)=\"Date5.open()\" readonly>\n        </mat-form-field>\n        <mat-datepicker #Date5></mat-datepicker>\n    \n        <mat-action-row>\n            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n          <button mat-button color=\"warn\" >Submit</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel [expanded]=\"step === 5\" (opened)=\"setStep(5)\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Patent Granted\n          </mat-panel-title>\n          <mat-panel-description>\n              Inform the date you wish to get Report\n            <mat-icon>date_range</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n    \n        <mat-form-field>\n          <input matInput placeholder=\"Name of Author\">\n        </mat-form-field>\n        \n      \n        <mat-form-field>\n          <input matInput placeholder=\"Title of Paper\">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput placeholder=\"Name of Patent\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"ISSN/FSBN\">\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Volume No.\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Issue Number\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"pages\">\n        </mat-form-field>\n    \n    \n    \n    \n    \n    \n\n    \n        <mat-form-field>\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"Date6\" (focus)=\"Date6.open()\" readonly>\n        </mat-form-field>\n        <mat-datepicker #Date6></mat-datepicker>\n\n        \n\n        \n    \n        <mat-action-row>\n            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n          <button mat-button color=\"warn\" >Submit</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel [expanded]=\"step === 6\" (opened)=\"setStep(6)\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Award received \n            </mat-panel-title>\n            <mat-panel-description>\n                Inform the date you wish to get Report\n              <mat-icon>date_range</mat-icon>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n      \n          <mat-form-field>\n            <input matInput placeholder=\"Name of Author\">\n          </mat-form-field>\n          \n        \n          <mat-form-field>\n            <input matInput placeholder=\"Title of Paper\">\n          </mat-form-field>\n        \n          <mat-form-field>\n            <input matInput placeholder=\"Name of Patent\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"ISSN/FSBN\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Volume No.\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Issue Number\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"pages\">\n          </mat-form-field>\n      \n      \n      \n      \n      \n      \n  \n      \n          <mat-form-field>\n            <input matInput placeholder=\"Date\" [matDatepicker]=\"Date7\" (focus)=\"Date7.open()\" readonly>\n          </mat-form-field>\n          <mat-datepicker #Date7></mat-datepicker>\n  \n          \n  \n          \n      \n          <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            <button mat-button color=\"warn\" >Submit</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n\n        \n      <mat-expansion-panel [expanded]=\"step === 7\" (opened)=\"setStep(7)\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Grant received \n          </mat-panel-title>\n          <mat-panel-description>\n              Inform the date you wish to get Report\n            <mat-icon>date_range</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n    \n        <mat-form-field>\n          <input matInput placeholder=\"Funding Agency\">\n        </mat-form-field>\n        \n      \n        <mat-form-field>\n          <input matInput placeholder=\"Total Amount\">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput placeholder=\"Purpose of Grant\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Year\">\n        </mat-form-field>\n        \n\n    \n    \n    \n    \n    \n    \n\n    \n        <mat-form-field>\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"Date8\" (focus)=\"Date8.open()\" readonly>\n        </mat-form-field>\n        <mat-datepicker #Date8></mat-datepicker>\n\n        \n\n        \n    \n        <mat-action-row>\n          <button mat-button color=\"primary\" (click)=\"prevStep()\">Previous</button>\n          <button mat-button color=\"warn\" >Submit</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n      \n    </mat-accordion>\n    <!--</div>--.\n   \n    \n              </form>\n             \n              \n              <table align=\"center\">\n                <td><button mat-raised-button matStepperSubmit color=\"accent\" (click)=\"Submit3()\" >Submit</button></td>\n                <td><button mat-raised-button matStepperNext color=\"primary\">Next</button></td>\n              </table>>\n            </mat-step>\n             \n            </mat-horizontal-stepper>\n          </table>\n            </div>\n            </mat-sidenav-content>\n  </mat-sidenav-container>\n    \n        <!--\n          main page\n        -->\n        \n        \n\n      \n           \n      <!----\n      <button color=\"primary\" mat-raised-button>hi</button>\n      \n      <button color=\"primary\" mat-button>hi</button>\n      \n      <div>\n        <mat-icon>grade</mat-icon>\n        <mat-icon color=\"primary\">\n            grade\n          </mat-icon>\n      </div>\n      \n      <mat-radio-group>\n      <mat-radio-button value=\"Male\" color=\"primary\">Male</mat-radio-button>\n      <mat-radio-button value=\"Female\" color=\"accent\">Female</mat-radio-button>\n      </mat-radio-group>\n    \n    -->\n  \n\n\n<!--\n\n<mat-accordion class=\"example-headers-align\">\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Recipt1\n        </mat-panel-title>\n        <mat-panel-description>\n          Type your name and age\n          <mat-icon>account_circle</mat-icon>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n  \n      <mat-action-row>\n          <button mat-button color=\"primary\">PDF</button>\n        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n  \n    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Recipt2\n        </mat-panel-title>\n        <mat-panel-description>\n          Type the country name\n          <mat-icon>map</mat-icon>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n  \n      <mat-action-row>\n        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n        <button mat-button color=\"primary\" >PDF</button>\n        \n        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n  \n    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Recipt3\n        </mat-panel-title>\n        <mat-panel-description>\n          Inform the date you wish to travel\n          <mat-icon>date_range</mat-icon>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n  \n      <!--<mat-form-field>\n        <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n      </mat-form-field>\n      <mat-datepicker #picker></mat-datepicker>-->\n  \n <!--     <mat-action-row>\n        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n        <button mat-button color=\"primary\" >PDF</button>\n        <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n  \n  </mat-accordion>\n-->\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/staff-home/staff-home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/staff-home/staff-home.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav mode=\"over\" [(opened)]=\"opened\"><mat-icon>home</mat-icon>PICT MIS SYSTEM\n        <mat-icon mat-button (click)=\"opened=!opened\" aria-hidden=\"false\" aria-label=\"Example home icon\">close</mat-icon>\n        <mat-list role=\"list\">\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/staff-form\" mat-raised-button>Emplyee Form</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/report\" mat-raised-button>Report</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/salary\" mat-raised-button>salary</button></mat-list-item>\n            <mat-list-item role=\"listitem\"><button color=\"primary\" routerLink=\"/experience\" mat-raised-button>Experience</button></mat-list-item>\n        </mat-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n       \n        \n<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <div class=\"navbar-nav\">\n        <button color=\"accent\" mat-button (click)=\"opened=!opened\"><mat-icon>menu</mat-icon></button>\n        <a class=\"nav-item nav-link\" routerLink=\"/staff-home\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n  </nav>\n<div class=\"ab\">\n        <ng-marquee>\n                <mark>Hi {{currentUser.firstName}}! </mark>\n            </ng-marquee>\n</div>\n\n  \n<div class=\"jumbotron\">\n    <section class=\"sec\" align=\"center\"><tr>\n<td><h1>Hi {{currentUser.firstName}}!</h1>\n<p>You're logged in with PICT MIS SYSTEM!!(Staff Login)</p>\n</td>\n</tr>\n\n <!--   <div class=\"form-group\">\n        <a routerLink=\"/staff-form\" class=\"btn btn-link\">Form</a>\n</div> -->\n</section>\n</div>\n\n            </mat-sidenav-content>\n  </mat-sidenav-container>\n\n<style>\n.jumbotron{\n    background: #1c1c1c;\n   \n}\nbody {\nmargin: 0;\nfont-family: Roboto, \"Helvetica Neue\", sans-serif;\n/* width: 50%; */\npadding: 73px 400px 0;\n}\n    li,p,h1,h2, h3, h4, h5, h6 {\n    margin-bottom: .5rem;\n    font-family: inherit;\n    font-weight: 500;\n    line-height: 1.2;\n    color: white;\n}\ntable {\nborder-collapse: collapse;\ncolor: white;\n}\n.sec{\n    padding: 0 150px 3px 35%;\n}\n\n\n\n\n\n</style>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/staff/staff.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/staff/staff.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section2\">\n    <div class=\"img\">\n  <img mat-card-image color=\"red\" src=\"https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://pict.edu/wp-content/uploads/2015/09/logo-v7.png\" alt=\"PICT-Top Engineering College\">\n  </div>\n  <div class=\"staff\">\n  \n  <h2>Staff Login</h2>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.username.errors.required\">Username is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n    </div>\n     \n  </form>\n</div>\n</section>\n<div>\n  <ng-marquee>\n      <mark>Welcome to PICT MIS SYSTEm</mark>\n  </ng-marquee>\n  </div>\n  <style>\n        .section2{\n            padding: 50px 50px 50px;\n        }\n       \n        h2, h3, h4, h5, h6 {\n        margin-bottom: .5rem;\n        font-family: inherit;\n        font-weight: 500;\n        line-height: 1.2;\n        color: white;\n    }\n    .mark, mark {\n        padding: .2em;\n        background-color: transparent;\n        color: white;\n    }\n\n    .img{\n        padding: 0 0 50px 0;\n    }\n\n    \n    label {\n        display: inline-block;\n        margin-bottom: .3rem;\n        color: white;\n    }\n    /**********************************************************/\n    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n    margin-bottom: .5rem;\n    font-family: inherit;\n    font-weight: 500;\n    line-height: 1.2;\n    color: inherit;\n    padding: 18px 392px 2px;\n}\n.jumbotron {\n    padding: 11px 2rem;\n}\n\n    .form-group {\n    padding: 0px 400px 0;\n}\n.form-control{\n    width: 50%;\n}\n/*img{\n    padding: 10% 400px 0;\n}\n*/\n.staff{\n    background-color:#bb10813b; \n    padding: 20px 4rem;\n}\n\n    </style>\n    \n    "

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }
    ]; };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/_components/alert.component.html")
        }),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_components/index.ts":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_components/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'app', template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html") }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components */ "./src/app/_components/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _staff_home_staff_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./staff-home/staff-home.component */ "./src/app/staff-home/staff-home.component.ts");
/* harmony import */ var _staff_form_staff_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./staff-form/staff-form.component */ "./src/app/staff-form/staff-form.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _reg_reg_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reg/reg.component */ "./src/app/reg/reg.component.ts");
/* harmony import */ var _empdetail_empdetail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./empdetail/empdetail.component */ "./src/app/empdetail/empdetail.component.ts");
/* harmony import */ var _new_reg_user_new_reg_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./new-reg-user/new-reg-user.component */ "./src/app/new-reg-user/new-reg-user.component.ts");
/* harmony import */ var _pdf_pdf_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pdf/pdf.component */ "./src/app/pdf/pdf.component.ts");
/* harmony import */ var _salary_salary_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./salary/salary.component */ "./src/app/salary/salary.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// used to create fake backend



;


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"],
                _staff_staff_component__WEBPACK_IMPORTED_MODULE_14__["StaffComponent"],
                _staff_home_staff_home_component__WEBPACK_IMPORTED_MODULE_15__["StaffHomeComponent"],
                _staff_form_staff_form_component__WEBPACK_IMPORTED_MODULE_16__["StaffFormComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_17__["ReportComponent"],
                _reg_reg_component__WEBPACK_IMPORTED_MODULE_18__["RegComponent"],
                _empdetail_empdetail_component__WEBPACK_IMPORTED_MODULE_19__["EmpdetailComponent"],
                _new_reg_user_new_reg_user_component__WEBPACK_IMPORTED_MODULE_20__["NewRegUserComponent"],
                _pdf_pdf_component__WEBPACK_IMPORTED_MODULE_21__["PdfComponent"],
                _salary_salary_component__WEBPACK_IMPORTED_MODULE_22__["SalaryComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_23__["ExperienceComponent"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _helpers__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _staff_home_staff_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staff-home/staff-home.component */ "./src/app/staff-home/staff-home.component.ts");
/* harmony import */ var _staff_form_staff_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./staff-form/staff-form.component */ "./src/app/staff-form/staff-form.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _reg_reg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reg/reg.component */ "./src/app/reg/reg.component.ts");
/* harmony import */ var _empdetail_empdetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./empdetail/empdetail.component */ "./src/app/empdetail/empdetail.component.ts");
/* harmony import */ var _new_reg_user_new_reg_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-reg-user/new-reg-user.component */ "./src/app/new-reg-user/new-reg-user.component.ts");
/* harmony import */ var _pdf_pdf_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pdf/pdf.component */ "./src/app/pdf/pdf.component.ts");
/* harmony import */ var _salary_salary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./salary/salary.component */ "./src/app/salary/salary.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
















var appRoutes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'staff', component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_6__["StaffComponent"] },
    { path: 'staff-home', component: _staff_home_staff_home_component__WEBPACK_IMPORTED_MODULE_7__["StaffHomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'staff-form', component: _staff_form_staff_form_component__WEBPACK_IMPORTED_MODULE_8__["StaffFormComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_9__["ReportComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'reg', component: _reg_reg_component__WEBPACK_IMPORTED_MODULE_10__["RegComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'empdetail', component: _empdetail_empdetail_component__WEBPACK_IMPORTED_MODULE_11__["EmpdetailComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'new-reg-user', component: _new_reg_user_new_reg_user_component__WEBPACK_IMPORTED_MODULE_12__["NewRegUserComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'pdf', component: _pdf_pdf_component__WEBPACK_IMPORTED_MODULE_13__["PdfComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'salary', component: _salary_salary_component__WEBPACK_IMPORTED_MODULE_14__["SalaryComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/empdetail/empdetail.component.scss":
/*!****************************************************!*\
  !*** ./src/app/empdetail/empdetail.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  justify-content: space-between;\n}\n\n.jumbotron {\n  color: black;\n}\n\nspan {\n  padding-right: 1rem;\n}\n\nmat-sidenav-container {\n  height: 100%;\n}\n\nmat-sidenav, mat-sidenav-content {\n  padding: 15px;\n}\n\nmat-sidenav {\n  background-color: #3f51b5;\n}\n\nexample-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 90%;\n}\n\n.col1 {\n  width: 100%;\n}\n\n.example-full-width1 {\n  width: 50%;\n}\n\n.example-full-width2 {\n  width: 50%;\n}\n\n.email {\n  width: 70%;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.phone {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.phone {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wZGV0YWlsL0Q6XFxhbmd1bGFyLTctcmVnaXN0cmF0aW9uLWxvZ2luLWV4YW1wbGUtY2xpLW1hc3Rlci9zcmNcXGFwcFxcZW1wZGV0YWlsXFxlbXBkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VtcGRldGFpbC9lbXBkZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7QUNJRjs7QURGQTtFQUNFLHlCQUFBO0FDS0Y7O0FERkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREZBO0VBQ0UsVUFBQTtBQ0tGOztBREZBO0VBRUUsV0FBQTtBQ0lGOztBRERBO0VBQ0UsVUFBQTtBQ0lGOztBRERBO0VBQ0UsVUFBQTtBQ0lGOztBRERBO0VBRUUsVUFBQTtBQ0dGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9lbXBkZXRhaWwvZW1wZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmp1bWJvdHJvbntcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG5tYXQtc2lkZW5hdi1jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbm1hdC1zaWRlbmF2LG1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5tYXQtc2lkZW5hdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7XHJcbn1cclxuXHJcbmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uY29sMVxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgxIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoMiB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmVtYWlsXHJcbntcclxuICB3aWR0aDogNzAlO1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5waG9uZSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGhvbmUge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuIiwiLm5hdmJhciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYsIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG5cbmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmNvbDEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aDEge1xuICB3aWR0aDogNTAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoMiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5lbWFpbCB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbnRkIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4ucGhvbmUge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBob25lIHtcbiAgd2lkdGg6IDIwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/empdetail/empdetail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/empdetail/empdetail.component.ts ***!
  \**************************************************/
/*! exports provided: EmpdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpdetailComponent", function() { return EmpdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared_EmpData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/EmpData */ "./src/app/shared/EmpData.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmpdetailComponent = /** @class */ (function () {
    function EmpdetailComponent(formBuilder, http, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.authenticationService = authenticationService;
        this.isLinear = false;
        this.salutationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.desgControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.desgs = [
            { value: 'X' },
            { value: 'Y' },
            { value: 'Z' },
            { value: 'A' },
        ];
        this.paybandControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.paybands = [
            { value: '100-200' },
            { value: '200-300' },
            { value: '300-400' },
            { value: '400-500' },
        ];
    }
    EmpdetailComponent.prototype.ngOnInit = function () {
        this.model = new _app_shared_EmpData__WEBPACK_IMPORTED_MODULE_2__["default"]('Emp_ID', 'Mr.', 'F_Name', 'M_Name', 'L_Name', 'Father_Name', 'Mother_Name', 'M', 'CAddress', 'Permanent_Address', 'Y', 2, 'Religion', 'Caste', 'DOB', 'Pan', 810903810, 9849849544, 'Official_Email', 'Personal_Email');
        this.salutation = ['Mr.', 'Ms.'];
        this.EmpForm = this.formBuilder.group({
            empid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            salutation: [this.model.salutation, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fathersName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mothersName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            caddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            paddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mstatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nchild: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            caste: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            aadhar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tphone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            oemail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pemail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.des2 = this.formBuilder.group({
            diploma: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            class_diploma: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diplomainst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diplomaboard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diplomamonthyr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            qual_ug: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            grade_ug: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uginst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uguniversity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ugmonthyr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pgqual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pgclass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pginst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pguniversity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pgmonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phdsubj: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phdinst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phduniversity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            areaspecial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phdmonthyr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pastteaching: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pastindustry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pastresearch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.des3 = this.formBuilder.group({
            nop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nop_int: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nop_conf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nop_intconf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nopatents: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            awarddets: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pggrant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.des4 = this.formBuilder.group({
            bankaccno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bankname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            banknamebr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dep: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date_join: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date_conf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uni_apprperiodpg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uni_apprnumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateaspg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uni_apprperiodphd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uni_apprnumberphd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateasphd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ug_pg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            presentstaff: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pay: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            paygrade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pfaccno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            resign_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            relieve_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            staff_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sub_staff_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            increment_month: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vacation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            univapprno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            univapprnodate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            app_expiry_temp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    EmpdetailComponent.prototype.onSubmit = function () {
        console.log(this.EmpForm.value);
        this.http.post('http://10.10.14.236:8080/api/pi/emp', this.EmpForm.value).subscribe(function (result) { alert(result); });
    };
    EmpdetailComponent.prototype.Submit = function () {
        console.log(this.des2.value);
        this.http.post('http://10.10.14.236:8080/api/pi/emp', this.des2.value).subscribe(function (result) { alert(result); });
    };
    EmpdetailComponent.prototype.Submit3 = function () {
        console.log(this.des3.value);
        this.http.post('http://10.10.14.236:8080/api/pi/emp', this.des3.value).subscribe(function (result) { alert(result); });
    };
    EmpdetailComponent.prototype.Submit4 = function () {
        console.log(this.des4.value);
        this.http.post('http://10.10.14.236:8080/api/pi/emp', this.des4.value).subscribe(function (result) { alert(result); });
    };
    EmpdetailComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    EmpdetailComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    EmpdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empdetail',
            template: __webpack_require__(/*! raw-loader!./empdetail.component.html */ "./node_modules/raw-loader/index.js!./src/app/empdetail/empdetail.component.html"),
            styles: [__webpack_require__(/*! ./empdetail.component.scss */ "./src/app/empdetail/empdetail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], EmpdetailComponent);
    return EmpdetailComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n    text-decoration: underline;\r\n}\r\n\r\nh3{\r\n    text-align: right;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n  }\r\n\r\n.mat-card{\r\n      padding: 4% 10% 10% 10%;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksV0FBVztFQUNiOztBQUNBO01BQ0ksdUJBQXVCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5oM3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWF0LWNhcmR7XHJcbiAgICAgIHBhZGRpbmc6IDQlIDEwJSAxMCUgMTAlO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/index.js!./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.scss":
/*!******************************************!*\
  !*** ./src/app/form/form.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  justify-content: space-between;\n}\n\n.jumbotron {\n  color: black;\n}\n\nspan {\n  padding-right: 1rem;\n}\n\nmat-sidenav-container {\n  height: 100%;\n}\n\nmat-sidenav, mat-sidenav-content {\n  padding: 15px;\n}\n\nmat-sidenav {\n  background-color: #3f51b5;\n}\n\nexample-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 90%;\n}\n\n.col1 {\n  width: 100%;\n}\n\n.example-full-width1 {\n  width: 50%;\n}\n\n.example-full-width2 {\n  width: 50%;\n}\n\n.email {\n  width: 70%;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.phone {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.phone {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9EOlxcYW5ndWxhci03LXJlZ2lzdHJhdGlvbi1sb2dpbi1leGFtcGxlLWNsaS1tYXN0ZXIvc3JjXFxhcHBcXGZvcm1cXGZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7QUNLRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDS0Y7O0FERkE7RUFDRSxVQUFBO0FDS0Y7O0FERkE7RUFFRSxXQUFBO0FDSUY7O0FEREE7RUFDRSxVQUFBO0FDSUY7O0FEREE7RUFDRSxVQUFBO0FDSUY7O0FEREE7RUFFRSxVQUFBO0FDR0Y7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5qdW1ib3Ryb257XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5zcGFue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxubWF0LXNpZGVuYXYtY29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5tYXQtc2lkZW5hdixtYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxubWF0LXNpZGVuYXZ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O1xyXG59XHJcblxyXG5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmNvbDFcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoMSB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aDIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5lbWFpbFxyXG57XHJcbiAgd2lkdGg6IDcwJTtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4ucGhvbmUge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBob25lIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcbiIsIi5uYXZiYXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5qdW1ib3Ryb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2LCBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxubWF0LXNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xufVxuXG5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5jb2wxIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgxIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aDIge1xuICB3aWR0aDogNTAlO1xufVxuXG4uZW1haWwge1xuICB3aWR0aDogNzAlO1xufVxuXG50ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLnBob25lIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5waG9uZSB7XG4gIHdpZHRoOiAyMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared_EmpData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/EmpData */ "./src/app/shared/EmpData.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder, http, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.authenticationService = authenticationService;
        this.isLinear = false;
        this.salutationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.desgControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.desgs = [
            { value: 'X' },
            { value: 'Y' },
            { value: 'Z' },
            { value: 'A' },
        ];
        this.paybandControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.paybands = [
            { value: '100-200' },
            { value: '200-300' },
            { value: '300-400' },
            { value: '400-500' },
        ];
    }
    FormComponent.prototype.ngOnInit = function () {
        this.model = new _app_shared_EmpData__WEBPACK_IMPORTED_MODULE_2__["default"]('Emp_ID', 'Mr.', 'F_Name', 'M_Name', 'L_Name', 'Father_Name', 'Mother_Name', 'M', 'CAddress', 'Permanent_Address', 'Y', 2, 'Religion', 'Caste', 'DOB', 'Pan', 810903810, 9849849544, 'Official_Email', 'Personal_Email');
        this.salutation = ['Mr.', 'Ms.'];
        this.EmpForm = this.formBuilder.group({
            empid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            salutation: [this.model.salutation, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fathersName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mothersName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            caddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            paddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mstatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nchild: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            caste: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            aadhar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tphone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            oemail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pemail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.des2 = this.formBuilder.group({
            empid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diploma: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            class_diploma: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diplomainst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diplomaboard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diplomamonthyr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            qual_ug: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            grade_ug: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uginst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uguniversity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ugmonthyr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pgqual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pgclass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pginst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pguniversity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pgmonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phdsubj: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phdinst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phduniversity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            areaspecial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phdmonthyr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            past_teaching: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            past_industry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            past_research: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pt_stardate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pt_enddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pi_startdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pi_enddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pr_startdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pr_enddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.des3 = this.formBuilder.group({
            nop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nop_int: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nop_conf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nop_intconf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nopatents: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            awarddets: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pggrant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.des4 = this.formBuilder.group({
            bankaccno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bankname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            banknamebr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dep: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date_join: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date_conf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uni_apprperiodpg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uni_apprnumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateaspg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uni_apprperiodphd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uni_apprnumberphd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateasphd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ug_pg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            presentstaff: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pay: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            paygrade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pfaccno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            resign_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            relieve_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            staff_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sub_staff_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            increment_month: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vacation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            univapprno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            univapprnodate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            app_expiry_temp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    FormComponent.prototype.onSubmit = function () {
        console.log(this.EmpForm.value);
        this.http.post('http://10.10.14.236:8080/api/pi/emp', this.EmpForm.value).subscribe(function (result) { alert(result); });
    };
    FormComponent.prototype.Submit = function () {
        console.log(this.des2.value);
        this.http.post('http://10.10.14.236:8080/api/pi/emp', this.des2.value).subscribe(function (result) { alert(result); });
    };
    FormComponent.prototype.Submit3 = function () {
        console.log(this.des3.value);
        this.http.post('http://10.10.14.236:8080/api/pi/emp', this.des3.value).subscribe(function (result) { alert(result); });
    };
    FormComponent.prototype.Submit4 = function () {
        console.log(this.des4.value);
        this.http.post('http://10.10.14.236:8080/api/pi/emp', this.des4.value).subscribe(function (result) { alert(result); });
    };
    FormComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    FormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/form/form.component.html"), styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/form/form.component.scss")] }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n  \r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  \r\n}\r\n\r\nmat-form-field {\r\n  margin-right: 12px;\r\n  \r\n}\r\n\r\nelement.style {\r\n  width: 100%;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse; \r\n  width: 70%;\r\n}\r\n\r\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n  height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n  width: 250px;\r\n}\r\n\r\nmain {\r\n  padding: 10px;\r\n}\r\n\r\nhtml, body { \r\n  margin: 0;\r\n  height: 100%;\r\n}\r\n\r\n.ab{\r\n  background: black;\r\n}\r\n\r\n.mark, mark {\r\n  padding: .2em;\r\n  background-color: transparent;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgZmxleC1iYXNpczogMDtcclxuICBcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIFxyXG59XHJcblxyXG5lbGVtZW50LnN0eWxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG5tYWluIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5odG1sLCBib2R5IHsgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFie1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbi5tYXJrLCBtYXJrIHtcclxuICBwYWRkaW5nOiAuMmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authenticationService, router, userService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.router = router;
        this.userService = userService;
        this.users = [];
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"), styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")] }),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, http, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.http = http;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
        /*console.log(this.loginForm.value);
        this.http.post('http://127.0.0.1:8080/api/pi/emp', this.loginForm.value, ).subscribe(result => {alert(result)})
    */ 
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var ng_marquee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-marquee */ "./node_modules/ng-marquee/fesm5/ng-marquee.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var Materialcomponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    ng_marquee__WEBPACK_IMPORTED_MODULE_3__["NgMarqueeModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [Materialcomponents],
            exports: [Materialcomponents]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/new-reg-user/new-reg-user.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/new-reg-user/new-reg-user.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  justify-content: space-between;\n}\n\n.jumbotron {\n  color: black;\n}\n\nspan {\n  padding-right: 1rem;\n}\n\nmat-sidenav-container {\n  height: 100%;\n}\n\nmat-sidenav, mat-sidenav-content {\n  padding: 0px;\n}\n\nmat-sidenav {\n  background-color: #3f51b5;\n}\n\nexample-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 50%;\n}\n\n.col1 {\n  width: 100%;\n}\n\n.email {\n  width: 70%;\n}\n\n.pte {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.phone {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.phone {\n  width: 20%;\n}\n\n.form-control {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlZy11c2VyL0Q6XFxhbmd1bGFyLTctcmVnaXN0cmF0aW9uLWxvZ2luLWV4YW1wbGUtY2xpLW1hc3Rlci9zcmNcXGFwcFxcbmV3LXJlZy11c2VyXFxuZXctcmVnLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25ldy1yZWctdXNlci9uZXctcmVnLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QUREQTtFQUNFLHlCQUFBO0FDSUY7O0FEREE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0lGOztBRERBO0VBQ0UsVUFBQTtBQ0lGOztBRERBO0VBRUUsV0FBQTtBQ0dGOztBREVBO0VBRUUsVUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9uZXctcmVnLXVzZXIvbmV3LXJlZy11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmp1bWJvdHJvbntcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG5zcGFue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxubWF0LXNpZGVuYXYtY29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5tYXQtc2lkZW5hdixtYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5tYXQtc2lkZW5hdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7XHJcbn1cclxuXHJcbmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29sMVxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLmVtYWlsXHJcbntcclxuICB3aWR0aDogNzAlO1xyXG4gIFxyXG59XHJcbi5wdGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4ucGhvbmUge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBob25lIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbiIsIi5uYXZiYXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5qdW1ib3Ryb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2LCBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG5cbmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbDEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVtYWlsIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLnB0ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLnBob25lIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5waG9uZSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMzAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/new-reg-user/new-reg-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/new-reg-user/new-reg-user.component.ts ***!
  \********************************************************/
/*! exports provided: NewRegUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRegUserComponent", function() { return NewRegUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewRegUserComponent = /** @class */ (function () {
    function NewRegUserComponent(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        /* // redirect to home if already logged in
         if (this.authenticationService.currentUserValue) {
             this.router.navigate(['/']);
         }
         //if already login not allow to go back to
         */
    }
    NewRegUserComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(NewRegUserComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewRegUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    NewRegUserComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NewRegUserComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
    ]; };
    NewRegUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-reg-user',
            template: __webpack_require__(/*! raw-loader!./new-reg-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/new-reg-user/new-reg-user.component.html"),
            styles: [__webpack_require__(/*! ./new-reg-user.component.scss */ "./src/app/new-reg-user/new-reg-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], NewRegUserComponent);
    return NewRegUserComponent;
}());



/***/ }),

/***/ "./src/app/pdf/pdf.component.css":
/*!***************************************!*\
  !*** ./src/app/pdf/pdf.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BkZi9wZGYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pdf/pdf.component.ts":
/*!**************************************!*\
  !*** ./src/app/pdf/pdf.component.ts ***!
  \**************************************/
/*! exports provided: PdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfComponent", function() { return PdfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PdfComponent = /** @class */ (function () {
    function PdfComponent() {
    }
    PdfComponent.prototype.downloadPDF = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__();
        doc.text('some txt', 10, 10);
        doc.save('Test.pdf');
    };
    PdfComponent.prototype.ngOnInit = function () {
    };
    PdfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdf',
            template: __webpack_require__(/*! raw-loader!./pdf.component.html */ "./node_modules/raw-loader/index.js!./src/app/pdf/pdf.component.html"),
            styles: [__webpack_require__(/*! ./pdf.component.css */ "./src/app/pdf/pdf.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PdfComponent);
    return PdfComponent;
}());



/***/ }),

/***/ "./src/app/reg/reg.component.css":
/*!***************************************!*\
  !*** ./src/app/reg/reg.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n  }\r\n  \r\n  mat-sidenav {\r\n    width: 250px;\r\n  }\r\n  \r\n  main {\r\n    padding: 10px;\r\n  }\r\n  \r\n  html, body { \r\n    margin: 0;\r\n    height: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnL3JlZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvcmVnL3JlZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgbWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICBtYWluIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGh0bWwsIGJvZHkgeyBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/reg/reg.component.ts":
/*!**************************************!*\
  !*** ./src/app/reg/reg.component.ts ***!
  \**************************************/
/*! exports provided: RegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegComponent", function() { return RegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegComponent = /** @class */ (function () {
    function RegComponent(router, authenticationService, userService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.users = [];
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    RegComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    RegComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    RegComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    RegComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    RegComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    RegComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    RegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reg',
            template: __webpack_require__(/*! raw-loader!./reg.component.html */ "./node_modules/raw-loader/index.js!./src/app/reg/reg.component.html"),
            styles: [__webpack_require__(/*! ./reg.component.css */ "./src/app/reg/reg.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegComponent);
    return RegComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/report/report.component.scss":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  justify-content: space-between;\n}\n\n.jumbotron {\n  color: black;\n}\n\nspan {\n  padding-right: 1rem;\n}\n\nmat-sidenav-container {\n  height: 100%;\n}\n\nmat-sidenav, mat-sidenav-content {\n  padding: 0px;\n}\n\nmat-sidenav {\n  background-color: #3f51b5;\n}\n\nexample-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.col1 {\n  width: 100%;\n}\n\n.email {\n  width: 70%;\n}\n\n.pte {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.phone {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.phone {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L0Q6XFxhbmd1bGFyLTctcmVnaXN0cmF0aW9uLWxvZ2luLWV4YW1wbGUtY2xpLW1hc3Rlci9zcmNcXGFwcFxccmVwb3J0XFxyZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QURGQTtFQUNFLHlCQUFBO0FDS0Y7O0FERkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREZBO0VBQ0UsV0FBQTtBQ0tGOztBREZBO0VBRUUsV0FBQTtBQ0lGOztBRENBO0VBRUUsVUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmp1bWJvdHJvbntcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG5tYXQtc2lkZW5hdi1jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbm1hdC1zaWRlbmF2LG1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbm1hdC1zaWRlbmF2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzNmNTFiNTtcclxufVxyXG5cclxuZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29sMVxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLmVtYWlsXHJcbntcclxuICB3aWR0aDogNzAlO1xyXG4gIFxyXG59XHJcbi5wdGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4ucGhvbmUge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBob25lIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcbiIsIi5uYXZiYXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5qdW1ib3Ryb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2LCBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG5cbmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2wxIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lbWFpbCB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5wdGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5waG9uZSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGhvbmUge1xuICB3aWR0aDogMjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
        this.step = 0;
    }
    ReportComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ReportComponent.prototype.nextStep = function () {
        this.step++;
    };
    ReportComponent.prototype.prevStep = function () {
        this.step--;
    };
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/index.js!./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/report/report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/salary/salary.component.css":
/*!*********************************************!*\
  !*** ./src/app/salary/salary.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n    text-decoration: underline;\r\n}\r\n\r\nh3{\r\n    text-align: right;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n  }\r\n\r\n.mat-card{\r\n      padding: 4% 10% 10% 10%;\r\n  }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsYXJ5L3NhbGFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFdBQVc7RUFDYjs7QUFDQTtNQUNJLHVCQUF1QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NhbGFyeS9zYWxhcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYXQtY2FyZHtcclxuICAgICAgcGFkZGluZzogNCUgMTAlIDEwJSAxMCU7XHJcbiAgfVxyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/salary/salary.component.ts":
/*!********************************************!*\
  !*** ./src/app/salary/salary.component.ts ***!
  \********************************************/
/*! exports provided: SalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryComponent", function() { return SalaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalaryComponent = /** @class */ (function () {
    function SalaryComponent() {
    }
    SalaryComponent.prototype.ngOnInit = function () {
    };
    SalaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary',
            template: __webpack_require__(/*! raw-loader!./salary.component.html */ "./node_modules/raw-loader/index.js!./src/app/salary/salary.component.html"),
            styles: [__webpack_require__(/*! ./salary.component.css */ "./src/app/salary/salary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryComponent);
    return SalaryComponent;
}());



/***/ }),

/***/ "./src/app/shared/EmpData.ts":
/*!***********************************!*\
  !*** ./src/app/shared/EmpData.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var EmpData = /** @class */ (function () {
    function EmpData(empid, salutation, fname, mname, lname, fathersName, mothersName, gender, caddress, paddress, mstatus, nchild, religion, caste, dob, pan, aadhar, phone, oemail, pemail) {
        this.empid = empid;
        this.salutation = salutation;
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
        this.fathersName = fathersName;
        this.mothersName = mothersName;
        this.gender = gender;
        this.caddress = caddress;
        this.paddress = paddress;
        this.mstatus = mstatus;
        this.nchild = nchild;
        this.religion = religion;
        this.caste = caste;
        this.dob = dob;
        this.pan = pan;
        this.aadhar = aadhar;
        this.phone = phone;
        this.oemail = oemail;
        this.pemail = pemail;
    }
    EmpData.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Number },
        { type: Number },
        { type: String },
        { type: String }
    ]; };
    return EmpData;
}());
/* harmony default export */ __webpack_exports__["default"] = (EmpData);


/***/ }),

/***/ "./src/app/staff-form/staff-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/staff-form/staff-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  justify-content: space-between;\n}\n\n.jumbotron {\n  color: black;\n}\n\nspan {\n  padding-right: 1rem;\n}\n\nmat-sidenav-container {\n  height: 100%;\n}\n\nmat-sidenav, mat-sidenav-content {\n  padding: 0px;\n}\n\nmat-sidenav {\n  background-color: #3f51b5;\n}\n\nexample-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.col1 {\n  width: 100%;\n}\n\n.email {\n  width: 70%;\n}\n\n.pte {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.phone {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.phone {\n  width: 20%;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-form-field {\n  margin-right: 12px;\n}\n\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: red;\n  background: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYtZm9ybS9EOlxcYW5ndWxhci03LXJlZ2lzdHJhdGlvbi1sb2dpbi1leGFtcGxlLWNsaS1tYXN0ZXIvc3JjXFxhcHBcXHN0YWZmLWZvcm1cXHN0YWZmLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0YWZmLWZvcm0vc3RhZmYtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7QUNLRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDS0Y7O0FERkE7RUFDRSxXQUFBO0FDS0Y7O0FERkE7RUFFRSxXQUFBO0FDSUY7O0FEQ0E7RUFFRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURFQTs7RUFFRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmLWZvcm0vc3RhZmYtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5qdW1ib3Ryb257XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5zcGFue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxubWF0LXNpZGVuYXYtY29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5tYXQtc2lkZW5hdixtYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5tYXQtc2lkZW5hdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7XHJcbn1cclxuXHJcbmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbDFcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5lbWFpbFxyXG57XHJcbiAgd2lkdGg6IDcwJTtcclxuICBcclxufVxyXG4ucHRle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxudGQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnBob25lIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5waG9uZSB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xyXG59IiwiLm5hdmJhciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYsIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cblxuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbDEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVtYWlsIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLnB0ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLnBob25lIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5waG9uZSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmVkO1xuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/staff-form/staff-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/staff-form/staff-form.component.ts ***!
  \****************************************************/
/*! exports provided: StaffFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFormComponent", function() { return StaffFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffFormComponent = /** @class */ (function () {
    function StaffFormComponent(formBuilder, http, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.authenticationService = authenticationService;
        this.isLinear = false;
        this.salutationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.step = 0;
    }
    StaffFormComponent.prototype.ngOnInit = function () {
        this.des2 = this.formBuilder.group({
            pastteaching: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pastindustry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pastresearch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            from1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            to1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            from2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            to2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            from3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            to3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.des3 = this.formBuilder.group({
            nop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nop_int: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nop_conf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nop_intconf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nopatents: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            awarddets: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pggrant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.id = this.formBuilder.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    StaffFormComponent.prototype.Submit = function () {
        console.log(this.des2.value);
        this.http.post('http://127.0.0.1:8080/api/pi/emp', this.des2.value).subscribe(function (result) { alert(result); });
    };
    StaffFormComponent.prototype.Submit3 = function () {
        console.log(this.des3.value);
        this.http.post('http://127.0.0.1:8080/api/pi/emp', this.des3.value).subscribe(function (result) { alert(result); });
    };
    StaffFormComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    StaffFormComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    StaffFormComponent.prototype.nextStep = function () {
        this.step++;
    };
    StaffFormComponent.prototype.prevStep = function () {
        this.step--;
    };
    StaffFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    StaffFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-form',
            template: __webpack_require__(/*! raw-loader!./staff-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/staff-form/staff-form.component.html"),
            styles: [__webpack_require__(/*! ./staff-form.component.scss */ "./src/app/staff-form/staff-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], StaffFormComponent);
    return StaffFormComponent;
}());



/***/ }),

/***/ "./src/app/staff-home/staff-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/staff-home/staff-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n  \r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  \r\n}\r\n\r\nmat-form-field {\r\n  margin-right: 12px;\r\n  \r\n}\r\n\r\nelement.style {\r\n  width: 100%;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse; \r\n  width: 70%;\r\n}\r\n\r\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n  height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n  width: 250px;\r\n}\r\n\r\nmain {\r\n  padding: 10px;\r\n}\r\n\r\nhtml, body { \r\n  margin: 0;\r\n  height: 100%;\r\n}\r\n\r\n.ab{\r\n  background: black;\r\n}\r\n\r\n.mark, mark {\r\n  padding: .2em;\r\n  background-color: transparent;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYtaG9tZS9zdGFmZi1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zdGFmZi1ob21lL3N0YWZmLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgZmxleC1iYXNpczogMDtcclxuICBcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIFxyXG59XHJcblxyXG5lbGVtZW50LnN0eWxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG5tYWluIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5odG1sLCBib2R5IHsgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFie1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbi5tYXJrLCBtYXJrIHtcclxuICBwYWRkaW5nOiAuMmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/staff-home/staff-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/staff-home/staff-home.component.ts ***!
  \****************************************************/
/*! exports provided: StaffHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffHomeComponent", function() { return StaffHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaffHomeComponent = /** @class */ (function () {
    function StaffHomeComponent(router, authenticationService, userService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.users = [];
        this.panelOpenState = false;
        this.step = 0;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    StaffHomeComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    StaffHomeComponent.prototype.nextStep = function () {
        this.step++;
    };
    StaffHomeComponent.prototype.prevStep = function () {
        this.step--;
    };
    StaffHomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    StaffHomeComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    StaffHomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    StaffHomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    StaffHomeComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    StaffHomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    StaffHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-home',
            template: __webpack_require__(/*! raw-loader!./staff-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/staff-home/staff-home.component.html"),
            styles: [__webpack_require__(/*! ./staff-home.component.css */ "./src/app/staff-home/staff-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], StaffHomeComponent);
    return StaffHomeComponent;
}());



/***/ }),

/***/ "./src/app/staff/staff.component.ts":
/*!******************************************!*\
  !*** ./src/app/staff/staff.component.ts ***!
  \******************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffComponent = /** @class */ (function () {
    function StaffComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/staff-home']);
        }
    }
    StaffComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/staff-home';
    };
    Object.defineProperty(StaffComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    StaffComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    StaffComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
    ]; };
    StaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //selector: 'app-staff',
            template: __webpack_require__(/*! raw-loader!./staff.component.html */ "./node_modules/raw-loader/index.js!./src/app/staff/staff.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:4000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular-7-registration-login-example-cli-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
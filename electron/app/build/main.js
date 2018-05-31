webpackJsonp([10],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttendanceDetailsPage = (function () {
    function AttendanceDetailsPage(navCtrl, navParams, fb, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.db = db;
        this.items = [];
        this.numberPatern = '^[0-9.,]+$';
        var dates = navParams.get('dates');
        this.dateId = navParams.get('id');
        // expan our form, create form array this._fb.array
        this.attendanceForm = this.fb.group({
            id: [this.dateId, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(25)]],
            attendances: this.fb.array([])
        });
        this.setDates(dates);
    }
    AttendanceDetailsPage.prototype.setDates = function (dates) {
        var _this = this;
        var datesFGs = dates.map(function (d) {
            var m = d.midweek > 0 ? d.midweek : '';
            var w = d.weekend > 0 ? d.weekend : '';
            return _this.fb.group({
                id: d.id,
                midweek: [m, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(_this.numberPatern)]],
                weekend: [w, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(_this.numberPatern)]],
            }, { updateOn: 'change' });
        });
        var datesFormArray = this.fb.array(datesFGs);
        this.attendanceForm.setControl('attendances', datesFormArray);
    };
    AttendanceDetailsPage.prototype.saveForm = function () {
        var _this = this;
        var attendanceArray = this.attendanceForm.value.attendances.map(function (a) {
            var aa = _this.db.clone(a);
            console.log(JSON.stringify(aa));
            return aa;
        });
        for (var index = 0; index < attendanceArray.length; index++) {
            var aa = attendanceArray[index];
            this.db.saveAttendance(aa.id, aa);
        }
    };
    AttendanceDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttendanceDetailsPage');
    };
    AttendanceDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attendance-details',template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\pages\attendance-details\attendance-details.html"*/'<!--\n  Generated template for the AttendanceDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Attendance</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="attendanceForm" novalidate>\n    <!-- Start form units array with first row must and dynamically add more -->\n    <ion-card formArrayName="attendances">\n      <ion-card-title>{{ dateId | date: \'MMM yyyy\'}}</ion-card-title>\n      <ion-list>\n        <!-- loop throught units -->\n        <div *ngFor="let a of attendanceForm.controls.attendances.controls; let i=index">\n\n\n          <!-- group name in this case row index -->\n          <div [formGroupName]="i">\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label>\n                    {{ attendanceForm.controls.attendances.controls[i].controls[\'id\'].value | date: \'MMM dd\' }}\n                    {{ attendanceForm.controls.attendances.controls[i].controls[\'id\'].status }}\n                    \n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="number" formControlName="midweek" placeholder="mid week" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="number" formControlName="weekend" placeholder="week end" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-list>\n\n\n    </ion-card>  \n  </form>\n\n  valid:{{ attendanceForm.valid }}\n  Value:{{ attendanceForm.value|json }}\n  \n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col no-padding>\n      <button no-margin ion-button full large color="danger" (click)="closeForm()" icon-start>\n        <ion-icon name="close"></ion-icon>Cancel</button>\n    </ion-col>\n    <ion-col no-padding>\n      <button no-margin ion-button full large color="primary" (click)="saveForm()" icon-start>\n        <ion-icon name="checkmark"></ion-icon>Update</button>\n    </ion-col>\n\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\pages\attendance-details\attendance-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataServiceProvider */]])
    ], AttendanceDetailsPage);
    return AttendanceDetailsPage;
}());

//# sourceMappingURL=attendance-details.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MemberDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberDetailPage = (function () {
    function MemberDetailPage(navCtrl, navParams, fb, db, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.member = null;
        this.edit = null;
        this.submitAttempt = false;
        this.edit = false;
        //this.member=navParams.get("member");
        this.$key = navParams.get("$key");
        //this.groups = 
        this.db.groups.do(function (val) { return console.log("group val", val); });
        console.log(navParams);
        //this.group= new FormControl({ value: navParams.get("group"), disabled: true })
        //this.group.setValue(navParams.get("group"))
        this.memberForm = fb.group({
            fname: [navParams.get("fname"), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            lname: [navParams.get("lname"), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            gender: navParams.get("gender"),
            group: navParams.get("group"),
        });
        //this.memberForm.get('group').setValue(2);
        this.db.groups.subscribe(function (value) {
            _this.groups = value;
        });
    }
    MemberDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemberDetailPage');
    };
    MemberDetailPage.prototype.onClicked = function (toggle) {
        if (this.edit == true) {
        }
        this.edit = toggle;
    };
    MemberDetailPage.prototype.beginEdit = function () {
        this.edit = true;
        //(this.memberForm.get("group") as FormControl ).setDisabledState(this.edit)
    };
    MemberDetailPage.prototype.cancelEdit = function () {
        this.edit = false;
        this.memberForm.setValue({
            fname: this.navParams.get('fname'),
            lname: this.navParams.get('lname'),
            gender: this.navParams.get('gender'),
            group: this.navParams.get('group'),
        });
    };
    MemberDetailPage.prototype.onFormSubmit = function () {
        if (this.edit == true) {
            this.submitAttempt = true;
            if (this.memberForm.valid) {
                this.db.updateMember(this.$key, this.memberForm.value);
                console.log("success!");
                // console.log(this.memberForm.value)
                this.edit = false;
                this.submitAttempt = false;
                this.navCtrl.pop();
            }
            else {
            }
        }
        else {
            this.edit = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MemberDetailPage.prototype, "member", void 0);
    MemberDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-member-detail',template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\pages\member-detail\member-detail.html"*/'<!--\n\n  Generated template for the MemberDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <!--  <ion-buttons left>\n\n               \n\n          <button ion-button icon-only (click)="cancelEdit()" *ngIf="edit" right>\n\n              <ion-icon name="close"></ion-icon>         \n\n          </button> \n\n        </ion-buttons> -->\n\n    <ion-title center>member</ion-title>\n\n\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="onFormSubmit()" *ngIf="edit">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only item-end (click)="beginEdit()" *ngIf="!edit">\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <form [formGroup]="memberForm" (ngSubmit)="onFormSubmit()">\n\n\n\n      <ion-grid fixed>\n\n        <ion-row  align-items-stretch>\n\n          <ion-col col-12 col-sm  col-md-3 align-self-stretch align-self-center>\n\n            <ion-item>\n\n              <ion-label>First Name</ion-label>\n\n              <ion-input formControlName="fname" type="text" [readonly]="!edit" [class.invalid]="!memberForm.controls.fname.valid && (memberForm.controls.fname.dirty || submitAttempt)"\n\n                ></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm  col-md-3 align-self-stretch align-self-center>\n\n            <ion-item>\n\n              <ion-label>Last Name</ion-label>\n\n              <ion-input formControlName="lname" type="text" [readonly]="!edit" [class.invalid]="!memberForm.controls.lname.valid && (memberForm.controls.lname.dirty || submitAttempt)"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm  col-md-3 align-self-stretch align-self-center>\n\n            <ion-item>\n\n              <ion-label>Gender</ion-label>\n\n              <ion-select formControlName="gender" [disabled]="!edit">\n\n                <option [ngValue]="null">Choose a gender</option>\n\n                <ion-option [value]="Male">Female</ion-option>\n\n                <ion-option [value]="Female">Male</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm  col-md-3 align-self-stretch align-self-center>\n\n            <ion-item>\n\n              <ion-label>Group</ion-label>\n\n              <ion-select formControlName="group" multiple="false" [disabled]="!edit">\n\n                <option [ngValue]="null">Choose a group</option>\n\n                <ion-option *ngFor="let group of groups" [value]="group.id">\n\n                  {{ group.name }}\n\n                </ion-option>\n\n\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-list no-lines>\n\n\n\n\n\n\n\n        <ion-item *ngIf="!memberForm.controls.fname.valid  && (memberForm.controls.fname.dirty || submitAttempt)">\n\n          <p>Please enter a valid name.</p>\n\n        </ion-item>\n\n\n\n\n\n\n\n        <ion-item *ngIf="!memberForm.controls.lname.valid  && (memberForm.controls.lname.dirty || submitAttempt)">\n\n          <p>Please enter a valid name.</p>\n\n        </ion-item>\n\n        <!--   <ion-item *ngIf="!edit">\n\n          <ion-label >Gender</ion-label>\n\n          <ion-input formControlName="gender" type="text" [readonly]="!edit" end></ion-input>\n\n        </ion-item> -->\n\n        <!-- \n\n        <ion-item-group radio-group formControlName="gender" *ngIf="edit">\n\n          <ion-label floating>Gender</ion-label>\n\n          <ion-item-divider>Gender</ion-item-divider>\n\n          <ion-item>\n\n            <ion-radio item-start value="Male" [disabled]="!edit"></ion-radio>\n\n            <ion-label>Male</ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-radio item-start value="Female" [disabled]="!edit"></ion-radio>\n\n            <ion-label>Female</ion-label>\n\n          </ion-item>\n\n        </ion-item-group> -->\n\n\n\n\n\n\n\n        <!--  <ion-item-group radio-group formControlName="gender" *ngIf="edit">\n\n          <ion-label floating>Gender</ion-label>\n\n          <ion-item-divider>Gender</ion-item-divider>\n\n          <ion-item>\n\n            <ion-radio item-start value="Male" [disabled]="!edit"></ion-radio>\n\n            <ion-label>Male</ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-radio item-start value="Female" [disabled]="!edit"></ion-radio>\n\n            <ion-label>Female</ion-label>\n\n          </ion-item>\n\n        </ion-item-group> -->\n\n\n\n\n\n\n\n\n\n      </ion-list>\n\n\n\n\n\n    </form>\n\n    <!--    <ion-item>\n\n      <p>Form value: {{ memberForm.value | json }}</p>\n\n    </ion-item> -->\n\n\n\n\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n<!-- <ion-footer *ngIf="edit">\n\n  <ion-toolbar >\n\n    <ion-buttons left>      \n\n      <button ion-button (click)="cancelEdit()" *ngIf="edit" right>\n\n        Cancel\n\n      </button> \n\n    </ion-buttons>\n\n    \n\n      <ion-buttons right>\n\n        <button ion-button icon-only>\n\n          <ion-icon name="notifications"></ion-icon>\n\n        </button>\n\n        <button ion-button (click)="onFormSubmit()" *ngIf="edit" left>\n\n          Save\n\n        </button>\n\n      </ion-buttons>\n\n   \n\n  </ion-toolbar>\n\n</ion-footer> -->'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\pages\member-detail\member-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MemberDetailPage);
    return MemberDetailPage;
}());

//# sourceMappingURL=member-detail.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validators_validators__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { UserOptions } from '../../interfaces/user-options';
//https://f3gtq.app.goo.gl/Zi7X 
var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, alertCtrl, navParams, fb, afAuth, authProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.afAuth = afAuth;
        this.authProvider = authProvider;
        this.loginData = { username: '', password: '' };
        this.submitted = false;
        this.loginForm = fb.group({
            email: ['',
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__validators_validators__["a" /* EmailValidator */]])],
            password: ['',
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.authProvider.loginUser(this.loginData.username, this.loginData.password)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return _this.loginError = error.message; })
                .then(function (value) {
                console.log('Nice, it worked!###');
            })
                .catch(function (err) {
                console.log('Something went wrong:', err.message);
            });
            this.loginData = { username: '', password: '' };
            // this.navCtrl.push(TabsPage);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push('ResetPasswordPage');
    };
    LoginPage.prototype.loginWithGoogle = function () {
        this.authProvider.googleLogin();
    };
    LoginPage.prototype.logout = function () {
        this.authProvider.logout();
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\pages\login\login.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n \n\n<ion-content padding>\n\n  <button ion-button full (click)="doLogin()">Login</button>\n\n  <p>\n\n    Update No. 9.65\n\n	</p>\n\n	\n\n\n\n		<form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n	\n\n			<ion-item>\n\n				<ion-label stacked>Email</ion-label>\n\n				<ion-input formControlName="email" type="email" placeholder="Your email address"\n\n					[class.invalid]="!loginForm.controls.email.valid && blur"></ion-input>\n\n			</ion-item>\n\n	\n\n			<ion-item>\n\n				<ion-label stacked>Password</ion-label>\n\n				<ion-input formControlName="password" type="password" placeholder="Your password"\n\n					[class.invalid]="!loginForm.controls.password.valid && blur"></ion-input>\n\n			</ion-item>\n\n	\n\n		\n\n\n\n			<ion-row responsive-sm>\n\n\n\n				<ion-col>\n\n	\n\n					<button ion-button block type="submit" [disabled]="!loginForm.valid">\n\n						Login\n\n					</button>\n\n	\n\n				</ion-col>\n\n	\n\n				<ion-col>\n\n	\n\n					<button ion-button (click)="goToSignup()" color="light" block>Signup</button>\n\n	\n\n				</ion-col>\n\n	\n\n			</ion-row>\n\n			<ion-row>\n\n				<ion-col>	<button ion-button block clear (click)="loginWithGoogle()">Login with Google</button></ion-col>\n\n			</ion-row>\n\n			<ion-row>\n\n				<ion-col><button ion-button block clear (click)="goToResetPassword()">\n\n					I forgot my password\n\n				</button></ion-col>\n\n			</ion-row>\n\n\n\n\n\n		</form>\n\n	\n\n	\n\n	\n\n		\n\n	\n\n\n\n\n\n\n\n\n\n \n\n	\n\n	<div *ngIf="afAuth.authState | async as user; else showLogin">\n\n		<h1>Hello {{ user.displayName }}!</h1>\n\n		<button (click)="logout()">Logout</button>\n\n	</div>\n\n	<ng-template #showLogin>\n\n		<p>Not Logged in.</p>\n\n		\n\n	</ng-template>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_validators__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(navCtrl, authProvider, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.signupForm = formBuilder.group({
            email: ['',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_validators__["a" /* EmailValidator */]])],
            password: ['',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])]
        });
    }
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authProvider.signupUser(this.signupForm.value.email, this.signupForm.value.password)
                .then(function () {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Your email address"\n        [class.invalid]="!signupForm.controls.email.valid && blur">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input formControlName="password" type="password" placeholder="Your password"\n        [class.invalid]="!signupForm.controls.password.valid && blur">\n      </ion-input>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!signupForm.valid">\n      Create an Account\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ValidateNoZero */
/* harmony export (immutable) */ __webpack_exports__["a"] = EmailValidator;
function ValidateNoZero(control) {
    var a = Number(control.value) || 0;
    if (a > 0) {
        return { validEntry: true };
    }
    return null;
}
function EmailValidator(control) {
    var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
    if (re) {
        return null;
    }
    return {
        invalidEmail: true,
    };
}
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_report_member_report__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MemberReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberReportsPage = (function () {
    function MemberReportsPage(navCtrl, navParams, db, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.$key = navParams.get("$key");
        this.fname = navParams.get("fname");
        this.lname = navParams.get("lname");
    }
    MemberReportsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MemberReportsPage');
        this.db.getMemberReports(this.$key).subscribe(function (value) { return _this.reports = value; });
    };
    MemberReportsPage.prototype.editReport = function (report) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__member_report_member_report__["a" /* MemberReportPage */], { report: report });
        modal.onDidDismiss(function (data) {
            _this.db.saveReport(_this.$key, report.id, data).then(function () { return console.log("saved"); }).catch(function (e) { return console.log("Failed"); });
        });
        modal.present();
    };
    MemberReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-member-reports',template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\pages\member-reports\member-reports.html"*/'<!--\n  Generated template for the MemberReportsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{fname}} {{lname}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card >\n    <ion-card-header>\n      {{fname}} {{lname}}\n    </ion-card-header>\n    <ion-grid *ngIf="reports; else loading; let reports">\n        <ion-row >\n            <ion-col>\n              month        \n            </ion-col>\n            <ion-col> \n                plcmts  \n            </ion-col>\n            <ion-col> \n                videos          \n            </ion-col>\n            <ion-col> \n                hours   \n            </ion-col>\n            <ion-col> \n                rvs  \n            </ion-col>\n            <ion-col> \n                studies   \n            </ion-col>\n            <ion-col>                      \n            </ion-col>\n          </ion-row>\n      <ion-row *ngFor="let report of reports" >\n        <ion-col>\n          {{report.month}}          \n        </ion-col>\n        <ion-col> \n            {{report.Plcmts|nozero}}   \n        </ion-col>\n        <ion-col> \n            {{report.Videos|nozero}}           \n        </ion-col>\n        <ion-col> \n            {{report.Hours|nozero}}    \n        </ion-col>\n        <ion-col> \n            {{report.RVs|nozero}}    \n        </ion-col>\n        <ion-col> \n            {{report.BiSt|nozero}}    \n        </ion-col>\n        <ion-col> \n            <button ion-button icon-only item-end (click)="editReport(report)" small clear>\n                <ion-icon name="create" ></ion-icon>\n              </button>  \n              \n        </ion-col>\n        \n      </ion-row> \n            \n    </ion-grid>\n\n  </ion-card>\n  <ng-template #loading>\n    Loading ...\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\pages\member-reports\member-reports.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MemberReportsPage);
    return MemberReportsPage;
}());

//# sourceMappingURL=member-reports.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MemberReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberReportPage = (function () {
    function MemberReportPage(navCtrl, navParams, fb, viewCtrl, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.isCancelled = false;
        this.isValid = false;
        this.Plcmts = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'));
        this.Videos = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'));
        this.Hours = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$')]);
        this.RVs = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'));
        this.BiSt = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$'));
        this.remarks = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('');
        this.pio = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('');
        this.reportForm = this.fb.group({
            Plcmts: this.Plcmts,
            Videos: this.Videos,
            Hours: this.Hours,
            RVs: this.RVs,
            BiSt: this.BiSt,
            remarks: this.remarks,
            pio: this.pio
        });
        this.report = navParams.get('report');
        this.memberKey = navParams.get('memberKey');
    }
    MemberReportPage.prototype.resetForm = function () {
        this.reportForm.patchValue(this.report);
    };
    MemberReportPage.prototype.ionViewDidLoad = function () {
        this.resetForm();
    };
    MemberReportPage.prototype.saveForm = function () {
        /*  this.db.saveReport(this.memberKey,this.report.id,this.reportForm.value).then(
           m=>console.log("Saved",this.reportForm.value)
         ).catch(
           e=>console.log("Failed",this.reportForm.value)
         ) */
        this.viewCtrl.dismiss(this.reportForm.value);
    };
    MemberReportPage.prototype.closeForm = function () {
        this.resetForm();
        this.isCancelled = true;
        this.viewCtrl.dismiss();
    };
    MemberReportPage.prototype.ionViewCanLeave = function () {
        // here we can either return true or false
        // depending on if we want to leave this view
        if (this.reportForm.valid || this.isCancelled) {
            return true;
        }
        else {
            return false;
        }
    };
    MemberReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-member-report',template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\pages\member-report\member-report.html"*/'<!--\n\n  Generated template for the MemberReportPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>member-report</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card *ngIf="report">\n\n    <ion-card-header>\n\n     {{report.month}} {{report.year}} Report\n\n    </ion-card-header>\n\n    <form (ngSubmit)="saveForm()" [formGroup]="reportForm">\n\n      <ion-list no-lines>\n\n        <ion-item>\n\n          <ion-label>Placements</ion-label>\n\n          <ion-input type="number" [formControl]="Plcmts" text-right></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Video</ion-label>\n\n          <ion-input type="number" [formControl]="Videos" name="Videos" text-right></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Hours</ion-label>\n\n          <ion-input type="number" [formControl]="Hours" name="Hours" text-right></ion-input>          \n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Return Visits</ion-label>\n\n          <ion-input type="number" [formControl]="RVs" name="RVs" text-right></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Bible Studies</ion-label>\n\n          <ion-input type="number" [formControl]="BiSt" name="BiSt" text-right></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <!-- <button ion-button type="submit" block>Save</button> -->\n\n    </form>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col no-padding>\n\n      <button no-margin ion-button full large color="danger" (click)="closeForm()" icon-start>\n\n        <ion-icon name="close"></ion-icon>Cancel</button>\n\n    </ion-col>\n\n    <ion-col no-padding>\n\n      <button no-margin ion-button full large color="primary" (click)="saveForm()"  icon-start>\n\n        <ion-icon name="checkmark"></ion-icon>Update</button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\pages\member-report\member-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataServiceProvider */]])
    ], MemberReportPage);
    return MemberReportPage;
}());

//# sourceMappingURL=member-report.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/attendance-details/attendance-details.module": [
		714,
		9
	],
	"../pages/login/login.module": [
		717,
		8
	],
	"../pages/meeting-attendance/meeting-attendance.module": [
		716,
		7
	],
	"../pages/member-detail/member-detail.module": [
		715,
		6
	],
	"../pages/member-report/member-report.module": [
		720,
		5
	],
	"../pages/member-reports/member-reports.module": [
		719,
		4
	],
	"../pages/members/members.module": [
		721,
		3
	],
	"../pages/report/report.module": [
		718,
		1
	],
	"../pages/reset-password/reset-password.module": [
		723,
		0
	],
	"../pages/signup/signup.module": [
		722,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__members_members__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meeting_attendance_meeting_attendance__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(navParams) {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__members_members__["a" /* MembersPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__meeting_attendance_meeting_attendance__["a" /* MeetingAttendancePage */];
        // Set the active tab based on the passed index from menu.ts
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="myIndex">\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Members" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Attendance" tabIcon="information-circle"></ion-tab>\n\n  \n\n  \n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(383);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_members_members__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_member_detail_member_detail__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_member_report_member_report__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_member_reports_member_reports__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_meeting_attendance_meeting_attendance__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_attendance_details_attendance_details__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_search_search__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_nozero_nozero__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__environment__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_auth__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_members_members__["a" /* MembersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_member_detail_member_detail__["a" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_member_report_member_report__["a" /* MemberReportPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_member_reports_member_reports__["a" /* MemberReportsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_meeting_attendance_meeting_attendance__["a" /* MeetingAttendancePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_attendance_details_attendance_details__["a" /* AttendanceDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_search_search__["a" /* SearchPipe */], __WEBPACK_IMPORTED_MODULE_16__pipes_nozero_nozero__["a" /* NozeroPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/attendance-details/attendance-details.module#AttendanceDetailsPageModule', name: 'AttendanceDetailsPage', segment: 'attendance-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member-detail/member-detail.module#MemberDetailPageModule', name: 'MemberDetailPage', segment: 'member-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meeting-attendance/meeting-attendance.module#MeetingAttendancePageModule', name: 'MeetingAttendancePage', segment: 'meeting-attendance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member-reports/member-reports.module#MemberReportsPageModule', name: 'MemberReportsPage', segment: 'member-reports', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member-report/member-report.module#MemberReportPageModule', name: 'MemberReportPage', segment: 'member-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/members/members.module#MembersPageModule', name: 'MembersPage', segment: 'members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'reset-password', segment: 'reset-password', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_19__environment__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_members_members__["a" /* MembersPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_member_report_member_report__["a" /* MemberReportPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_member_reports_member_reports__["a" /* MemberReportsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_member_detail_member_detail__["a" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_meeting_attendance_meeting_attendance__["a" /* MeetingAttendancePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_attendance_details_attendance_details__["a" /* AttendanceDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_data_service__["a" /* DataServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__["a" /* AngularFireAuth */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase_app__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {asObservable} from "./asObservable";








/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataServiceProvider = (function () {
    function DataServiceProvider(afs) {
        var _this = this;
        this.afs = afs;
        this._groups = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"]([]);
        this.period$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"]([]);
        this._members = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"]([]);
        this.meetingAttendace$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"]([]);
        this.data = {};
        this.data.groups = [];
        this.data.members = [];
        this.data.groupMembers = [];
        this.data.reports = {};
        this.groupCollectionRef = this.afs.collection('domains/1/groups');
        this.meetingAttendanceRef = this.afs.collection('domains/1/meeting-attendance');
        this.meetingAttendanceRef.valueChanges().subscribe(function (v) { return _this.meetingAttendace$.next(v); });
        this.periodsRef = this.afs.collection('domains/1/periods');
        this.periodsRef.valueChanges().subscribe(function (v) { return _this.period$.next(v); });
        this.group$ = this.groupCollectionRef.snapshotChanges().map(function (actions) {
            var groups = actions.map(function (action) {
                var data = action.payload.doc.data();
                var $key = action.payload.doc.id;
                return __assign({ $key: $key }, data);
            });
            console.log("groups=>", groups);
            //this._groups.next(groups)
            _this.data.groups = groups;
            return groups;
        });
        this.memberCollectionRef = this.afs.collection('domains/1/members', function (ref) { return ref.orderBy("lname").orderBy("fname"); });
        this.member$ = this.memberCollectionRef.snapshotChanges().map(function (actions) {
            var members = actions.map(function (action) {
                var data = action.payload.doc.data();
                // console.log("member->", data);
                var $key = action.payload.doc.id;
                //so fb can cache reports
                _this.afs.collection("domains/1/members/" + $key + "/reports").valueChanges().subscribe(function (v) { _this.data.reports[$key] = v; console.log('reports for' + $key); });
                //return new Member($key,data.fname,data.lname,data.gender);
                return __assign({ $key: $key }, data);
            });
            console.log("members=>", members);
            _this.data.members = members;
            return members;
        });
        this.memberCollectionRef.snapshotChanges().map(function (actions) {
            var members = actions.map(function (action) {
                var data = action.payload.doc.data();
                // console.log("member->", data);
                var $key = action.payload.doc.id;
                //return new Member($key,data.fname,data.lname,data.gender);
                return __assign({ $key: $key }, data);
            });
            _this.data.members = members;
            return members;
        }).subscribe(function (m) { return _this._members.next(m); });
        // this._members.subscribe(s => {this.processData();this.groupMembers()});
        // this._groups.subscribe(s => this.processData());
        this._members.subscribe(function (s) { _this.groupMembers(); });
        this._groups.subscribe(function (s) { _this.groupMembers(); });
        //this.member$.subscribe(m => this._members.next(m))
        this.group$.subscribe(function (g) { return _this._groups.next(g); });
        //this.processData();
    }
    DataServiceProvider.prototype.groupMembers = function () {
        //console.log("Start group process");
        var _this = this;
        this.data.groups.forEach(function (group) {
            // console.log("Called process ... group");
            var g = _this.data.groupMembers.find(function (g) { return g.id === group.id; });
            var i = _this.data.groupMembers.findIndex((function (o) { return o.id === group.id; }));
            console.log("group search ...", i);
            if (g) {
                console.log("Before group update: ", _this.data.groupMembers[i].id, _this.data.groupMembers[i].name, _this.data.groupMembers[i].members.length);
                g.name = group.name;
                g.$key = group.$key;
                //this.data.groupMembers[i].name = group.name;
                _this.data.groupMembers.slice(i, 1, g);
                console.log("after group update: ", _this.data.groupMembers[i].id, _this.data.groupMembers[i].name, _this.data.groupMembers[i].members.length);
            }
            else {
                group.members = [];
                //g = { id: group.id,name:group.name, members: [] };
                _this.data.groupMembers.push(group);
                i = _this.data.groupMembers.findIndex((function (o) { return o.id === group.id; }));
                console.log("groups added here:", i);
            }
            //console.log("resulting group=>", group.id, group.name);
        });
        //console.log("this.data.groupMembers=>", this.data.groupMembers);
        /*
               Observable.of({id: 1, name: 'aze1'},
                                  {id: 2, name: 'sf2'},
                                  {id: 2, name: 'dg2'},
                                  {id: 1, name: 'erg1'},
                                  {id: 1, name: 'df1'},
                                  {id: 2, name: 'sfqfb2'},
                                  {id: 3, name: 'qfs1'},
                                  {id: 2, name: 'qsgqsfg2'}
                                 )
                   .groupBy(p => p.id, p => p.name)
                   .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
                   .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
                   .subscribe(p => console.log(p));*/
        console.log('calling grouping');
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(this._members.value)
            .groupBy(function (p) { return p.group; }, function (p) { return p; })
            .flatMap(function (group$) { return group$.reduce(function (acc, cur) { return acc.concat([cur]); }, ["" + group$.key]); })
            .map(function (arr) { return ({ 'id': arr[0], 'members': arr.slice(1) }); })
            .subscribe(function (p) {
            //Find index of specific object using findIndex method.   
            var group;
            var i = _this.data.groupMembers.findIndex((function (o) { return o.id === p.id; }));
            if (i >= 0) {
                //console.log("Before update: ", JSON.stringify(this.data.groupMembers[objIndex]))
                console.log("Before member update: ", _this.data.groupMembers[i].id, _this.data.groupMembers[i].name, _this.data.groupMembers[i].members.length);
                group = _this.data.groupMembers[i];
                group.members = p.members;
                _this.data.groupMembers.slice(i, 1, group);
                console.log("after member update: ", _this.data.groupMembers[i].id, _this.data.groupMembers[i].name, _this.data.groupMembers[i].members.length);
                //Update object's name property.
                //this.data.groupMembers[objIndex].name = "Laila"
                //Log object to console again.
                // console.log("After update: ", JSON.stringify(this.data.groupMembers[objIndex]))
            }
            else {
                console.log('not found:', p.id);
                group = {};
                group.id = p.id;
                group.members = p.members;
                group = { id: p.id, members: p.members };
                _this.data.groupMembers.push(group);
                i = _this.data.groupMembers.findIndex((function (o) { return o.id === p.id; }));
                console.log("after member add: ", _this.data.groupMembers[i].id, _this.data.groupMembers[i].name, _this.data.groupMembers[i].members.length);
                // console.log(`adding group=>`, this.data.groupMembers)
            }
            // var group = this.data.groupMembers.find(g => g.id == p.id)
            // console.log(`found group=>`, group)
            // if (group) {
            //   group.members = p.members
            // } else {
            //   group = { id: p.id, members: p.members };
            //   this.data.groupMembers.push(group)
            //   console.log(`group added=>${group.id}`)
            // }
            // console.log(`processed group=>${group.name}`)
        });
        // console.log('this.data.groupMembers=>',JSON.stringify(this.data.groupMembers))
        // this._members.value.forEach(
        //   member => {
        //     //console.log("process member called");
        //     var group
        //     // console.log("group member process ... ", member.group);
        //     if (member.group) {
        //       group = this.data.groups.find((g: any) => g.id === member.group.toString());
        //     } else {
        //       group = this.data.groups.find((g: any) => g.id === null);
        //     }
        //     //console.log("member group result ...", group);
        //     if (group) {
        //       if (!group.members) {
        //         group.members = []
        //       }
        //       group.members = group.members.filter(e => (e.fname !== member.fname) && (e.lname !== member.lname));
        //       //console.log("members:filered", group.members);
        //       /*
        //                   let m = group.members.find((m: any) => m.id.toString() === member.id.toString());
        //                   if(m)
        //                   {
        //                     const index = group.members.indexOf(m);
        //                     group.members.splice(index, 1);
        //                   }*/
        //       group.members.push(member)
        //       //console.log("members:after filered", group.members);
        //     } else {
        //       if (member.group) {
        //         group = { id: member.group.toString(), members: [] };
        //       } else {
        //         group = { id: null, name: "Unallocated", members: [] };
        //       }
        //       group.members.push(member);
        //       // console.log("members:groups added here", group);
        //       this.data.groups.push(group)
        // }
        //}
        // );
        return this.data;
    };
    DataServiceProvider.prototype.processData = function () {
        var _this = this;
        //console.log("Start group process");
        this.group$.forEach(function (groups) {
            groups.forEach(function (group) {
                // console.log("Called process ... group");
                var g = _this.data.groups.find(function (g) { return g.id === group.id; });
                //console.log("group search ...", g);
                if (g) {
                    g.name = group.name;
                }
                else {
                    group.members = [];
                    _this.data.groups.push(group);
                    // console.log("groups added here", group);
                }
            });
        });
        //console.log("Start member process");
        this.member$.forEach(function (members) {
            members.forEach(function (member) {
                //console.log("process member called");
                var group;
                // console.log("group member process ... ", member.group);
                if (member.group) {
                    group = _this.data.groups.find(function (g) { return g.id === member.group.toString(); });
                }
                else {
                    group = _this.data.groups.find(function (g) { return g.id === null; });
                }
                //console.log("member group result ...", group);
                if (group) {
                    if (!group.members) {
                        group.members = [];
                    }
                    group.members = group.members.filter(function (e) { return (e.fname !== member.fname) && (e.lname !== member.lname); });
                    //console.log("members:filered", group.members);
                    /*
                                let m = group.members.find((m: any) => m.id.toString() === member.id.toString());
                                if(m)
                                {
                                  const index = group.members.indexOf(m);
                                  group.members.splice(index, 1);
                                }*/
                    group.members.push(member);
                    //console.log("members:after filered", group.members);
                }
                else {
                    if (member.group) {
                        group = { id: member.group.toString(), members: [] };
                    }
                    else {
                        group = { id: null, name: "Unallocated", members: [] };
                    }
                    group.members.push(member);
                    // console.log("members:groups added here", group);
                    _this.data.groups.push(group);
                }
            });
        });
        return this.data;
    };
    DataServiceProvider.prototype.getGroups = function () {
        return this.data.groups;
    };
    DataServiceProvider.prototype.getData = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.data);
    };
    DataServiceProvider.prototype.updateMember = function (ref, data) {
        return this.afs.collection('domains/1/members').doc(ref).update(__assign({}, data, { updatedAt: this.timestamp }));
    };
    DataServiceProvider.prototype.addMember = function (data) {
        var timestamp = this.timestamp;
        return this.memberCollectionRef.add(__assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    };
    DataServiceProvider.prototype.getMember = function ($key) {
        return this.afs.doc("domains/1/members/" + $key).snapshotChanges().map(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                var id = action.payload.id;
                return __assign({ id: id }, data);
            }
        });
    };
    DataServiceProvider.prototype.getMemberReports = function ($key) {
        return this.afs.collection("domains/1/members/" + $key + "/reports").snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var $key = a.payload.doc.id;
                //console.log( a.payload.doc.ref)
                return __assign({ $key: $key }, data);
            });
        });
    };
    Object.defineProperty(DataServiceProvider.prototype, "timestamp", {
        // *** Code
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_9_firebase_app__["firestore"].FieldValue.serverTimestamp();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataServiceProvider.prototype, "groups", {
        get: function () {
            return this._groups.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataServiceProvider.prototype, "members", {
        get: function () {
            return this._members.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataServiceProvider.prototype, "attendance", {
        get: function () {
            return this.meetingAttendace$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataServiceProvider.prototype, "periods", {
        get: function () {
            return this.period$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DataServiceProvider.prototype.saveReport = function (memberKey, period, data) {
        console.log("saving ..", memberKey, period, data);
        var ref = "domains/1/members/" + memberKey + "/reports/" + period;
        return this.upsert(ref, data);
    };
    DataServiceProvider.prototype.saveAttendance = function ($key, data) {
        console.log("saving .... ..", $key, data);
        var ref = "domains/1/meeting-attendance/" + $key;
        return this.upsert(ref, data);
    };
    DataServiceProvider.prototype.saveUser = function ($key, data) {
        console.log("saving .... ..", $key, data);
        var ref = "domains/1/users/" + $key;
        return this.upsert(ref, data);
    };
    DataServiceProvider.prototype.update = function (ref, data) {
        return this.doc(ref).update(__assign({}, data, { updatedAt: this.timestamp }));
    };
    DataServiceProvider.prototype.set = function (ref, data) {
        var timestamp = this.timestamp;
        return this.doc(ref).set(__assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    };
    DataServiceProvider.prototype.add = function (ref, data) {
        var timestamp = this.timestamp;
        return this.col(ref).add(__assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    };
    DataServiceProvider.prototype.upsert = function (ref, data) {
        var _this = this;
        var doc = this.doc(ref).snapshotChanges().take(1).toPromise();
        return doc.then(function (snap) {
            return snap.payload.exists ? _this.update(ref, data) : _this.set(ref, data);
        });
    };
    // return a reference
    DataServiceProvider.prototype.col = function (ref, queryFn) {
        return typeof ref === 'string' ? this.afs.collection(ref, queryFn) : ref;
    };
    DataServiceProvider.prototype.doc = function (ref) {
        return typeof ref === 'string' ? this.afs.doc(ref) : ref;
    };
    // return an observable
    DataServiceProvider.prototype.doc$ = function (ref) {
        return this.doc(ref).snapshotChanges().map(function (doc) {
            return doc.payload.data();
        });
    };
    DataServiceProvider.prototype.col$ = function (ref, queryFn) {
        return this.col(ref, queryFn).snapshotChanges().map(function (docs) {
            return docs.map(function (a) { return a.payload.doc.data(); });
        });
    };
    //deep copy
    //let newObj = JSON.parse(JSON.stringify(obj));
    DataServiceProvider.prototype.clone = function (o) {
        return JSON.parse(JSON.stringify(o));
    };
    DataServiceProvider.prototype.cloneObject = function (obj) {
        var clone = {};
        for (var i in obj) {
            if (obj[i] != null && typeof (obj[i]) == "object")
                clone[i] = this.cloneObject(obj[i]);
            else
                clone[i] = obj[i];
        }
        return clone;
    };
    DataServiceProvider.prototype.getMondays = function (d) {
        var month = d.getMonth(), mondays = [];
        d.setDate(1);
        // Get the first Monday in the month
        while (d.getDay() !== 1) {
            d.setDate(d.getDate() + 1);
        }
        // Get all the other Mondays in the month
        while (d.getMonth() === month) {
            mondays.push(new Date(d.getTime()));
            d.setDate(d.getDate() + 7);
        }
        return mondays;
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

// @Injectable()
// export class MemberData {
//   // db is plan firestore / no angularfire
//   db: firebase.firestore.Firestore
//   constructor(private readonly afs: AngularFirestore) {
//     console.log('init fb')
//     /*  firebase.initializeApp(firebaseConfig);
//      firebase.firestore().enablePersistence()
//        .then(function() {
//            // Initialize Cloud Firestore through firebase
//            this.db = firebase.firestore();
//            console.log('inited fb')
//        })
//        .catch(function(err) {
//            if (err.code == 'failed-precondition') {
//                // Multiple tabs open, persistence can only be enabled
//                // in one tab at a a time.
//                // ...
//            } else if (err.code == 'unimplemented') {
//                // The current browser does not support all of the
//                // features required to enable persistence
//                // ...
//            }
//        }); */
//   }
//   loadMembers() {
//     console.log('calling load fb')
//     this.db = firebase.firestore();
//     const memberRef = this.db.collection('domains/1/members');
//     return this.observeCollection(memberRef).
//       map(members => {
//         return members.map(member => {
//           return {
//             member,
//             reports$: this.observeCollection(member.ref.collection('reports'))
//           };
//         })
//       });
//   }
//   // Takes a reference and returns an array of documents
//   // with the id and reference
//   private observeCollection(ref) {
//     return Observable.create((observer) => {
//       const unsubscribeFn = ref.onSnapshot(
//         snapshot => {
//           observer.next(snapshot.docs.map(doc => {
//             const data = doc.data();
//             console.log(doc.ref)
//             return {
//               ...doc.data(),
//               id: doc.id,
//               ref: doc.ref
//             };
//           }));
//         },
//         error => observer.error(error),
//       );
//       return unsubscribeFn;
//     });
//   }
// }
//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_members_members__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_meeting_attendance_meeting_attendance__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], index: 0 },
            { title: 'Members', component: __WEBPACK_IMPORTED_MODULE_5__pages_members_members__["a" /* MembersPage */], index: 1 },
            { title: 'Attendance', component: __WEBPACK_IMPORTED_MODULE_7__pages_meeting_attendance_meeting_attendance__["a" /* MeetingAttendancePage */], index: 2 }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(page.component);
        //}
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page 
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.component, params);
        }
    };
    MyApp.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\app\app.html"*/'<ion-split-pane>\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" main  #content swipeBackEnabled="false"></ion-nav>\n\n\n\n</ion-split-pane>'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.fname.toLowerCase().includes(terms) || it.lname.toLowerCase().includes(terms); // only filter country name
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NozeroPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the NozeroPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var NozeroPipe = (function () {
    function NozeroPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    NozeroPipe.prototype.transform = function (value) {
        return value > 0 ? value : null;
    };
    NozeroPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'nozero',
        })
    ], NozeroPipe);
    return NozeroPipe;
}());

//# sourceMappingURL=nozero.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB2h77hNwxEfm7JZjKZt0bONNFd2lvLKek",
    authDomain: "kingdom-service-app.firebaseapp.com",
    databaseURL: "https://kingdom-service-app.firebaseio.com",
    projectId: "kingdom-service-app",
    storageBucket: "kingdom-service-app.appspot.com",
    messagingSenderId: "619779266198"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // this.members =  this.md.loadMembers()
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\pages\home\home.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-header>\n\n    <ion-navbar no-border-bottom>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  \n\n      <ion-segment [(ngModel)]="segment" >\n\n        <ion-segment-button value="all">\n\n          All\n\n        </ion-segment-button>\n\n        <ion-segment-button value="favorites">\n\n          Favorites\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n  \n\n      <ion-buttons end>\n\n        <button ion-button icon-only >\n\n          <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n    <ion-toolbar no-border-top>\n\n      <ion-searchbar color="primary"\n\n                     [(ngModel)]="queryText"\n\n                     (ionInput)="updateSchedule()"\n\n                     placeholder="Search">\n\n      </ion-searchbar>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <div *ngIf="members as member$">\n\n    <div *ngFor="let member of  member$">\n\n    {{ member.name }}\n\n\n\n <!--    <div *ngIf="member.report$ as reports">\n\n        <div *ngFor="let report of reports">\n\n          {{ report.month }}\n\n        </div> \n\n    </div>  -->\n\n  </div>\n\n\n\n\n\n\n\n</div>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingAttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_details_attendance_details__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MeetingAttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeetingAttendancePage = (function () {
    function MeetingAttendancePage(navCtrl, navParams, alertCtrl, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.periods = [];
        this.months = [];
        this.attendance = [];
        this.attendanceRaw = [];
        db.periods.subscribe(function (p) {
            _this.periods = db.clone(p);
            _this.loadAttendance();
        });
        db.attendance.subscribe(function (a) {
            console.log("attendance:" + a.length);
            _this.attendanceRaw = db.clone(a);
            _this.loadAttendance();
        });
    }
    MeetingAttendancePage.prototype.loadAttendance = function () {
        var _this = this;
        this.attendance = [];
        this.periods.forEach(function (e) {
            /*    var givenDate = e.id;
               var month = givenDate.substring(4, givenDate.length); // retrieves 04
               var year = givenDate.substring(0, 4);                 // retrieves 2017 */
            var d = new Date(e.id);
            var mondays = _this.db.getMondays(d);
            var dates = mondays.map(function (m) {
                return {
                    id: m.toISOString().substring(0, 10),
                    weekstarting: m,
                    midweek: 0,
                    weekend: 0
                };
            });
            _this.attendance = _this.attendance.concat(dates);
            _this.attendanceRaw.forEach(function (a) {
                var index = _this.attendance.findIndex(function (aa) { return aa.id == a.id; });
                console.log("index:" + index + " id:" + a.id);
                if (index) {
                    _this.attendance[index] = a;
                }
            });
        });
    };
    MeetingAttendancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeetingAttendancePage');
    };
    MeetingAttendancePage.prototype.editMonthAttendance = function (a) {
        var dates = this.attendance.filter(function (d) { return d.id.startsWith(a.id); });
        var payload = {
            id: a.id,
            dates: dates
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__attendance_details_attendance_details__["a" /* AttendanceDetailsPage */], payload);
    };
    MeetingAttendancePage.prototype.editWeekend = function (a) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Weekend Meeting',
            message: "Update Attendance Figures",
            inputs: [
                {
                    label: 'Weekend',
                    name: 'weekend',
                    placeholder: 'Weekend',
                    type: 'number',
                    value: a.weekend
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('saving...', a, data);
                        //data.weekstarting = a.weekstarting;
                        // data.id=a.id
                        a.weekend = +data.weekend;
                        _this.db.saveAttendance(a.id, a);
                    }
                }
            ]
        });
        prompt.present();
    };
    MeetingAttendancePage.prototype.editMidweek = function (a) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Weekend Meeting',
            message: "Update Attendance Figures",
            inputs: [
                {
                    label: 'Midweek',
                    name: 'midweek',
                    placeholder: 'Midweek',
                    type: 'number',
                    value: a.midweek
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('saving...', a, data);
                        a.midweek = +data.midweek;
                        _this.db.saveAttendance(a.id, a);
                    }
                }
            ]
        });
        prompt.present();
    };
    MeetingAttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meeting-attendance',template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\pages\meeting-attendance\meeting-attendance.html"*/'<!--\n\n  Generated template for the MeetingAttendancePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Meeting Attendance</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModal()">\n\n        <ion-icon name="options"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n <!--  <ion-list>\n\n    <ion-item *ngFor="let a of attendance">\n\n      <ion-row>\n\n        <ion-col text-center> {{a.weekstarting|date}} </ion-col>\n\n        <ion-col>\n\n          <button (click)="editMidweek(a)" ion-button outline round small>Mid Week: {{a.midweek}}</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button (click)="editWeekend(a)" ion-button outline round small>weekend : {{a.weekend}}</button>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list> -->\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let p of periods">\n\n      <ion-item (click)="editMonthAttendance(p)">     \n\n        {{p.id | date: \'MMM yyyy\'}}\n\n      </ion-item>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\pages\meeting-attendance\meeting-attendance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataServiceProvider */]])
    ], MeetingAttendancePage);
    return MeetingAttendancePage;
}());

//# sourceMappingURL=meeting-attendance.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(firebaseAuth, db) {
        this.firebaseAuth = firebaseAuth;
        this.db = db;
        this.user = firebaseAuth.authState;
    }
    AuthProvider.prototype.signup = function (email, password) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthProvider.prototype.loginWithGoogle = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthProvider.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithRedirect(provider).then(function () {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().getRedirectResult().then(function (result) {
                // This gives you a Google Access Token.
                // You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(token, user);
            }).catch(function (error) {
                // Handle Errors here.
                console.log(error.message);
            });
        });
    };
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]()
            .createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            _this.db.saveUser(newUser.uid, email);
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataServiceProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_detail_member_detail__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__member_reports_member_reports__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MembersPage = (function () {
    function MembersPage(app, navCtrl, modalCtrl, navParams, db) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.db = db;
        this.filterInput = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]();
        this.data = {};
        this.data.groups = [];
        // this.data.membersByGroup=[];
        //this.membersByGroup=[]
        this.filterInput
            .valueChanges
            .debounceTime(1000)
            .subscribe(function (term) {
            _this.filterText = term;
            console.log(term);
        });
    }
    MembersPage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Members');
        this.updateData();
    };
    MembersPage.prototype.isFemale = function (g) {
        return (g === "Female");
    };
    MembersPage.prototype.isMale = function (g) {
        return (g === "Male");
    };
    MembersPage.prototype.goToMemberDetail = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__member_detail_member_detail__["a" /* MemberDetailPage */], {
            $key: item.$key,
            fname: item.fname,
            lname: item.lname,
            gender: item.gender,
            group: item.group
        });
    };
    MembersPage.prototype.goToMemberReports = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__member_reports_member_reports__["a" /* MemberReportsPage */], {
            $key: item.$key,
            fname: item.fname,
            lname: item.lname,
            gender: item.gender,
            group: item.group
        });
    };
    MembersPage.prototype.updateData = function () {
        var _this = this;
        this.db.getData().subscribe(function (data) {
            _this.data = data;
            _this.groupMembers = _this.data.groupMembers;
        });
        this.db.groups.subscribe(function (value) {
            _this.groups = value;
        });
    };
    MembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-members',template:/*ion-inline-start:"C:\dev\code\kingdom-service-app\src\pages\members\members.html"*/'<!--\n\n  Generated template for the MembersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>members</ion-title>\n\n  </ion-navbar>\n\n  <ion-searchbar [formControl]="filterInput"></ion-searchbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list #groupList>\n\n\n\n    <!-- <ion-item-group *ngFor="let group of data.groups">\n\n\n\n      <ion-item-divider sticky>\n\n        <ion-label>\n\n          {{group.name}}\n\n        </ion-label>\n\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor="let member of group.members">\n\n\n\n        <button ion-item (click)="goToMemberDetail(member)">\n\n          <ion-label>{{member.lname }}, {{member.fname }}</ion-label>                      \n\n        </button>\n\n      </ion-item-sliding>\n\n\n\n\n\n    </ion-item-group> -->\n\n    <div *ngIf="groupMembers; else loading;">\n\n\n\n    </div>\n\n    <ng-template #loading>\n\n      Loading your things...\n\n    </ng-template>\n\n\n\n    <ion-item-group *ngFor="let group of data.groupMembers">\n\n\n\n      <ion-item-divider sticky>\n\n        <ion-label>\n\n          {{group.name}}\n\n        </ion-label>\n\n      </ion-item-divider>\n\n\n\n      <!-- <ion-card *ngFor="let member of (group.members|search : filterText)">\n\n       \n\n          <ion-item icon-start (click)="editReport(report)">\n\n\n\n            <ion-icon *ngIf="isFemale(member.gender)" name="woman"></ion-icon>\n\n            <ion-icon *ngIf="isMale(member.gender)" name="man"></ion-icon>\n\n  \n\n            {{member.lname }}, {{member.fname }}\n\n  \n\n          </ion-item>\n\n         \n\n      \n\n      </ion-card> -->\n\n\n\n      <ion-item-sliding *ngFor="let member of (group.members|search : filterText)">\n\n\n\n        \n\n\n\n       \n\n      \n\n        <ion-item icon-start>\n\n\n\n          <ion-icon *ngIf="isFemale(member.gender)" name="woman"></ion-icon>\n\n          <ion-icon *ngIf="isMale(member.gender)" name="man"></ion-icon>\n\n\n\n          {{member.lname }}, {{member.fname }}\n\n\n\n          \n\n            <button ion-button icon-only item-end clear (click)="goToMemberReports(member)">\n\n              <ion-icon name="paper" ></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only item-end clear (click)="goToMemberDetail(member)">\n\n              <ion-icon name="create"></ion-icon>\n\n            </button>\n\n           \n\n          \n\n\n\n        </ion-item>\n\n        \n\n    \n\n\n\n\n\n   \n\n    <!-- <ion-row>\n\n      <ion-col col-12 col-sm-1 col-xs-3>\n\n        <button ion-button color="primary" (click)="goToMemberDetail(member)">JAN</button>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-1 col-xs-3>\n\n        <button ion-button color="primary" (click)="goToMemberDetail(member)">FEB</button></ion-col>\n\n        <ion-col col-12 col-sm-1 col-xs-3>\n\n        <button ion-button color="primary" (click)="goToMemberDetail(member)">MAR</button>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-1 col-xs-3>\n\n        <button ion-button color="primary" (click)="goToMemberDetail(member)">APR</button>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-1 col-xs-3>\n\n        <button ion-button color="primary" (click)="goToMemberDetail(member)">MAY</button>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-1 col-xs-3>\n\n        <button ion-button color="primary" (click)="goToMemberDetail(member)">JUN</button>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-1 col-xs-3>\n\n        <button ion-button color="primary" (click)="goToMemberDetail(member)">JUL</button>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-1 col-xs-3>\n\n        <button ion-button color="primary" (click)="goToMemberDetail(member)">AUG</button>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-1 col-xs-3>\n\n        <button ion-button color="primary" (click)="goToMemberDetail(member)">SEP</button>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-1 col-xs-3>\n\n        <button ion-button color="primary" (click)="goToMemberDetail(member)">OCT</button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid> -->\n\n    \n\n\n\n        <ion-item-options>\n\n          <button ion-button color="primary" (click)="goToMemberDetail(member)">Edit</button>\n\n          <button ion-button icon-only item-end clear>\n\n            <ion-icon name="create"></ion-icon>\n\n          </button>\n\n\n\n\n\n        </ion-item-options>\n\n\n\n      </ion-item-sliding>\n\n\n\n\n\n\n\n\n\n    </ion-item-group>\n\n\n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini>\n\n      <ion-icon name="person-add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\dev\code\kingdom-service-app\src\pages\members\members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataServiceProvider */]])
    ], MembersPage);
    return MembersPage;
}());

//# sourceMappingURL=members.js.map

/***/ })

},[378]);
//# sourceMappingURL=main.js.map
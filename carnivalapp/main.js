(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scanner/scanner.component */ "./src/app/scanner/scanner.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ticket/ticket.component */ "./src/app/ticket/ticket.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'welcome',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
    },
    {
        path: 'reset-password',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'scanner',
        component: _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_4__["ScannerComponent"]
    },
    {
        path: 'ticket',
        component: _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__["TicketComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Carnival';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_head_dashboard_head_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-head/dashboard-head.component */ "./src/app/dashboard-head/dashboard-head.component.ts");
/* harmony import */ var _dashboard_foot_dashboard_foot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-foot/dashboard-foot.component */ "./src/app/dashboard-foot/dashboard-foot.component.ts");
/* harmony import */ var _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scanner/scanner.component */ "./src/app/scanner/scanner.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ticket/ticket.component */ "./src/app/ticket/ticket.component.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
        if (!$('body').hasClass('bg-dark'))
            $('body').addClass('bg-dark');
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _dashboard_head_dashboard_head_component__WEBPACK_IMPORTED_MODULE_7__["DashboardHeadComponent"],
                _dashboard_foot_dashboard_foot_component__WEBPACK_IMPORTED_MODULE_8__["DashboardFootComponent"],
                _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_9__["ScannerComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_15__["TicketComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [_globals__WEBPACK_IMPORTED_MODULE_16__["Globals"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard-foot/dashboard-foot.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-foot/dashboard-foot.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sticky Footer -->\n<footer class=\"sticky-footer\">\n  <div class=\"container my-auto\">\n    <div class=\"copyright text-center my-auto\">\n      <span>Copyright © Harman International 2018</span>\n    </div>\n  </div>\n</footer>\n\n<!-- Scroll to Top Button-->\n<a class=\"scroll-to-top rounded\" href=\"#page-top\">\n  <i class=\"fas fa-angle-up\"></i>\n</a>\n\n<!-- Logout Modal-->\n<div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n        <a class=\"btn btn-primary\" href=\"/\">Logout</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Error Modal-->\n<div class=\"modal fade\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"errorTitle\">Something went wrong..</h5>\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" id=\"errorBody\">Unable to process this action now, please try again later. </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-foot/dashboard-foot.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-foot/dashboard-foot.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard-foot/dashboard-foot.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard-foot/dashboard-foot.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardFootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardFootComponent", function() { return DashboardFootComponent; });
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

var DashboardFootComponent = /** @class */ (function () {
    function DashboardFootComponent() {
    }
    DashboardFootComponent.prototype.ngOnInit = function () {
    };
    DashboardFootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-foot',
            template: __webpack_require__(/*! ./dashboard-foot.component.html */ "./src/app/dashboard-foot/dashboard-foot.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-foot.component.scss */ "./src/app/dashboard-foot/dashboard-foot.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardFootComponent);
    return DashboardFootComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-head/dashboard-head.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-head/dashboard-head.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark static-top\">\n  <a class=\"navbar-brand mr-1\" routerLink=\"/welcome\">Carnival</a>\n  <button (click)=\"toggleTitle()\" class=\"btn btn-link btn-sm text-white order-1 order-sm-0\" id=\"sidebarToggle\" href=\"#\">\n    <i class=\"fas fa-bars\"></i>\n  </button>\n  <!-- Navbar Search -->\n  <form class=\"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-primary\" type=\"button\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n  <!-- Navbar -->\n  <ul class=\"navbar-nav ml-auto ml-md-0\">\n    <li class=\"nav-item dropdown no-arrow\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\">\n        <i class=\"fas fa-user-circle fa-fw\"></i>\n      </a>\n      \n      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdown\">\n        <a class=\"dropdown-item\" href=\"#\">Profile</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">Logout</a>\n      </div>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/dashboard-head/dashboard-head.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-head/dashboard-head.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard-head/dashboard-head.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard-head/dashboard-head.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHeadComponent", function() { return DashboardHeadComponent; });
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

var DashboardHeadComponent = /** @class */ (function () {
    function DashboardHeadComponent() {
    }
    DashboardHeadComponent.prototype.ngOnInit = function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    };
    DashboardHeadComponent.prototype.toggleTitle = function () {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
    };
    DashboardHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-head',
            template: __webpack_require__(/*! ./dashboard-head.component.html */ "./src/app/dashboard-head/dashboard-head.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-head.component.scss */ "./src/app/dashboard-head/dashboard-head.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardHeadComponent);
    return DashboardHeadComponent;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
        this.userFirstName = '';
        this.userLastName = '';
        this.userDOB = '';
        this.userAddress = '';
        this.userPassport = '';
        this.userLicense = '';
    }
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top example-8\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand text-hide\" routerLink=\"/home\"></a>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n  <!--/.container-fluid -->\n</nav>\n<div style=\"top:auto;background-image: url('../../assets/img/landing.jpg')\" class=\"main\">\n  <!-- video background-->\n  <!-- replace URLs with your video content URL-->\n  <!--<video id=\"video-background\" preload=\"auto\" autoplay=\"true\" loop=\"loop\" muted=\"muted\" volume=\"0\">\n    <source src=\"http://ondrejsvestka.cz/video/silver-lining-video.webm\" type=\"video/webm\">\n    <source src=\"http://ondrejsvestka.cz/video/silver-lining-video.mp4\" type=\"video/mp4\">\n  </video> -->\n  \n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <h1 class=\"cursive\">Carnival welcomes you!</h1>\n    <div class=\"logo\"></div>\n    <h2 class=\"sub\">You can expect this beautiful website running soon. </h2>\n    <div class=\"col-centered text-center\">\n      <div class=\"btn-group\" role=\"group\">\n        <a routerLink=\"/login\"><button type=\"button\" class=\"btn btn-lg btn-primary\">Login</button></a>\n        <a routerLink=\"/register\"><button type=\"button\" class=\"btn btn-lg btn-primary\">Register</button></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <p>Copyright &copy; Harman International 2018</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-centered {\n  float: none;\n  margin: 0 auto; }\n\n.main {\n  background-position: center center;\n  background-size: cover;\n  height: auto;\n  left: 0;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 0;\n  width: auto; }\n\n@media (max-width: 991px) {\n  .main {\n    padding: 20px; } }\n\n.main .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: .3;\n  filter: alpha(opacity=30);\n  z-index: 1; }\n\n.main .container {\n  position: relative;\n  z-index: 2; }\n\n.main #video-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: 1;\n  overflow: hidden;\n  background-image: url('video-bg.jpg');\n  background-position: center center;\n  background-size: cover; }\n\n.main p.social {\n  text-align: right;\n  margin-top: 20px; }\n\n.main p.social a {\n  margin: 0 10px 0 0;\n  color: #fff;\n  display: inline-block;\n  width: 26px;\n  height: 26px;\n  border-radius: 13px;\n  line-height: 26px;\n  font-size: 15px;\n  text-align: center;\n  transition: all .2s ease-out;\n  vertical-align: bottom; }\n\n.main p.social a i {\n  vertical-align: bottom;\n  line-height: 26px; }\n\n.main p.social a.facebook {\n  background-color: #4460ae; }\n\n.main p.social a.gplus {\n  background-color: #c21f25; }\n\n.main p.social a.twitter {\n  background-color: #3cf; }\n\n.main p.social a.instagram {\n  background-color: #cd4378; }\n\n.main p.social a.email {\n  background-color: #4a7f45; }\n\n@media (max-width: 991px) {\n  .main p.social {\n    text-align: center; } }\n\n.main .cursive {\n  margin-top: 200px;\n  font-family: 'Pacifico',cursive;\n  font-size: 60px;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  text-align: center;\n  margin-bottom: 40px; }\n\n@media (max-width: 1199px) {\n  .main .cursive {\n    margin-top: 100px; } }\n\n.main .sub {\n  font-weight: 300;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n\n.main .mailing-list {\n  margin-top: 120px;\n  text-align: center; }\n\n.main .mailing-list .mailing-list-heading {\n  font-weight: 300;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  font-size: 30px; }\n\n@media (min-width: 768px) {\n  .main .mailing-list input {\n    width: 200px; } }\n\n@media (min-width: 992px) {\n  .main .mailing-list input {\n    width: 300px; } }\n\n@media (min-width: 1600px) {\n  .main .mailing-list {\n    margin-top: 200px; } }\n\n.main .transparent {\n  background: rgba(255, 255, 255, 0.3);\n  border: solid 1px #fff;\n  color: #fff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n\n.main .footer {\n  position: relative;\n  bottom: 20px;\n  right: 0;\n  width: 100%;\n  z-index: 4;\n  margin-top: 50px;\n  color: #eee;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n\n.main .footer a {\n  color: #fff; }\n\n.main .footer a:hover, .main .footer a:focus {\n  text-decoration: underline; }\n\n.main .footer p.credit {\n  text-align: right; }\n\n@media (max-width: 991px) {\n  .main .footer {\n    text-align: center; }\n  .main .footer p.credit {\n    text-align: center; } }\n\n@media (min-width: 992px) {\n  .main .footer {\n    position: fixed;\n    bottom: 20px; } }\n\n#style-switch-button {\n  position: fixed;\n  top: 100px;\n  left: 0;\n  border-radius: 0;\n  z-index: 2; }\n\n#style-switch {\n  box-sizing: border-box;\n  width: 300px;\n  padding: 20px;\n  position: fixed;\n  top: 140px;\n  left: 0;\n  background: #fff;\n  border: solid 1px #eee;\n  z-index: 2; }\n\n#style-switch h4 {\n  color: #555; }\n\n@media (max-width: 991px) {\n  #style-switch-button {\n    display: none; }\n  #style-switch {\n    display: none; } }\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n\n.nav > li > a {\n  padding: 10px 15px; }\n\n.nav > li > a:hover, .nav > li > a:focus {\n  background-color: #eee; }\n\n.nav > li.disabled > a {\n  color: #999; }\n\n.nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n  color: #999; }\n\n.nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n  background-color: #eee;\n  border-color: #4fbfa8; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n\n.nav-tabs > li > a {\n  line-height: 1.42857143;\n  border-radius: 4px 4px 0 0; }\n\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n  color: #555;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n\n.nav-pills > li > a {\n  border-radius: 0; }\n\n.nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #4fbfa8; }\n\n.nav-tabs-justified > li > a {\n  border-radius: 4px; }\n\n.nav-tabs-justified > .active > a, .nav-tabs-justified > .active > a:hover, .nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd; }\n\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0; }\n  .nav-tabs-justified > .active > a, .nav-tabs-justified > .active > a:hover, .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff; } }\n\n.navbar {\n  font-family: 'Source Sans Pro',sans-serif;\n  min-height: 80px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid transparent; }\n\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 0; } }\n\n.navbar-collapse {\n  max-height: 340px;\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.navbar-collapse.in {\n  overflow-y: auto; }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .navbar-collapse {\n    font-size: 12px; } }\n\n@media (min-width: 768px) {\n  .navbar-collapse {\n    float: left;\n    width: auto;\n    border-top: 0;\n    box-shadow: none; }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important; }\n  .navbar-collapse.in {\n    overflow-y: visible; }\n  .navbar-collapse.right {\n    float: right; }\n  .navbar-fixed-top .navbar-collapse, .navbar-static-top .navbar-collapse, .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0; } }\n\n.container > .navbar-header, .container-fluid > .navbar-header, .container > .navbar-collapse, .container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n\n@media (min-width: 768px) {\n  .container > .navbar-header, .container-fluid > .navbar-header, .container > .navbar-collapse, .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0; } }\n\n.navbar-brand {\n  float: left;\n  padding: 10px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 80px; }\n\n.navbar-brand:hover, .navbar-brand:focus {\n  text-decoration: none; }\n\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px; } }\n\n.navbar-toggle {\n  padding: 9px 10px !important;\n  margin-right: 15px;\n  border-radius: 4px; }\n\n.navbar-nav {\n  margin: 15px -15px; }\n\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px; }\n\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu > li > a, .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px; }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px; }\n  .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none; } }\n\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0; }\n  .navbar-nav > li {\n    float: left; }\n  .navbar-nav > li > a {\n    padding-top: 30px;\n    padding-bottom: 30px; }\n  .navbar-nav.navbar-right:last-child {\n    margin-right: -15px; } }\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border: none;\n  margin-top: 23px;\n  margin-bottom: 23px; }\n\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px; } }\n\n.navbar-btn {\n  margin-top: 23px;\n  margin-bottom: 23px; }\n\n.navbar-btn.btn-sm {\n  margin-top: 25px;\n  margin-bottom: 25px; }\n\n.navbar-btn.btn-xs {\n  margin-top: 29px;\n  margin-bottom: 29px; }\n\n.navbar-text {\n  margin-top: 30px;\n  margin-bottom: 30px; }\n\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px; }\n  .navbar-text.navbar-right:last-child {\n    margin-right: 0; } }\n\n.navbar-default {\n  background-color: #fff;\n  border-bottom-color: #e6e6e6; }\n\n.navbar-default .navbar-brand {\n  color: #777; }\n\n.navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent; }\n\n.navbar-default .navbar-text {\n  color: #777; }\n\n.navbar-default .navbar-nav > li > a {\n  color: #777; }\n\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent; }\n\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: transparent; }\n\n.navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent; }\n\n.navbar-default .navbar-toggle {\n  border-color: #ddd; }\n\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n  background-color: #4fbfa8; }\n\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888; }\n\n.navbar-default .navbar-collapse {\n  border-color: #e6e6e6; }\n\n.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n  background-color: transparent;\n  color: #555; }\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777; }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent; }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: transparent; }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; } }\n\n.navbar-default .navbar-link {\n  color: #777; }\n\n.navbar-default .navbar-link:hover {\n  color: #333; }\n\nbody {\n  font-family: 'Source Sans Pro',sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff; }\n\na {\n  color: #4fbfa8;\n  text-decoration: none; }\n\na:hover, a:focus {\n  color: #348e7b;\n  text-decoration: underline; }\n\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\n.img-rounded {\n  border-radius: 6px; }\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee; }\n\n.breadcrumb {\n  padding: 8px 0;\n  margin-bottom: 20px;\n  background-color: #fff;\n  border-radius: 0;\n  text-align: right; }\n\n.breadcrumb > li + li:before {\n  content: \">\\00a0\";\n  color: #ccc; }\n\n.breadcrumb > .active {\n  color: #999; }\n\n@media (max-width: 991px) {\n  .breadcrumb {\n    padding: 8px 0;\n    text-align: center; } }\n\n.btn {\n  font-weight: normal;\n  font-family: 'Source Sans Pro',sans-serif;\n  text-transform: uppercase;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 3px; }\n\n.btn-primary {\n  color: #4fbfa8;\n  background-color: #fff;\n  border-color: #4fbfa8; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary {\n  color: #4fbfa8;\n  background-color: #ebebeb;\n  border-color: #389985; }\n\n.btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary {\n  background-image: none; }\n\n.btn-primary.disabled, .btn-primary[disabled], fieldset[disabled] .btn-primary, .btn-primary.disabled:hover, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary:hover, .btn-primary.disabled:focus, .btn-primary[disabled]:focus, fieldset[disabled] .btn-primary:focus, .btn-primary.disabled:active, .btn-primary[disabled]:active, fieldset[disabled] .btn-primary:active, .btn-primary.disabled.active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary.active {\n  background-color: #fff;\n  border-color: #4fbfa8; }\n\n.btn-primary .badge {\n  color: #fff;\n  background-color: #4fbfa8; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active {\n  background: #4fbfa8;\n  color: #fff; }\n\n.btn-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33;\n  border-radius: 4px; }\n\n.btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.dropdown-menu > li > a {\n  padding: 5px 20px; }\n\n.label {\n  font-family: 'Source Sans Pro',sans-serif;\n  font-weight: normal;\n  text-transform: uppercase; }\n\nlabel {\n  font-weight: normal; }\n\n.form-control {\n  box-shadow: none; }\n\n.form-control::-moz-placeholder {\n  color: #fafafa;\n  opacity: 1; }\n\n.form-control:-ms-input-placeholder {\n  color: #fafafa; }\n\n.form-control::-webkit-input-placeholder {\n  color: #fafafa;\n  opacity: 1 !important; }\n\n.form-group {\n  margin-bottom: 20px; }\n\n.pager {\n  margin: 20px 0;\n  border-top: solid 1px #eee;\n  padding-top: 20px;\n  text-transform: uppercase;\n  font-family: 'Source Sans Pro',sans-serif; }\n\n.pager li {\n  display: inline; }\n\n.pager li > a, .pager li > span {\n  background-color: #fff;\n  border: 1px solid #4fbfa8;\n  border-radius: 4px; }\n\n.pager li > a:hover, .pager li > a:focus {\n  text-decoration: none;\n  color: #fff;\n  background-color: #4fbfa8; }\n\n.pager .disabled > a, .pager .disabled > a:hover, .pager .disabled > a:focus, .pager .disabled > span {\n  color: #999;\n  background-color: #fff;\n  border-color: #ddd; }\n\n.pagination {\n  margin: 20px 0;\n  font-family: 'Source Sans Pro',sans-serif;\n  border-radius: 0; }\n\n.pagination > li > a, .pagination > li > span {\n  padding: 6px 12px;\n  line-height: 1.42857143;\n  text-decoration: none;\n  color: #4fbfa8;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n\n.pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus {\n  color: #4fbfa8;\n  background-color: #bfe8df;\n  border-color: #ddd; }\n\n.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #4fbfa8;\n  border-color: #4fbfa8; }\n\n.pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus {\n  color: #999;\n  background-color: #fff;\n  border-color: #ddd; }\n\n@media (max-width: 767px) {\n  .text-center-xs {\n    text-align: center !important; }\n  .text-center-xs img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .text-center-sm {\n    text-align: center !important; }\n  .text-center-sm img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto; } }\n\nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: 'Source Sans Pro',sans-serif;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #fff; }\n\nh1, .h1, h2, .h2, h3, .h3 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\np {\n  margin: 0 0 10px; }\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px; }\n\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px; } }\n\n.text-small {\n  font-size: 12px; }\n\n.text-large {\n  font-size: 18px; }\n\n.text-italic {\n  font-style: italic; }\n\n.text-primary {\n  color: #4fbfa8; }\n\na.text-primary:hover {\n  color: #3aa18c; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #4fbfa8; }\n\na.bg-primary:hover {\n  background-color: #3aa18c; }\n\nabbr[title], abbr[data-original-title] {\n  border-bottom: 1px dotted #999; }\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 14px;\n  border-left: 5px solid #4fbfa8; }\n\nblockquote footer, blockquote small, blockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #999; }\n\nblockquote footer:before, blockquote small:before, blockquote .small:before {\n  content: '\\2014 \\00A0'; }\n\n.blockquote-reverse, blockquote.pull-right {\n  border-right: 5px solid #4fbfa8; }\n\naddress {\n  margin-bottom: 20px;\n  line-height: 1.42857143; }\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 0;\n  box-shadow: 0 0 0; }\n\n.panel-primary {\n  border-color: #4fbfa8; }\n\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #4fbfa8;\n  border-color: #4fbfa8; }\n\n.panel-primary > .panel-heading + .panel-collapse .panel-body {\n  border-top-color: #4fbfa8; }\n\n.panel-primary > .panel-footer + .panel-collapse .panel-body {\n  border-bottom-color: #4fbfa8; }\n\n.panel-primary .panel-title {\n  font-weight: 300; }\n\n.panel-primary .panel-title a:hover {\n  color: #fff;\n  text-decoration: none; }\n\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\na.list-group-item.active > .badge, .nav-pills > .active > a > .badge {\n  color: #4fbfa8;\n  background-color: #fff; }\n\n.nav-pills > li > a > .badge {\n  margin-left: 3px; }\n\n/**********************************\r\nResponsive navbar-brand image CSS\r\n- Remove navbar-brand padding for firefox bug workaround\r\n- add 100% height and width auto ... similar to how bootstrap img-responsive class works\r\n***********************************/\n\n.navbar-brand {\n  background-color: white;\n  padding: 0px; }\n\n.navbar-brand > img {\n  height: 100%;\n  padding: 15px;\n  width: auto; }\n\n.navbar {\n  margin-bottom: 0px;\n  margin-top: 10px; }\n\n/* EXAMPLE 8 - Center on mobile*/\n\n@media only screen and (max-width: 768px) {\n  .example-8 .navbar-brand {\n    padding: 0px;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    left: 50%;\n    position: absolute; }\n  .example-8 .navbar-brand > img {\n    height: 100%;\n    width: auto;\n    padding: 7px 14px; } }\n\n/* EXAMPLE 8 - Center Background */\n\n.example-8 .navbar-brand {\n  background: url('carnival-logo.png') center/contain no-repeat;\n  width: 200px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 50%;\n  position: absolute; }\n\n.bg-dark {\n  background-color: white !important; }\n\n.btn-primary {\n  color: white;\n  background-color: #0e2250a1;\n  border-color: white;\n  font-weight: bold;\n  margin: 0px 15px; }\n\n.navbar-header {\n  margin-top: -100px; }\n\n.btn-primary:hover {\n  border: 1px solid white;\n  background: #4fbfa8ad; }\n"

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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('.bg-dark').removeClass('bg-dark');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-login mx-auto mt-5\">\n    <div class=\"card-header\">Login</div>\n    <div class=\"card-body\">\n      <form>\n        <div class=\"form-group\">\n          <div class=\"form-label-group\">\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"required\" autofocus=\"autofocus\">\n            <label for=\"inputEmail\">Email address</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-label-group\">\n            <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"required\">\n            <label for=\"inputPassword\">Password</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" value=\"remember-me\">\n              Remember Password\n            </label>\n          </div>\n        </div>\n        <a class=\"btn btn-primary btn-block\" routerLink=\"/welcome\">Login</a>\n      </form>\n      <div class=\"text-center\">\n        <a class=\"d-block small mt-3\" routerLink=\"/register\">Create Account</a>\n        <a class=\"d-block small\" routerLink=\"/reset-password\">Forgot Password?</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <div class=\"card mt-5 mb-5\">\n    <div class=\"card-header\">Profile Data</div>\n    <div class=\"card-body\">\n      <form>\n        <div class=\"form-group\">\n          <div class=\"form-label-group\">\n            <input name=\"userFirstName\" [(ngModel)]=\"globals.userFirstName\" type=\"text\" id=\"first_name\" class=\"form-control\" placeholder=\"\"\n              required=\"required\">\n            <label for=\"first_name\">First Name</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-label-group\">\n            <input name=\"userLastName\" [(ngModel)]=\"globals.userLastName\" type=\"text\" id=\"last_name\" class=\"form-control\" placeholder=\"\"\n              required=\"required\">\n            <label for=\"last_name\">Last Name</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-label-group\">\n            <input name=\"userDOB\" [(ngModel)]=\"globals.userDOB\" type=\"text\" id=\"user_dob\" class=\"form-control\" placeholder=\"\" required=\"required\">\n            <label for=\"user_dob\">DOB</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-label-group\">\n            <input name=\"userAddress\" [(ngModel)]=\"globals.userAddress\" type=\"text\" id=\"address\" class=\"form-control\" placeholder=\"\"\n              required=\"required\">\n            <label for=\"address\">Address</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-label-group\">\n            <input name=\"userPassport\" [(ngModel)]=\"globals.userPassport\" type=\"text\" id=\"passport_number\" class=\"form-control\" placeholder=\"\"\n              required=\"required\">\n            <label for=\"passport_number\">Passport Number</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-label-group\">\n            <input name=\"userLicense\" [(ngModel)]=\"globals.userLicense\" type=\"text\" id=\"license_number\" class=\"form-control\" placeholder=\"\"\n              required=\"required\">\n            <label for=\"license_number\">License Number</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-6 col-sm-12 col-md-6 mbx-10\" style=\"float:left\">\n            <a routerLink=\"/ticket\" style=\"color:white;\" id=\"bookTicket\" class=\"btn btn-primary btn-block\" (click)=\"bookTicket()\">\n                Book now\n              </a>\n          </div>\n          <div class=\"col-lg-6 col-sm-12 col-md-6  mbx-10\" style=\"float:left\">\n            <a routerLink=\"/welcome\" style=\"color:white;\" id=\"cancelProfile\" class=\"btn btn-primary btn-block\">\n              Cancel\n            </a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mbx-10 {\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(globals) {
        this.globals = globals;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.bookTicket = function () {
        var ticketId = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < 8; i++) {
            ticketId += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        sessionStorage.setItem('carnivalUserName', this.globals.userFirstName + ' ' + this.globals.userLastName);
        sessionStorage.setItem('carnivalTicketId', ticketId);
        sessionStorage.setItem('carnivalPassport', this.globals.userPassport);
        return true;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card card-register mx-auto mt-5\">\n      <div class=\"card-header\">Create Account</div>\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <div class=\"form-row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-label-group\">\n                  <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"First name\" required=\"required\" autofocus=\"autofocus\">\n                  <label for=\"firstName\">First name</label>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-label-group\">\n                  <input type=\"text\" id=\"lastName\" class=\"form-control\" placeholder=\"Last name\" required=\"required\">\n                  <label for=\"lastName\">Last name</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-label-group\">\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"required\">\n              <label for=\"inputEmail\">Email address</label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-label-group\">\n                  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"required\">\n                  <label for=\"inputPassword\">Password</label>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-label-group\">\n                  <input type=\"password\" id=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm password\" required=\"required\">\n                  <label for=\"confirmPassword\">Confirm password</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <a class=\"btn btn-primary btn-block\" routerLink=\"/login\">Register</a>\n        </form>\n        <div class=\"text-center\">\n          <a class=\"d-block small mt-3\" routerLink=\"/login\">Login Page</a>\n          <a class=\"d-block small\" routerLink=\"/reset-password\">Forgot Password?</a>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card card-login mx-auto mt-5\">\n      <div class=\"card-header\">Reset Password</div>\n      <div class=\"card-body\">\n        <div class=\"text-center mb-4\">\n          <h4>Forgot your password?</h4>\n          <p>Enter your email address and we will send you instructions on how to reset your password.</p>\n        </div>\n        <form>\n          <div class=\"form-group\">\n            <div class=\"form-label-group\">\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Enter email address\" required=\"required\" autofocus=\"autofocus\">\n              <label for=\"inputEmail\">Enter email address</label>\n            </div>\n          </div>\n          <a class=\"btn btn-primary btn-block\" routerLink=\"/login\">Reset Password</a>\n        </form>\n        <div class=\"text-center\">\n          <a class=\"d-block small mt-3\" routerLink=\"/register\">Create Account</a>\n          <a class=\"d-block small\" routerLink=\"/login\">Login Page</a>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
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

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent() {
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/scanner/scanner.component.html":
/*!************************************************!*\
  !*** ./src/app/scanner/scanner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard-head></app-dashboard-head>\n<div id=\"wrapper\">\n  <!-- Sidebar -->\n  <ul class=\"sidebar navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/welcome\">\n        <i class=\"fas fa-fw fa-home\"></i>\n        <span>&nbsp;Home</span>\n      </a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/scanner\">\n        <i class=\"fas fa-fw fa-camera\"></i>\n        <span>&nbsp;Scanner</span>\n      </a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/ticket\">\n        <i class=\"fas fa-fw fa-trophy\"></i>\n        <span>&nbsp;Ticket</span>\n      </a>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"pagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\">\n        <i class=\"fas fa-fw fa-folder\"></i>\n        <span>&nbsp;Pages</span>\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"pagesDropdown\">\n        <h6 class=\"dropdown-header\">Login Screens:</h6>\n        <a class=\"dropdown-item\" routerLink=\"/login\">Login</a>\n        <a class=\"dropdown-item\" routerLink=\"/register\">Register</a>\n        <a class=\"dropdown-item\" routerLink=\"/reset-password\">Forgot Password</a>\n      </div>\n    </li>\n\n  </ul>\n  <div id=\"content-wrapper\">\n    <div class=\"container-fluid\">\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Scanner</li>\n      </ol>\n      <div id='planData'>\n        <div style=\"max-width: 500px;\">\n          <div class=\"card mtx-10\">\n            <div class=\"card-header\">Journey details</div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"form-group\">\n                  <div class=\"form-label-group\">\n                    <input name=\"journeyFromDate\" [(ngModel)]=\"journeyFromDate\" type=\"text\" class=\"form-control\" placeholder=\"\" readonly>\n                    <label for=\"journeyFromDate\">Journey Start</label>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-label-group\">\n                    <input name=\"journeyUpTo\" [(ngModel)]=\"journeyUpTo\" type=\"text\" class=\"form-control\" placeholder=\"\" readonly>\n                    <label for=\"journeyUpTo\">Journey Upto</label>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-label-group\">\n                    <input name=\"journeyCruise\" [(ngModel)]=\"journeyCruise\" type=\"text\" class=\"form-control\" placeholder=\"\" readonly>\n                    <label for=\"journeyCruise\">Cruise name</label>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-label-group\">\n                    <input name=\"journeyPrice\" [(ngModel)]=\"journeyPrice\" type=\"text\" class=\"form-control\" placeholder=\"\" readonly>\n                    <label for=\"journeyPrice\">Package cost</label>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div style=\"max-width:500px\">\n        <div class=\"card mtx-10\">\n          <div class=\"card-header\">Upload your Document</div>\n          <div class=\"card-body\">\n            <form>\n              <div class=\"form-group\">\n                <div style=\"float: left;font-weight:bold\" class=\"col-lg-6 col-sm-6 col-12 mtx-10\">Passport / Driving Licence\n                </div>\n                <div style=\"float: left;\" class=\"input-group col-lg-6 col-sm-6 col-12 mtx-10\">\n                  <label class=\"input-group-btn\">\n                    <span class=\"btn btn-primary\" style=\"border-bottom-right-radius: 0;border-top-right-radius: 0;\">\n                      Browse&hellip; <input type=\"file\" (fileselect)=\"setFilePath($event)\" class=\"passport\" (change)=\"onFileChanged($event)\"\n                        style=\"display: none;\">\n                    </span>\n                  </label>\n                  <input type=\"text\" class=\"form-control\" readonly>\n                </div>\n                <div style=\"clear:both\"></div>\n                <div id=\"progressTop\">\n                  <div *ngIf=\"showProgress\">\n                    <div style=\"float:left\" class=\"col-lg-6 col-sm-6 col-12 mtx-10\">Upload Percent:</div>\n                    <div style=\"float:left\" class=\"input-group col-lg-6 col-sm-6 col-12 mtx-10\">\n                      <div class=\"progress\" style=\"width: 100%;height:28px;\">\n                        <div id=\"progressMeter\" style=\"width: 0%;\" class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" attr.aria-valuenow=\"{{percentDone}}\"\n                          attr.aria-valuemin=\"10\" attr.aria-valuemax=\"100\">\n                          {{percentDoneStr}}\n                        </div>\n                      </div>\n                    </div>\n                    <div style=\"clear:both\"></div>\n                  </div>\n                </div>\n                <ng-container *ngIf=\"uploadSuccess\">\n                  <div class=\"form-group\">\n                    <div class=\"col-12 mtx-10\">\n                      <div class=\"alert alert-success text-center\">\n                        <strong>Upload Successful!!</strong>\n                      </div>\n                    </div>\n                  </div>\n                </ng-container>\n                <div id=\"previewTop\">\n                  <div class=\"form-group\" *ngIf=\"imgPreview\">\n                    <div class=\"col-12 mtx-10\">\n                      <div class=\"img-container\">\n                        <div class=\"thumbex\">\n                          <div class=\"thumbnail\">\n                            <div [ngClass]=\"{'scanning':scanStatus}\">\n                              <img id=\"uploaderPreview\" src=\"{{base64Encoded}}\" />\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-12 mtx-10\">\n                  <button id=\"uploadButton\" style=\"color: #fff;\" class=\"btn btn-primary btn-block\" (click)=\"onUpload($event)\">Upload</button>\n                </div>\n              </div>\n              <div class=\"form-group\" *ngIf=\"abortProcess\">\n                <div class=\"col-12\">\n                  <a routerLink=\"/scanner\"><button id=\"abortButton\" style=\"color: #fff;\" class=\"btn btn-primary btn-block\"\n                      (click)=\"resetUpload(true)\"><i class=\"fa fa-power-off\"></i>Abort</button></a>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div id='profileTop'>\n        <app-profile *ngIf=\"loadProfile\"></app-profile>\n      </div>\n\n      <br><br>\n\n    </div>\n    <!-- /.container-fluid -->\n  </div>\n  <!-- /.content-wrapper -->\n</div>\n<!-- /#wrapper -->\n<app-dashboard-foot></app-dashboard-foot>"

/***/ }),

/***/ "./src/app/scanner/scanner.component.scss":
/*!************************************************!*\
  !*** ./src/app/scanner/scanner.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add a right margin to each icon */\n.fa {\n  margin-left: -12px;\n  margin-right: 8px; }\n.mtx-10 {\n  margin-top: 10px; }\n.scanning:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background: linear-gradient(90deg, #f8f9fa21 30%, #21212194 13%, rgba(0, 255, 0, 0.5) 49%, lime 40%, #f8f9fa21 30%);\n  background-size: 300% 100%;\n  background-repeat: no-repeat;\n  background-position: 84% center;\n  animation: scanning 1s infinite ease;\n  -webkit-animation: scan 1s infinite ease; }\n@-webkit-keyframes scanning {\n  /* finish with the scan bar just off the right side */\n  100% {\n    background-position: 25% center; } }\n@keyframes scanning {\n  /* finish with the scan bar just off the right side */\n  100% {\n    background-position: 25% center; } }\n@-webkit-keyframes scan {\n  /* finish with the scan bar just off the right side */\n  100% {\n    background-position: 25% center; } }\n.img-container {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  padding: 0 30px; }\n.img-container .thumbex {\n  margin: 10px 20px 30px;\n  width: 100%;\n  min-width: 180px;\n  max-width: 350px;\n  height: 230px;\n  flex: 1;\n  overflow: hidden;\n  outline: 2px solid white;\n  outline-offset: -15px;\n  background-color: white;\n  box-shadow: 5px 10px 40px 5px rgba(0, 0, 0, 0.5); }\n.img-container .thumbex .thumbnail {\n  overflow: hidden;\n  min-width: 180px;\n  height: 230px;\n  position: relative;\n  opacity: 0.88;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all 0.4s ease-out; }\n.img-container .thumbex .thumbnail img {\n  position: absolute;\n  z-index: 1;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: auto;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n.img-container .thumbex .thumbnail:hover {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: scale(1.15, 1.15);\n          transform: scale(1.15, 1.15);\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/app/scanner/scanner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/scanner/scanner.component.ts ***!
  \**********************************************/
/*! exports provided: ScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerComponent", function() { return ScannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScannerComponent = /** @class */ (function () {
    function ScannerComponent(globals, http) {
        this.globals = globals;
        this.http = http;
        this.journeyFromDate = sessionStorage.getItem('carnivalPlanSt');
        this.journeyUpTo = sessionStorage.getItem('carnivalPlanEd');
        this.journeyCruise = sessionStorage.getItem('carnivalPlanShip');
        this.journeyPrice = sessionStorage.getItem('carnivalPlanPrice');
        this.percentDone = 0;
        this.percentDoneStr = "0%";
    }
    ScannerComponent.prototype.ngOnInit = function () { };
    ScannerComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files;
        $(".passport").parents('.input-group').find(':text').val(event.target.files[0].name);
    };
    ScannerComponent.prototype.checkMyDatesAllowed = function (startDate, endDate, expiry) {
        if (expiry >= startDate && expiry >= endDate) {
            return true;
        }
        else
            return false;
    };
    ScannerComponent.prototype.onUpload = function ($event) {
        $event.preventDefault();
        if (typeof this.selectedFile != "undefined") {
            var uploadData = new FormData();
            this.http.post('my-backend.com/file-upload', uploadData);
            this.showProgress = true;
            this.abortProcess = true;
            this.uploadSuccess = false;
            $("#uploadButton").prepend('<i class="fa fa-spinner fa-spin"></i>&nbsp;');
            $("#uploadButton").prop('disabled', 'true');
            $('html, body').animate({
                scrollTop: $("#progressTop").offset().top
            }, 2000);
            this.uploadAndProgress(this.selectedFile);
        }
        else {
            $('#errorBody').text('Please select the file to upload');
            $('#errorModal').modal('show');
        }
    };
    ScannerComponent.prototype.resetUpload = function (msgbypass) {
        this.abortProcess = false;
        this.showProgress = false;
        this.uploadSuccess = false;
        this.percentDone = 0;
        this.percentDoneStr = "0%";
        this.scanStatus = false;
        $('#uploadButton').text("Upload");
        $('#uploadButton i').remove();
        $("#uploadButton").removeAttr("disabled");
        if (!msgbypass) {
            $('#errorBody').text('Unable to process this action now, please try again later.');
            $('#errorModal').modal('show');
        }
    };
    ScannerComponent.prototype.uploadAndProgress = function (files) {
        var _this_1 = this;
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        var _this = this;
        this.http.post('https://file.io', formData, { reportProgress: true, observe: 'events' })
            .subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this_1.percentDone = Math.round(100 * event.loaded / event.total);
                _this_1.percentDoneStr = _this_1.percentDone.toString() + "%";
                $('#progressMeter').css("width", _this.percentDoneStr);
                if (_this_1.percentDone == 100)
                    _this_1.percentDoneStr = "Almost done..";
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                var result = event.body;
                if (String(result['success']) == 'true') {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        var reader = new FileReader();
                        reader.onloadend = function () {
                            _this.base64Encoded = reader.result.toString();
                            _this.percentDone = 100;
                            _this.percentDoneStr = _this.percentDone.toString() + "%";
                            $('#progressMeter').css("width", _this.percentDoneStr);
                            _this.imgPreview = true;
                            _this.scanStatus = true;
                            _this.uploadSuccess = true;
                            $('#uploadButton i').remove();
                            $('#uploadButton').text("Recognizing Data");
                            $("#uploadButton").append('&nbsp;<i class="fa fa-cog fa-spin"></i>');
                            $('html, body').animate({
                                scrollTop: $("#previewTop").offset().top
                            }, 2000);
                            console.log('call OCR');
                            _this.getOCRData();
                        };
                        reader.readAsDataURL(xhr.response);
                    };
                    xhr.open('GET', result['link']);
                    xhr.responseType = 'blob';
                    xhr.send();
                }
            }
        }, function (err) {
            _this_1.resetUpload(true);
            console.log(err);
        });
    };
    ScannerComponent.prototype.getOCRData = function () {
        var _this_1 = this;
        var formData = new FormData();
        //formData.append('apikey', '273ed2d3bf88957');
        formData.append('apikey', '2b3c7276dd88957');
        formData.append('language', 'eng');
        formData.append('isOverlayRequired', 'true');
        formData.append('base64Image', this.base64Encoded);
        this.http.post("https://api.ocr.space/parse/image", formData)
            .subscribe(function (res) {
            console.log(res);
            if (res) {
                if (res['ParsedResults'] != null) {
                    console.log(res['ParsedResults']);
                    console.log(res['ParsedResults'][0]);
                    console.log(res['ParsedResults'][0]['ParsedText']);
                    _this_1.OCRParseText = res['ParsedResults'][0]['ParsedText'];
                    _this_1.scanStatus = false;
                    var verified = _this_1.verifyDocument();
                    _this_1.resetUpload(true);
                    if (verified) {
                        _this_1.loadProfile = true;
                        $('html, body').animate({
                            scrollTop: $("#profileTop").offset().top - 150
                        }, 2000);
                    }
                }
                else {
                    _this_1.resetUpload(false);
                }
            }
            else {
                _this_1.resetUpload(false);
                console.log('OCR failed to detect text.Please try again');
            }
        }, function (err) {
            _this_1.resetUpload(false);
            console.log(err);
        });
    };
    ScannerComponent.prototype.verifyDocument = function () {
        var status;
        var parsedText = this.OCRParseText.toString();
        /****** DL verfification  *******/
        var dl_verify1 = parsedText.toString().match(/driving/i);
        var pass_verify1 = parsedText.toString().match(/republic/i);
        var _this = this;
        if (dl_verify1) {
            console.log("DL verified");
            var array = parsedText.split("\n");
            //console.log(array);
            /*array.forEach(element => {
              var str = element.replace(/[^0-9]/g, "");
              //console.log(str.length);
              if (str.length == 9) {
                //if (!isNaN(str))
                  this.globals.userLicense = str;
                  console.log("DL "+this.globals.userLicense);
              }
            });*/
            var dlNumKey = -1;
            var dlAddressStKey = -1;
            var dlAddressEdKey = -1;
            var dlFNfound = false;
            var dlLNfound = false;
            var dlAddressFound = false;
            var dlDOBFound = false;
            var dlNumFound = false;
            array.forEach(function (element, key) {
                var dlNum = element.replace(/[^0-9]/g, "");
                var dlLname = element.toString().match(/S\/D\/W/i);
                var dlAddress = element.toString().match(/Address/i);
                var dlDOB = element.toString().match(/D\.O\.B/i);
                if (dlLname && !dlLNfound) {
                    _this.globals.userLastName = element.substr(element.lastIndexOf(":") + 1).toString().trim();
                    console.log("LN " + _this.globals.userLastName);
                    dlLNfound = true;
                }
                if (dlAddress) {
                    dlAddressStKey = key + 1;
                }
                if (dlDOB && !dlDOBFound) {
                    dlAddressEdKey = key;
                    _this.globals.userDOB = element.substr(element.lastIndexOf(":") + 1).toString().trim();
                    console.log("DOB " + _this.globals.userDOB);
                    dlDOBFound = true;
                }
                if (dlNum.length == 9 && !dlNumFound) {
                    //if (!isNaN(str))
                    _this.globals.userLicense = dlNum;
                    dlNumKey = key;
                    console.log("DL " + _this.globals.userLicense);
                    dlNumFound = true;
                }
                if (dlNumKey != -1 && !dlFNfound) {
                    _this.globals.userFirstName = array[key + 1].trim();
                    console.log("FN " + _this.globals.userFirstName);
                    dlFNfound = true;
                }
                if (dlAddressStKey != -1 && dlAddressEdKey != -1 && dlAddressStKey < dlAddressEdKey && !dlAddressFound) {
                    var pointer = dlAddressStKey;
                    var AdString = "";
                    while (pointer < dlAddressEdKey) {
                        AdString += array[pointer].toString().trim();
                        pointer++;
                    }
                    _this.globals.userAddress = AdString;
                    console.log("Ad " + _this.globals.userAddress);
                    dlAddressFound = true;
                }
            });
            status = true;
        }
        else if (pass_verify1) {
            console.log("Passport verified");
            var array = parsedText.split("\n");
            var passNamesfound = false;
            var passAddressFound = false;
            var passDOBFound = false;
            var passNumFound = false;
            /*array.forEach(element => {
              var str = element.replace(/[^0-9]/g, "");
              console.log(element)
              //console.log(str);
              //console.log(str.length);
              if (str.length == 7) {
                this.globals.userPassport = element[0].toUpperCase() + ' ' + str;
                console.log("PN "+this.globals.userPassport);
              }
            });*/
            array.forEach(function (element, key) {
                var passNum = element.replace(/[^0-9]/g, "");
                var passDOB = element.toString().match(/expiry/i);
                var passAddress = element.toString().match(/p.ace of birth/i);
                var passNation = element.toString().match(/indian/i);
                //console.log(str);
                //console.log(str.length);
                if (passNum.length == 7 && !passNumFound) {
                    _this.globals.userPassport = element[0].toUpperCase() + ' ' + passNum;
                    console.log("PN " + _this.globals.userPassport);
                    passNumFound = true;
                }
                if (passDOB && !passDOBFound) {
                    _this.globals.userDOB = array[key - 1].trim();
                    var expiry = _this.convertDate(array[key + 1].trim());
                    var sDate = _this.convertDate(sessionStorage.getItem('carnivalPlanSt'));
                    var eDate = _this.convertDate(sessionStorage.getItem('carnivalPlanEd'));
                    if (!_this.checkMyDatesAllowed(sDate, eDate, expiry)) {
                        $('#errorBody').text('Please renew your passport, before journey');
                        $('#errorModal').modal('show');
                    }
                    console.log("PDOB " + _this.globals.userDOB);
                    console.log("PExp " + expiry);
                    passDOBFound = true;
                }
                if (passAddress && !passAddressFound) {
                    _this.globals.userAddress = array[key + 1].trim();
                    console.log("PAd " + _this.globals.userAddress);
                    passAddressFound = true;
                }
                if (passNation && !passNamesfound) {
                    _this.globals.userFirstName = array[key - 1].trim();
                    _this.globals.userLastName = array[key - 2].trim();
                    console.log("PFN " + _this.globals.userFirstName);
                    console.log("PLN " + _this.globals.userLastName);
                    passNamesfound = true;
                }
            });
            status = true;
        }
        else {
            $('#errorBody').text('We not able to recognize your document, please try with different.');
            $('#errorModal').modal('show');
            status = false;
        }
        return status;
    };
    ScannerComponent.prototype.convertDate = function (dateStr) {
        var dateStrArr = dateStr.split("");
        var date = parseInt(dateStrArr[0] + dateStrArr[1]);
        var month = parseInt(dateStrArr[3] + dateStrArr[4]);
        var year = parseInt(dateStrArr[6] + dateStrArr[7] + dateStrArr[8] + dateStrArr[9]);
        return new Date(year, month - 1, date);
    };
    ScannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scanner',
            template: __webpack_require__(/*! ./scanner.component.html */ "./src/app/scanner/scanner.component.html"),
            styles: [__webpack_require__(/*! ./scanner.component.scss */ "./src/app/scanner/scanner.component.scss")]
        }),
        __metadata("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScannerComponent);
    return ScannerComponent;
}());



/***/ }),

/***/ "./src/app/ticket/ticket.component.html":
/*!**********************************************!*\
  !*** ./src/app/ticket/ticket.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard-head></app-dashboard-head>\n<div id=\"wrapper\">\n  <!-- Sidebar -->\n  <ul class=\"sidebar navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/welcome\">\n        <i class=\"fas fa-fw fa-home\"></i>\n        <span>&nbsp;Home</span>\n      </a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/scanner\">\n        <i class=\"fas fa-fw fa-camera\"></i>\n        <span>&nbsp;Scanner</span>\n      </a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/ticket\">\n        <i class=\"fas fa-fw fa-trophy\"></i>\n        <span>&nbsp;Ticket</span>\n      </a>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"pagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\">\n        <i class=\"fas fa-fw fa-folder\"></i>\n        <span>&nbsp;Pages</span>\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"pagesDropdown\">\n        <h6 class=\"dropdown-header\">Login Screens:</h6>\n        <a class=\"dropdown-item\" routerLink=\"/login\">Login</a>\n        <a class=\"dropdown-item\" routerLink=\"/register\">Register</a>\n        <a class=\"dropdown-item\" routerLink=\"/reset-password\">Forgot Password</a>\n      </div>\n    </li>\n\n  </ul>\n  <div id=\"content-wrapper\">\n    <div class=\"container-fluid\">\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Ticket</li>\n      </ol>\n      <div id='planData'>\n        <div style=\"max-width:500px\">\n          <div class=\"card mtx-10\">\n            <div class=\"card-header\">Booking Done!!</div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"form-group mtx-10\">\n                  <div id=\"ticketQR\">\n                    <div class=\"img-container\">\n                      <div class=\"thumbex\">\n                        <div class=\"thumbnail\">\n                          <div>\n                            <img id=\"uploaderPreview\" src=\"./../../assets/img/bookingQR.PNG\" />\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <h4 class=\"text-primary\">Take a look of your Cruise</h4>\n                </div>\n                <div class=\"form-group\">\n                  <video class=\"video-fluid z-depth-1\" autoplay loop controls muted>\n                    <source src=\"https://mdbootstrap.com/img/video/Sail-Away.mp4\" type=\"video/mp4\" />\n                  </video>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"card mtx-10 mb-5\">\n            <div class=\"card-header\">Booking Details</div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"form-group\">\n                  <div class=\"form-label-group\">\n                    <input name=\"journeyId\" [(ngModel)]=\"journeyId\" type=\"text\" class=\"form-control\" placeholder=\"\" readonly>\n                    <label for=\"journeyId\">Booking ID</label>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-label-group\">\n                    <input name=\"journeyFromDate\" [(ngModel)]=\"journeyFromDate\" type=\"text\" class=\"form-control\" placeholder=\"\" readonly>\n                    <label for=\"journeyFromDate\">Journey Start</label>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-label-group\">\n                    <input name=\"journeyUpTo\" [(ngModel)]=\"journeyUpTo\" type=\"text\" class=\"form-control\" placeholder=\"\" readonly>\n                    <label for=\"journeyUpTo\">Journey Upto</label>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-label-group\">\n                    <input name=\"journeyCruise\" [(ngModel)]=\"journeyCruise\" type=\"text\" class=\"form-control\" placeholder=\"\" readonly>\n                    <label for=\"journeyCruise\">Cruise name</label>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-label-group\">\n                    <input name=\"journeyPrice\" [(ngModel)]=\"journeyPrice\" type=\"text\" class=\"form-control\" placeholder=\"\" readonly>\n                    <label for=\"journeyPrice\">Package cost</label>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-label-group\">\n                    <input name=\"journeyTraveller\" [(ngModel)]=\"journeyTraveller\" type=\"text\" class=\"form-control\" placeholder=\"\" readonly>\n                    <label for=\"journeyTraveller\">Traveller Name</label>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-label-group\">\n                    <input name=\"journeyTravellerPassport\" [(ngModel)]=\"journeyTravellerPassport\" type=\"text\" class=\"form-control\" placeholder=\"\"\n                      readonly>\n                    <label for=\"journeyTravellerPassport\">Traveller Passport</label>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n\n        <br><br>\n      </div>\n    </div>\n    <!-- /.container-fluid -->\n  </div>\n  <!-- /.content-wrapper -->\n</div>\n<!-- /#wrapper -->\n<app-dashboard-foot></app-dashboard-foot>"

/***/ }),

/***/ "./src/app/ticket/ticket.component.scss":
/*!**********************************************!*\
  !*** ./src/app/ticket/ticket.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add a right margin to each icon */\n.fa {\n  margin-left: -12px;\n  margin-right: 8px; }\n.mtx-10 {\n  margin-top: 10px; }\n.scanning:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background: linear-gradient(90deg, #f8f9fa21 30%, #21212194 13%, rgba(0, 255, 0, 0.5) 49%, lime 40%, #f8f9fa21 30%);\n  background-size: 300% 100%;\n  background-repeat: no-repeat;\n  background-position: 84% center;\n  animation: scanning 1s infinite ease;\n  -webkit-animation: scan 1s infinite ease; }\n@-webkit-keyframes scanning {\n  /* finish with the scan bar just off the right side */\n  100% {\n    background-position: 25% center; } }\n@keyframes scanning {\n  /* finish with the scan bar just off the right side */\n  100% {\n    background-position: 25% center; } }\n@-webkit-keyframes scan {\n  /* finish with the scan bar just off the right side */\n  100% {\n    background-position: 25% center; } }\n.img-container {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center; }\n.img-container .thumbex {\n  width: 100%;\n  min-width: 135px;\n  max-width: 350px;\n  height: 250px;\n  flex: 1;\n  overflow: hidden;\n  outline: 2px solid white;\n  outline-offset: -15px;\n  background-color: white;\n  box-shadow: 5px 10px 40px 5px rgba(0, 0, 0, 0.5); }\n.img-container .thumbex .thumbnail {\n  overflow: hidden;\n  min-width: 135px;\n  height: 250px;\n  position: relative;\n  opacity: 0.88;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all 0.4s ease-out; }\n.img-container .thumbex .thumbnail img {\n  position: absolute;\n  z-index: 1;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: auto;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n.img-container .thumbex .thumbnail:hover {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: scale(1.15, 1.15);\n          transform: scale(1.15, 1.15);\n  opacity: 1; }\n.video-fluid {\n  width: 100%;\n  height: auto; }\n"

/***/ }),

/***/ "./src/app/ticket/ticket.component.ts":
/*!********************************************!*\
  !*** ./src/app/ticket/ticket.component.ts ***!
  \********************************************/
/*! exports provided: TicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function() { return TicketComponent; });
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

var TicketComponent = /** @class */ (function () {
    function TicketComponent() {
        this.journeyFromDate = sessionStorage.getItem('carnivalPlanSt');
        this.journeyUpTo = sessionStorage.getItem('carnivalPlanEd');
        this.journeyCruise = sessionStorage.getItem('carnivalPlanShip');
        this.journeyPrice = sessionStorage.getItem('carnivalPlanPrice');
        this.journeyId = sessionStorage.getItem('carnivalTicketId');
        this.journeyTraveller = sessionStorage.getItem('carnivalUserName');
        this.journeyTravellerPassport = sessionStorage.getItem('carnivalPassport');
    }
    TicketComponent.prototype.ngOnInit = function () {
    };
    TicketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ticket',
            template: __webpack_require__(/*! ./ticket.component.html */ "./src/app/ticket/ticket.component.html"),
            styles: [__webpack_require__(/*! ./ticket.component.scss */ "./src/app/ticket/ticket.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TicketComponent);
    return TicketComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard-head></app-dashboard-head>\n<div id=\"wrapper\">\n  <!-- Sidebar -->\n  <ul class=\"sidebar navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/welcome\">\n        <i class=\"fas fa-fw fa-home\"></i>\n        <span>&nbsp;Home</span>\n      </a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/scanner\">\n        <i class=\"fas fa-fw fa-camera\"></i>\n        <span>&nbsp;Scanner</span>\n      </a>\n    </li>\n    <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/ticket\">\n          <i class=\"fas fa-fw fa-trophy\"></i>\n          <span>&nbsp;Ticket</span>\n        </a>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"pagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\">\n        <i class=\"fas fa-fw fa-folder\"></i>\n        <span>&nbsp;Pages</span>\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"pagesDropdown\">\n        <h6 class=\"dropdown-header\">Login Screens:</h6>\n        <a class=\"dropdown-item\" routerLink=\"/login\">Login</a>\n        <a class=\"dropdown-item\" routerLink=\"/register\">Register</a>\n        <a class=\"dropdown-item\" routerLink=\"/reset-password\">Forgot Password</a>\n      </div>\n    </li>\n    \n  </ul>\n  <div id=\"content-wrapper\">\n    <div class=\"container-fluid\">\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Carnival</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Home</li>\n      </ol>\n      <h2 class='text-white' style=\"margin:30px 0px\">Bookings now open for all cruises, never miss..</h2>\n\n      <div class=\"row\">\n        <div class='col-xl-3 col-sm-6 mb-3'>\n          <div class=\"form-group\">\n            <div class=\"form-label-group\">\n              <input autocomplete=\"off\" name=\"fromDate\" data-field=\"datetime\" type=\"text\" id=\"fromDate\" class=\"form-control\" placeholder=\"\"\n                required=\"required\">\n              <label for=\"fromDate\">Select Start Date</label>\n            </div>\n          </div>\n        </div>\n        <div class='col-xl-3 col-sm-6 mb-3'>\n          <div class=\"form-group\">\n            <div class=\"form-label-group\">\n              <input autocomplete=\"off\" name=\"toDate\" data-field=\"datetime\" type=\"text\" id=\"toDate\" class=\"form-control\" placeholder=\"\"\n                required=\"required\">\n              <label for=\"toDate\">Select End Date</label>\n            </div>\n          </div>\n        </div>\n        <div class='col-xl-3 col-sm-6 mb-3'>\n          <button class=\"button-cruise\" (click)=\"filterCruise()\"><span>Find My Cruise </span></button>\n        </div>\n        <div id=\"dtBox\"></div>\n      </div>\n      <!-- Icon Cards-->\n      <div class=\"cruiseList\" *ngIf=\"showCruises\">\n        <div class=\"row\">\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white bg-primary o-hidden h-100\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa-anchor fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">Iona</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white bg-warning o-hidden h-100\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa-bell fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">Britannia</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white bg-success o-hidden h-100\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa-magnet fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">Oceana</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white bg-danger o-hidden h-100\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa-music fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">Arcadia</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white bg-info o-hidden h-100\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa-recycle fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">Baltic</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white o-hidden h-100\" style=\"background-color: #aa66cc\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa-link fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">British Isles</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white o-hidden h-100\" style=\"background-color: #FF8800\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa-sun fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">Canada</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white o-hidden h-100\" style=\"background-color: #007E33\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa-at fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">Caribbean</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white o-hidden h-100\" style=\"background-color: #0d47a1\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa-star fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">Ventura</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white o-hidden h-100\" style=\"background-color: #c6ff00\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa-smile fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">Far East &amp; Asia</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white o-hidden h-100\" style=\"background-color: rgba(233, 30, 99, 0.5)\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa fa-futbol fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">Mediterranean</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white o-hidden h-100\" style=\"background-color: #3F729B\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fa fa fa-key fa-spin\"></i>\n                </div>\n                <div class=\"trip-name mr-5 float-left\">Scandinavia</div>\n                <span class=\"trip-price float-right\">\n                  &pound;4999\n                </span>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/scanner\" (click)=\" selectCruise($event, $this)\">\n                <span class=\"float-left\">Choose this cruise</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /.container-fluid -->\n    </div>\n    <!-- /.content-wrapper -->\n  </div>\n  <!-- /#wrapper -->\n</div>\n<app-dashboard-foot></app-dashboard-foot>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\n  font-weight: bold; }\n\n.button-cruise {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  padding: 12px;\n  width: 100%;\n  transition: all 0.5s;\n  cursor: pointer;\n  font-weight: bold; }\n\n.button-cruise span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s; }\n\n.button-cruise span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s; }\n\n.button-cruise:hover span {\n  padding-right: 25px; }\n\n.button-cruise:hover span:after {\n  opacity: 1;\n  right: 0; }\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
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

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        (function (d) { d.fn.shuffle = function (c) { c = []; return this.each(function () { c.push(d(this).clone(true)); }).each(function (a, b) { d(b).replaceWith(c[a = Math.floor(Math.random() * c.length)]); c.splice(a, 1); }); }; d.shuffle = function (a) { return d(a).shuffle(); }; })($);
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        if ($('body').hasClass('bg-dark') == false)
            $('body').addClass('bg-dark');
        console.log($('body').hasClass('bg-dark'));
        $("#dtBox").DateTimePicker({
            dateFormat: "dd-MMM-yyyy",
            afterShow: function () {
                $(".dtpicker-buttonCont a").css('color', 'white');
            },
            settingValueOfElement: function (sInputValue, dDateTime, oInputElement) {
                /*if ($(oInputElement).attr('id') == 'fromDate') {
                  sessionStorage.setItem('carnivalPlanSt', sInputValue)
                } else if ($(oInputElement).attr('id') == 'fromDate') {
                  sessionStorage.setItem('carnivalPlanEd', sInputValue)
                }*/
            }
        });
    };
    WelcomeComponent.prototype.selectCruise = function ($event, $this) {
        var datePattern = /([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)(\d{4})(\s)([0-5][0-9])(:)([0-5][0-9])/i;
        var stDate = $('#fromDate').val().match(datePattern);
        var edDate = $('#toDate').val().match(datePattern);
        if (stDate && edDate) {
            var shipName = "";
            var tripCost = "";
            if ($($event.srcElement).hasClass('card-footer')) {
                shipName = $($event.srcElement).prev(".card-body").find('.trip-name').text();
                tripCost = $($event.srcElement).prev(".card-body").find('.trip-price').text();
            }
            else {
                shipName = $($event.srcElement).parent().prev(".card-body").find('.trip-name').text();
                tripCost = $($event.srcElement).parent().prev(".card-body").find('.trip-price').text();
            }
            sessionStorage.setItem('carnivalPlanShip', shipName);
            sessionStorage.setItem('carnivalPlanPrice', tripCost);
            sessionStorage.setItem('carnivalPlanSt', $('#fromDate').val());
            sessionStorage.setItem('carnivalPlanEd', $('#toDate').val());
            return true;
        }
        else {
            $('#errorBody').text('Please choose your Journey Dates');
            $('#errorModal').modal('show');
        }
    };
    WelcomeComponent.prototype.filterCruise = function () {
        var datePattern = /([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)(\d{4})(\s)([0-5][0-9])(:)([0-5][0-9])/i;
        var stDate = $('#fromDate').val().match(datePattern);
        var edDate = $('#toDate').val().match(datePattern);
        if (stDate && edDate) {
            this.showCruises = true;
            $(".cruiseList .row .col-xl-3").shuffle("slow");
            $(".cruiseList .row").each(function () {
                if ($(this).find(".col-xl-3").length > 3) {
                    $(this).find(".col-xl-3").eq($(this).index()).fadeOut("slow", function () {
                        $(this).remove();
                    });
                }
            });
        }
        else {
            $('#errorBody').text('Please choose your Journey Dates');
            $('#errorModal').modal('show');
        }
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\learn\workspace\carnivalapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
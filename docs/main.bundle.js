webpackJsonp([1,5],{

/***/ 102:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 102;


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(119);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_routingState__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(routingState) {
        this.routingState = routingState;
        routingState.loadRouting();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(189),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_routingState__["a" /* RoutingState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_routingState__["a" /* RoutingState */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_post_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__errorPage_errorPage_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__checkOut_checkOut_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_sharedService__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_loginService__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routeGaurds_checkOut_routeGaurd__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routes__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shoppingCart_shoppingCart_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_services_routingState__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* headerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* homeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* footerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__post_post_component__["a" /* postComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__shoppingCart_shoppingCart_component__["a" /* ShoppingCartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__checkOut_checkOut_component__["a" /* CheckOutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__errorPage_errorPage_component__["a" /* errorPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_15__app_routes__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_sharedService__["a" /* cartService */], __WEBPACK_IMPORTED_MODULE_14__routeGaurds_checkOut_routeGaurd__["a" /* CheckOutRouteGuard */], __WEBPACK_IMPORTED_MODULE_13__services_loginService__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_17_app_services_routingState__["a" /* RoutingState */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_post_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorPage_errorPage_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkOut_checkOut_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shoppingCart_shoppingCart_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routeGaurds_checkOut_routeGaurd__ = __webpack_require__(72);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });








// Route Configuration
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* homeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* homeComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_1__post_post_component__["a" /* postComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_6__shoppingCart_shoppingCart_component__["a" /* ShoppingCartComponent */] },
    {
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__routeGaurds_checkOut_routeGaurd__["a" /* CheckOutRouteGuard */]],
        path: 'checkOut',
        component: __WEBPACK_IMPORTED_MODULE_5__checkOut_checkOut_component__["a" /* CheckOutComponent */]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__errorPage_errorPage_component__["a" /* errorPage */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return footerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var footerComponent = (function () {
    function footerComponent() {
    }
    return footerComponent;
}());
footerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(192),
        styles: [__webpack_require__(178)]
    })
], footerComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_sharedService__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_loginService__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return headerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { } from '@types/googlemaps';




var headerComponent = (function () {
    function headerComponent(router, cartData, loginService) {
        this.router = router;
        this.cartData = cartData;
        this.loginService = loginService;
        // public map: google.maps.Map;
        this.selectedCity = 'Chennai';
        this.searchedOffer = 'Search Here';
        // navigator.geolocation.getCurrentPosition((position) => {
        // 	this.selectedCity = 'Location';
        // }, () => {
        // 	this.selectedCity = 'Location';
        // });
        this.cartData.setSelectedCity(this.selectedCity);
        this.onResize();
    }
    headerComponent.prototype.ngOnInit = function () {
        // let _self = this;
        // google.maps.event.addDomListener(window, 'load', function () {
        // 	let input: any = document.getElementsByClassName('locationSearch');
        // 	let options: Object = {
        // 		types: ['(regions)'],
        // 		componentRestrictions: {
        // 			country: 'IN'
        // 		}
        // 	};
        // 	let autocomplete = new google.maps.places.Autocomplete(input[0], options);
        // 	google.maps.event.addListener(autocomplete, 'place_changed', (event, args) => {
        // 		let element: any = document.getElementsByClassName('locationSearch')[0];
        // 		_self.selectedCity = element.value.split(', ')[0];
        // 		let model: any = document.getElementsByClassName('close')[0];
        // 		model.click();
        // 	});
        // });
    };
    //resize screen
    headerComponent.prototype.onResize = function () {
        var getWinSize = window.innerWidth;
        if (768 >= getWinSize) {
            this.mobNav = false;
            this.mobHam = true;
        }
        else {
            this.mobNav = true;
            this.mobHam = false;
            if (document.getElementsByClassName('lightBox').length > 0) {
                this.humClick();
            }
        }
    };
    //vertical scroll
    headerComponent.prototype.scrollChange = function (event) {
        var getNavScr = document.getElementsByClassName('navTopFix')[0];
        if (window.scrollY >= (getNavScr.offsetHeight - 20)) {
            getNavScr.classList.add('navTopFixMob');
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__('#scroll').fadeIn();
        }
        else if (getNavScr.classList.contains('navTopFixMob')) {
            getNavScr.classList.remove('navTopFixMob');
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__('#scroll').fadeOut();
        }
    };
    headerComponent.prototype.humClick = function () {
        if (768 >= window.innerWidth) {
            var humAni = document.getElementsByClassName('hamburger')[0];
            var changeNav_1 = document.getElementById('changeNav');
            if (changeNav_1.classList.contains("visibility-none")) {
                changeNav_1.classList.toggle('visibility-none');
            }
            else {
                setTimeout(function () {
                    changeNav_1.classList.toggle('visibility-none');
                }, 500);
            }
            humAni.classList.toggle('changeAni');
            changeNav_1.classList.toggle('navMobSlide');
        }
    };
    headerComponent.prototype.logoutClick = function () {
        this.loginService.isLogin ? this.router.navigate(['/home']) : this.router.navigate(['/login']);
        this.loginService.clearUser();
        this.humClick();
    };
    headerComponent.prototype.changeLocation = function (event, location) {
        this.selectedCity = location;
        this.cartData.setSelectedCity(location);
        document.getElementsByClassName('active').length > 0 ? document.getElementsByClassName('active')[0].classList.remove('active') : '';
        event.target.classList.add('active');
    };
    headerComponent.prototype.changeLocationDropdown = function (location) {
        this.selectedCity = location;
        this.cartData.setSelectedCity(location);
        document.querySelector('#myModal .close').click();
    };
    headerComponent.prototype.onClick = function (targetElement) {
        if (document.getElementsByClassName('navMobSlide').length > 0 && !document.getElementsByClassName('navTab')[0].contains(targetElement)) {
            this.humClick();
            return;
        }
        if (targetElement.className == 'scroll-icon') {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__('html, body').animate({ scrollTop: 0 }, 500);
            event.preventDefault();
            return;
        }
    };
    return headerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('document:click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], headerComponent.prototype, "onClick", null);
headerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(193),
        styles: [__webpack_require__(179)],
        host: { '(window:resize)': 'onResize()', '(window:scroll)': 'scrollChange($event)', '(document:click)': 'winClick($event)' },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_sharedService__["a" /* cartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_sharedService__["a" /* cartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_loginService__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_loginService__["a" /* LoginService */]) === "function" && _c || Object])
], headerComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  font-family: 'Montserrat', sans-serif;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background: #f4f4f4;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.checkout-panel {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 940px;\n  height: 766px;\n  background-color: white;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2); }\n\n.panel-body {\n  padding: 45px 80px 0;\n  -ms-flex: 1;\n      flex: 1; }\n\n.title {\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 40px;\n  color: #2e2e2e; }\n\n.progress-bar {\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 50px;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  background-color: transparent; }\n\n.step {\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: 25px;\n  height: 25px;\n  margin-bottom: 30px;\n  border: 4px solid #fff;\n  border-radius: 50%;\n  background-color: #efefef; }\n\n.step:after {\n  position: absolute;\n  z-index: -1;\n  top: 5px;\n  left: 22px;\n  width: 225px;\n  height: 6px;\n  content: '';\n  background-color: #efefef; }\n\n.step:before {\n  color: #2e2e2e;\n  position: absolute;\n  top: 40px; }\n\n.step:last-child:after {\n  content: none; }\n\n.step.active {\n  background-color: #da5245; }\n\n.step.active:after {\n  background-color: #da5245; }\n\n.step.active:before {\n  color: #da5245; }\n\n.step.active + .step {\n  background-color: #da5245; }\n\n.step.active + .step:before {\n  color: #da5245; }\n\n.step:nth-child(1):before {\n  content: 'Delivery'; }\n\n.step:nth-child(2):before {\n  right: -40px;\n  content: 'Confirmation'; }\n\n.step:nth-child(3):before {\n  right: -30px;\n  content: 'Payment'; }\n\n.step:nth-child(4):before {\n  right: 0;\n  content: 'Finish'; }\n\n.payment-method {\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 60px;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n\n.method {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 382px;\n  height: 122px;\n  padding-top: 20px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  background-color: #f9f9f9;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.card-logos {\n  display: -ms-flexbox;\n  display: flex;\n  width: 150px;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.radio-input {\n  margin-top: 20px; }\n\ninput[type='radio'] {\n  display: inline-block; }\n\n.input-fields {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n\n.input-fields label {\n  display: block;\n  margin-bottom: 10px;\n  color: #b4b4b4; }\n\n.info {\n  font-size: 12px;\n  font-weight: 300;\n  display: block;\n  margin-top: 50px;\n  opacity: .5;\n  color: #2e2e2e; }\n\ndiv[class*='column'] {\n  width: 382px; }\n\ninput[type='text'],\ninput[type='password'] {\n  font-size: 16px;\n  width: 100%;\n  height: 50px;\n  padding-right: 40px;\n  padding-left: 16px;\n  color: rgba(46, 46, 46, 0.8);\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  outline: none; }\n\ninput[type='text']:focus,\ninput[type='password']:focus {\n  border-color: #77db77; }\n\n.small-inputs {\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 20px;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n\n.small-inputs div {\n  width: 182px; }\n\n.panel-footer {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 96px;\n  padding: 0 80px;\n  background-color: #efefef;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.btn {\n  font-size: 16px;\n  width: 163px;\n  height: 48px;\n  cursor: pointer;\n  transition: all .2s ease-in-out;\n  letter-spacing: 1px;\n  border: none;\n  border-radius: 23px; }\n\n.back-btn {\n  color: #da5245;\n  background: #fff; }\n\n.next-btn {\n  color: #fff;\n  background: #da5245; }\n\n.btn:focus {\n  outline: none; }\n\n.btn:hover {\n  transform: scale(1.1); }\n\n.blue-border {\n  border: 1px solid #6eb2fb; }\n\n.warning {\n  border-color: #da5245; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".not-found-btn, .not-found-btn:focus {\n  background-color: #2dbaaa;\n  border-radius: 10px;\n  color: white;\n  border: none;\n  padding: 6px 16px;\n  cursor: pointer;\n  outline: 0; }\n\n.not-found-btn:hover {\n  background-color: #d95245; }\n\n.not-found-content {\n  color: #d95245; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Roboto', sans-serif; }\n\nfooter .bgCol {\n  background: #333;\n  color: #fff; }\n\nfooter .copyRightBg {\n  background: #272727; }\n\nfooter .grayCol {\n  color: #e6dddd; }\n\nfooter p {\n  color: #FFF;\n  font-weight: bold;\n  border-bottom: 1px solid #c7c7c7;\n  padding: 10px 0px;\n  display: block;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 3px; }\n\nfooter a {\n  cursor: pointer; }\n\nfooter ul {\n  list-style: none;\n  color: #e6dddd;\n  padding: 0; }\n\n.footer-menu {\n  font-size: 15px;\n  line-height: 30px; }\n\n.footer-menu a {\n  color: #FFF;\n  letter-spacing: 3px;\n  text-decoration: none;\n  font-size: 14px;\n  position: relative; }\n\n.footer-menu li a:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0%;\n  border-bottom: 2px solid #FFF;\n  transition: 0.4s;\n  height: 2px;\n  bottom: -5px; }\n\n.footer-menu li a:hover:after {\n  width: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".navTopFix {\n  background: linear-gradient(to bottom, #da5245 0%, #da5245 50%, #fe9f95 100%);\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 15; }\n\n.navTopFixMob {\n  background: #da5245;\n  transition: 1s all ease;\n  position: fixed; }\n\n.navInner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  font-size: 1rem;\n  font-family: sans-serif; }\n\n.top-menu {\n  font-size: .82rem; }\n\n.navInner div {\n  display: inline-block;\n  display: inline-block; }\n\n.navInner ul {\n  list-style: none;\n  color: #fff;\n  display: inline-block; }\n\n.navInner ul li {\n  display: inline-block;\n  padding-right: 10px;\n  outline: none; }\n\n.navInner ul li a {\n  cursor: pointer; }\n\n.humAni {\n  transform: rotate(180%); }\n\n.hamburger {\n  transition: .3s ease-in-out; }\n\n.changeAni .bar1 {\n  transform: rotate(-45deg) translate(-3px, 6px);\n  transition: .3s ease-in-out; }\n\n.changeAni .bar2 {\n  opacity: 0; }\n\n.changeAni .bar3 {\n  transform: rotate(45deg) translate(-5px, -8px);\n  transition: .3s ease-in-out; }\n\n.navTab {\n  position: relative; }\n\n.navTab a {\n  color: #fff;\n  text-decoration: none; }\n\n.navTab .navTabList {\n  position: absolute;\n  right: -15px;\n  top: 24px;\n  background: #292b2c;\n  min-width: 240px;\n  transform: translateX(100%);\n  transition: visibility 0s, transform 0.3s ease-in-out; }\n\n.navTab .navTabList.navMobSlide {\n  transform: translateX(0) !important;\n  z-index: 1000; }\n\n.navTab .navTabList ul, .navTab .navTabList ul li {\n  display: block;\n  padding: 0; }\n\n.navTab .navTabList ul li a {\n  white-space: nowrap;\n  color: #fff;\n  text-decoration: none;\n  line-height: 40px; }\n\n.navTab .navTabList ul li:hover {\n  background: #da5245; }\n\n.bar1, .bar2, .bar3 {\n  margin-bottom: 5px;\n  border-bottom: 3px solid #fff;\n  width: 30px;\n  display: block !important; }\n\n.bar3 {\n  margin: 0; }\n\n.location-btn {\n  height: 20px;\n  line-height: 0px;\n  border: 1px solid white;\n  border-radius: 25px;\n  font-size: .9rem;\n  background-color: white;\n  cursor: pointer; }\n\n.search-input {\n  font-size: .9rem;\n  cursor: pointer; }\n\n.search-btn {\n  background: transparent;\n  cursor: pointer; }\n\n.location-wrapper .modal-header,\n.location-wrapper .modal-footer {\n  border: 0px; }\n\n.offerSearch-wrapper {\n  height: 25px; }\n\n#offerSearch, .offerSearch-wrapper span {\n  border: none; }\n\n.offer-input {\n  height: 50px; }\n\n#scroll {\n  position: fixed;\n  right: 10px;\n  bottom: 10px;\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n  background-color: #da5245;\n  text-indent: -9999px;\n  display: none;\n  border-radius: 60px;\n  z-index: 100; }\n\n#scroll span {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -8px;\n  margin-top: -12px;\n  height: 0;\n  width: 0;\n  border: 8px solid transparent;\n  border-bottom-color: #ffffff; }\n\n#scroll:hover {\n  background-color: #2dbaaa;\n  opacity: 1;\n  filter: \"alpha(opacity=100)\";\n  -ms-filter: \"alpha(opacity=100)\"; }\n\n.fa-20 {\n  font-size: 20px; }\n\n.shopping-bag-content {\n  background-color: #2dbaaa;\n  border-radius: 50%;\n  z-index: 100;\n  min-width: 21px;\n  position: relative;\n  right: 15px;\n  top: 7px;\n  font-size: 12px; }\n\n.shopping-bag-content span {\n  text-align: center;\n  display: block; }\n\n.mob-center-header div {\n  display: block;\n  color: #fff; }\n\n.mob-center-header {\n  margin-right: 10%;\n  text-align: center; }\n\n.location-header-btn {\n  background: transparent;\n  color: white; }\n\n.shoping-bag-header a {\n  color: white;\n  text-decoration: none; }\n\n.shoping-bag-header div {\n  display: inline-block; }\n\n.shoping-bag-header {\n  margin-right: 10px;\n  margin-left: 10px; }\n\n.search-header {\n  margin-right: 15px;\n  margin-left: 10px; }\n\n.visibility-none {\n  height: 0;\n  overflow: hidden;\n  visibility: hidden !important; }\n\n.short-location {\n  color: #292b2c;\n  border-radius: 20px;\n  margin: 15px; }\n\n.short-location:hover {\n  color: #da5245;\n  background: transparent;\n  border-color: #da5245; }\n\n.short-location.active {\n  color: #fff;\n  background: #da5245; }\n\n.locationSearch {\n  width: 450px; }\n\n.short-location {\n  color: #292b2c;\n  border-radius: 20px;\n  margin: 15px; }\n\n@media screen and (min-width: 1200px) {\n  .left-algn {\n    margin-left: -15%; }\n  .right-algn {\n    margin-left: 15%; }\n  .location-wrapper {\n    padding-left: 10%;\n    padding-right: 10%; }\n  .location-btn {\n    padding: 2px 1rem .5rem 1rem !important; }\n  .sub-menu li {\n    padding-right: 40px !important; } }\n\n.logo_img {\n  width: 185px;\n  height: 85px; }\n\n@media screen and (max-width: 480px) {\n  .py-small-3 {\n    padding: 1rem 0 !important; }\n  .location-btn {\n    padding: 0 5px !important; }\n  .logo_img {\n    width: 140px;\n    height: 60px; } }\n\n@media screen and (max-width: 768px) {\n  .px-small-4 {\n    padding: 0 1.5rem !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".carousel-indicators {\n  z-index: 7; }\n\n.carousel-indicators > li {\n  border-radius: 50%;\n  max-width: 20px;\n  height: 20px;\n  background-color: rgba(241, 90, 90, 0.5); }\n\n.carousel-indicators .active {\n  background-color: #da5245; }\n\n.carousel-control-next, .carousel-control-prev {\n  width: 13%; }\n\n.carousel-control-next i, .carousel-control-prev i {\n  color: #da5245; }\n\n.card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transform: translate3d(0px, 0px, 0px);\n  transition-duration: 0.3s;\n  width: 260px;\n  min-height: 370px;\n  display: inline-block;\n  cursor: pointer;\n  color: #666; }\n\n.banner-img {\n  width: 100%;\n  height: 160px; }\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 4px rgba(0, 0, 0, 0.2);\n  transform: translate3d(0, -5px, -5px);\n  transition-duration: 0.3s;\n  cursor: pointer; }\n\n.avatar {\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%; }\n\n.card-content h5 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333; }\n\n.card-content p {\n  font-size: .8rem; }\n\n.card-hr {\n  border-top: 2px solid rgba(0, 0, 0, 0.1); }\n\n.card-footer-content p {\n  margin-bottom: 0 !important; }\n\n.card-footer-content p:first-child {\n  text-decoration: line-through;\n  font-size: .7rem; }\n\n.card-footer-content p:last-child {\n  color: #2dbaaa !important;\n  font-weight: 600 !important;\n  font-size: 1.4em !important;\n  line-height: .7; }\n\n.card-title {\n  color: #666;\n  font-size: 1.5rem;\n  font-weight: 600; }\n\n.offer-text {\n  background-color: transparent;\n  text-align: center;\n  border-radius: 2px;\n  padding: 8px;\n  border: 1px solid #e0e0e0;\n  line-height: 1;\n  width: 83px;\n  color: #ef534e !important; }\n\n.h-line {\n  border-bottom: 3px solid #ef534e;\n  width: 100px;\n  margin: 0 auto; }\n\n.load-btn, .add-btn {\n  border-radius: 4px;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 18px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px; }\n\n.load-btn {\n  background-color: #d95245;\n  padding: 10px;\n  width: 200px; }\n\n.add-btn {\n  background-color: #2dbaaa;\n  padding: 5px;\n  width: 180px;\n  padding-left: 25px; }\n\n.load-btn span, .add-btn span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s; }\n\n.load-btn span:after, .add-btn span:after {\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s; }\n\n.load-btn span:after {\n  content: '\\BB'; }\n\n.add-btn:hover span:before {\n  content: '\\F217';\n  font-family: FontAwesome;\n  padding-left: 10px; }\n\n.load-btn:hover span, .add-btn:hover span {\n  padding-right: 25px; }\n\n.load-btn:hover span:after, .addd-btn:hover span:after {\n  opacity: 1;\n  right: 0; }\n\n.loader-icon {\n  position: fixed;\n  z-index: 100000 !important;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7); }\n\n.loader-icon::-webkit-backdrop {\n  background: rgba(0, 0, 0, 0.7); }\n\n.loader-icon::backdrop {\n  background: rgba(0, 0, 0, 0.7); }\n\n.cart-add-btn .fa {\n  color: #2dbaaa;\n  cursor: pointer; }\n\n.quantity-color {\n  color: #666;\n  font-size: 1.3rem;\n  vertical-align: middle; }\n\n#notificationbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #2dbaaa;\n  color: #fff;\n  text-align: center;\n  border-radius: 25px;\n  padding: 5px 16px;\n  position: fixed;\n  z-index: 1100;\n  left: 50%;\n  top: 30px;\n  font-size: 17px; }\n\n#notificationbar.show {\n  visibility: visible;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n@keyframes fadein {\n  from {\n    top: 0;\n    opacity: 0; }\n  to {\n    top: 30px;\n    opacity: 1; } }\n\n@keyframes fadeout {\n  from {\n    top: 30px;\n    opacity: 1; }\n  to {\n    top: 0;\n    opacity: 0; } }\n\n@media screen and (min-width: 480px) {\n  .carousel-item img {\n    height: 200px; }\n  .justify-content {\n    -ms-flex-pack: center !important;\n    justify-content: center !important; } }\n\n@media screen and (max-width: 480px) {\n  .card {\n    width: 100% !important; } }\n\n@media screen and (min-width: 720px) {\n  .carousel-item img {\n    height: 300px; }\n  .justify-content {\n    -ms-flex-pack: center !important;\n    justify-content: center !important; } }\n\n@media screen and (min-width: 320px) {\n  .carousel-item img {\n    height: 300px; }\n  .justify-content {\n    -ms-flex-pack: center !important;\n    justify-content: center !important; } }\n\n@media screen and (min-width: 960px) {\n  .carousel-item img {\n    height: 400px; }\n  .justify-content {\n    -ms-flex-pack: left !important;\n    justify-content: left !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".login-block {\n  background: #dadada;\n  width: 100%;\n  padding-top: 60px;\n  height: 500px; }\n\n.form-control {\n  border-radius: 10px; }\n\n.container {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 15px 20px 0px rgba(250, 152, 141, 0.4); }\n\n.login-sec {\n  padding: 50px 10px;\n  position: relative;\n  margin: 0 auto; }\n\n.login-sec .copy-text {\n  position: absolute;\n  width: 80%;\n  bottom: 20px;\n  font-size: 13px;\n  text-align: center; }\n\n.login-sec .copy-text i {\n  color: #ed7c71; }\n\n.login-sec .copy-text a {\n  color: #333333; }\n\n.login-sec h2 {\n  margin-bottom: 30px;\n  font-weight: 800;\n  font-size: 30px;\n  color: #da5245; }\n\n.login-sec h2:after {\n  content: \" \";\n  width: 100px;\n  height: 5px;\n  background: #ed7c71;\n  display: block;\n  margin-top: 20px;\n  border-radius: 3px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.btn-login {\n  background: #da5245;\n  color: #fff;\n  font-weight: 600;\n  width: 150px;\n  cursor: pointer; }\n\n.error {\n  color: #e36559;\n  margin-left: 10px; }\n\n.register-btn {\n  font-size: 15px;\n  margin-right: 15px;\n  color: #da5245;\n  text-decoration: none;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  float: right;\n  margin-top: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: 'Roboto', sans-serif; }\n\n.shopping-cart {\n  width: 750px;\n  min-height: 423px;\n  margin: 20px auto;\n  background: #FFFFFF;\n  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n\n.shopping-cart .fa-30 {\n  font-size: 1.3rem; }\n\n.shopping-cart .fa-40 {\n  font-size: 1.7rem; }\n\n.title {\n  border-bottom: 1px solid #E1E8EE;\n  padding-left: 25px;\n  padding-top: 20px;\n  color: #5E6977;\n  font-size: 20px;\n  font-weight: 400; }\n\n.item {\n  padding: 20px 30px;\n  height: 170px;\n  display: -ms-flexbox;\n  display: flex; }\n\n.item:nth-child(3) {\n  border-top: 1px solid #E1E8EE;\n  border-bottom: 1px solid #E1E8EE; }\n\n.total-cart {\n  border-top: 2px solid #E1E8EE; }\n\n.cart-add-btn .fa {\n  color: #2dbaaa;\n  cursor: pointer; }\n\n.quantity-color {\n  color: #666;\n  vertical-align: middle; }\n\n.delete-btn span {\n  color: #928f8f;\n  cursor: pointer; }\n\n.vertical-align-midle {\n  display: inherit;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.cart-img {\n  width: 200px;\n  height: 120px; }\n\n.cart-block .add-btn {\n  width: 260px; }\n\n.total-content {\n  border-bottom: 2px solid #E1E8EE;\n  line-height: 2;\n  font-size: 14px;\n  font-weight: 600; }\n\n.sub-total-content {\n  font-size: 14px;\n  font-weight: 600; }\n\n@keyframes animate {\n  0% {\n    background-position: left; }\n  50% {\n    background-position: right; }\n  100% {\n    background-position: right; } }\n\n.description {\n  width: 250px; }\n\n.description span {\n  display: block;\n  font-size: 14px;\n  font-weight: 400; }\n\n.total-price {\n  width: 83px;\n  text-align: center;\n  font-size: 16px;\n  color: #43484D;\n  font-weight: 300; }\n\n.clear-btn {\n  font-size: 16px;\n  margin-right: 25px;\n  color: #2dbaaa;\n  text-decoration: none;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline; }\n\n@media (max-width: 800px) {\n  .shopping-cart {\n    width: 100%;\n    height: auto;\n    overflow: hidden; }\n  .image img {\n    width: 50%; }\n  .image,\n  .quantity,\n  .description {\n    width: 100%;\n    text-align: center;\n    margin: 6px 0; } }\n\n.cart-block {\n  background: #dadada;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"checkout-panel\">\r\n    <div class=\"panel-body\">\r\n      <h2 class=\"title\">Checkout</h2>\r\n   \r\n      <div class=\"progress-bar\">\r\n        <div class=\"step active\"></div>\r\n        <div class=\"step active\"></div>\r\n        <div class=\"step\"></div>\r\n        <div class=\"step\"></div>\r\n      </div>\r\n   \r\n      <div class=\"payment-method\">\r\n        <label for=\"card\" class=\"method card\">\r\n          <div class=\"card-logos\">\r\n            <img src=\"\"/>\r\n            <img src=\"\"/>\r\n          </div>\r\n   \r\n          <div class=\"radio-input\">\r\n            <input id=\"card\" type=\"radio\" name=\"payment\">\r\n            Pay £340.00 with credit card\r\n          </div>\r\n        </label>\r\n   \r\n        <label for=\"paypal\" class=\"method paypal\">\r\n          <img src=\"\"/>\r\n          <div class=\"radio-input\">\r\n            <input id=\"paypal\" type=\"radio\" name=\"payment\">\r\n            Pay £340.00 with PayPal\r\n          </div>\r\n        </label>\r\n      </div>\r\n   \r\n      <div class=\"input-fields\">\r\n        <div class=\"column-1\">\r\n          <label for=\"cardholder\">Cardholder's Name</label>\r\n          <input type=\"text\" id=\"cardholder\" />\r\n   \r\n          <div class=\"small-inputs\">\r\n            <div>\r\n              <label for=\"date\">Valid thru</label>\r\n              <input type=\"text\" id=\"date\" placeholder=\"MM / YY\" />\r\n            </div>\r\n   \r\n            <div>\r\n              <label for=\"verification\">CVV / CVC *</label>\r\n              <input type=\"password\" id=\"verification\"/>\r\n            </div>\r\n          </div>\r\n   \r\n        </div>\r\n        <div class=\"column-2\">\r\n          <label for=\"cardnumber\">Card Number</label>\r\n          <input type=\"password\" id=\"cardnumber\"/>\r\n   \r\n          <span class=\"info\">* CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n   \r\n    <div class=\"panel-footer\">\r\n      <button class=\"btn back-btn\">Back</button>\r\n      <button class=\"btn next-btn\">Next Step</button>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5 py-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 text-center\">\r\n      <img src=\"../assets/images/oops.png\" style=\"height:150px;width:150px;\" alt=\"Oops..\" />\r\n      <div class=\"not-found-content\">Page not found... Please try some other pages...</div>\r\n      <div>\r\n        <button class=\"mt-3 not-found-btn\" [routerLink]=\"['/home']\">BACK HOME</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div style=\"background-color: #2dbaaa;color:white\">\r\n    <div class=\"container\">\r\n      <div class=\"row py-4 d-flex align-items-center\">\r\n        <div class=\"col-12 col-md-5 text-left mb-4 mb-md-0\">\r\n          <h6 class=\"mb-0 white-text text-center text-md-left\">\r\n            <strong>Get connected with us on social networks!</strong>\r\n          </h6>\r\n        </div>\r\n        <div class=\"col-12 col-md-7 text-center text-md-right\">\r\n          <a class=\"fb-ic ml-0\">\r\n            <i class=\"fa fa-facebook white-text mr-lg-4\"> </i>\r\n          </a>\r\n          <a class=\"tw-ic\">\r\n            <i class=\"fa fa-twitter white-text mr-lg-4\"> </i>\r\n          </a>\r\n          <a class=\"gplus-ic\">\r\n            <i class=\"fa fa-google-plus white-text mr-lg-4\"> </i>\r\n          </a>\r\n          <a class=\"li-ic\">\r\n            <i class=\"fa fa-linkedin white-text mr-lg-4\"> </i>\r\n          </a>\r\n          <a class=\"ins-ic\">\r\n            <i class=\"fa fa-instagram white-text mr-lg-4\"> </i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bgCol pb-1\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-sm-6 pl-xl-3\">\r\n          <p class=\"h5 mt-xl-3\">Company</p>\r\n          <ul class=\"footer-menu\">\r\n            <li>\r\n              <a [routerLink]=\"['/home']\">About Us</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/home']\">Blog</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/home']\">Policy</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-xl-3 col-sm-6 px-xl-3\">\r\n          <p class=\"h5 mt-xl-3\">Help</p>\r\n          <ul class=\"footer-menu\">\r\n            <li>\r\n              <a [routerLink]=\"['/home']\">Contact Us</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/home']\">Sitemap</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/home']\">FAQs</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-xl-5 px-xl-3\">\r\n          <p class=\"h5 mt-xl-3 mr-xl-4\">Download App</p>\r\n          <span>\r\n            <img src=\"../assets/images/app-store.svg\" class=\"banner mt-4\" style=\"width:150px\" alt=\"Iphone\">\r\n          </span>\r\n          <span>\r\n            <img src=\"../assets/images/google-play-badges.svg\" style=\"width:150px\" class=\"banner ml-sm-5 mt-4\" alt=\"Android\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"copyRightBg\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 py-3 mt-1 small grayCol\">\r\n          &#169; 2017 Premier Proteins. All Rights Reserved\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navTopFix\">\r\n  <div class=\"container\">\r\n    <div class=\"navInner w-100\">\r\n      <a [routerLink]=\"['/home']\" class=\"logoBrand\">\r\n        <img src=\"../assets/images/logo_white.png\" class=\"logo_img\" alt=\"Premier Proteins Logo\">\r\n      </a>\r\n      <div [hidden]=\"!mobHam\" class=\"mob-center-header\">\r\n        <div>\r\n          <button class=\"btn location-header-btn p-0 h2Color\" type=\"button\" id=\"dropdownMenuButton\" data-target=\"#myModal\"\r\n          data-toggle=\"modal\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{selectedCity}} <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"mt-1\">\r\n        <span class=\"search-header\">\r\n          <i class=\"fa fa-search\" aria-hidden=\"true\" data-target=\"#searchModal\"\r\n          data-toggle=\"modal\"></i>\r\n        </span>\r\n        <span class=\"shoping-bag-header\"><a [routerLink]=\"['/cart']\"><i class=\"fa fa-shopping-bag fa-20\" aria-hidden=\"true\"></i>\r\n          <div *ngIf='cartData.getProduct().length>0' class=\"shopping-bag-content\"><span>{{cartData.getProduct().length}}</span></div></a></span></div>\r\n        </div>\r\n        <div class=\"navTab mb-1\">\r\n          <div class=\"hamburger\" [hidden]=\"!mobHam\" (click)=\"humClick()\">\r\n            <div class=\"bar1\"></div>\r\n            <div class=\"bar2\"></div>\r\n            <div class=\"bar3\"></div>\r\n          </div>\r\n          <div [ngClass]=\"{'navTabList visibility-none': mobNav!=true}\" id=\"changeNav\">\r\n            <ul [hidden]=\"mobHam\" class=\"top-menu float-right mb-0 mt-2 \">\r\n              <li><span class=\"pr-2\"><a [routerLink]=\"['/account']\"><i class=\"fa fa-user-circle-o fa-20\" aria-hidden=\"true\"></i></a></span>Welcome, <span *ngIf='!loginService.isLogin'>Guest</span><span *ngIf='loginService.isLogin'>{{loginService.getUser().userName}}</span></li>\r\n              <li class=\"pr-1\">\r\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n                <button class=\"btn location-btn p-0 h2Color\" type=\"button\" id=\"dropdownMenuButton\" data-target=\"#myModal\"\r\n                data-toggle=\"modal\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                {{selectedCity}} <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <a *ngIf='!loginService.isLogin' [routerLink]=\"['/login']\"><i class=\"fa fa-sign-in pr-1\" aria-hidden=\"true\"></i>Login</a>\r\n              <a *ngIf='loginService.isLogin' (click)=\"logoutClick()\" [routerLink]=\"['/home']\"><i class=\"fa fa-sign-out pr-1\" aria-hidden=\"true\"></i>LogOut</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/cart']\"><i class=\"fa fa-shopping-bag fa-20\" aria-hidden=\"true\"></i>\r\n                <div *ngIf='cartData.getProduct().length>0' class=\"shopping-bag-content\"><span>{{cartData.getProduct().length}}</span></div></a>\r\n              </li>\r\n            </ul>\r\n            <div class=\"sub-menu mt-2 w-100\">\r\n              <ul>\r\n                <!-- <li><span *ngIf='!loginService.isLogin'>Guest</span><span *ngIf='loginService.isLogin'>{{loginService.getUser().userName}}</span></li> -->\r\n                <li class=\"px-small-4\" [routerLink]=\"['/home']\" (click)=\"humClick()\">\r\n                  <a><i class=\"fa fa-home pr-1 fa-1x\" aria-hidden=\"true\"></i>Home</a>\r\n                </li>\r\n                <li [hidden]=\"!mobHam\" class=\"px-small-4\" [routerLink]=\"['/account']\" (click)=\"humClick()\">\r\n                  <a><i class=\"fa fa-user-circle-o pr-1 fa-1x\" aria-hidden=\"true\"></i>My Account</a>\r\n                </li>\r\n                <li class=\"px-small-4\" [routerLink]=\"['/home']\" [queryParams]=\"{ category: 'sea_food' }\" (click)=\"humClick()\">\r\n                  <a><!--<img src=\"../assets/images/fish.png\" style=\"width: 40px;height: 40px;\">-->Sea Foods</a>\r\n                </li>\r\n                <li class=\"px-small-4\" [routerLink]=\"['/home']\" [queryParams]=\"{ category: 'poultry' }\" (click)=\"humClick()\">\r\n                  <a><!--<i class=\"fa fa-home pr-2 fa-2x\" aria-hidden=\"true\"></i>-->Poultry</a>\r\n                </li>\r\n                <li class=\"px-small-4\" [routerLink]=\"['/home']\" [queryParams]=\"{ category: 'mutton' }\" (click)=\"humClick()\">\r\n                  <a><!--<i class=\"fa fa-home pr-2 fa-2x\" aria-hidden=\"true\"></i>-->Mutton</a>\r\n                </li>\r\n                <li [hidden]=\"!mobHam\" class=\"px-small-4\" [routerLink]=\"['/contact']\" (click)=\"humClick()\">\r\n                  <a><!--<i class=\"fa fa-home pr-2 fa-2x\" aria-hidden=\"true\"></i>-->Contact</a>\r\n                </li>\r\n                <li [hidden]=\"!mobHam\" class=\"px-small-4\" [routerLink]=\"['/about']\" (click)=\"humClick()\">\r\n                  <a><!--<i class=\"fa fa-home pr-2 fa-2x\" aria-hidden=\"true\"></i>-->About Us</a>\r\n                </li>\r\n                <li [hidden]=\"mobHam\" class=\"py-small-3\">\r\n                  <div class=\"input-group d-flex offerSearch-wrapper\">\r\n                    <span class=\"input-group-addon\" id=\"basic-addon1\">\r\n                      <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                    <input type=\"text\" class=\"form-control search-input w-100\" id=\"offerSearch\" placeholder=\"Search your content\" data-target=\"#searchModal\"\r\n                    data-toggle=\"modal\" aria-haspopup=\"true\" readonly aria-expanded=\"false\">\r\n                  </div>\r\n                </li>\r\n                <li [hidden]=\"!mobHam\" class=\"px-small-4\" (click)=\"logoutClick()\">\r\n                  <a *ngIf='!loginService.isLogin'><i class=\"fa fa-sign-in pr-1\" aria-hidden=\"true\"></i>Login</a>\r\n                  <a *ngIf='loginService.isLogin'><i class=\"fa fa-sign-out pr-1\" aria-hidden=\"true\"></i>LogOut</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <!-- selct city Modal -->\r\n  <div class=\"modal fade bd-example-modal-lg\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg mw-100 m-0\" role=\"document\">\r\n      <div class=\"modal-content location-wrapper py-4\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\"></h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">\r\n              <i class=\"fa fa-times-circle-o fa-1x\" aria-hidden=\"true\"></i>\r\n            </span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body text-center\">\r\n          <p class=\"font-header mb-1\">Select a City</p>\r\n          <p class=\"sub-header\">To get awesome products near you</p>\r\n          <div class=\"row justify-content-center mt-5\">\r\n            <div class=\"input-group col-md-7 col-sm-8 col-12\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon1\">\r\n                <i class=\"fa fa-map-marker pr-2\" aria-hidden=\"true\"></i>\r\n              </span>\r\n              <input type=\"text\" class=\"locationSearch\" [(ngModel)]=\"selectedCity\" (change)=\"changeLocationDropdown($event.target.value)\" id=\"selectCity\" placeholder=\"Enter your city name\" list=\"location\">\r\n              <datalist class=\"location-list\" id=\"location\">\r\n                <option value=\"Chennai\">\r\n                <option value=\"Bangalore\">\r\n              </datalist>\r\n            </div>\r\n          </div>\r\n          <div class=\"row justify-content-center mt-5\">\r\n            <div class=\"col-12\">\r\n              <p class=\"h6\"><b>Top Cities</b></p>\r\n              <button type=\"button\" class=\"btn btn-outline-secondary mt-4 short-location\" data-dismiss=\"modal\" (click)=\"changeLocation($event, 'Chennai')\">Chennai</button>\r\n              <button type=\"button\" class=\"btn btn-outline-secondary mt-4 short-location\" data-dismiss=\"modal\" (click)=\"changeLocation($event, 'Bangalore')\">Bangalore</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center mt-5\">\r\n            <p class=\"sub-header\">\r\n              <img src=\"../assets/images/logo_white.png\" style=\"width: 110px;height: 60px;\" alt=\"Premier Proteins Logo\">\r\n              <span class=\"mx-3\">|</span>Experience the world around you\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- search offer Modal -->\r\n  <div class=\"modal fade bd-example-modal-lg\" id=\"searchModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg mw-100 m-0\" role=\"document\">\r\n      <div class=\"modal-content location-wrapper py-4\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\"></h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">\r\n              <i class=\"fa fa-times-circle-o fa-1x\" aria-hidden=\"true\"></i>\r\n            </span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body text-center\">\r\n          <i class=\"fa fa-map-marker pr-2\" aria-hidden=\"true\"></i>Change Location :\r\n          <button class=\"btn search-btn ml-1 p-0\" type=\"button\" id=\"dropdownMenuButton\" data-target=\"#myModal\" data-toggle=\"modal\"\r\n          data-dismiss=\"modal\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{selectedCity}} <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\r\n        </button>\r\n        <div class=\"row justify-content-center mt-5\">\r\n          <div class=\"input-group col-md-7 col-sm-8 col-12\">\r\n            <span class=\"input-group-addon\" id=\"basic-addon1\">\r\n              <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control offer-input locationSearch\" id=\"locationSearch\" placeholder=\"Search your content\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row justify-content-center mt-5\">\r\n          <div class=\"col-12\">\r\n            <p class=\"h6\"><b>Recommended Search</b></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center mt-5\">\r\n          <p class=\"sub-header\">\r\n            <img src=\"../assets/images/logo_white.png\" style=\"width: 110px;height: 60px;\" alt=\"Premier Proteins Logo\">\r\n            <span class=\"mx-3\">|</span>Experience the world around you\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<a href=\"#\" id=\"scroll\" class=\"scroll-icon\" style=\"display: none;\">\r\n  <span class=\"scroll-icon\"></span>\r\n</a>\r\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!params\" id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"3000\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div class=\"carousel-item active\">\r\n      <img src=\"../assets/images/image2.jpg\" class=\"banner w-100\" alt=\"First slide\">\r\n      <div class=\"carousel-caption d-none d-xl-block  text-center\">\r\n        <!-- <h1 class=\"text-uppercase display-3\">Now</h1>\r\n        <p class=\"text-uppercase h5\">is the time to make sure your family is covered for life</p> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img src=\"../assets/images/image1.jpg\" class=\"banner w-100\" alt=\"Second slide\">\r\n      <div class=\"carousel-caption d-none d-xl-block  text-center\">\r\n        <!-- <h1 class=\"text-uppercase display-4\">Another headline</h1>\r\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img src=\"../assets/images/image4.jpg\" class=\"banner w-100\" alt=\"Third slide\">\r\n      <div class=\"carousel-caption d-none d-xl-block  text-center\">\r\n        <!-- <h1 class=\"text-uppercase display-4\">Another headline</h1>\r\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img src=\"../assets/images/image5.jpg\" class=\"banner w-100\" alt=\"Fourth slide\">\r\n      <div class=\"carousel-caption d-none d-xl-block  text-center\">\r\n        <!-- <h1 class=\"text-uppercase display-4\">Another headline</h1>\r\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\r\n    <i class=\"fa fa-chevron-left fa-4x\" aria-hidden=\"true\"></i>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\r\n    <i class=\"fa fa-chevron-right fa-4x\" aria-hidden=\"true\"></i>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h5 class=\"text-center pt-5 card-title\">Today Deals in {{cartService.getSelectedCity()}}</h5>\r\n      <div class=\"h-line\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row pb-5 pt-4 justify-content\">\r\n    <div *ngIf=\"data.length==0; else offerList\" class=\"col-12 text-center\">\r\n      <img src=\"../assets/images/oops.png\" style=\"height:150px;width:150px;\" alt=\"Oops..\" />\r\n      <div>Premier Proteins is not available in selected location...</div>\r\n    </div>\r\n    <ng-template #offerList>\r\n      <div *ngFor=\"let item of data\" (click)=\"cardClick($event, item)\" data-target=\"#detailModal\" data-toggle=\"modal\" class=\"card mx-2-half my-3\">\r\n        <img src=\"../assets/adv-images/{{item.img_url}}\" class=\"banner-img\" alt=\"item.brand_name\" />\r\n        <div class=\"p-3 card-content\">\r\n          <h5 *ngIf=\"item.brand_name\">{{item.brand_name}}</h5>\r\n          <p *ngIf=\"item.banner_text\">{{item.banner_text}}</p>\r\n          <p class=\"sub-header\" *ngIf=\"item.banner_text\">\r\n            <b>Details: </b>\r\n            <i>{{item.banner_text}}</i>\r\n          </p>\r\n          <hr class=\"card-hr mb-2 mt-5\" />\r\n          <div class=\"row pt-1\">\r\n            <div class=\"col-5\">\r\n              <p *ngIf=\"item.offer_percent\" class=\"text-center offer-text\">{{item.offer_percent}}%</p>\r\n            </div>\r\n            <div class=\"col-7 card-footer-content\">\r\n              <p *ngIf=\"item.original_price\" class=\"text-right\">\r\n                <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{item.original_price}}\r\n              </p>\r\n              <p class=\"text-right\">\r\n                <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{item.original_price-(item.original_price*item.offer_percent/100)}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 text-center mt-5\">\r\n          <button type=\"button\" (click)=\"loadClick($event)\" class=\"load-btn\">\r\n            <span>Load More...</span>\r\n          </button>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"loader-icon\" style=\"display:none\">\r\n    <div class=\"loader ng-scope\">\r\n      <div class=\"logo-name\">\r\n        <span>PREMIER</span>\r\n      </div>\r\n      <div style=\"width:100%;height:100%\" class=\"lds-rolling\">\r\n        <div></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Purchase Modal -->\r\n  <div class=\"modal fade bd-example-modal-lg\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg mw-100 m-0\" role=\"document\">\r\n      <div class=\"modal-content location-wrapper py-4\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\"></h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">\r\n              <i class=\"fa fa-times-circle-o fa-1x\" aria-hidden=\"true\"></i>\r\n            </span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-md-4 text-center\">\r\n              <img src=\"{{modelImage}}\" class=\"banner-img\" alt=\"selectedItem.brand_name\" />\r\n            </div>\r\n            <div class=\"col-12 col-md-6\">\r\n              <h4 class=\"mb-3\">{{selectedItem.banner_text}}</h4>\r\n              <h6>\r\n                <s><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{selectedItem.original_price+'.00'}}</s></h6>\r\n                <h4 class=\"mb-3\">\r\n                  <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{(selectedItem.original_price-(selectedItem.original_price*selectedItem.offer_percent/100)).toFixed(2)}}</h4>\r\n                  <p class=\"sub-header\">{{selectedItem.description}}</p>\r\n                  <div class=\"row pt-1\">\r\n                    <div class=\"col-12 cart-add-btn text-center\">\r\n                      <span class=\"fa fa-minus-circle fa-2x\" style=\" vertical-align: middle;\" (click)=\"selectQuantity('decreement')\" aria-hidden=\"true\"></span>\r\n                      <span class=\"px-2 quantity-color\">{{selectedItem.totalQuantity}} /\r\n                        <sub>{{selectedItem.type}}</sub>\r\n                      </span>\r\n                      <span class=\"fa fa-plus-circle fa-2x\" style=\" vertical-align: middle;\" (click)=\"selectQuantity('increement')\" aria-hidden=\"true\"></span>\r\n                      <button type=\"button\" (click)=\"addClick($event, selectedItem)\" class=\"add-btn\">Add to cart\r\n                        <span></span>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr class=\"card-hr mb-2 mt-5\" />\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <p>{{selectedItem.details}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Notification popup-->\r\n      <div id=\"notificationbar\"></div>\r\n"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<section class=\"login-block\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-10 col-md-6 login-sec\">\r\n        <h2 class=\"text-center\">Login</h2>\r\n        <form class=\"login-form\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userName\" name=\"userName\" placeholder=\"User Name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\r\n            <span *ngIf=\"invalid\" class='error'>Please enter valid user and password</span>\r\n          </div>\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input\">\r\n              <small>Remember Me</small>\r\n            </label>\r\n            <button type=\"submit\" class=\"btn btn-login float-right\" (click)=\"loginClick()\">login <i class=\"fa fa-sign-in\"></i></button>\r\n            <a [routerLink]=\"['/register']\" class=\"register-btn\">Register User</a>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"innerBg\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 mt-5 mb-4\">\r\n        <!-- <div class=\"brandTxtCol display-4\">Apply</div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container bgWhite\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n        <div class=\"mt-5 mb-4 h1 pgTitle\">Get Started for journey of Offers</div>\r\n        <div class=\"mb-4 mt-3 h3 pgSubTitle\">Personal Information</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"First name\" />\r\n      </div>\r\n      <div class=\"col-xl-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-xl-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Date Of Birth(DD/MM/YYYY)\" />\r\n      </div>\r\n      <div class=\"col-xl-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Address\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-xl-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Contact Number\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-xl-12\">\r\n        <div class=\"mb-4 mt-3 h3 pgSubTitle\">Create Your Account</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"E-mail\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-xl-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Password\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-xl-12\">\r\n        <div class=\"mb-4 mt-3 h3 pgSubTitle\">Additional Information</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Employment Status\" />\r\n      </div>\r\n      <div class=\"col-xl-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Annual Cross Income\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-xl-6\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Social Security Number\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-check mt-4\">\r\n      <label class=\"form-check-label\">\r\n        <input type=\"checkbox\" class=\"form-check-input\" />\r\n        It's Quick, easy and won't harm your credit score.\r\n      </label>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-outline-primary primaryBtn-whiteBg mt-4 mb-5\">Apply</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<section class=\"cart-block\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-10 shopping-cart\">\r\n        <!-- Title -->\r\n        <div class=\"title\">\r\n          Shopping Bag\r\n          <span *ngIf=\"products.length>0;\" class=\"float-right\">\r\n            <a href=\"\" (click)=\"clearCart()\" class=\"clear-btn\">Clear Cart\r\n            </a>\r\n            <button type=\"button\" [routerLink]=\"['/home']\" class=\"add-btn\">Continue Shopping\r\n              <span></span>\r\n            </button>\r\n          </span>\r\n        </div>\r\n        <div *ngIf=\"products.length==0; else cartList\" class=\"col-12 text-center mt-5\">\r\n          <h2 class=\"brandTxtCol\">\r\n            <b>OOPS..!</b>\r\n          </h2>\r\n          <div class=\"my-3\">\r\n            <i>We know that you want to checkout quickly but you forget somethinng very important...</i>\r\n          </div>\r\n          <h5 class=\"color-red mb-4\">\r\n            <b>Your Shopping Cart is empty</b>\r\n          </h5>\r\n          <button type=\"button\" [routerLink]=\"['/home']\" class=\"add-btn\">Continue Shopping\r\n            <span></span>\r\n          </button>\r\n        </div>\r\n        <ng-template #cartList>\r\n          <div *ngFor=\"let item of products\" class=\"item row p-3\">\r\n            <div class=\"col-3 image vertical-align-midle\">\r\n              <img src=\"../assets/adv-images/{{item.img_url}}\" class=\"cart-img\" alt=\"\" />\r\n            </div>\r\n\r\n            <div class=\"col-3 description vertical-align-midle\">\r\n              <span>{{item.banner_text}}</span>\r\n            </div>\r\n            <div class=\"col-3 quantity cart-add-btn vertical-align-midle justify-content-center\">\r\n              <span class=\"fa fa-minus-circle fa-40\" style=\" vertical-align: middle;\" (click)=\"selectQuantity(item,'decreement')\" aria-hidden=\"true\"></span>\r\n              <span class=\"px-2 quantity-color\">{{item.totalQuantity}} /\r\n                <sub>{{item.type}}</sub>\r\n              </span>\r\n              <span class=\"fa fa-plus-circle fa-40\" style=\" vertical-align: middle;\" (click)=\"selectQuantity(item, 'increement')\" aria-hidden=\"true\"></span>\r\n            </div>\r\n            <div class=\"col-2 total-price vertical-align-midle justify-content-end\">\r\n              <i class=\"fa fa-inr pr-1\" aria-hidden=\"true\"></i>{{((item.original_price-(item.original_price*item.offer_percent/100))*item.totalQuantity).toFixed(2)}}</div>\r\n              <div class=\"col-1 delete-btn vertical-align-midle justify-content-center\">\r\n                <span class=\"fa fa-times fa-30\" (click)=\"romoveCartItem(item)\" style=\" vertical-align: middle;\" aria-hidden=\"true\"></span>\r\n                <!-- <span class=\"fa fa-heart fa-30 ml-3\" aria-hidden=\"true\" style=\" vertical-align: middle;\"></span> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"row total-cart p-3\">\r\n              <div class=\"col-3\">\r\n              </div>\r\n              <div class=\"col-3\">\r\n              </div>\r\n              <div class=\"col-3 total-content\">\r\n                <div>Shopping & Handling</div>\r\n                <div>Product Total</div>\r\n              </div>\r\n              <div class=\"col-3 text-right total-content\">\r\n                <div>{{this.cartService.deliveryType}}</div>\r\n                <div>\r\n                  <i class=\"fa fa-inr pr-1\" aria-hidden=\"true\"></i>{{total}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row px-3 pb-5\">\r\n                <div class=\"col-3\">\r\n                </div>\r\n                <div class=\"col-3\">\r\n                </div>\r\n                <div class=\"col-3 sub-total-content\">\r\n                  <div>\r\n                    <b>Subtotal</b>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-3 text-right sub-total-content\">\r\n                  <div>\r\n                    <b>\r\n                      <i class=\"fa fa-inr pr-1\" aria-hidden=\"true\"></i>{{subTotal}}</b>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row px-3 pb-3 justify-content-end\">\r\n                  <button type=\"button\" [routerLink]=\"['/checkOut']\" class=\"add-btn checkout-btn\">Proceed to checkout\r\n                    <span></span>\r\n                  </button>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n"

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var cartService = (function () {
    function cartService() {
        this.productList = [];
        this.deliveryType = 'Free';
    }
    cartService.prototype.UpdateProduct = function (product) {
        var _this = this;
        var isExisting = false;
        this.productList.filter(function (list, index) {
            if (product.id === list.id) {
                _this.productList[index] = product;
                isExisting = true;
            }
        });
        if (!isExisting) {
            this.productList.push(product);
        }
    };
    cartService.prototype.ClearBasket = function () {
        this.productList = [];
    };
    cartService.prototype.RemoveProduct = function (product) {
        var _this = this;
        this.productList.filter(function (list, index) {
            if (product.id === list.id) {
                _this.productList.splice(index, 1);
            }
        });
    };
    cartService.prototype.getSelectedCity = function () { return this.selectedCity; };
    ;
    cartService.prototype.setSelectedCity = function (selectedCity) { this.selectedCity = selectedCity; };
    ;
    cartService.prototype.getProduct = function () { return this.productList; };
    ;
    cartService.prototype.getTotal = function () {
        var price = 0;
        this.productList.map(function (item) {
            price += ((item.original_price - (item.original_price * item.offer_percent / 100)) * item.totalQuantity);
        });
        return price.toFixed(2);
    };
    ;
    cartService.prototype.getSubTotal = function () { return this.getTotal(); };
    ;
    return cartService;
}());
cartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], cartService);

//# sourceMappingURL=sharedService.js.map

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(103);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginService = (function () {
    function LoginService() {
        this.UserData = {};
        this.isLogin = false;
    }
    LoginService.prototype.updateUser = function (user) {
        this.UserData = user;
        this.isLogin = true;
    };
    LoginService.prototype.clearUser = function () {
        this.UserData = {};
        this.isLogin = false;
    };
    LoginService.prototype.getUser = function () { return this.UserData; };
    ;
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], LoginService);

//# sourceMappingURL=loginService.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingState; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoutingState = (function () {
    function RoutingState(router) {
        this.router = router;
        this.history = [];
    }
    RoutingState.prototype.loadRouting = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; })
            .subscribe(function (_a) {
            var urlAfterRedirects = _a.urlAfterRedirects;
            _this.history = _this.history.concat([urlAfterRedirects]);
        });
    };
    RoutingState.prototype.getHistory = function () {
        return this.history;
    };
    RoutingState.prototype.getPreviousUrl = function () {
        return this.history[this.history.length - 2] || '/home';
    };
    return RoutingState;
}());
RoutingState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], RoutingState);

var _a;
//# sourceMappingURL=routingState.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckOutComponent = (function () {
    function CheckOutComponent() {
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__('.method').on('click', function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__('.method').removeClass('blue-border');
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__(this).addClass('blue-border');
        });
        var $cardInput = __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__('.input-fields input');
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__('.next-btn').on('click', function (e) {
            $cardInput.removeClass('warning');
            $cardInput.each(function () {
                var $this = __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery_min_js__(this);
                if (!$this.val()) {
                    $this.addClass('warning');
                }
            });
        });
    };
    return CheckOutComponent;
}());
CheckOutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-check-out',
        template: __webpack_require__(190),
        styles: [__webpack_require__(176)],
    }),
    __metadata("design:paramtypes", [])
], CheckOutComponent);

//# sourceMappingURL=checkOut.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errorPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var errorPage = (function () {
    function errorPage() {
    }
    return errorPage;
}());
errorPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__(191),
        styles: [__webpack_require__(177)],
    })
], errorPage);

//# sourceMappingURL=errorPage.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_sharedService__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var homeComponent = (function () {
    function homeComponent(router, http, cartService, activatedRoute) {
        this.router = router;
        this.http = http;
        this.cartService = cartService;
        this.activatedRoute = activatedRoute;
        this.data = [];
        this.selectedItem = {};
        this.modelImage = null;
        this.params = '';
    }
    homeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:3004/add_list')
            .subscribe(function (data) {
            _this.data = data.json();
        });
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; })
            .subscribe(function (event) {
            _this.params = (new URL(document.location))['searchParams'].get("category");
            _this.http.get('http://localhost:3004/add_list')
                .subscribe(function (data) {
                _this.data = _this.params ? data.json().filter(function (obj) { return obj.category == _this.params; }) : data.json();
            });
        });
        this.activatedRoute.params.subscribe(function () {
            _this.params = (new URL(document.location))['searchParams'].get("category");
            _this.http.get('http://localhost:3004/add_list')
                .subscribe(function (data) {
                _this.data = _this.params ? data.json().filter(function (obj) { return obj.category == _this.params; }) : data.json();
            });
        });
    };
    homeComponent.prototype.showLoader = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__(".loader-icon").show();
    };
    homeComponent.prototype.hideLoader = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__(".loader-icon").hide();
    };
    homeComponent.prototype.loadClick = function (event) {
        var _this = this;
        this.showLoader();
        setTimeout(function () {
            _this.data = _this.data.concat(_this.data);
            _this.hideLoader();
        }, 5000);
    };
    homeComponent.prototype.cardClick = function (event, item) {
        var result = this.cartService.getProduct().filter(function (list) { return item.id === list.id; });
        if (result.length > 0) {
            this.selectedItem = result[0];
        }
        else {
            item.totalQuantity = parseFloat(item.quantity).toFixed(2);
            this.selectedItem = item;
        }
        this.modelImage = '../assets/adv-images/' + this.selectedItem.img_url;
    };
    homeComponent.prototype.addClick = function (event, item) {
        this.cartService.UpdateProduct(item);
        this.showNotification('Item added successfully in cart.!');
        __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__('#detailModal .close')[0].click();
    };
    homeComponent.prototype.selectQuantity = function (type) {
        if (type == 'decreement') {
            this.selectedItem['totalQuantity'] -= parseFloat(this.selectedItem['quantity']);
            if (this.selectedItem['totalQuantity'] < this.selectedItem['quantity']) {
                this.selectedItem['totalQuantity'] = parseFloat(this.selectedItem['quantity']);
            }
        }
        else if (type == 'increement') {
            this.selectedItem['totalQuantity'] = parseFloat(this.selectedItem['totalQuantity']) + parseFloat(this.selectedItem['quantity']);
        }
        this.selectedItem['totalQuantity'] = this.selectedItem['totalQuantity'].toFixed(2);
    };
    homeComponent.prototype.showNotification = function (text) {
        var _this = this;
        var notificationElmt = document.getElementById('notificationbar');
        notificationElmt.innerText = text;
        notificationElmt.className = 'show';
        setTimeout(function () { _this.hideNotification(); }, 2000);
    };
    homeComponent.prototype.hideNotification = function () {
        var notificationElmt = document.getElementById('notificationbar');
        if (notificationElmt)
            notificationElmt.className = notificationElmt.className.replace('show', '');
    };
    return homeComponent;
}());
homeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(194),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_sharedService__["a" /* cartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_sharedService__["a" /* cartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object])
], homeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_loginService__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_routingState__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, loginService, routingState) {
        this.router = router;
        this.loginService = loginService;
        this.routingState = routingState;
        this.userName = '';
        this.password = '';
        this.invalid = false;
    }
    LoginComponent.prototype.loginClick = function () {
        if (this.userName.toLowerCase() === 'admin' && this.password === 'admin') {
            this.invalid = false;
            this.loginService.updateUser({ userName: this.userName, password: this.password });
            this.router.navigateByUrl(this.routingState.getPreviousUrl());
        }
        else {
            this.password = '';
            this.invalid = true;
        }
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(195),
        styles: [__webpack_require__(181)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_loginService__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_loginService__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_routingState__["a" /* RoutingState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_routingState__["a" /* RoutingState */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var postComponent = (function () {
    function postComponent() {
    }
    return postComponent;
}());
postComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-post',
        template: __webpack_require__(196)
    })
], postComponent);

//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_loginService__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_sharedService__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckOutRouteGuard = (function () {
    function CheckOutRouteGuard(router, loginService, cartService) {
        this.router = router;
        this.loginService = loginService;
        this.cartService = cartService;
    }
    CheckOutRouteGuard.prototype.canActivate = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            if (_this.loginService.isLogin) {
                if (_this.cartService.getProduct().length > 0) {
                    observer.next(true);
                }
                else {
                    observer.next(false);
                    _this.router.navigate(['/cart']);
                }
            }
            else {
                observer.next(false);
                _this.router.navigate(['/login']);
            }
        });
    };
    return CheckOutRouteGuard;
}());
CheckOutRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_loginService__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_loginService__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_sharedService__["a" /* cartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_sharedService__["a" /* cartService */]) === "function" && _c || Object])
], CheckOutRouteGuard);

var _a, _b, _c;
//# sourceMappingURL=checkOut.routeGaurd.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_sharedService__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(cartService) {
        this.cartService = cartService;
        this.total = this.cartService.getTotal();
        this.subTotal = this.cartService.getSubTotal();
    }
    ShoppingCartComponent.prototype.clearCart = function () {
        this.cartService.ClearBasket();
        this.products = this.cartService.getProduct();
        return false;
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.products = this.cartService.getProduct();
        this.deliveryType = 'Free';
        this.itemCount = this.products.length;
        this.total = this.cartService.getTotal();
        this.subTotal = this.cartService.getSubTotal();
    };
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
    };
    ShoppingCartComponent.prototype.romoveCartItem = function (item) {
        this.cartService.RemoveProduct(item);
        this.total = this.cartService.getTotal();
        this.subTotal = this.cartService.getSubTotal();
    };
    ShoppingCartComponent.prototype.selectQuantity = function (item, type) {
        if (type === 'decreement') {
            item['totalQuantity'] -= parseFloat(item['quantity']);
            if (item['totalQuantity'] < item['quantity']) {
                item['totalQuantity'] = parseFloat(item['quantity']);
            }
        }
        else if (type === 'increement') {
            item['totalQuantity'] = parseFloat(item['totalQuantity']) + parseFloat(item['quantity']);
        }
        item['totalQuantity'] = item['totalQuantity'].toFixed(2);
        this.cartService.UpdateProduct(item);
        this.total = this.cartService.getTotal();
        this.subTotal = this.cartService.getSubTotal();
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-shopping-cart',
        template: __webpack_require__(197),
        styles: [__webpack_require__(182)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_sharedService__["a" /* cartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_sharedService__["a" /* cartService */]) === "function" && _a || Object])
], ShoppingCartComponent);

var _a;
//# sourceMappingURL=shoppingCart.component.js.map

/***/ })

},[248]);
//# sourceMappingURL=main.bundle.js.map
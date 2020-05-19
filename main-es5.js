function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'covid19';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/dashboard/dashboard.component */
    "./src/app/component/dashboard/dashboard.component.ts");
    /* harmony import */


    var _component_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./component/error/error.component */
    "./src/app/component/error/error.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _component_zone_covid_zone_covid_zone_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./component/zone/covid-zone/covid-zone.component */
    "./src/app/component/zone/covid-zone/covid-zone.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/filter-pipe */
    "./src/app/services/filter-pipe.ts");
    /* harmony import */


    var _component_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./component/footer/footer/footer.component */
    "./src/app/component/footer/footer/footer.component.ts");

    var route = [{
      path: '',
      component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
      children: [{
        path: '',
        component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
      }, {
        path: 'covid-zone',
        component: _component_zone_covid_zone_covid_zone_component__WEBPACK_IMPORTED_MODULE_13__["CovidZoneComponent"]
      }]
    }, {
      path: '*',
      component: _component_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(route), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _component_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"], _component_zone_covid_zone_covid_zone_component__WEBPACK_IMPORTED_MODULE_13__["CovidZoneComponent"], _services_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchPipe"], _component_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _component_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"], _component_zone_covid_zone_covid_zone_component__WEBPACK_IMPORTED_MODULE_13__["CovidZoneComponent"], _services_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchPipe"], _component_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(route), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
          }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/dashboard/dashboard.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/component/dashboard/dashboard.component.ts ***!
    \************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/footer/footer.component */
    "./src/app/component/footer/footer/footer.component.ts");

    function DashboardComponent_li_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stateData_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stateData_r1.loc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stateData_r1.totalConfirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stateData_r1.discharged);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stateData_r1.deaths);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(serverService) {
        _classCallCheck(this, DashboardComponent);

        this.serverService = serverService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getLetestData();
        }
      }, {
        key: "getLetestData",
        value: function getLetestData() {
          var _this = this;

          this.serverService.getServerReq('get', 'stats/latest').subscribe(function (data) {
            _this.resData = data;
            _this.resData = _this.resData.data;
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 63,
      vars: 13,
      consts: [[1, "container"], [1, "cardWrapper"], [1, "card"], [1, "cardText"], [1, "count"], [1, "cardIcon", "yellow"], [1, "material-icons"], [1, "cardIcon", "green"], [1, "cardIcon", "red"], [1, "cardIcon", "blue"], [1, "title"], [1, "stateTable"], [1, "stateTableList", "listHeader"], [1, "stateTableList"], [4, "ngFor", "ngForOf"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Totel Case");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "local_hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Discharged");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "assignment_turned_in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "local_pharmacy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Active Case");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "local_library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Covid-19 State Wise Details in India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Death");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, DashboardComponent_li_61_Template, 9, 4, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx.resData.summary.total));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 7, ctx.resData.summary.discharged));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 9, ctx.resData.summary.deaths));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 11, ctx.resData.summary.total - (ctx.resData.summary.deaths + ctx.resData.summary.discharged)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resData.regional);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/error/error.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/component/error/error.component.ts ***!
    \****************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppComponentErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 2,
      vars: 0,
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/footer/footer/footer.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/component/footer/footer/footer.component.ts ***!
    \*************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentFooterFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(serverService) {
        _classCallCheck(this, FooterComponent);

        this.serverService = serverService;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getContactData();
        }
      }, {
        key: "getContactData",
        value: function getContactData() {
          var _this2 = this;

          this.serverService.getServerReq('get', 'contacts').subscribe(function (data) {
            _this2.contactData = data;
            _this2.contactData = _this2.contactData.data;
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 21,
      vars: 7,
      consts: [[1, "container"], [1, "footerSec"], [1, "socialLink"], [3, "href"], ["src", "assets/icons/twitter.svg", "alt", "Twitter"], ["src", "assets/icons/facebook.svg", "alt", "Twitter"], ["src", "assets/icons/gmail.svg", "alt", "Email"], [1, "disclaimer"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Government official contact details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Disclaimer: This data can very with the actual data | Please do a cross check before making dicision. We are updating the data on regular basis for better information.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.contactData.contacts.primary.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.contactData.contacts.primary.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.contactData.contacts.primary.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx.contactData.contacts.primary.number, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Phone: ", ctx.contactData.contacts.primary.number, " | Tollfree (1075)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.contactData.contacts.primary.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx.contactData.contacts.primary.email, "");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return [""];
    };

    var _c1 = function _c1() {
      return ["/covid-zone"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 9,
      vars: 4,
      consts: [[1, "container"], [1, "headerLink"], [3, "routerLink"], ["src", "assets/icons/covid19_logo.png", "alt", "covid 19 Logo"], [1, "link", 3, "routerLink"], [1, "pageWrapper"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Get zone details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/zone/covid-zone/covid-zone.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/component/zone/covid-zone/covid-zone.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CovidZoneComponent */

  /***/
  function srcAppComponentZoneCovidZoneCovidZoneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidZoneComponent", function () {
      return CovidZoneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _assets_json_covidZone_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../assets/json/covidZone.json */
    "./src/assets/json/covidZone.json");

    var _assets_json_covidZone_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../../assets/json/covidZone.json */
    "./src/assets/json/covidZone.json", 1);
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../footer/footer/footer.component */
    "./src/app/component/footer/footer/footer.component.ts");

    function CovidZoneComponent_th_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " District ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CovidZoneComponent_td_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.District, " ");
      }
    }

    function CovidZoneComponent_th_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CovidZoneComponent_td_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.State, " ");
      }
    }

    function CovidZoneComponent_th_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Zone ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CovidZoneComponent_td_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](element_r10.Zone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.Zone, " ");
      }
    }

    function CovidZoneComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
      }
    }

    function CovidZoneComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
      }
    }

    var zoneFilterData = _assets_json_covidZone_json__WEBPACK_IMPORTED_MODULE_2__;
    var ELEMENT_DATA = _assets_json_covidZone_json__WEBPACK_IMPORTED_MODULE_2__;

    var CovidZoneComponent = /*#__PURE__*/function () {
      function CovidZoneComponent() {
        _classCallCheck(this, CovidZoneComponent);

        this.covidForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          District: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.displayedColumns = ['District', 'State', 'Zone'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
      } //dataSource = ELEMENT_DATA;
      //dataSource.filter = this.inputData.trim().toLocaleLowerCase();


      _createClass(CovidZoneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          setTimeout(function () {
            zoneFilterData = [{
              "District": "South Andamans",
              "State": "Andaman And Nicobar Islands",
              "Zone": "Red Zone"
            }, {
              "District": "Nicobars",
              "State": "Andaman And Nicobar Islands",
              "Zone": "Green Zone"
            }, {
              "District": "North And Middle Andaman",
              "State": "Andaman And Nicobar Islands",
              "Zone": "Green Zone"
            }, {
              "District": "Kurnool",
              "State": "Andhra Pradesh",
              "Zone": "Red Zone"
            }, {
              "District": "Guntur",
              "State": "Andhra Pradesh",
              "Zone": "Red Zone"
            }];
          }, 0);
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          this.inputData = filterValue;
          filterValue = filterValue.toLowerCase();
          this.dataSource.filter = filterValue;
        }
      }]);

      return CovidZoneComponent;
    }();

    CovidZoneComponent.ɵfac = function CovidZoneComponent_Factory(t) {
      return new (t || CovidZoneComponent)();
    };

    CovidZoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CovidZoneComponent,
      selectors: [["app-covid-zone"]],
      decls: 36,
      vars: 6,
      consts: [[1, "covidZone"], [1, "container"], [1, "redColor"], [1, "greenColor"], [1, "yellowColor"], [1, "formZone"], ["ngForm", "covidForm", 3, "formGroup"], ["type", "text", "formControlName", "District", "placeholder", "Search your district or state name...", 3, "keyup"], [1, "zoneTable"], ["width", "100%", "mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "District"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "State"], ["matColumnDef", "Zone"], ["mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "ngClass"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function CovidZoneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Covid-19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Green");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Orange");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Zones in India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CovidZoneComponent_Template_input_keyup_15_listener($event) {
            return ctx.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CovidZoneComponent_th_19_Template, 2, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CovidZoneComponent_td_20_Template, 2, 1, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CovidZoneComponent_th_22_Template, 2, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CovidZoneComponent_td_23_Template, 2, 1, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CovidZoneComponent_th_25_Template, 2, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CovidZoneComponent_td_26_Template, 2, 4, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CovidZoneComponent_tr_27_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CovidZoneComponent_tr_28_Template, 1, 0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sorry, we couldn't find any result matching ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ". Please verify your speling and try again");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.covidForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dataSource.filteredData.length > 0 ? "hidden" : "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx.inputData, "\"");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC96b25lL2NvdmlkLXpvbmUvY292aWQtem9uZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidZoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-covid-zone',
          templateUrl: './covid-zone.component.html',
          styleUrls: ['./covid-zone.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/filter-pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/filter-pipe.ts ***!
    \*****************************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppServicesFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchPipe = /*#__PURE__*/function () {
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(value, args) {
          if (!args) {
            return value;
          }

          return value.filter(function (val) {
            var rVal = val.email.toLocaleLowerCase().includes(args);
            return rVal;
          });
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe.ɵfac = function SearchPipe_Factory(t) {
      return new (t || SearchPipe)();
    };

    SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "customerEmailFilter",
      type: SearchPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'customerEmailFilter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/server.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/server.service.ts ***!
    \********************************************/

  /*! exports provided: ServerService */

  /***/
  function srcAppServicesServerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerService", function () {
      return ServerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ServerService = /*#__PURE__*/function () {
      function ServerService(http) {
        _classCallCheck(this, ServerService);

        this.http = http;
      }

      _createClass(ServerService, [{
        key: "getServerReq",
        value: function getServerReq(method, apiEnd) {
          var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + apiEnd;

          if (method == 'get') {
            return this.http.get(apiUrl);
          }
        }
      }]);

      return ServerService;
    }();

    ServerService.ɵfac = function ServerService_Factory(t) {
      return new (t || ServerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ServerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServerService,
      factory: ServerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/json/covidZone.json":
  /*!****************************************!*\
    !*** ./src/assets/json/covidZone.json ***!
    \****************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, default */

  /***/
  function srcAssetsJsonCovidZoneJson(module) {
    module.exports = JSON.parse("[{\"District\":\"South Andamans\",\"State\":\"Andaman And Nicobar Islands\",\"Zone\":\"Red Zone\"},{\"District\":\"Nicobars\",\"State\":\"Andaman And Nicobar Islands\",\"Zone\":\"Green Zone\"},{\"District\":\"North And Middle Andaman\",\"State\":\"Andaman And Nicobar Islands\",\"Zone\":\"Green Zone\"},{\"District\":\"Kurnool\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Guntur\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Krishna\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Chittoor\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Spsr Nellore\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"West Godavari\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"YSR\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Anantapur\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Prakasam\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"East Godavari\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Srikakulam\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Visakhapatanam\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Vizianagaram\",\"State\":\"Andhra Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Lohit\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Changlang\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Dibang Valley\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"East Kameng\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"East Siang\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"KurungKumey\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Lower Dibang Valley\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Lower Subansiri\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Papum Pare\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Tawang\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Tirap\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Upper Siang\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Upper Subansiri\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"West Kameng\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"West Siang\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Anjaw\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Longding\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"KraDaadi\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Namsai\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Siang\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Kamle\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Lower Siang\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"PakkeKessang\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Leparada\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Shi Yomi\",\"State\":\"Arunachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Dhubri\",\"State\":\"Assam\",\"Zone\":\"Orange Zone\"},{\"District\":\"Marigaon\",\"State\":\"Assam\",\"Zone\":\"Orange Zone\"},{\"District\":\"Goalpara\",\"State\":\"Assam\",\"Zone\":\"Orange Zone\"},{\"District\":\"Golaghat\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Karimganj\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Nalbari\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Hailakandi\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Cachar\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Kamrup\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Lakhimpur\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Kamrup Metro\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"South SalmaraMancachar\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Barpeta\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Bongaigaon\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Darrang\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Dhemaji\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Dibrugarh\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Jorhat\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"KarbiAnglong\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Kokrajhar\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Nagaon\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Dima Hasao\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Sivasagar\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Sonitpur\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Tinsukia\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Chi rang\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Baksa\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Udalguri\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Biswanath\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Majuli\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Charaideo\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Hojai\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"West KarbiAnglong\",\"State\":\"Assam\",\"Zone\":\"Green Zone\"},{\"District\":\"Munger\",\"State\":\"Bihar\",\"Zone\":\"Red Zone\"},{\"District\":\"Patna\",\"State\":\"Bihar\",\"Zone\":\"Red Zone\"},{\"District\":\"Rohtas\",\"State\":\"Bihar\",\"Zone\":\"Red Zone\"},{\"District\":\"Buxar\",\"State\":\"Bihar\",\"Zone\":\"Red Zone\"},{\"District\":\"Gaya\",\"State\":\"Bihar\",\"Zone\":\"Red Zone\"},{\"District\":\"Nalanda\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kaimur (Bhabua)\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Siwan\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Gopalganj\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bhojpur\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Begusarai\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Aurangabad\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Madhubani\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Purbi Champaran\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bhagalpur\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Arwal\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Saran\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Nawada\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Lakhisarai\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Banka\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Vaishali\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Darbhanga\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jehanabad\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Madhepura\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Purnia\",\"State\":\"Bihar\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sheikhpura\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Araria\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Jamui\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Katihar\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Khagaria\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Kishanganj\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Muzaffarpur\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Pashchim Champaran\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Saharsa\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Samastipur\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Sheohar\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Sitamarhi\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Supaul\",\"State\":\"Bihar\",\"Zone\":\"Green Zone\"},{\"District\":\"Chandigarh\",\"State\":\"Chandigarh\",\"Zone\":\"Red Zone\"},{\"District\":\"Raipur\",\"State\":\"Chhattisgarh\",\"Zone\":\"Red Zone\"},{\"District\":\"Korba\",\"State\":\"Chhattisgarh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Surajpur\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Bilaspur\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Durg\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Rajnandgaon\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Ba star\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Dantewada\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Dhamtari\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Janjgir-Champa\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Jashpur\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Kanker\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Kabirdham\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Korea\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Mahasamund\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Raigarh\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Surguja\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Bijapur\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Narayanpur\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Sukma\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Kondagaon\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Baloda Bazar\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Gariyaband\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Balod\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Mungeli\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Balrampur\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Bemetara\",\"State\":\"Chhattisgarh\",\"Zone\":\"Green Zone\"},{\"District\":\"Dadra And Nagar Haveli\",\"State\":\"Dadra And Nagar Haveli\",\"Zone\":\"Green Zone\"},{\"District\":\"Daman\",\"State\":\"Daman And Diu\",\"Zone\":\"Green Zone\"},{\"District\":\"Diu\",\"State\":\"Daman And Diu\",\"Zone\":\"Green Zone\"},{\"District\":\"South East\",\"State\":\"Delhi\",\"Zone\":\"Red Zone\"},{\"District\":\"Central\",\"State\":\"Delhi\",\"Zone\":\"Red Zone\"},{\"District\":\"North\",\"State\":\"Delhi\",\"Zone\":\"Red Zone\"},{\"District\":\"South\",\"State\":\"Delhi\",\"Zone\":\"Red Zone\"},{\"District\":\"North East\",\"State\":\"Delhi\",\"Zone\":\"Red Zone\"},{\"District\":\"West\",\"State\":\"Delhi\",\"Zone\":\"Red Zone\"},{\"District\":\"Shahdara\",\"State\":\"Delhi\",\"Zone\":\"Red Zone\"},{\"District\":\"East\",\"State\":\"Delhi\",\"Zone\":\"Red Zone\"},{\"District\":\"New Delhi\",\"State\":\"Delhi\",\"Zone\":\"Red Zone\"},{\"District\":\"North West\",\"State\":\"Delhi\",\"Zone\":\"Red Zone\"},{\"District\":\"South West\",\"State\":\"Delhi\",\"Zone\":\"Red Zone\"},{\"District\":\"North Goa\",\"State\":\"Goa\",\"Zone\":\"Green Zone\"},{\"District\":\"South Goa\",\"State\":\"Goa\",\"Zone\":\"Green Zone\"},{\"District\":\"Ahmadabad\",\"State\":\"Gujarat\",\"Zone\":\"Red Zone\"},{\"District\":\"Surat\",\"State\":\"Gujarat\",\"Zone\":\"Red Zone\"},{\"District\":\"Vadodara\",\"State\":\"Gujarat\",\"Zone\":\"Red Zone\"},{\"District\":\"Anand\",\"State\":\"Gujarat\",\"Zone\":\"Red Zone\"},{\"District\":\"Banas Kantha\",\"State\":\"Gujarat\",\"Zone\":\"Red Zone\"},{\"District\":\"Panch Mahals\",\"State\":\"Gujarat\",\"Zone\":\"Red Zone\"},{\"District\":\"Bhavnagar\",\"State\":\"Gujarat\",\"Zone\":\"Red Zone\"},{\"District\":\"Gandhinagar\",\"State\":\"Gujarat\",\"Zone\":\"Red Zone\"},{\"District\":\"ArvaIii\",\"State\":\"Gujarat\",\"Zone\":\"Red Zone\"},{\"District\":\"Rajkot\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bharuch\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Botad\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Narmada\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Chhotaudepur\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Mahisagar\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Mahesana\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Patan\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kheda\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Valsad\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dohad\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kachchh\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Navsari\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"GirSomnath\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dang\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"SabarKantha\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Tapi\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jamnagar\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Surendranagar\",\"State\":\"Gujarat\",\"Zone\":\"Orange Zone\"},{\"District\":\"Morbi\",\"State\":\"Gujarat\",\"Zone\":\"Green Zone\"},{\"District\":\"Amreli\",\"State\":\"Gujarat\",\"Zone\":\"Green Zone\"},{\"District\":\"Porbandar\",\"State\":\"Gujarat\",\"Zone\":\"Green Zone\"},{\"District\":\"Junagadh\",\"State\":\"Gujarat\",\"Zone\":\"Green Zone\"},{\"District\":\"Devbhumi Dwarka\",\"State\":\"Gujarat\",\"Zone\":\"Green Zone\"},{\"District\":\"Sonipat\",\"State\":\"Haryana\",\"Zone\":\"Red Zone\"},{\"District\":\"Faridabad\",\"State\":\"Haryana\",\"Zone\":\"Red Zone\"},{\"District\":\"Gurugram\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Nuh\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Panipat\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Panchkula\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Palwal\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Rohtak\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Hisar\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ambala\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jhajjar\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bhiwani\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kaithal\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kurukshetra\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Karna I\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jind\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sirsa\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Yamunanagar\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Fatehabad\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Charki Dadri\",\"State\":\"Haryana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Mahendragarh\",\"State\":\"Haryana\",\"Zone\":\"Green Zone\"},{\"District\":\"Rewari\",\"State\":\"Haryana\",\"Zone\":\"Green Zone\"},{\"District\":\"Una\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Chamba\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Hamirpur\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kangra\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sirmaur\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Solan\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bilaspur\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Kinnaur\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Kullu\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Lahul And Spiti\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Mandi\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Shimla\",\"State\":\"Himachal Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Bandipora\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Red Zone\"},{\"District\":\"Shopian\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Red Zone\"},{\"District\":\"Anantnag\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Red Zone\"},{\"District\":\"Srinagar\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Red Zone\"},{\"District\":\"Baramulla\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kupwara\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ganderbal\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jammu\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Udhampur\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kulgam\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Budgam\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Samba\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kathua\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Rajouri\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ramban\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Reasi\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Orange Zone\"},{\"District\":\"Pulwama\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Green Zone\"},{\"District\":\"Kishtwar\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Green Zone\"},{\"District\":\"Doda\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Green Zone\"},{\"District\":\"Poonch\",\"State\":\"Jammu And Kashmir\",\"Zone\":\"Green Zone\"},{\"District\":\"Ranchi\",\"State\":\"Jharkhand\",\"Zone\":\"Red Zone\"},{\"District\":\"Bokaro\",\"State\":\"Jharkhand\",\"Zone\":\"Orange Zone\"},{\"District\":\"Garhwa\",\"State\":\"Jharkhand\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dhanbad\",\"State\":\"Jharkhand\",\"Zone\":\"Orange Zone\"},{\"District\":\"Deoghar\",\"State\":\"Jharkhand\",\"Zone\":\"Orange Zone\"},{\"District\":\"Hazaribagh\",\"State\":\"Jharkhand\",\"Zone\":\"Orange Zone\"},{\"District\":\"Simdega\",\"State\":\"Jharkhand\",\"Zone\":\"Orange Zone\"},{\"District\":\"Giridih\",\"State\":\"Jharkhand\",\"Zone\":\"Orange Zone\"},{\"District\":\"Koderma\",\"State\":\"Jharkhand\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jamtara\",\"State\":\"Jharkhand\",\"Zone\":\"Orange Zone\"},{\"District\":\"Chatra\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Dumka\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"East Singhbum\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Godda\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Gumla\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Latehar\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Lohardaga\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Pakur\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Palamu\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Sahebganj\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Saraikela Kharsawan\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"West Singhbhum\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Khunti\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Ramgarh\",\"State\":\"Jharkhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Bengaluru Urban\",\"State\":\"Karnataka\",\"Zone\":\"Red Zone\"},{\"District\":\"Mysuru\",\"State\":\"Karnataka\",\"Zone\":\"Red Zone\"},{\"District\":\"Bengaluru Rural\",\"State\":\"Karnataka\",\"Zone\":\"Red Zone\"},{\"District\":\"Belagavi\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Vijayapura\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kalaburagi\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bagalkote\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Mandya\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ballari\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dharwad\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dakshina Kannada\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bidar\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Chikkaballapura\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Gadag\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Uttara Kannada\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Tumakuru\",\"State\":\"Karnataka\",\"Zone\":\"Orange Zone\"},{\"District\":\"Davangere\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Udupi\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Chamarajanagara\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Chikkamagaluru\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Chitradurga\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Hassan\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Haveri\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Kodagu\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Kolar\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Koppa I\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Raichur\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Shivamogga\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Ramanagara\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Yadgir\",\"State\":\"Karnataka\",\"Zone\":\"Green Zone\"},{\"District\":\"Kannur\",\"State\":\"Kerala\",\"Zone\":\"Red Zone\"},{\"District\":\"Kottayam\",\"State\":\"Kerala\",\"Zone\":\"Red Zone\"},{\"District\":\"Kasaragod\",\"State\":\"Kerala\",\"Zone\":\"Orange Zone\"},{\"District\":\"ldukki\",\"State\":\"Kerala\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kozhikode\",\"State\":\"Kerala\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kollam\",\"State\":\"Kerala\",\"Zone\":\"Orange Zone\"},{\"District\":\"Palakkad\",\"State\":\"Kerala\",\"Zone\":\"Orange Zone\"},{\"District\":\"Pathanamthitta\",\"State\":\"Kerala\",\"Zone\":\"Orange Zone\"},{\"District\":\"Malappuram\",\"State\":\"Kerala\",\"Zone\":\"Orange Zone\"},{\"District\":\"Thiruvananthapuram\",\"State\":\"Kerala\",\"Zone\":\"Orange Zone\"},{\"District\":\"Alappuzha\",\"State\":\"Kerala\",\"Zone\":\"Orange Zone\"},{\"District\":\"Thrissur\",\"State\":\"Kerala\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ernakulam\",\"State\":\"Kerala\",\"Zone\":\"Green Zone\"},{\"District\":\"Wayanad\",\"State\":\"Kerala\",\"Zone\":\"Green Zone\"},{\"District\":\"Lehladakh\",\"State\":\"Ladakh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kargil\",\"State\":\"Ladakh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Lakshadweep District\",\"State\":\"Lakshadweep\",\"Zone\":\"Green Zone\"},{\"District\":\"Indore\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Bhopal\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Ujjain\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Jabalpur\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Dhar\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Barwani\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"East Nimar\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Dewas\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Gwalior\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Khargone\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Raisen\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Hoshangabad\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ratlam\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Agar Malwa\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Mandsaur\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sagar\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Shajapur\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Chhindwara\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Alirajpur\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Tikamgarh\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Shahdol\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sheopur\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dindori\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Burhanpur\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Harda\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Betul\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Vidisha\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Morena\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Rewa\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Ashoknagar\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Rajgarh\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Shivpuri\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Anuppur\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Balaghat\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Bhind\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Chhatarpur\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Da oh\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Datia\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Guna\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Jhabua\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Katni\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Mandia\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Narsinghpur\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Nee much\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Panna\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Satna\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Sehore\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Seoni\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Sid hi\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Umaria\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Singrauli\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Niwari\",\"State\":\"Madhya Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Mumbai\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Pune\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Thane\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Nashik\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Palghar\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Nagpur\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Solapur\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Yavatmal\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Aurangabad\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Satara\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Dhule\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Ako la\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Jalgaon\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Mumbai Suburban\",\"State\":\"Maharashtra\",\"Zone\":\"Red Zone\"},{\"District\":\"Raigad\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ahmednagar\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Amravati\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Buldhana\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Nandurbar\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kolhapur\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Hingoli\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ratnagiri\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jalna\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Nanded\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Chandrapur\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Parbhani\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sangli\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Latur\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bhandara\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Beed\",\"State\":\"Maharashtra\",\"Zone\":\"Orange Zone\"},{\"District\":\"Osmanabad\",\"State\":\"Maharashtra\",\"Zone\":\"Green Zone\"},{\"District\":\"Washim\",\"State\":\"Maharashtra\",\"Zone\":\"Green Zone\"},{\"District\":\"Sindhudurg\",\"State\":\"Maharashtra\",\"Zone\":\"Green Zone\"},{\"District\":\"Gandia\",\"State\":\"Maharashtra\",\"Zone\":\"Green Zone\"},{\"District\":\"Gadchiroli\",\"State\":\"Maharashtra\",\"Zone\":\"Green Zone\"},{\"District\":\"Wardha\",\"State\":\"Maharashtra\",\"Zone\":\"Green Zone\"},{\"District\":\"Imphal West\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Thoubal\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Bishnupur\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Chandel\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Churachandpur\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Imphal East\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Senapati\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Tamenglong\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Ukhrul\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Kakching\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Kangpokpi\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Jiribam\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Nonev\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Pherzawl\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Tengnoupal\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"Kamjong\",\"State\":\"Manipur\",\"Zone\":\"Green Zone\"},{\"District\":\"East Khasi Hills\",\"State\":\"Meghalaya\",\"Zone\":\"Orange Zone\"},{\"District\":\"East Garo Hills\",\"State\":\"Meghalaya\",\"Zone\":\"Green Zone\"},{\"District\":\"West Jaintia Hills\",\"State\":\"Meghalaya\",\"Zone\":\"Green Zone\"},{\"District\":\"Ri Bhoi\",\"State\":\"Meghalaya\",\"Zone\":\"Green Zone\"},{\"District\":\"South Garo Hills\",\"State\":\"Meghalaya\",\"Zone\":\"Green Zone\"},{\"District\":\"West Garo Hills\",\"State\":\"Meghalaya\",\"Zone\":\"Green Zone\"},{\"District\":\"West Khasi Hills\",\"State\":\"Meghalaya\",\"Zone\":\"Green Zone\"},{\"District\":\"North Garo Hills\",\"State\":\"Meghalaya\",\"Zone\":\"Green Zone\"},{\"District\":\"East Jaintia Hills\",\"State\":\"Meghalaya\",\"Zone\":\"Green Zone\"},{\"District\":\"South West Khasi Hills\",\"State\":\"Meghalaya\",\"Zone\":\"Green Zone\"},{\"District\":\"South West Garo Hills\",\"State\":\"Meghalaya\",\"Zone\":\"Green Zone\"},{\"District\":\"Aizawl\",\"State\":\"Mizoram\",\"Zone\":\"Green Zone\"},{\"District\":\"Champhai\",\"State\":\"Mizoram\",\"Zone\":\"Green Zone\"},{\"District\":\"Kolasib\",\"State\":\"Mizoram\",\"Zone\":\"Green Zone\"},{\"District\":\"Lawngtlai\",\"State\":\"Mizoram\",\"Zone\":\"Green Zone\"},{\"District\":\"Lunglei\",\"State\":\"Mizoram\",\"Zone\":\"Green Zone\"},{\"District\":\"Mamit\",\"State\":\"Mizoram\",\"Zone\":\"Green Zone\"},{\"District\":\"Saiha\",\"State\":\"Mizoram\",\"Zone\":\"Green Zone\"},{\"District\":\"Serchhip\",\"State\":\"Mizoram\",\"Zone\":\"Green Zone\"},{\"District\":\"Hnahthial\",\"State\":\"Mizoram\",\"Zone\":\"Green Zone\"},{\"District\":\"Saitual\",\"State\":\"Mizoram\",\"Zone\":\"Green Zone\"},{\"District\":\"Khawzawl\",\"State\":\"Mizoram\",\"Zone\":\"Green Zone\"},{\"District\":\"Dimapur\",\"State\":\"Nagaland\",\"Zone\":\"Green Zone\"},{\"District\":\"Kohima\",\"State\":\"Nagaland\",\"Zone\":\"Green Zone\"},{\"District\":\"Mokokchung\",\"State\":\"Nagaland\",\"Zone\":\"Green Zone\"},{\"District\":\"Mon\",\"State\":\"Nagaland\",\"Zone\":\"Green Zone\"},{\"District\":\"Phek\",\"State\":\"Nagaland\",\"Zone\":\"Green Zone\"},{\"District\":\"Tuensang\",\"State\":\"Nagaland\",\"Zone\":\"Green Zone\"},{\"District\":\"Wokha\",\"State\":\"Nagaland\",\"Zone\":\"Green Zone\"},{\"District\":\"Zunheboto\",\"State\":\"Nagaland\",\"Zone\":\"Green Zone\"},{\"District\":\"Peren\",\"State\":\"Nagaland\",\"Zone\":\"Green Zone\"},{\"District\":\"Kiphire\",\"State\":\"Nagaland\",\"Zone\":\"Green Zone\"},{\"District\":\"Longleng\",\"State\":\"Nagaland\",\"Zone\":\"Green Zone\"},{\"District\":\"Jajapur\",\"State\":\"Orrisa\",\"Zone\":\"Red Zone\"},{\"District\":\"Bhadrak\",\"State\":\"Orrisa\",\"Zone\":\"Red Zone\"},{\"District\":\"Baleshwar\",\"State\":\"Orrisa\",\"Zone\":\"Red Zone\"},{\"District\":\"Khordha\",\"State\":\"Orrisa\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sundargarh\",\"State\":\"Orrisa\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kendrapara\",\"State\":\"Orrisa\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kora put\",\"State\":\"Orrisa\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dhenkanal\",\"State\":\"Orrisa\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kalahandi\",\"State\":\"Orrisa\",\"Zone\":\"Orange Zone\"},{\"District\":\"Cuttack\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Puri\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Anugul\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Balangir\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Bargarh\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Boudh\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Deogarh\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Gajapati\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Ganjam\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Jagatsinghapu r\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Jharsuguda\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Kandhamal\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Kendujhar\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Malkangiri\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Mayurbhanj\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Nabarangpur\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Nayagarh\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Nuapada\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Rayagada\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Sambalpur\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Sonepur\",\"State\":\"Orrisa\",\"Zone\":\"Green Zone\"},{\"District\":\"Pondicherry\",\"State\":\"Puducherry\",\"Zone\":\"Orange Zone\"},{\"District\":\"Karaikal\",\"State\":\"Puducherry\",\"Zone\":\"Green Zone\"},{\"District\":\"Mahe\",\"State\":\"Puducherry\",\"Zone\":\"Green Zone\"},{\"District\":\"Yanam\",\"State\":\"Puducherry\",\"Zone\":\"Green Zone\"},{\"District\":\"Jalandhar\",\"State\":\"Punjab\",\"Zone\":\"Red Zone\"},{\"District\":\"Patiala\",\"State\":\"Punjab\",\"Zone\":\"Red Zone\"},{\"District\":\"Ludhiana\",\"State\":\"Punjab\",\"Zone\":\"Red Zone\"},{\"District\":\"SAS Nagar\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Pathankot\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Mansa\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Tarn Taran\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Amritsar\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kapurthala\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Hoshiarpur\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Faridkot\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sangrur\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Shahid Bhagat Singh Nagar (Nawanshahr)\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Firozepur\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sri Muktsar Sahib\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Moga\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Gurdaspur\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Barna la\",\"State\":\"Punjab\",\"Zone\":\"Orange Zone\"},{\"District\":\"Rupnagar (Ropar)\",\"State\":\"Punjab\",\"Zone\":\"Green Zone\"},{\"District\":\"Fatehgarh Sahib\",\"State\":\"Punjab\",\"Zone\":\"Green Zone\"},{\"District\":\"Bathinda\",\"State\":\"Punjab\",\"Zone\":\"Green Zone\"},{\"District\":\"Fazilka\",\"State\":\"Punjab\",\"Zone\":\"Green Zone\"},{\"District\":\"Jaipur\",\"State\":\"Rajasthan\",\"Zone\":\"Red Zone\"},{\"District\":\"Jodhpur\",\"State\":\"Rajasthan\",\"Zone\":\"Red Zone\"},{\"District\":\"Kota\",\"State\":\"Rajasthan\",\"Zone\":\"Red Zone\"},{\"District\":\"Ajmer\",\"State\":\"Rajasthan\",\"Zone\":\"Red Zone\"},{\"District\":\"Bharatpur\",\"State\":\"Rajasthan\",\"Zone\":\"Red Zone\"},{\"District\":\"Nagaur\",\"State\":\"Rajasthan\",\"Zone\":\"Red Zone\"},{\"District\":\"Banswara\",\"State\":\"Rajasthan\",\"Zone\":\"Red Zone\"},{\"District\":\"Jhalawar\",\"State\":\"Rajasthan\",\"Zone\":\"Red Zone\"},{\"District\":\"Tonk\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jaisalmer\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dausa\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jhunjhunu\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Hanumangarh\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bhilwara\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sawai Madhaopur\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Chittorgarh\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dungarpur\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Udaipur\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dholpur\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sikar\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Alwar\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bikaner\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Churu\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Pali\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Barmer\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Karauli\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Rajsamand\",\"State\":\"Rajasthan\",\"Zone\":\"Orange Zone\"},{\"District\":\"Baran\",\"State\":\"Rajasthan\",\"Zone\":\"Green Zone\"},{\"District\":\"Bundi\",\"State\":\"Rajasthan\",\"Zone\":\"Green Zone\"},{\"District\":\"Ganganagar\",\"State\":\"Rajasthan\",\"Zone\":\"Green Zone\"},{\"District\":\"Jalore\",\"State\":\"Rajasthan\",\"Zone\":\"Green Zone\"},{\"District\":\"Sirohi\",\"State\":\"Rajasthan\",\"Zone\":\"Green Zone\"},{\"District\":\"Pratapgarh\",\"State\":\"Rajasthan\",\"Zone\":\"Green Zone\"},{\"District\":\"North District\",\"State\":\"Sikkim\",\"Zone\":\"Green Zone\"},{\"District\":\"East District\",\"State\":\"Sikkim\",\"Zone\":\"Green Zone\"},{\"District\":\"South District\",\"State\":\"Sikkim\",\"Zone\":\"Green Zone\"},{\"District\":\"West District\",\"State\":\"Sikkim\",\"Zone\":\"Green Zone\"},{\"District\":\"Chennai\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Madurai\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Namakkal\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Thanjavur\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Chengalpattu\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Thiruvallur\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Tiruppur\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Rani pet\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Virudhunagar\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Thiruvarur\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Ve II ore\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Kanchipuram\",\"State\":\"Tamil Nadu\",\"Zone\":\"Red Zone\"},{\"District\":\"Theni\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Tenkasi\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Nagapattinam\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dindigul\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Villupuram\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Coimbatore\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Cuddalore\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Salem\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Karur\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Tuticorin\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Tiruchirappalli\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Tirupathur\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kanniyakumari\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Tiruvannamalai\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ramanathapuram\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Tirunelveli\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"The Nilgiris\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sivaganga\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Perambalur\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kallakurichi\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ariyalur\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Erode\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Pudukkottai\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dharmapuri\",\"State\":\"Tamil Nadu\",\"Zone\":\"Orange Zone\"},{\"District\":\"Krishnagiri\",\"State\":\"Tamil Nadu\",\"Zone\":\"Green Zone\"},{\"District\":\"Hyderabad\",\"State\":\"Telangana\",\"Zone\":\"Red Zone\"},{\"District\":\"Surya pet\",\"State\":\"Telangana\",\"Zone\":\"Red Zone\"},{\"District\":\"Ranga Reddy\",\"State\":\"Telangana\",\"Zone\":\"Red Zone\"},{\"District\":\"MedchalMalkajgiri\",\"State\":\"Telangana\",\"Zone\":\"Red Zone\"},{\"District\":\"Vikarabad\",\"State\":\"Telangana\",\"Zone\":\"Red Zone\"},{\"District\":\"Warangal Urban\",\"State\":\"Telangana\",\"Zone\":\"Red Zone\"},{\"District\":\"Nizamabad\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"JogulambaGadwal\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Nirmal\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Nalgonda\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Adilabad\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sangareddy\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kama reddy\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"KumuramBheemAsifabad\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Karimnagar\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Khammam\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Mahabubnagar\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jagitial\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"RajannaSircilla\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"JayashankarBhupalapa lly\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Medak\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jangoan\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Narayanpet\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Manche rial\",\"State\":\"Telangana\",\"Zone\":\"Orange Zone\"},{\"District\":\"Peddapalli\",\"State\":\"Telangana\",\"Zone\":\"Green Zone\"},{\"District\":\"Nagarkurnool\",\"State\":\"Telangana\",\"Zone\":\"Green Zone\"},{\"District\":\"Mulugu\",\"State\":\"Telangana\",\"Zone\":\"Green Zone\"},{\"District\":\"BhadradriKothagudem\",\"State\":\"Telangana\",\"Zone\":\"Green Zone\"},{\"District\":\"Mahabubabad\",\"State\":\"Telangana\",\"Zone\":\"Green Zone\"},{\"District\":\"Siddipet\",\"State\":\"Telangana\",\"Zone\":\"Green Zone\"},{\"District\":\"Warangal Rural\",\"State\":\"Telangana\",\"Zone\":\"Green Zone\"},{\"District\":\"Wanaparthy\",\"State\":\"Telangana\",\"Zone\":\"Green Zone\"},{\"District\":\"YadadriBhuvanagiri\",\"State\":\"Telangana\",\"Zone\":\"Green Zone\"},{\"District\":\"North Tripura\",\"State\":\"Tripura\",\"Zone\":\"Orange Zone\"},{\"District\":\"Gomati\",\"State\":\"Tripura\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dhalai\",\"State\":\"Tripura\",\"Zone\":\"Green Zone\"},{\"District\":\"South Tripura\",\"State\":\"Tripura\",\"Zone\":\"Green Zone\"},{\"District\":\"West Tripura\",\"State\":\"Tripura\",\"Zone\":\"Green Zone\"},{\"District\":\"Khowai\",\"State\":\"Tripura\",\"Zone\":\"Green Zone\"},{\"District\":\"Sepahijala\",\"State\":\"Tripura\",\"Zone\":\"Green Zone\"},{\"District\":\"Unakoti\",\"State\":\"Tripura\",\"Zone\":\"Green Zone\"},{\"District\":\"Agra\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Lucknow\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Saharanpur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Kanpur Nagar\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Moradabad\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Firozabad\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Gautam Buddha Nagar (Noida)\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Bulandshahr\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Meerut\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Rae Bareli\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Varanasi\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Bijnor\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Amroha\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Sant Kabeer Nagar\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Aligarh\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Muzaffarnagar\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Rampur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Mathura\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Bareilly\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Red Zone\"},{\"District\":\"Ghaziabad\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Hapur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Baghpat\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Basti\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Budaun\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sambhal\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Auraiya\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sham Ii\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sitapur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bahraich\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kannauj\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Azamgarh\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Mainpuri\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Shravasti\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Banda\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jaunpur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Etah\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kasganj\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Sultanpur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Prayagraj (Allahabad)\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jalaun\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Mirzapur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Etawah\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Pratapgarh\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ghazipur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Gonda\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Mau\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Bhadohi\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Unnao\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Pilibhit\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Balrampur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Ayodhya\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Gorakhpur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Jhansi\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Hardoi\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Kaushambi\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Orange Zone\"},{\"District\":\"Barabanki\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Kheri\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Hathras\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Maharajganj\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Shahjahanpur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Ambedkar Nagar\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"BaIlia\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Chandauli\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Chitrakoot\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Deoria\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Farrukhabad\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Fatehpur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Hamirpur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Kanpur Dehat\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Kushi Nagar\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Lalitpur\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Mahoba\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Siddharth Nagar\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Sonbhadra\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Amethi\",\"State\":\"Uttar Pradesh\",\"Zone\":\"Green Zone\"},{\"District\":\"Haridwar\",\"State\":\"Uttarakhand\",\"Zone\":\"Red Zone\"},{\"District\":\"Dehradun\",\"State\":\"Uttarakhand\",\"Zone\":\"Orange Zone\"},{\"District\":\"Nainital\",\"State\":\"Uttarakhand\",\"Zone\":\"Orange Zone\"},{\"District\":\"Udam Singh Nagar\",\"State\":\"Uttarakhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Almora\",\"State\":\"Uttarakhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Pauri Garhwal\",\"State\":\"Uttarakhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Bageshwar\",\"State\":\"Uttarakhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Chamoli\",\"State\":\"Uttarakhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Champawat\",\"State\":\"Uttarakhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Pithoraga rh\",\"State\":\"Uttarakhand\",\"Zone\":\"Green Zone\"},{\"District\":\"RudraPrayag\",\"State\":\"Uttarakhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Tehri Garhwal\",\"State\":\"Uttarakhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Uttar Kashi\",\"State\":\"Uttarakhand\",\"Zone\":\"Green Zone\"},{\"District\":\"Kolkata\",\"State\":\"West Bengal\",\"Zone\":\"Red Zone\"},{\"District\":\"Howrah\",\"State\":\"West Bengal\",\"Zone\":\"Red Zone\"},{\"District\":\"24 Paraganas North\",\"State\":\"West Bengal\",\"Zone\":\"Red Zone\"},{\"District\":\"24 Paraganas South\",\"State\":\"West Bengal\",\"Zone\":\"Red Zone\"},{\"District\":\"Medinipur West\",\"State\":\"West Bengal\",\"Zone\":\"Red Zone\"},{\"District\":\"Medinipur East\",\"State\":\"West Bengal\",\"Zone\":\"Red Zone\"},{\"District\":\"Darjeeling\",\"State\":\"West Bengal\",\"Zone\":\"Red Zone\"},{\"District\":\"Jalpaiguri\",\"State\":\"West Bengal\",\"Zone\":\"Red Zone\"},{\"District\":\"Kalimpong\",\"State\":\"West Bengal\",\"Zone\":\"Red Zone\"},{\"District\":\"Maldah\",\"State\":\"West Bengal\",\"Zone\":\"Red Zone\"},{\"District\":\"Hooghly\",\"State\":\"West Bengal\",\"Zone\":\"Orange Zone\"},{\"District\":\"Paschim Bardhaman\",\"State\":\"West Bengal\",\"Zone\":\"Orange Zone\"},{\"District\":\"Nadia\",\"State\":\"West Bengal\",\"Zone\":\"Orange Zone\"},{\"District\":\"Purba Bardhaman\",\"State\":\"West Bengal\",\"Zone\":\"Orange Zone\"},{\"District\":\"Murshidabad\",\"State\":\"West Bengal\",\"Zone\":\"Orange Zone\"},{\"District\":\"Dinajpur Uttar\",\"State\":\"West Bengal\",\"Zone\":\"Green Zone\"},{\"District\":\"Bankura\",\"State\":\"West Bengal\",\"Zone\":\"Green Zone\"},{\"District\":\"Birbhum\",\"State\":\"West Bengal\",\"Zone\":\"Green Zone\"},{\"District\":\"Coochbehar\",\"State\":\"West Bengal\",\"Zone\":\"Green Zone\"},{\"District\":\"Dinajpur Dakshin\",\"State\":\"West Bengal\",\"Zone\":\"Green Zone\"},{\"District\":\"Purulia\",\"State\":\"West Bengal\",\"Zone\":\"Green Zone\"},{\"District\":\"Alipurduar\",\"State\":\"West Bengal\",\"Zone\":\"Green Zone\"},{\"District\":\"Jhargram\",\"State\":\"West Bengal\",\"Zone\":\"Green Zone\"}]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      API_URL: 'https://api.rootnet.in/covid19-in/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Tauphik\covid19_ang\covid19\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
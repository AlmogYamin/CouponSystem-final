webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n<head>\n\n</head>\n\n<body>\n    <nav class=\"navbar navbar-default\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n                    data-target=\".navbar-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href=\"#\">Refresh</a></li>\n                <li><a routerLink=\"/createCompany\">Create Company</a></li>\n                <li><a routerLink=\"/removeCompany\">Remove Company</a></li>\n                <li><a routerLink=\"/updateCompany\">Update Company</a></li>\n                <li><a routerLink=\"/getCompanyById\">Get Company by ID</a></li>\n                <li><a routerLink=\"/getAllCompanies\">Get All Companies</a></li>\n                <li><a routerLink=\"/createCustomer\">Create Customer</a></li>\n                <li><a routerLink=\"/removeCustomer\">Remove Customer</a></li>\n                <li><a routerLink=\"/updateCustomer\">Update Customer</a></li>\n                <li><a routerLink=\"/getCustomerById\">Get Customer by ID</a></li>\n                <li><a routerLink=\"/getAllCustomers\">Get All Customers</a></li>\n            </ul>\n        </div>\n    </nav>\n</body>\n</html>\n\n\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_create_company_create_company_component__ = __webpack_require__("./src/app/components/create-company/create-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_remove_company_remove_company_component__ = __webpack_require__("./src/app/components/remove-company/remove-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_update_company_update_company_component__ = __webpack_require__("./src/app/components/update-company/update-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_get_company_by_id_get_company_by_id_component__ = __webpack_require__("./src/app/components/get-company-by-id/get-company-by-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_get_all_companies_get_all_companies_component__ = __webpack_require__("./src/app/components/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_create_customer_create_customer_component__ = __webpack_require__("./src/app/components/create-customer/create-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_remove_customer_remove_customer_component__ = __webpack_require__("./src/app/components/remove-customer/remove-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_update_customer_update_customer_component__ = __webpack_require__("./src/app/components/update-customer/update-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_get_customer_by_id_get_customer_by_id_component__ = __webpack_require__("./src/app/components/get-customer-by-id/get-customer-by-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_get_all_customers_get_all_customers_component__ = __webpack_require__("./src/app/components/get-all-customers/get-all-customers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_create_company_create_company_component__["a" /* CreateCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_remove_company_remove_company_component__["a" /* RemoveCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_update_company_update_company_component__["a" /* UpdateCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_get_company_by_id_get_company_by_id_component__["a" /* GetCompanyByIdComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_get_all_companies_get_all_companies_component__["a" /* GetAllCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_create_customer_create_customer_component__["a" /* CreateCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_remove_customer_remove_customer_component__["a" /* RemoveCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_update_customer_update_customer_component__["a" /* UpdateCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_get_customer_by_id_get_customer_by_id_component__["a" /* GetCustomerByIdComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_get_all_customers_get_all_customers_component__["a" /* GetAllCustomersComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'createCompany',
                        component: __WEBPACK_IMPORTED_MODULE_6__components_create_company_create_company_component__["a" /* CreateCompanyComponent */]
                    },
                    {
                        path: 'removeCompany',
                        component: __WEBPACK_IMPORTED_MODULE_7__components_remove_company_remove_company_component__["a" /* RemoveCompanyComponent */]
                    },
                    {
                        path: 'updateCompany',
                        component: __WEBPACK_IMPORTED_MODULE_8__components_update_company_update_company_component__["a" /* UpdateCompanyComponent */]
                    },
                    {
                        path: 'getCompanyById',
                        component: __WEBPACK_IMPORTED_MODULE_9__components_get_company_by_id_get_company_by_id_component__["a" /* GetCompanyByIdComponent */]
                    },
                    {
                        path: 'getAllCompanies',
                        component: __WEBPACK_IMPORTED_MODULE_10__components_get_all_companies_get_all_companies_component__["a" /* GetAllCompaniesComponent */]
                    },
                    {
                        path: 'createCustomer',
                        component: __WEBPACK_IMPORTED_MODULE_11__components_create_customer_create_customer_component__["a" /* CreateCustomerComponent */]
                    },
                    {
                        path: 'removeCustomer',
                        component: __WEBPACK_IMPORTED_MODULE_12__components_remove_customer_remove_customer_component__["a" /* RemoveCustomerComponent */]
                    },
                    {
                        path: 'updateCustomer',
                        component: __WEBPACK_IMPORTED_MODULE_13__components_update_customer_update_customer_component__["a" /* UpdateCustomerComponent */]
                    },
                    {
                        path: 'getCustomerById',
                        component: __WEBPACK_IMPORTED_MODULE_14__components_get_customer_by_id_get_customer_by_id_component__["a" /* GetCustomerByIdComponent */]
                    },
                    {
                        path: 'getAllCustomers',
                        component: __WEBPACK_IMPORTED_MODULE_15__components_get_all_customers_get_all_customers_component__["a" /* GetAllCustomersComponent */]
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/common/Company.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(id, compName, password, email) {
        this.id = id;
        this.compName = compName;
        this.password = password;
        this.email = email;
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/components/common/Customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(id, custName, password) {
        this.id = id;
        this.custName = custName;
        this.password = password;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/components/create-company/create-company.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create-company/create-company.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" style=\"margin-left: 20px\">\n    <div class=\"form-group\">\n        <label for=\"companyName\" class=\"control-label col-sm-2\">Company Name</label>\n        <div class=\"col-sm-6\">\n            <input class=\"form-control\" placeholder=\"Insert New Company Name\"\n            [(ngModel)] = \"company.compName\" \n            type=\"text\" id=\"companyName\" name=\"companyName\" />\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"inputPassword\" class=\"control-label col-sm-2\">Password</label>\n        <div class=\"col-sm-6\">\n            <input class=\"form-control\" placeholder=\"Insert New Password\"\n            [(ngModel)] = \"company.password\"\n            type=\"password\" id=\"inputPassword\" name=\"password\"/>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"inputEmail\" class=\"control-label col-sm-2\">Email</label>\n        <div class=\"col-sm-6\">\n            <input class=\"form-control\" placeholder=\"Insert Your Email\"\n            [(ngModel)] = \"company.email\"\n            type=\"text\" id=\"inputEmail\" name=\"email\"/>\n        </div>\n\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n        <button (click)=\"createCompany()\" class=\"btn btn-default\">Create Company</button>\n        </div>\n    </div>\n    \n    <pre>\n      {{company | json}}\n    </pre>\n</form>"

/***/ }),

/***/ "./src/app/components/create-company/create-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Company__ = __webpack_require__("./src/app/components/common/Company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCompanyComponent = /** @class */ (function () {
    function CreateCompanyComponent(_http) {
        this._http = _http;
        this.company = new __WEBPACK_IMPORTED_MODULE_1__common_Company__["a" /* Company */]();
    }
    CreateCompanyComponent.prototype.ngOnInit = function () {
    };
    CreateCompanyComponent.prototype.createCompany = function () {
        this._http.post('http://localhost:8080/adminApi/createCompany', this.company).subscribe(function (response) {
            console.log(response);
        });
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            position: 'center',
            type: 'success',
            title: 'Success!',
            text: 'Your Company Has Been Saved',
            showConfirmButton: false,
            timer: 1800
        });
    };
    CreateCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-company',
            template: __webpack_require__("./src/app/components/create-company/create-company.component.html"),
            styles: [__webpack_require__("./src/app/components/create-company/create-company.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form class=\"form-horizontal\" style=\"margin-left: 20px\">\n  <div class=\"form-group\">\n      <label for=\"customerName\" class=\"control-label col-sm-2\">Customer Name</label>\n      <div class=\"col-sm-6\">\n          <input class=\"form-control\" placeholder=\"Insert New Customer Name\"\n          [(ngModel)] = \"customer.custName\"\n                  type=\"text\" id=\"customerName\" name=\"cutomerName\" />\n      </div>\n  </div>\n  <div class=\"form-group\">\n      <label for=\"inputPassword\" class=\"control-label col-sm-2\">Password</label>\n      <div class=\"col-sm-6\">\n          <input class=\"form-control\" placeholder=\"Insert New Password\"\n          [(ngModel)] = \"customer.password\"\n                  type=\"password\" id=\"inputPassword\" name=\"password\"/>\n      </div>\n  </div>\n  <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button (click)=\"createCustomer()\" class=\"btn btn-default\">Create Customer</button>\n      </div>\n  </div>\n  <pre>\n        {{customer | json}}\n   </pre>\n</form>"

/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Customer__ = __webpack_require__("./src/app/components/common/Customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCustomerComponent = /** @class */ (function () {
    function CreateCustomerComponent(_http) {
        this._http = _http;
        this.customer = new __WEBPACK_IMPORTED_MODULE_1__common_Customer__["a" /* Customer */]();
    }
    CreateCustomerComponent.prototype.ngOnInit = function () {
    };
    CreateCustomerComponent.prototype.createCustomer = function () {
        this._http.post('http://localhost:8080/adminApi/createCustomer', this.customer).subscribe(function (response) {
            console.log(response);
        });
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            position: 'center',
            type: 'success',
            title: 'Your Customer has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    };
    CreateCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-customer',
            template: __webpack_require__("./src/app/components/create-customer/create-customer.component.html"),
            styles: [__webpack_require__("./src/app/components/create-customer/create-customer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.html":
/***/ (function(module, exports) {

module.exports = "<table style=\"margin-left: 10px\" class=\"table table-striped table-bordered\">\n    <thead>\n        <tr>\n            <th>Id</th>\n            <th>Name</th>\n            <th>Password</th>\n            <th>Email</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let c of _companies\">\n            <td>{{c.id}}</td>\n            <td>{{c.compName}}</td>\n            <td>{{c.password}}</td>\n            <td>{{c.email}}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllCompaniesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetAllCompaniesComponent = /** @class */ (function () {
    function GetAllCompaniesComponent(_http) {
        this._http = _http;
        this._companies = [];
    }
    GetAllCompaniesComponent.prototype.ngOnInit = function () {
        var self = this;
        this._http.get('http://localhost:8080/adminApi/getAllCompanies')
            .map(function (companyResponse) {
            return companyResponse.json();
        }).subscribe(function (companies) {
            for (var _i = 0, companies_1 = companies; _i < companies_1.length; _i++) {
                var c = companies_1[_i];
                console.log(c);
            }
            self._companies = companies;
        });
    };
    GetAllCompaniesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-get-all-companies',
            template: __webpack_require__("./src/app/components/get-all-companies/get-all-companies.component.html"),
            styles: [__webpack_require__("./src/app/components/get-all-companies/get-all-companies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], GetAllCompaniesComponent);
    return GetAllCompaniesComponent;
}());



/***/ }),

/***/ "./src/app/components/get-all-customers/get-all-customers.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-all-customers/get-all-customers.component.html":
/***/ (function(module, exports) {

module.exports = "<table style=\"margin-left: 10px\" class=\"table table-striped table-bordered\">\n  <thead>\n      <tr>\n          <th>Id</th>\n          <th>Name</th>\n          <th>Password</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let c of _customers\">\n          <td>{{c.id}}</td>\n          <td>{{c.custName}}</td>\n          <td>{{c.password}}</td>\n      </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/components/get-all-customers/get-all-customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllCustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetAllCustomersComponent = /** @class */ (function () {
    function GetAllCustomersComponent(_http) {
        this._http = _http;
        this._customers = [];
    }
    GetAllCustomersComponent.prototype.ngOnInit = function () {
        var self = this;
        this._http.get('http://localhost:8080/adminApi/getAllCustomers')
            .map(function (customerResponse) {
            return customerResponse.json();
        }).subscribe(function (customers) {
            for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
                var c = customers_1[_i];
                console.log(c);
            }
            self._customers = customers;
        });
    };
    GetAllCustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-get-all-customers',
            template: __webpack_require__("./src/app/components/get-all-customers/get-all-customers.component.html"),
            styles: [__webpack_require__("./src/app/components/get-all-customers/get-all-customers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], GetAllCustomersComponent);
    return GetAllCustomersComponent;
}());



/***/ }),

/***/ "./src/app/components/get-company-by-id/get-company-by-id.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-company-by-id/get-company-by-id.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" style=\"margin-left: 20px\">\n  <div class=\"form-group\">\n    <label for=\"companyId\" class=\"control-label col-sm-2\">Get Company By ID</label>\n    <div class=\"col-sm-6\">\n        <input class=\"form-control\" placeholder=\"Insert The Company ID\"\n                type=\"number\" name=\"idtoget\" [(ngModel)] = \"idtoget\" />\n    </div>\n  </div>\n<div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n        <button (click)= \"getCompany()\" type=\"get\" class=\"btn btn-default\">Get <span class=\"glyphicon glyphicon-search\"></span></button>\n    </div>\n</div> \n<table style=\"margin-left: 10px\" class=\"table table-striped table-bordered\">\n        <thead>\n            <tr>\n                <th>Id</th>\n                <th>Name</th>\n                <th>Password</th>\n                <th>Email</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>{{_company.id}}</td>\n                <td>{{_company.compName}}</td>\n                <td>{{_company.password}}</td>\n                <td>{{_company.email}}</td>\n            </tr>\n        </tbody>\n    </table>\n</form>"

/***/ }),

/***/ "./src/app/components/get-company-by-id/get-company-by-id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetCompanyByIdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetCompanyByIdComponent = /** @class */ (function () {
    function GetCompanyByIdComponent(_http) {
        this._http = _http;
    }
    GetCompanyByIdComponent.prototype.ngOnInit = function () {
    };
    GetCompanyByIdComponent.prototype.getCompany = function () {
        // var url = 'http://localhost:8080/adminApi/getCompany/' + this.idtoget;
        var self = this;
        this._http.get('http://localhost:8080/adminApi/getCompany/' + this.idtoget)
            .map(function (companyResponse) {
            return companyResponse.json();
        }).subscribe(function (company) {
            self._company = company;
        });
    };
    GetCompanyByIdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-get-company-by-id',
            template: __webpack_require__("./src/app/components/get-company-by-id/get-company-by-id.component.html"),
            styles: [__webpack_require__("./src/app/components/get-company-by-id/get-company-by-id.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], GetCompanyByIdComponent);
    return GetCompanyByIdComponent;
}());



/***/ }),

/***/ "./src/app/components/get-customer-by-id/get-customer-by-id.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-customer-by-id/get-customer-by-id.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" style=\"margin-left: 20px\">\n  <div class=\"form-group\">\n    <label for=\"customerId\" class=\"control-label col-sm-2\">Customer Id</label>\n    <div class=\"col-sm-6\">\n        <input class=\"form-control\" placeholder=\"Insert The Customer ID\"\n                type=\"number\" name=\"idtoget\" [(ngModel)] = \"idtoget\"/>\n    </div>\n  </div>\n<div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n        <button (click)= \"getCustomer()\" type=\"get\" class=\"btn btn-default\">Get</button>\n    </div>\n</div>\n<table style=\"margin-left: 10px\" class=\"table table-striped table-bordered\">\n    <thead>\n        <tr>\n            <th>Id</th>\n            <th>Name</th>\n            <th>Password</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>{{_customer.id}}</td>\n            <td>{{_customer.custName}}</td>\n            <td>{{_customer.password}}</td>\n        </tr>\n    </tbody>\n</table>\n</form>"

/***/ }),

/***/ "./src/app/components/get-customer-by-id/get-customer-by-id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetCustomerByIdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetCustomerByIdComponent = /** @class */ (function () {
    function GetCustomerByIdComponent(_http) {
        this._http = _http;
    }
    GetCustomerByIdComponent.prototype.getCustomer = function () {
        var url = "http://localhost:8080/adminApi/getCustomer/" + this.idtoget;
        var self = this;
        this._http.get(url)
            .map(function (customerResponse) {
            return customerResponse.json();
        }).subscribe(function (customer) {
            self._customer = customer;
        });
    };
    GetCustomerByIdComponent.prototype.ngOnInit = function () {
    };
    GetCustomerByIdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-get-customer-by-id',
            template: __webpack_require__("./src/app/components/get-customer-by-id/get-customer-by-id.component.html"),
            styles: [__webpack_require__("./src/app/components/get-customer-by-id/get-customer-by-id.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], GetCustomerByIdComponent);
    return GetCustomerByIdComponent;
}());



/***/ }),

/***/ "./src/app/components/remove-company/remove-company.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/remove-company/remove-company.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" style=\"margin-left: 20px\">\n    <div class=\"form-group\">\n      <label for=\"companyId\" class=\"control-label col-sm-2\">Company Id</label>\n      <div class=\"col-sm-6\">\n          <input class=\"form-control\" placeholder=\"Insert Company ID To Remove\"\n                  type=\"number\" name=\"companyId\" [(ngModel)] = \"idtoremove\" />\n      </div>\n    </div>\n<hr>\n    <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n            <button (click)= \"removeCompany()\" type=\"remove\" class=\"btn btn-default\">Remove <span class=\"glyphicon glyphicon-floppy-remove\"></span></button>\n        </div>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/components/remove-company/remove-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Company__ = __webpack_require__("./src/app/components/common/Company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemoveCompanyComponent = /** @class */ (function () {
    // dependancy injection for http object ->will become
    // a member of this class
    function RemoveCompanyComponent(_http) {
        this._http = _http;
        this.company = new __WEBPACK_IMPORTED_MODULE_1__common_Company__["a" /* Company */]();
    }
    RemoveCompanyComponent.prototype.ngOnInit = function () {
    };
    RemoveCompanyComponent.prototype.removeCompany = function () {
        var _this = this;
        var swalWithBootstrapButtons = __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
        });
        swalWithBootstrapButtons({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                var url = 'http://localhost:8080/adminApi/removeCompany/' + _this.idtoremove;
                _this._http.delete(url).subscribe(function (response) {
                    console.log(response);
                });
                swalWithBootstrapButtons('Deleted!', 'Your Company has been deleted.', 'success');
            }
            else if (result.dismiss === __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons('Cancelled', 'Your Company is safe :)', 'error');
            }
        });
    };
    RemoveCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-remove-company',
            template: __webpack_require__("./src/app/components/remove-company/remove-company.component.html"),
            styles: [__webpack_require__("./src/app/components/remove-company/remove-company.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], RemoveCompanyComponent);
    return RemoveCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/remove-customer/remove-customer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/remove-customer/remove-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" style=\"margin-left: 20px\">\n  <div class=\"form-group\">\n      <label for=\"customerId\" class=\"control-label col-sm-2\">Customer Id</label>\n      <div class=\"col-sm-6\">\n          <input class=\"form-control\" placeholder=\"Insert Customer ID To Remove\"\n                  type=\"text\" name=\"customerId\" [(ngModel)] = \"idtoremove\" />\n      </div>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n            <button (click)= \"removeCustomer()\" type=\"remove\" class=\"btn btn-default\">Remove</button>\n        </div>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/components/remove-customer/remove-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Customer__ = __webpack_require__("./src/app/components/common/Customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemoveCustomerComponent = /** @class */ (function () {
    // dependancy injection for http object ->will become
    // a member of this class
    function RemoveCustomerComponent(_http) {
        this._http = _http;
        this.customer = new __WEBPACK_IMPORTED_MODULE_1__common_Customer__["a" /* Customer */]();
    }
    RemoveCustomerComponent.prototype.ngOnInit = function () {
    };
    RemoveCustomerComponent.prototype.removeCustomer = function () {
        var _this = this;
        var swalWithBootstrapButtons = __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
        });
        swalWithBootstrapButtons({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                var url = 'http://localhost:8080/adminApi/removeCustomer/' + _this.idtoremove;
                _this._http.delete(url).subscribe(function (response) {
                    console.log(response);
                });
                swalWithBootstrapButtons('Deleted!', 'Your Customer has been deleted.', 'success');
            }
            else if (result.dismiss === __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons('Cancelled', 'Your Customer is safe :)', 'error');
            }
        });
    };
    RemoveCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-remove-customer',
            template: __webpack_require__("./src/app/components/remove-customer/remove-customer.component.html"),
            styles: [__webpack_require__("./src/app/components/remove-customer/remove-customer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], RemoveCustomerComponent);
    return RemoveCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/update-company/update-company.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-company/update-company.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" style=\"margin-left: 20px\">\n\n  <div class=\"form-group\">\n    <label for=\"companyId\" class=\"control-label col-sm-2\">Company Id</label>\n    <div class=\"col-sm-6\">\n        <input class=\"form-control\" placeholder=\"Insert Company ID To Update\"\n        [(ngModel)] = \"company.id\" \n                type=\"text\" id=\"companyId\" name=\"companyId\"/>\n    </div>\n  </div>\n\n    <div class=\"form-group\">\n      <label for=\"inputPassword\" class=\"control-label col-sm-2\">Password</label>\n      <div class=\"col-sm-6\">\n          <input class=\"form-control\" placeholder=\"Insert New Password\"\n          [(ngModel)] = \"company.password\"\n                  type=\"password\" id=\"inputPassword\" name=\"password\"/>\n      </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputEmail\" class=\"control-label col-sm-2\">Email</label>\n    <div class=\"col-sm-6\">\n        <input class=\"form-control\" placeholder=\"Insert Your Email\"\n        [(ngModel)] = \"company.email\"\n                type=\"text\" id=\"inputEmail\" name=\"email\"/>\n    </div>\n</div>\n\n    <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n            <button (click)=\"updateCompany()\" class=\"btn btn-default\">Update Company <span class=\"glyphicon glyphicon-floppy-saved\"></span></button>\n        </div>\n    </div>\n\n    <pre>\n        {{company | json}}\n    </pre>\n  </form>"

/***/ }),

/***/ "./src/app/components/update-company/update-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Company__ = __webpack_require__("./src/app/components/common/Company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateCompanyComponent = /** @class */ (function () {
    // dependancy injection for http object ->will become
    // a member of this class
    function UpdateCompanyComponent(_http) {
        this._http = _http;
        this.company = new __WEBPACK_IMPORTED_MODULE_1__common_Company__["a" /* Company */]();
    }
    UpdateCompanyComponent.prototype.ngOnInit = function () {
    };
    UpdateCompanyComponent.prototype.updateCompany = function () {
        this._http.put('http://localhost:8080/adminApi/updateCompany', this.company).subscribe(function (response) {
            console.log(response);
        });
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            position: 'center',
            type: 'success',
            title: 'Success!',
            text: 'Your Company Has Been Updated',
            showConfirmButton: false,
            timer: 1800
        });
    };
    UpdateCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-company',
            template: __webpack_require__("./src/app/components/update-company/update-company.component.html"),
            styles: [__webpack_require__("./src/app/components/update-company/update-company.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], UpdateCompanyComponent);
    return UpdateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/update-customer/update-customer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-customer/update-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" style=\"margin-left: 20px\">\n  <div class=\"form-group\">\n    <label for=\"customerId\" class=\"control-label col-sm-2\">Customer Id</label>\n    <div class=\"col-sm-6\">\n        <input class=\"form-control\" placeholder=\"Insert Customer ID To Update\"\n        [(ngModel)] = \"customer.id\" \n                type=\"text\" id=\"customerId\" name=\"customerId\" />\n    </div>\n  </div>\n<div class=\"form-group\">\n  <label for=\"inputPassword\" class=\"control-label col-sm-2\">Password</label>\n  <div class=\"col-sm-6\">\n      <input class=\"form-control\" placeholder=\"Insert New Password\"\n      [(ngModel)] = \"customer.password\"\n              type=\"password\" id=\"inputPassword\" name=\"password\"/>\n  </div>\n</div>\n<div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n        <button (click)=\"updateCustomer()\" type=\"updatae\" class=\"btn btn-default\">Update</button>\n    </div>\n</div>\n<pre>\n  {{customer | json}}\n</pre>\n</form>"

/***/ }),

/***/ "./src/app/components/update-customer/update-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Customer__ = __webpack_require__("./src/app/components/common/Customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateCustomerComponent = /** @class */ (function () {
    // dependancy injection for http object ->will become
    // a member of this class
    function UpdateCustomerComponent(_http) {
        this._http = _http;
        this.customer = new __WEBPACK_IMPORTED_MODULE_1__common_Customer__["a" /* Customer */]();
    }
    UpdateCustomerComponent.prototype.ngOnInit = function () {
    };
    UpdateCustomerComponent.prototype.updateCustomer = function () {
        this._http.put('http://localhost:8080/adminApi/updateCustomer', this.customer).subscribe(function (response) {
            console.log(response);
        });
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            position: 'center',
            type: 'success',
            title: 'Success!',
            text: 'Your Customer Has Been Updated',
            showConfirmButton: false,
            timer: 1800
        });
    };
    UpdateCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-customer',
            template: __webpack_require__("./src/app/components/update-customer/update-customer.component.html"),
            styles: [__webpack_require__("./src/app/components/update-customer/update-customer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], UpdateCustomerComponent);
    return UpdateCustomerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-cockpit\n  (srvCreated)=\"onServerAdded($event)\"\n  (blpCreated)=\"onBlueprintAdded($event)\"></app-cockpit>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <app-test-dir></app-test-dir>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <app-server-element \n      *ngFor=\"let serverElement of serverElements\"\n      [srvElement]=\"serverElement\">\n        <p>\n          <strong *ngIf=\"serverElement.type === 'server'\" style=\"color: red\">{{ serverElement.content }}</strong>\n          <em *ngIf=\"serverElement.type === 'blueprint'\">{{ serverElement.content }}</em>\n        </p>\n      </app-server-element>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cockpit/cockpit.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cockpit/cockpit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <p style=\"color: darkgreen\"><em>Add new Servers or blueprints!</em></p>\n      <label>Server Name</label>\n      <input type=\"text\" class=\"form-control\" #serverNameInput>\n      <label>Server Content</label>\n      <input type=\"text\" class=\"form-control\" #serverContentInput>\n      <br>\n      <button\n        class=\"btn btn-primary\"\n        (click)=\"onAddServer(serverNameInput)\">Add Server</button> &nbsp;\n      <button\n        class=\"btn btn-primary\"\n        (click)=\"onAddBlueprint(serverNameInput)\">Add Server Blueprint</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/server-element/server-element.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/server-element/server-element.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">{{ element.name }}</div>\n    <div class=\"panel-body\">\n        <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test-dir/test-dir.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-dir/test-dir.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button class=\"btn btn-success\" \n(click)=\"isDisabled = !isDisabled\">Toggle directive styles</button> -->\n\n<button class=\"btn btn-success\" \n(click)=\"onToggleChange()\">Toggle directive styles</button>\n<hr>\n<div *appUnless=\"isDisabled\">\n    <p [ngClass]=\"'myColor'\" >Colored using,1 ngClass</p>\n    <p [ngClass]=\"{myColor: true}\" >Colored using,2 ngClass</p>\n    <div [ngStyle]=\"{'color': 'blue', 'font-size': '24px', 'font-weight': 'bold'}\">\n        style using ngStyle\n    </div>\n    <div appBasicHighlight>\n        Styled using basic highlight directive\n    </div>\n    <div [appBetterHighlight]=\"'lightgreen'\" [defaultColor]=\"'yellow'\">\n        Styled using Better highlight directive\n    </div>\n</div>\n\n<div [ngSwitch]=\"value\">\n    <label *ngSwitchCase=\"1\">ngSwitch value is 1, {{value}} times Toggle is pressed</label>\n    <label *ngSwitchCase=\"2\">ngSwitch value is 2, {{value}} times Toggle is pressed</label>\n    <label *ngSwitchCase=\"3\">ngSwitch value is 3, {{value}} times Toggle is pressed</label>\n    <label *ngSwitchDefault>ngSwitch default value is 13, {{value}} times Toggle is pressed</label>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 30px;\n}\n\np {\n  color: blue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5wIHtcbiAgY29sb3I6IGJsdWU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.serverElements = [];
    }
    AppComponent.prototype.onServerAdded = function (eventData) {
        this.serverElements.push({
            type: 'server',
            name: eventData.ServerName,
            content: eventData.ServerContent
        });
    };
    AppComponent.prototype.onBlueprintAdded = function (eventData) {
        this.serverElements.push({
            type: 'blueprint',
            name: eventData.ServerName,
            content: eventData.ServerContent
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var cockpit_component_1 = __webpack_require__(/*! ./cockpit/cockpit.component */ "./src/app/cockpit/cockpit.component.ts");
var server_element_component_1 = __webpack_require__(/*! ./server-element/server-element.component */ "./src/app/server-element/server-element.component.ts");
var test_dir_component_1 = __webpack_require__(/*! ./test-dir/test-dir.component */ "./src/app/test-dir/test-dir.component.ts");
var basic_highlight_directive_1 = __webpack_require__(/*! ./basic-highlight/basic-highlight-directive */ "./src/app/basic-highlight/basic-highlight-directive.ts");
var better_highlight_directive_1 = __webpack_require__(/*! ./better-highlight/better-highlight.directive */ "./src/app/better-highlight/better-highlight.directive.ts");
var unless_directive_1 = __webpack_require__(/*! ./unless/unless.directive */ "./src/app/unless/unless.directive.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                cockpit_component_1.CockpitComponent,
                server_element_component_1.ServerElementComponent,
                test_dir_component_1.TestDirComponent,
                basic_highlight_directive_1.BasicHighlightDirective,
                better_highlight_directive_1.BetterHighlightDirective,
                unless_directive_1.UnlessDirective
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/basic-highlight/basic-highlight-directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/basic-highlight/basic-highlight-directive.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var BasicHighlightDirective = /** @class */ (function () {
    function BasicHighlightDirective(elementRef) {
        this.elementRef = elementRef;
    }
    BasicHighlightDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    };
    BasicHighlightDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    BasicHighlightDirective = __decorate([
        core_1.Directive({
            selector: '[appBasicHighlight]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], BasicHighlightDirective);
    return BasicHighlightDirective;
}());
exports.BasicHighlightDirective = BasicHighlightDirective;


/***/ }),

/***/ "./src/app/better-highlight/better-highlight.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/better-highlight/better-highlight.directive.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var BetterHighlightDirective = /** @class */ (function () {
    function BetterHighlightDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.defaultColor = 'transparent';
    }
    BetterHighlightDirective.prototype.ngOnInit = function () {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',
        // 'yellow');
        this.bgColor = this.defaultColor;
    };
    BetterHighlightDirective.prototype.mouseOver = function (eventData) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',
        // 'lightgreen');
        this.bgColor = this.highlightColor;
    };
    BetterHighlightDirective.prototype.mouseLeave = function (eventData) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',
        // 'transparent');
        this.bgColor = this.defaultColor;
    };
    BetterHighlightDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_1.Renderer2 }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BetterHighlightDirective.prototype, "defaultColor", void 0);
    __decorate([
        core_1.Input('appBetterHighlight'),
        __metadata("design:type", String)
    ], BetterHighlightDirective.prototype, "highlightColor", void 0);
    __decorate([
        core_1.HostBinding('style.backgroundColor'),
        __metadata("design:type", String)
    ], BetterHighlightDirective.prototype, "bgColor", void 0);
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BetterHighlightDirective.prototype, "mouseOver", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BetterHighlightDirective.prototype, "mouseLeave", null);
    BetterHighlightDirective = __decorate([
        core_1.Directive({
            selector: '[appBetterHighlight]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], BetterHighlightDirective);
    return BetterHighlightDirective;
}());
exports.BetterHighlightDirective = BetterHighlightDirective;


/***/ }),

/***/ "./src/app/cockpit/cockpit.component.scss":
/*!************************************************!*\
  !*** ./src/app/cockpit/cockpit.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: brown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvQW5ndWxhci1zdHVkeS9zcmMvYXBwL2NvY2twaXQvY29ja3BpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29ja3BpdC9jb2NrcGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29ja3BpdC9jb2NrcGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XG4gICAgY29sb3I6IGJyb3duO1xufSIsImxhYmVsIHtcbiAgY29sb3I6IGJyb3duO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cockpit/cockpit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cockpit/cockpit.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var CockpitComponent = /** @class */ (function () {
    function CockpitComponent() {
        this.serverCreated = new core_1.EventEmitter();
        this.blueprintCreated = new core_1.EventEmitter();
    }
    CockpitComponent.prototype.ngOnInit = function () {
    };
    CockpitComponent.prototype.onAddServer = function (serverInput) {
        this.serverCreated.emit({
            ServerName: serverInput.value,
            ServerContent: this.serverContentInput.nativeElement.value
        });
    };
    CockpitComponent.prototype.onAddBlueprint = function (serverInput) {
        this.blueprintCreated.emit({
            ServerName: serverInput.value,
            ServerContent: this.serverContentInput.nativeElement.value
        });
    };
    __decorate([
        core_1.Output('srvCreated'),
        __metadata("design:type", Object)
    ], CockpitComponent.prototype, "serverCreated", void 0);
    __decorate([
        core_1.Output('blpCreated'),
        __metadata("design:type", Object)
    ], CockpitComponent.prototype, "blueprintCreated", void 0);
    __decorate([
        core_1.ViewChild('serverContentInput', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], CockpitComponent.prototype, "serverContentInput", void 0);
    CockpitComponent = __decorate([
        core_1.Component({
            selector: 'app-cockpit',
            template: __webpack_require__(/*! raw-loader!./cockpit.component.html */ "./node_modules/raw-loader/index.js!./src/app/cockpit/cockpit.component.html"),
            styles: [__webpack_require__(/*! ./cockpit.component.scss */ "./src/app/cockpit/cockpit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CockpitComponent);
    return CockpitComponent;
}());
exports.CockpitComponent = CockpitComponent;


/***/ }),

/***/ "./src/app/server-element/server-element.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/server-element/server-element.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvQW5ndWxhci1zdHVkeS9zcmMvYXBwL3NlcnZlci1lbGVtZW50L3NlcnZlci1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2ZXItZWxlbWVudC9zZXJ2ZXItZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlci1lbGVtZW50L3NlcnZlci1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgY29sb3I6IGJsdWU7XG4gIH0iLCJwIHtcbiAgY29sb3I6IGJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/server-element/server-element.component.ts":
/*!************************************************************!*\
  !*** ./src/app/server-element/server-element.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ServerElementComponent = /** @class */ (function () {
    function ServerElementComponent() {
    }
    ServerElementComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('srvElement'),
        __metadata("design:type", Object)
    ], ServerElementComponent.prototype, "element", void 0);
    ServerElementComponent = __decorate([
        core_1.Component({
            selector: 'app-server-element',
            template: __webpack_require__(/*! raw-loader!./server-element.component.html */ "./node_modules/raw-loader/index.js!./src/app/server-element/server-element.component.html"),
            styles: [__webpack_require__(/*! ./server-element.component.scss */ "./src/app/server-element/server-element.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServerElementComponent);
    return ServerElementComponent;
}());
exports.ServerElementComponent = ServerElementComponent;


/***/ }),

/***/ "./src/app/test-dir/test-dir.component.scss":
/*!**************************************************!*\
  !*** ./src/app/test-dir/test-dir.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myColor {\n  color: green;\n}\n\nlabel {\n  cursor: pointer;\n  background-color: limegreen;\n  font-weight: bold;\n  color: black;\n  font-family: Verdana, Arial, Helvetica, sans-serif;\n  display: block;\n}\n\nlabel:hover {\n  background-color: transparent;\n  color: darkgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvQW5ndWxhci1zdHVkeS9zcmMvYXBwL3Rlc3QtZGlyL3Rlc3QtZGlyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXN0LWRpci90ZXN0LWRpci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBR0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdGVzdC1kaXIvdGVzdC1kaXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlDb2xvcntcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbmxhYmVse1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIC8vZm9udC1zaXplOiB4eC1zbWFsbDtcbiAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5sYWJlbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogZGFya2dyZWVuO1xufSIsIi5teUNvbG9yIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG5sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmxhYmVsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBkYXJrZ3JlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/test-dir/test-dir.component.ts":
/*!************************************************!*\
  !*** ./src/app/test-dir/test-dir.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var TestDirComponent = /** @class */ (function () {
    function TestDirComponent() {
        this.isDisabled = false;
        this.value = 0;
    }
    TestDirComponent.prototype.ngOnInit = function () {
    };
    TestDirComponent.prototype.onToggleChange = function () {
        this.isDisabled = !this.isDisabled;
        this.value++;
    };
    TestDirComponent = __decorate([
        core_1.Component({
            selector: 'app-test-dir',
            template: __webpack_require__(/*! raw-loader!./test-dir.component.html */ "./node_modules/raw-loader/index.js!./src/app/test-dir/test-dir.component.html"),
            styles: [__webpack_require__(/*! ./test-dir.component.scss */ "./src/app/test-dir/test-dir.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestDirComponent);
    return TestDirComponent;
}());
exports.TestDirComponent = TestDirComponent;


/***/ }),

/***/ "./src/app/unless/unless.directive.ts":
/*!********************************************!*\
  !*** ./src/app/unless/unless.directive.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var UnlessDirective = /** @class */ (function () {
    function UnlessDirective(templateRef, vcRef) {
        this.templateRef = templateRef;
        this.vcRef = vcRef;
    }
    Object.defineProperty(UnlessDirective.prototype, "appUnless", {
        set: function (condition) {
            if (!condition) {
                this.vcRef.createEmbeddedView(this.templateRef);
            }
            else {
                this.vcRef.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    UnlessDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef },
        { type: core_1.ViewContainerRef }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UnlessDirective.prototype, "appUnless", null);
    UnlessDirective = __decorate([
        core_1.Directive({
            selector: '[appUnless]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef, core_1.ViewContainerRef])
    ], UnlessDirective);
    return UnlessDirective;
}());
exports.UnlessDirective = UnlessDirective;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspace/Angular-study/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
"use strict";
// Note: This is Root Module
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// For NgModel Binding
var forms_1 = require("@angular/forms");
// For Http
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
// import { AppComponent } from './app.component.js'; // عرف نیست
// import { AppComponent } from './app.component.ts'; // Error!
// import { PersonPipe } from './app.component'; // For Pipe
// import { DtxSortPipe } from './app.component'; // For Pipe
// import { HomeComponent } from './app.component'; // For Routing
// import { AboutComponent } from './app.component'; // For Routing
// import { ContactComponent } from './app.component'; // For Routing
// import { PageNotFoundComponent } from './app.component'; // For Routing
// import { PersonDetailComponent } from './app.component'; // For Routing
// import { ChildComponent } from './app.component';
// import { HightlightDirective } from './app.component';
// import { DtxNumericSelectComponent } from './app.component';
// import { enableProdMode } from '@angular/core';
// enableProdMode();
// For Routing
// const appRoutes: Routes = [
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   {
//     path: 'about',
//     component: AboutComponent
//   },
// ];
// // For Routing
// const appRoutes: Routes = [
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   {
//     path: 'about',
//     component: AboutComponent
//   },
//   {
//     path: 'contact',
//     component: ContactComponent
//   },
//   {
//     path: 'person/:id',
//     component: PersonDetailComponent
//   },
//   // {
//   //   path: 'people',
//   //   component: PersonListComponent,
//   //   data:
//   //   {
//   //     title: 'People List'
//   //   }
//   // },
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },
//   {
//     path: '**',
//     component: PageNotFoundComponent,
//   },
// ];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            http_1.JsonpModule,
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
        ],
        declarations: [
            app_component_1.AppComponent,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
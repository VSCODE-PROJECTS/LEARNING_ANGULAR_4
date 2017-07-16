// Note: This is Root Module

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// For NgModel Binding
import { FormsModule } from '@angular/forms';

// For Routing
import { RouterModule, Routes } from '@angular/router';

// For Http
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
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

@NgModule({
  imports:
  [
    HttpModule,
    JsonpModule,
    FormsModule, // For NgModel Binding
    BrowserModule,
    // RouterModule.forRoot(appRoutes), // For Routing
  ],

  declarations:
  [
    AppComponent,

    // PersonPipe, // For Pipe
    // DtxSortPipe, // For Pipe

    // HomeComponent, // For Routing
    // AboutComponent, // For Routing

    // ContactComponent, // For Routing
    // PageNotFoundComponent, // For Routing
    // PersonDetailComponent, // For Routing

    // ChildComponent,
    // HightlightDirective,
    // DtxNumericSelectComponent,
  ],

  bootstrap: [AppComponent]
})
export class AppModule {

}

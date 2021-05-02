import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../app/_helpers/error.interceptor';
import { JwtInterceptor } from '../app/_helpers/jwt.interceptor';

import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { DeshbordComponent } from './deshbord/deshbord.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { LayoutComponent } from './auth/layout.component';
import { AlertComponent } from './_components/alert.component';
import { AccountModule } from './auth/account.module'



const modules = [
  BrowserModule,
  ReactiveFormsModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,
  HttpClientModule,


]


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HomeComponent,
    DeshbordComponent,
    // LayoutComponent,
    AlertComponent,
  ],
  imports: [...modules, BrowserAnimationsModule],


  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent, DialogView } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from './material/material.module';




const modules = [
  BrowserModule,
  ReactiveFormsModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,


]




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DialogView,
    SignupComponent,    
  ],
  imports: [...modules],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

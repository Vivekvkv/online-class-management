import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';




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
  ],
  imports: [...modules],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

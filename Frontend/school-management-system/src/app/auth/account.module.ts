import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule  } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
   
  ]
})
export  class AccountModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '@app/register/register.component';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path:'', component:LayoutComponent,
    children:[
      {path: 'login',component:LoginComponent },
      {path: 'register', component:RegisterComponent},
    ]
    
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

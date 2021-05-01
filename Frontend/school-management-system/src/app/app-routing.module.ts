import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { DeshbordComponent } from './deshbord/deshbord.component';
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { AuthGuard } from './_helpers/auth.guard';

import { HomeComponent } from './home/home.component';

import { RegisterComponent, DialogView } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import {AccountRoutingModule } from './auth/account-routing.module'

const accountModule = () => import('./auth/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'dashboard', component: DeshbordComponent, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },

  {path:'signup',component:SignupComponent},
  // {path:'register', component:RegisterComponent},
  { path: '**', redirectTo: '' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent  = [RegisterComponent,SignupComponent,DialogView,

];

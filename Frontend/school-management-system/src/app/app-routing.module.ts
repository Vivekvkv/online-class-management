import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent, DialogView } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component:HomeComponent},
  { path: 'dashboard', component: DeshbordComponent, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
=======
>>>>>>> 8fe9b3c72a1af45ad9c190f0c0ff7f224b0b67f5

  {path:'login',component:LoginComponent, 
  // children:[{
  //   path: 'register', component:RegisterComponent}
  // ]
},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
<<<<<<< HEAD
  // {path:'register', component:RegisterComponent},
  { path: '**', redirectTo: '' }
=======
  {path:'register', component:RegisterComponent},
>>>>>>> 8fe9b3c72a1af45ad9c190f0c0ff7f224b0b67f5

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent  = [RegisterComponent,LoginComponent,SignupComponent,DialogView,

];

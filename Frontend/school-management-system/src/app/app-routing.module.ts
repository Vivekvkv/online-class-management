import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent, DialogView } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path:'login',component:LoginComponent, 
  // children:[{
  //   path: 'register', component:RegisterComponent}
  // ]
},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'register', component:RegisterComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent  = [RegisterComponent,LoginComponent,SignupComponent,DialogView,

];

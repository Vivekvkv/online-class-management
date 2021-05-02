import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router  } from '@angular/router';
import { first } from 'rxjs/operators';
import { RegisterComponent , DialogView} from '../register/register.component';
import { AuthService} from '../shared/auth.service';

import { FormGroup,FormControl, Validators, AsyncValidatorFn, ValidationErrors, ValidatorFn,
  AbstractControl, 
  FormBuilder} from '@angular/forms';
 import { map } from 'rxjs/operators'
import { DateAdapter } from '@angular/material/core';
import { MatFormField} from '@angular/material/form-field';
import { Subscriber, Observable } from 'rxjs';
import { Signup } from'src/app/shared/signup';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  hide = true;
  loginForm:any=FormGroup;
  invalidlogin:boolean =false; 
  message:any;  
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar, 
              private formBuilder:FormBuilder, 
           
              public _dialog:MatDialog, 
              public authService:AuthService,
              private router:Router,
              public service:AuthService
             
              ) {
              
              }
  
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.compose([Validators.required])],
      password:['',Validators.required]
    })
  
     
    

   }
  

  // openSnackBar() {
  //   this._snackBar.openFromComponent(RegisterComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }

  // openDialog(){
  //   this._dialog.open(RegisterComponent)
  //   const dialogRef = this._dialog.open(RegisterComponent);
  //   var data = dialogRef.close()
    
  // }

    register(){
    
      this.router.navigate(['register'], );
    
    }

    
    onSubmit(){
      console.log(this.loginForm.value);
      if (this.loginForm.invalid){
        return console.log("There is some Validation Error!!!!.");
      }
      const loginData = {
        username:  this.loginForm.controls.username.value,
        password:  this.loginForm.controls.password.value
      };
      this.service.login(loginData).subscribe((data:any)=>{
        this.message = data.message;
        if (data.token){
          window.localStorage.setItem('token',data.token);

        }
        else {
          this.invalidlogin=true;
          alert(data.message);
        }
        
      });


    
    }

}



function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}


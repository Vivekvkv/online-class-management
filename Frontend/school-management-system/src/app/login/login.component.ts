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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  hide = true;
  loginForm:any=FormGroup;
  invalidlogin:boolean =false; 
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar, 
              private formBuilder:FormBuilder, 
           
              public _dialog:MatDialog, 
              public authService:AuthService,
              private router:Router,
              public service:AuthService
             
              ) {}
  
    ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.compose([Validators.required])],
      password:['',Validators.required]
     })
     }
  

   openSnackBar() {
    this._snackBar.openFromComponent(RegisterComponent, {
      duration: this.durationInSeconds * 1000,
    });
    }

    openDialog(){
    this._dialog.open(RegisterComponent)
    const dialogRef = this._dialog.open(RegisterComponent);
    var data = dialogRef.close()
    
     }

    register(){
    
      this.router.navigate(['register'], );
    
    }
    onSubmit(){
      this.service.register(this.service.form.value).subscribe(
        data => console.log('sucesss', data),
        error => console.log('error!', error),

      
    
      }

}




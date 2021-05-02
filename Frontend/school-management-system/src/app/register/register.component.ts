import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, AsyncValidatorFn, ValidationErrors, ValidatorFn,
  AbstractControl } from '@angular/forms';
import { Router, Navigation } from'@angular/router'
 import { map } from 'rxjs/operators'
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField} from '@angular/material/form-field';
import { Subscriber, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';
import { Signup } from'src/app/shared/signup';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  template: `
  <div class="login-wrapper" fxLayout="row" fxLayoutAlign="center center">
    <mat-card class="box">
      <mat-card-header>
        <mat-card-title>Register</mat-card-title>
      </mat-card-header>
  
      <form [formGroup]="service.form" (ngSubmit)='onSubmit()' novalidate >
        <mat-card-content>
        <mat-form-field class="example-full-width">
            <input matInput placeholder="Username" formControlName="username"  required>
            <mat-error>Please Fill User Name</mat-error>
          </mat-form-field>
  
          <mat-form-field class="example-full-width">
            <input matInput placeholder="First Name" formControlName="first_name"  required>
            <mat-error>Please Fill First Name</mat-error>
          </mat-form-field>
  
          <mat-form-field class="example-full-width">
            <input matInput placeholder="Last Name" formControlName="last_name" required>
            <mat-error>Please Fill Last Name</mat-error>
          </mat-form-field>
          
          <mat-form-field class="example-full-width">
            <input matInput placeholder="email"  formControlName="email" required>
            <mat-error *ngIf="service.form.controls['email'].errors?.required">This field is required</mat-error>
            <mat-error *ngIf="service.form.controls['email'].errors?.email">Please Enter Valid Email</mat-error>
         
          </mat-form-field>
  
          <mat-form-field class="example-full-width">
            <input matInput placeholder="Password" [type]="hide ? 'password':'text'" formControlName='password' required>
            <mat-error *ngIf="service.form.controls['password'].errors?.required">This field is required</mat-error>
            <mat-error *ngIf="service.form.controls['password'].errors?.minlength">Minimum 8 cherecter need to create password</mat-error>
    
          </mat-form-field>
  
          <mat-form-field class="example-full-width">
            <mat-label>Choose as role...</mat-label>
            <mat-select formControName='roles'>
              <mat-option  [value]="roles" *ngFor="let roles of Roles">{{roles}}
              </mat-option>
            </mat-select>
          </mat-form-field>
  
        </mat-card-content>
  
        <button mat-stroked-button color="accent" [disabled]="service.form.invalid" class="btn-block">Register</button>
  
      </form>


    </mat-card>
  </div>
  
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ravi:string="123";
  constructor(private dialog:MatDialog, 
              public service:AuthService, 
              private _snackBar: MatSnackBar,
              private router:Router) { }

  ngOnInit(): void {
    
  }

  Roles: any = ['Admin', 'Department', 'Faculty','Student'];
  hide = true;
  get  (){
    return this.service.form.controls;
  }

  loading = false;
    submitted = false;
    get f() { return this.service.form.controls; }

  onSubmit(){
    this.submitted = true;

    if (this.service.form.invalid){
      return;
    }

    this.loading = true;
    this.service.register(this.service.form.value)
    .pipe(first()).subscribe({
      next: () => {
          this._snackBar.open('Registration Sucessfull!!', '',{
            duration:5000, horizontalPosition:this.horizontalPosition, 
            verticalPosition:this.verticalPosition,
          });
          this.router.navigate(['../login'])
      },
      error:error=>{
        this._snackBar.open("Some Network Issue");
        this.loading= false;
      }
    });
   
  }
  // customAsyncValidator():AsyncValidatorFn{ 
  //   return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>{
  //     return this.service.isExist(control.value).pipe(
  //       map( res => {
           
  //         return null;
  //                   })
  //     );
                      
  //   }

  //   }
  
  
    

  }



@Component({
  selector:'dialog-view',
  templateUrl:'./dialog-view.html',
  styleUrls: ['./register.component.css']
})

export class DialogView implements OnInit {
  myForm:any = FormGroup;
  hide = true;
  constructor(public service:AuthService) { }

  ngOnInit() {

    this.myForm = new FormGroup({
        'firstName': new FormControl('', Validators.required)
    });
    

  }
  Roles: any = ['Admin', 'Department', 'Faculty','Student'];





  
}

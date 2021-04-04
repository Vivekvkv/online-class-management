import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField} from '@angular/material/form-field';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  template: `
  <div class="login-wrapper" fxLayout="row" fxLayoutAlign="center center">
    <mat-card class="box">
      <mat-card-header>
        <mat-card-title>Register</mat-card-title>
      </mat-card-header>
  
      <form [formGroup]="service.form">
        <mat-card-content>
          <mat-form-field class="example-full-width">
            <input matInput placeholder="First Name" formControlName="firstName" ngModel required>
            <mat-error>Please Fill First Name</mat-error>
          </mat-form-field>
  
          <mat-form-field class="example-full-width">
            <input matInput placeholder="Last Name" formControlName="lastName" ngModel required>
            <mat-error>Please Fill Last Name</mat-error>
          </mat-form-field>
          
          <mat-form-field class="example-full-width">
            <input matInput placeholder="Email"  formControlName="email" required>
            <mat-error *ngIf="service.form.controls['email'].errors?.required">This field is required</mat-error>
            <mat-error *ngIf="service.form.controls['email'].errors?.email">Please Enter Valid Email</mat-error>
         
          </mat-form-field>
  
          <mat-form-field class="example-full-width">
            <input matInput placeholder="Password" [type]="hide ? 'password':'text'" formControlName='password' required>
            <mat-error *ngIf="service.form.controls['password'].errors?.required">This field is required</mat-error>
            <mat-error *ngIf="service.form.controls['password'].errors?.minlength">Minimum 8 cherecter need to create password</mat-error>
    
          </mat-form-field>
  
          <mat-form-field class="example-full-width">
            <mat-label>Choose a role...</mat-label>
            <mat-select>
              <mat-option [value]="roles" *ngFor="let roles of Roles">{{roles}}
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
  ravi:string="123";
  constructor(private dialog:MatDialog, public service:AuthService) { }

  ngOnInit(): void {
  }

  Roles: any = ['Admin', 'Department', 'Faculty','Student'];
  hide = true;

    

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

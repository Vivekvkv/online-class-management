import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '@app/_services/auth.service';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { AlertService } from '@app/_services/alert.service';

@Component({  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  form!: FormGroup;
  loading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
  private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });  }
  get f() { return this.form.controls; }

  onSubmit(){
    
    this.submitted = true;
    // this.alertService.clear();

    if (this.form.invalid) {
      return;
  }
  this.loading = true;
  this.authService.login(this.f.username.value, this.f.password.value)
  .pipe(first())
  .subscribe({
    next:() => {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate(returnUrl)
      this._snackBar.open("User Succesfully LogON!!!!")
    },
    error:error=>{
      
      this.alertService.error(error);
      this.loading = false;
    //   this._snackBar.open("User email or password is Wrong!!!","",{
    // duration:900,
    // horizontalPosition: this.horizontalPosition,
    //   verticalPosition: this.verticalPosition,
    //   });
    }
  });

  }

}

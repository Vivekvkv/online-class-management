import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  hide = true;
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) {}
  

  openSnackBar() {
    this._snackBar.openFromComponent(RegisterComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'app-login',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class LoginComponeny {}




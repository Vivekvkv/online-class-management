import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RegisterComponent , DialogView} from '../register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  hide = true;
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar, public _dialog:MatDialog) {}
  

  openSnackBar() {
    this._snackBar.openFromComponent(RegisterComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openDialog(){
    this._dialog.open(RegisterComponent)
    const dialogRef = this._dialog.open(DialogView);
    var data = dialogRef.close()
    
    }
}






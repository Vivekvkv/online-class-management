import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router  } from '@angular/router';
import { first } from 'rxjs/operators';
import { RegisterComponent , DialogView} from '../register/register.component';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  hide = true;
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar, 
              public _dialog:MatDialog, 
              public authService:AuthService,
              private router:Router
              ) {}
  

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
      // this.authService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
      //   date => {
      //     console.log(data);
      //   }
      // )vigate(['register'])
      this.router.navigate(['register'], );
    
    }
}






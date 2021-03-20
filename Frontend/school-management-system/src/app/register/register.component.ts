import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField} from '@angular/material/form-field';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  template: `
   <h1>Hello</h1>
<div>
  <button mat-raised-button (click)="openDialog()">Signup</button>

  </div>
  
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ravi:string="123";
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){

    const dialogRef = this.dialog.open(DialogView);
    var data = dialogRef.afterClosed().subscribe(() => this.ravi);
    console.log(data)
    
    }
    

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
  email = new FormControl('',[Validators.required])
  
  getErrorMessage(){
    if(this.email.hasError('required'))
    {
      return "You must Enter Email Addres!!";
    }
    return this.email.hasError('email') ? 'Enter valid Email' : '';
  }
}
sonu(){

  return"Tere is git error ";
}
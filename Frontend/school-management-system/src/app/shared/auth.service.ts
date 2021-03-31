import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  form:FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    role: new FormControl('')

  });

  initializeFormGroup(){
    this.form.setValue({
      $key:null,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: '',
     
    })
  }



}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { from, Observable, BehaviorSubject } from 'rxjs';
import { Signup, User } from'src/app/shared/signup';

const httpOptions = {
  Headers: new HttpHeaders({
    'content-Type':'application/json'
  })
  
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string="http://127.0.0.1:8000/accounts/login/";
 
 
 
  // private userSubject: BehaviorSubject<User>;
  //   public user: Observable<User>;
  

  constructor(private _http:HttpClient,
                private _route:Router,
    ) {
      // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(key*()));
      // this.user = this.userSubject.asObservable();
     }

  //   public get userValue(): User {
  //     return this.userSubject.value;
  // }
 

 
 
  form :FormGroup = new FormGroup({
    $key: new FormControl(null),
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    username:new FormControl('',[Validators.required])

  });

  // #Login Form 
  loginForm:FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
      $key:null,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      username: '',
     
    })
  }

  api_url:string ='http://127.0.0.1:8000/accounts/register/';
 


      // #Login FUNCTINALITY
      // login(username: String, password:String){
      //   return this.http.post<any>(this.api_url + `account/api/auth/`, { username, password }, httpOptions).pipe(
      //     map(user => {
      //       if (user){
      //         localStorage.setItem("currentUser", JSON.stringify(user))
      //       }
      //       return user;

      //     })
      //   );
      // }
      
  register(Signup: Signup){
    const headers = { 'content-type': 'application/json'}  

    return this._http.post(this.api_url, Signup, {'headers':headers});
     

     
  }
    private getUrl(route:string){
      return this.api_url+ route;
    }

    // isExist(email:string):Observable<string>{
    //   return this._http.post<string>(this.getUrl('isExist'),{email})
    // }

  }


  

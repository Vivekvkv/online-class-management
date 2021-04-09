import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { from, Observable } from 'rxjs';
import { Signup } from'src/app/shared/signup';
import { LoginComponent } from '../login/login.component';

const httpOptions = {
  Headers: new HttpHeaders({
    'content-Type':'application/json'
  })
  
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string="http://127.0.0.1:8000/";
  login(loginData: { username: any; password: any; }):Observable<Response> {
    
    return this._http.post<Response>(this.baseUrl,loginData)
    
  }

  constructor(private _http:HttpClient, ) { }

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

  api_url:string ='http://127.0.0.1:8000/';
 


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


  

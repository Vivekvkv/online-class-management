import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { from, Observable } from 'rxjs';
import { Signup } from'src/app/shared/signup';
import { LoginComponent } from '../login/login.component';
import { TagContentType } from '@angular/compiler';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';

const httpOptions = {
  Headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Accept' : 'application/json',
    
  })

  
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   headers = { 'content-type': 'application/json'}
  baseUrl: string="http://127.0.0.1:8000/accounts/login/";
  login(loginData: { username:string; password: string; }):Observable<Response> {
    
    return this._http.post<Response>( this.baseUrl,JSON.stringify(loginData),{'headers':this.headers})
    
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


  

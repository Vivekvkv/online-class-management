import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { User } from '@app/_models/user';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';


@Injectable({ providedIn: 'root'})
export class AuthService {
  loginForm:FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  initializeFormGroup(){
    this.loginForm.setValue({
      $key:null,
      password: '',
      username: '',
     
    })
  }

  private userSubject: BehaviorSubject<User>;

  public user: Observable<User>;
   //public User: Observable<User>;

  constructor(
        private router: Router,
        private http: HttpClient
  ) { 
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')|| '{}'));
      this.user = this.userSubject.asObservable();
    }




  
  public get userValue(): User {
    return this.userSubject.value;
}
  login (username:any,password:any){
    return this.http.post<User>(`${environment.apiUrl}/accounts/login/`, { username, password })
    .pipe(map( User => {
      localStorage.setItem('User',JSON.stringify(User));
      this.userSubject.next(User)
      return User;
    }));

  }

  logout() {
    // remove user from local storage and set current user to null
    // localStorage.removeItem('user');
    // this.userSubject.next(null);
    // this.router.navigate(['/account/login']);
}


}

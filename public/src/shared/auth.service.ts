import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_API_URL= environment.BASE_API_URL;
  loggedUser = new BehaviorSubject<string>("home");

  constructor(private _http: HttpClient) {
    
   }

  signupUser(_signupData: any){
    return this._http.post(this.BASE_API_URL + `/data/user/add-user`, _signupData);
  }

  signupMentor(_signupData: any){
    return this._http.post(this.BASE_API_URL + `/data/mentor/add-mentor`, _signupData);
  }

  signupManager(_signupData: any){
    return this._http.post(this.BASE_API_URL + `/data/manager/add-manager`, _signupData);
  }

  loginUser(_loginData: any){
    this.loggedUser.next("user");
    return this._http.post(this.BASE_API_URL + `/data/login-user`, _loginData);
  }

  loginMentor(_loginData: any){
    this.loggedUser.next("mentor");
    return this._http.post(this.BASE_API_URL + `/data/login-mentor`, _loginData);
  }

  loginManager(_loginData: any){
    this.loggedUser.next("manager");
    return this._http.post(this.BASE_API_URL + `/data/login-manager`, _loginData);
  }

  logOut() {
    this.loggedUser.next("home");
  }
}

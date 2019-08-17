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
  partOfSHG = new BehaviorSubject<boolean>(false);
  hasCreatedSHG = new BehaviorSubject<boolean>(false);
  data: any;

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
    this.data = this._http.post(this.BASE_API_URL + `/data/login-user`, _loginData);
    
    if(!this.data.user.shg){
      this.partOfSHG.next(true);
    }

    return this.data;
  }

  loginMentor(_loginData: any){
    this.loggedUser.next("mentor");
    this.data = this._http.post(this.BASE_API_URL + `/data/login-mentor`, _loginData);
    
    if(this.data.mentor.has_applied){
      this.hasCreatedSHG.next(true);
    }

    return this.data;
  }

  loginManager(_loginData: any){
    this.loggedUser.next("manager");
    return this._http.post(this.BASE_API_URL + `/data/login-manager`, _loginData);
  }

  logOut() {
    this.loggedUser.next("home");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_API_URL= environment.BASE_API_URL;

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
    return this._http.post(this.BASE_API_URL + `/data/login-user`, _loginData);
  }

  loginMentor(_loginData: any){
    return this._http.post(this.BASE_API_URL + `/data/login-mentor`, _loginData);
  }

  loginManager(_loginData: any){
    return this._http.post(this.BASE_API_URL + `/data/login-manager`, _loginData);
  }
}

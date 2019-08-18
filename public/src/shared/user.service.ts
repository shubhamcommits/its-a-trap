import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_API_URL = environment.BASE_API_URL;

  constructor(private _http: HttpClient) { }

  joinSHG(shg_id, user_id){
    const comb = {
      shg_id: shg_id,
      user_id: user_id
    }
    return this._http.post(this.BASE_API_URL + `/data/user/join-shg`, comb);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShgService {

  constructor(private _http: HttpClient) { }

  BASE_API_URL = environment.BASE_API_URL;

  getSHG(shg_id){
    const shg = {
      shg_id: shg_id
    }
    return this._http.post(this.BASE_API_URL + `/data/shg/get-shg`, shg);
  }

  getAllSHG(){
    return this._http.get(this.BASE_API_URL + `/data/shg/get-all-shgs`);
  }

  addMentee(shg_id, user_id){
    const shg = {
      shg_id: shg_id,
      user_id: user_id
    }
    return this._http.post(this.BASE_API_URL + `/data/shg/add-mentee`, shg);
  }
}

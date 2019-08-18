import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  BASE_API_URL = environment.BASE_API_URL;

  constructor(private _http: HttpClient) { }

  getMentor(mentor_id){
    return this._http.post(this.BASE_API_URL + `/data/mentor/get-mentor`, mentor_id);
  }

  getPendingSHG(shg_id){
    return this._http.post(this.BASE_API_URL + `/data/shg/get-shg`, shg_id);
  }
}

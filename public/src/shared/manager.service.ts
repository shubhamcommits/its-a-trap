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


  getPendingSHG(shg_id){
    const shg = {
      shg_id: shg_id
    }
    return this._http.post(this.BASE_API_URL + `/data/shg/get-shg`, shg);
  }

  acceptPendingManager(mentor_id, manager_id){
    const mentor = {
      mentor_id : mentor_id,
      manager_id : manager_id
    }
    return this._http.post(this.BASE_API_URL + `/data/manager/approve-pending-mentor`, mentor);
  }

  addPendingSHG(){

  }
}

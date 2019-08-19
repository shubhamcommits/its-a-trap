import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  BASE_API_URL = environment.BASE_API_URL;

  constructor(private _http: HttpClient) { 
    this.getJSON().subscribe(data => {
      console.log(data);
  });
  }


  getManager(manager_id){
    const manager = {
      manager_id: manager_id
    }
    return this._http.post(this.BASE_API_URL + `/data/manager/get-manager`, manager);
  }

  getPendingSHG(shg_id){
    const shg = {
      shg_id: shg_id
    }
    return this._http.post(this.BASE_API_URL + `/data/shg/get-shg`, shg);
  }

  acceptPendingMentor(mentor_id, manager_id){
    const comb = {
      mentor_id : mentor_id,
      manager_id : manager_id
    }
    return this._http.post(this.BASE_API_URL + `/data/manager/approve-pending-mentor`, comb);
  }

  acceptPendingSHG(shg_id, manager_id){
    const comb = {
      shg_id : shg_id,
      manager_id : manager_id
    }
    return this._http.post(this.BASE_API_URL + `/data/manager/approve-pending-mentor`, comb);
  }

  getAllManagers(){
    return this._http.get(this.BASE_API_URL + `/data/manager/get-all-managers`);
  }

  public getJSON(): Observable<any> {
    return this._http.get('../assets/JSONs/deforestation.json');
  }

  addPendingSHG(shg_id, manager_id){
    const comb={
      shg_id : shg_id,
      manager_id : manager_id
    }
    return this._http.post(this.BASE_API_URL + `/data/manager/add-pending-shg`, comb);
  }

  addPendingMentor(mentor_id, manager_id){
    const comb={
      mentor_id : mentor_id,
      manager_id : manager_id
    }
    return this._http.post(this.BASE_API_URL + `/data/manager/add-pending-mentor`, comb);
  }
}

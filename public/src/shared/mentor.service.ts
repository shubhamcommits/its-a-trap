import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  BASE_API_URL = environment.BASE_API_URL;

  constructor(private _http: HttpClient) { }

  getMentor(mentor_id){
    const mentor = {
      mentor_id: mentor_id
    }
    return this._http.post(this.BASE_API_URL + `/data/mentor/get-mentor`, mentor);
  }

  addManager(mentor_id, manager_id){
    const comb = {
      mentor_id: mentor_id,
      manager_id: manager_id
    }
    return this._http.post(this.BASE_API_URL + `/data/mentor/add-manager`, comb);
  }

  addMentee(mentor_id, user_id){
    const comb = {
      mentor_id: mentor_id,
      user_id: user_id
    }
    return this._http.post(this.BASE_API_URL + `/data/mentor/add-mentee`, comb);
  }

  applySHG(mentor_id){
    const mentor = {
      mentor_id : mentor_id
    }
    return this._http.post(this.BASE_API_URL + `/data/mentor/apply-shg`, mentor);
  }

  addSHG(shg_id, mentor_id){
    const comb = {
      mentor_id: mentor_id,
      shg_id: shg_id
    }
    return this._http.post(this.BASE_API_URL + `/data/mentor/add-shg`, comb);
  }
}

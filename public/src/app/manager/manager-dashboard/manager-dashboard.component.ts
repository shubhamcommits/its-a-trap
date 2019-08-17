import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // MANAGER DATA HAS ATTRIBUTE mentors WHICH IS ARRAY OF ALL THE MENTOR'S ID UNDER THIS LOGGED IN MANAGER.
    // ITERATE OVER ALL THE MENTOR IDS
        // GET DATA OF THE MENTOR USING HIS ID
        // IF THAT DATA HAS shg VALUE, THEN USE THAT TO GET DATA OF THE SHG CONTROLLED BY THIS MENTOR
        // ATTACH THIS TUPLE WITH THE <a> LINK SO THAT THIS DATA CAN BE SENT TO THE manager-mentor_shg COMPONENT 

        // STORE THIS DATA IN THE FOLLOWING FORMAT
        /*
              {
                  mentor  :   mentor data,
                  shg     :   shg data
              }

        */
  }

}

import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  mentor: any;

  ngOnInit() {

    this.mentor = JSON.parse(localStorage.getItem('Manager'));
    console.log(this.mentor);

    // MANAGER DATA HAS ATTRIBUTE mentors WHICH IS ARRAY OF ALL THE MENTOR'S ID UNDER THIS LOGGED IN MANAGER.
    // ITERATE OVER ALL THE MENTOR IDS
        // GET DATA OF THE MENTOR USING HIS ID
        // IF THAT DATA HAS shg VALUE, THEN USE THAT TO GET DATA OF THE SHG CONTROLLED BY THIS MENTOR
        // ATTACH THIS TUPLE WITH THE <a> LINK SO THAT THIS DATA CAN BE SENT TO THE manager-mentor_shg COMPONENT 
        // FOR MENTORS /data/mentor/get-mentor
        // FOR SHG /data/shg/get-shg

        // STORE THIS DATA IN THE FOLLOWING FORMAT
        /*
              {
                  mentor  :   mentor data,
                  shg     :   shg data
              }

        */
  }

}

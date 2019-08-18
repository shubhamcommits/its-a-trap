import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';

@Component({
  selector: 'app-manager-pending-shgs',
  templateUrl: './manager-pending-shgs.component.html',
  styleUrls: ['./manager-pending-shgs.component.scss']
})
export class ManagerPendingShgsComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  mentor: any;
  pending_shgs: any = new Array();

  ngOnInit() {
    this.mentor = JSON.parse(localStorage.getItem('Manager'));
    console.log(this.mentor);
  }

  getPendingSHG(){
    if(this.mentor.hasOwnProperty('pending_shgs')){
      if(this.mentor.pending_shgs.length > 0){
        for(var i = 0; i < this.mentor.pending_shgs; i++){

        }
      }
    }
  }

  // MANAGER DATA HAS ATTRIBUTE pending_shgs WHICH IS ARRAY OF ALL THE PENDING SHG'S ID UNDER THIS LOGGED IN MANAGER.
  // MATCH THE ID OF THAT SHG WHO'S ACCEPTANCE IS CLICKED

  // GET DATA OF THAT SHG USING /data/shg/get_shg THAT ACCEPTS SHG ID

  // CALL API /data/manager/approve_pending_shg THAT ACCEPTS MANAGER ID AND SHG ID
  // CALL API /data/mentor/add_shg THAT ACCEPTS SHG ID AND MENTOR ID(SOTRED AS mentor_id IN SHG DATA)
  // CALL API /data/shg/add_log THAT ACCEPTS SHG ID AND STRING log="Date.now : SHG was accepted by the Manager"

}

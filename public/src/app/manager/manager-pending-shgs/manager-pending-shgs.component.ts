import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-pending-shgs',
  templateUrl: './manager-pending-shgs.component.html',
  styleUrls: ['./manager-pending-shgs.component.scss']
})
export class ManagerPendingShgsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // MANAGER DATA HAS ATTRIBUTE pending_shgs WHICH IS ARRAY OF ALL THE PENDING SHG'S ID UNDER THIS LOGGED IN MANAGER.
  // MATCH THE ID OF THAT SHG WHO'S ACCEPTANCE IS CLICKED

  // GET DATA OF THAT SHG USING /data/shg/get_shg THAT ACCEPTS SHG ID

  // CALL API /data/manager/approve_pending_shg THAT ACCEPTS MANAGER ID AND SHG ID
  // CALL API /data/mentor/add_shg THAT ACCEPTS SHG ID AND MENTOR ID(SOTRED AS mentor_id IN SHG DATA)
  // CALL API /data/shg/add_log THAT ACCEPTS SHG ID AND STRING "SHG accepted by manager at Date.now"

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-pending-mentors',
  templateUrl: './manager-pending-mentors.component.html',
  styleUrls: ['./manager-pending-mentors.component.scss']
})
export class ManagerPendingMentorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // MANAGER DATA HAS ATTRIBUTE pending_mentors WHICH IS ARRAY OF ALL THE PENDING MENTOR'S ID UNDER THIS LOGGED IN MANAGER.
  // MATCH THE ID OF THAT MENTOR WHO'S ACCEPTANCE IS CLICKED

  // CALL API /data/manager/approve_pending_mentor THAT ACCEPTS MANAGER ID AND MENTOR ID
  // CALL API /data/mentor/add_manager THAT ACCEPTS MANGER ID AND MENTOR ID

}

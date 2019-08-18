import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';

@Component({
  selector: 'app-manager-pending-mentors',
  templateUrl: './manager-pending-mentors.component.html',
  styleUrls: ['./manager-pending-mentors.component.scss']
})
export class ManagerPendingMentorsComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  mentor: any;
  pending_mentors: any = new Array()

  ngOnInit() {
    this.mentor = JSON.parse(localStorage.getItem('Manager'));
    console.log(this.mentor);
    this.getPendingMentors();
  }

  getPendingMentors(){
    if(this.mentor.hasOwnProperty('pending_mentors')){
      if(this.mentor.pending_mentors.length > 0){
        for(var i = 0; i < this.mentor.pending_mentors.length; i++){
          this.managerService.getMentor(this.mentor.pending_mentors[i])
          .subscribe((res)=>{
            console.log('Mentor found', res);
            this.pending_mentors.push(res['mentor']);
          })
        }
      }
    }
  }

  // MANAGER DATA HAS ATTRIBUTE pending_mentors WHICH IS ARRAY OF ALL THE PENDING MENTOR'S ID UNDER THIS LOGGED IN MANAGER.
  // MATCH THE ID OF THAT MENTOR WHO'S ACCEPTANCE IS CLICKED

  // CALL API /data/manager/approve_pending_mentor THAT ACCEPTS MANAGER ID AND MENTOR ID
  // CALL API /data/mentor/add_manager THAT ACCEPTS MANGER ID AND MENTOR ID

}

import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';
import { MentorService } from 'src/shared/mentor.service';
import { ShgService } from 'src/shared/shg.service';

@Component({
  selector: 'app-manager-pending-mentors',
  templateUrl: './manager-pending-mentors.component.html',
  styleUrls: ['./manager-pending-mentors.component.scss']
})
export class ManagerPendingMentorsComponent implements OnInit {

  constructor(private managerService: ManagerService,
    private mentorService: MentorService,
    private shg: ShgService) { }

  manager: any;
  pending_mentors: any = new Array()

  ngOnInit() {
    this.manager = JSON.parse(localStorage.getItem('Manager'));
    console.log(this.manager);
    this.getPendingMentors();
  }

  getPendingMentors(){
    if(this.manager.hasOwnProperty('pending_mentors')){
      if(this.manager.pending_mentors.length > 0){
        for(var i = 0; i < this.manager.pending_mentors.length; i++){
          this.mentorService.getMentor(this.manager.pending_mentors[i])
          .subscribe((res)=>{
            console.log('Mentor found', res);
            this.pending_mentors.push(res['mentor']);
          })
        }
      }
    }
  }

  acceptMentor(mentor_id){
    console.log(mentor_id)
    this.managerService.acceptPendingManager(mentor_id, this.manager._id)
    .subscribe((res)=>{
      console.log(res);
      this.mentorService.addManager(mentor_id, this.manager._id)
      .subscribe((resp)=>{
        console.log(resp);
      });
    });
  }

  // MANAGER DATA HAS ATTRIBUTE pending_mentors WHICH IS ARRAY OF ALL THE PENDING MENTOR'S ID UNDER THIS LOGGED IN MANAGER.
  // MATCH THE ID OF THAT MENTOR WHO'S ACCEPTANCE IS CLICKED

  // CALL API /data/manager/approve_pending_mentor THAT ACCEPTS MANAGER ID AND MENTOR ID
  // CALL API /data/mentor/add_manager THAT ACCEPTS MANGER ID AND MENTOR ID

}

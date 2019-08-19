import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';
import { MentorService } from 'src/shared/mentor.service';
import { ShgService } from 'src/shared/shg.service';
import { UserService } from 'src/shared/user.service';
import {AuthService} from 'src/shared/auth.service';

@Component({
  selector: 'app-mentor-my-shg',
  templateUrl: './mentor-my-shg.component.html',
  styleUrls: ['./mentor-my-shg.component.scss']
})
export class MentorMyShgComponent implements OnInit {

  constructor(private managerService: ManagerService,
    private shgService: ShgService,
    private mentorService: MentorService,
    private userService: UserService,
    private authService: AuthService) { }

  mentor;
  shg;
  manager;
  SHGaccepted:boolean=false;

  ngOnInit() {
    if(!this.SHGaccepted){
      this.mentor = JSON.parse(localStorage.getItem('Mentor'));
      this.mentorService.getMentor(this.mentor._id)
      .subscribe((res)=>{
        console.log('Updated Mentor Found',res);
        this.mentor = res['mentor'];
        localStorage.setItem('Mentor',JSON.stringify(res['mentor']));
        
        if(res['mentor']['shg']){
          this.SHGaccepted = true;
          this.shgService.getSHG(res['mentor']['shg'])
          .subscribe((resp)=>{
            console.log('SHG found',resp);
            this.shg = resp['shg'];

            this.managerService.getManager(resp['shg']['manager'])
            .subscribe((respo)=>{
              console.log('Manager found',respo);
              this.manager = respo['manager'];
            });
          });
        }

      });
    }
    // GET mentor DATA FROM /data/mentor/get-mentor AND SUBSCRIBE IT
      // IF THE shg ATTRIBUTE IS NOT NULL:-
          // GET THE SHG DATA USING shg_id from /data/shg/get-shg
          // SET this.SSGaccepted = true
  }

}

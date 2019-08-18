import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/shared/auth.service';
import { ManagerService } from 'src/shared/manager.service';
import { MentorService } from 'src/shared/mentor.service';
import { ShgService } from 'src/shared/shg.service';

@Component({
  selector: 'app-login-my-shg',
  templateUrl: './login-my-shg.component.html',
  styleUrls: ['./login-my-shg.component.scss']
})
export class LoginMyShgComponent implements OnInit {

  constructor(private managerService: ManagerService,
    private shgService: ShgService,
    private mentorService: MentorService,
    private authService: AuthService) { }


  user;
  shg;
  mentor;
  manager;

  ngOnInit() {
    this.authService.partOfSHG.next(true);
    
    this.user = JSON.parse(localStorage.getItem('User'));
    console.log(this.user);

    this.shgService.getSHG(this.user.shg)
    .subscribe((res)=>{
      console.log(res);

      this.shg = res['shg'];

      this.mentorService.getMentor(this.shg.mentor)
      .subscribe((res1)=>{
        console.log(res1);
        this.mentor = res1['mentor'];
      });

      this.managerService.getManager(this.shg.manager)
      .subscribe((res1)=>{
        console.log(res1);
        this.manager = res1['manager'];
      });
    });
  }

  // WE CAN GET THE DATA OF A PARTICULAR sgh FROM /data/shg/get-shg USING ITS ID
  // THE SHG DATA CONTAINS ATTRIBUTE mentor AND manager WHICH CONTAINS THEIR ID, WHCI CAN BE USED TO GET THIER
  // DATA FROM /data/mentor/get-mentor AND /data/manager/get-manager

  /*
    STORE THE shg, mentor AND manager DATA IN THIS FORM:

    all_data  = {
                    shg       :   shg data
                    mentor    :   mentor data
                    manager   :   manager data
                }

  */

}

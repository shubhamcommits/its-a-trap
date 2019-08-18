import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';
import { MentorService } from 'src/shared/mentor.service';
import { ShgService } from 'src/shared/shg.service';

@Component({
  selector: 'app-login-join-shg',
  templateUrl: './login-join-shg.component.html',
  styleUrls: ['./login-join-shg.component.scss']
})
export class LoginJoinShgComponent implements OnInit {

  constructor(private managerService: ManagerService,
    private shgService: ShgService,
    private mentorService: MentorService) { }

    shgs;
    user;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('User'));

    this.shgs = this.shgService.getAllSHG();
  }

  // GET DATA OF ALL THE SHGS FROM /data/shg/get-all-shgs
  // STORE THE DATA IN shgs VARIABLE

  // CALL /data/user/join-shg USING shg_id ID AND user_id ID
  // CALL /data/mentor/add_mentee USING mentor_id ID FROM shg DATA and user_id ID
  // CALL /data/shg/add_mentee USING shg_id ID AND user_id ID
  // CALL /data/shg/add_logs USING log="Date.now : {{UserName}} joined the group" AS POST REQUEST
  // SET THE partOfSSH pvariable AS true AFTER THIS IN THE AUTH-SERVICE

}

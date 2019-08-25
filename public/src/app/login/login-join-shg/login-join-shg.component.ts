import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';
import { MentorService } from 'src/shared/mentor.service';
import { ShgService } from 'src/shared/shg.service';
import { UserService } from 'src/shared/user.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {AuthService} from 'src/shared/auth.service';
import { reject } from 'q';
import { resolve } from 'url';

@Component({
  selector: 'app-login-join-shg',
  templateUrl: './login-join-shg.component.html',
  styleUrls: ['./login-join-shg.component.scss']
})
export class LoginJoinShgComponent implements OnInit {

  constructor(private managerService: ManagerService,
    private shgService: ShgService,
    private mentorService: MentorService,
    private userService: UserService,
    private authService: AuthService,
    private _location: Location,
    private router: Router) { }

  allShgs;
  shgs: Array<Object>;
  user;

  ngOnInit() {
    this.shgs = [];
    this.user = JSON.parse(localStorage.getItem('User'));

    this.shgService.getAllSHG()
    .subscribe((res)=>{
      this.getValidSHG(res['shg']).then((resp)=>{
        console.log(resp);
      });
    });
  }

  async getValidSHG(shg_data){
    for(var i=0; i<shg_data.length; i++){
      console.log("Checking "+i+"th SHG");
      await this.checkValidity(shg_data[i]).then((resp)=>{
        console.log("Checked "+i+"th SHG");
      });
    };
  }

  checkValidity(shg){
    return new Promise((resolve,reject)=>{
      this.mentorService.getMentor(shg.mentor)
      .subscribe((res)=>{
        if(res['mentor']['shg']){
          console.log("Including SHG : ",shg);
          this.shgs.push(shg);
        };
      });
      resolve('Done');
    });
  }

  joinTheSHG(shg_id){
    this.userService.joinSHG(shg_id, this.user._id)
    .subscribe((res)=>{
      console.log("One"+res);
      console.log("Here"+shg_id);

      this.shgService.getSHG(shg_id)
      .subscribe((res2)=>{
        console.log("Two",res2);
        const shgData = res2['shg'];

        console.log("ID"+shgData['mentor'])
        this.mentorService.addMentee(shgData['mentor'], this.user._id)
        .subscribe((res3)=>{
          console.log("Three",res3);

          this.shgService.addMentee(shg_id, this.user._id)
          .subscribe((res4)=>{
            console.log("Four",res4);

            localStorage.setItem('User',JSON.stringify(res['user']));
            this.user = JSON.parse(localStorage.getItem('User'));
            const log = Date()+" : "+this.user.first_name+" "+this.user.last_name+" joined the SHG.";
            this.shgService.addLog(shg_id, log)
            .subscribe((res5)=>{
              console.log("Five",res5);

              this.authService.partOfSHG.next(true);
              this.router.navigate(['user','my-shg']);
            });
          });
        });
      });
    });
  }

  // GET DATA OF ALL THE SHGS FROM /data/shg/get-all-shgs
  // STORE THE DATA IN shgs VARIABLE

  // CALL /data/user/join-shg USING shg_id ID AND user_id ID
  // CALL /data/mentor/add_mentee USING mentor_id ID FROM shg DATA and user_id ID
  // CALL /data/shg/add_mentee USING shg_id ID AND user_id ID
  // CALL /data/shg/add_logs USING log="Date.now : {{UserName}} joined the group" AS POST REQUEST
  // SET THE partOfSSH pvariable AS true AFTER THIS IN THE AUTH-SERVICE

}

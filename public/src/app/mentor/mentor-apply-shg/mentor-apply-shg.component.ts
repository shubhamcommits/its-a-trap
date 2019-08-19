import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';
import { MentorService } from 'src/shared/mentor.service';
import { ShgService } from 'src/shared/shg.service';
import { UserService } from 'src/shared/user.service';
import { Router } from '@angular/router';
import {AuthService} from 'src/shared/auth.service';

@Component({
  selector: 'app-mentor-apply-shg',
  templateUrl: './mentor-apply-shg.component.html',
  styleUrls: ['./mentor-apply-shg.component.scss']
})
export class MentorApplyShgComponent implements OnInit {


  name: any;
  address: any;
  country: any;
  about: any;

  constructor(private managerService: ManagerService,
    private shgService: ShgService,
    private mentorService: MentorService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router) { }

  mentor;
  

  ngOnInit() {
    this.mentor = JSON.parse(localStorage.getItem('Mentor'));
  }

  applySHG(){
    console.log("Correct Form");
    console.log(this.mentor._id)
    const _shgData = {
      name: this.name,
      address: this.address,
      country: this.country,
      about: this.about,
      manager: this.mentor.manager,
      mentor: this.mentor._id,
      latitude: 0.0,
      longitude: 0.0
    }

    this.shgService.addSHG(_shgData)
    .subscribe((res)=>{
      console.log(_shgData);
      console.log('SHG created', res);

      this.managerService.addPendingSHG(res['shg']['_id'], this.mentor.manager)
      .subscribe((resp)=>{
        console.log('SHG added as pending to Manager', resp);

        this.mentorService.applySHG(this.mentor._id)
        .subscribe((respo)=>{
          console.log("Mentor had Applied", respo);
          this.mentor = respo['mentor'];
          localStorage.setItem('Mentor',JSON.stringify(respo['mentor']));

          this.authService.hasCreatedSHG.next(true);
          this.router.navigate(['mentor','my-shg']);
        });
      });
    }, (err)=>{
      console.log('Error', err);
    })
  }

  // CALL /data/shg/add_shg WITH THE FORM DATA AND SAVE THE RETURNED SHG DATA
      // CALL /data/manager/add_pending_shg WITH THE manager_id SELECTED FROM COMBOBOX AND shg_id GOT FROM CREATING SSH

}

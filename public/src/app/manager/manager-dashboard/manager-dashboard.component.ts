import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';
import { MentorService } from 'src/shared/mentor.service';
import { ShgService } from 'src/shared/shg.service';


@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {

  constructor(private managerService: ManagerService,
    private shgService: ShgService,
    private mentorService: MentorService) { }

  manager: any;
  mentor_shg: any = new Array();

  ngOnInit() {

    this.manager = JSON.parse(localStorage.getItem('Manager'));
    console.log("MANAGER DATA:-")
    console.log(this.manager);
    this.getMentors();
    // MANAGER DATA HAS ATTRIBUTE mentors WHICH IS ARRAY OF ALL THE MENTOR'S ID UNDER THIS LOGGED IN MANAGER.
    // ITERATE OVER ALL THE MENTOR IDS
        // GET DATA OF THE MENTOR USING HIS ID
        // IF THAT DATA HAS shg VALUE, THEN USE THAT TO GET DATA OF THE SHG CONTROLLED BY THIS MENTOR
        // ATTACH THIS TUPLE WITH THE <a> LINK SO THAT THIS DATA CAN BE SENT TO THE manager-mentor_shg COMPONENT 
        // FOR MENTORS /data/mentor/get-mentor
        // FOR SHG /data/shg/get-shg

        // STORE THIS DATA IN THE FOLLOWING FORMAT
        /*
              {
                  mentor  :   mentor data,
                  shg     :   shg data
              }

        */
  }

  getMentors(){
    if(this.manager.hasOwnProperty('mentors')){
      if(this.manager.mentors.length > 0){
        for(var i = 0; i < this.manager.mentors.length; i++){
          console.log("calling "+this.manager.mentors)
          this.mentorService.getMentor(this.manager.mentors[i])
          .subscribe((res)=>{
            const shg_id = res['mentor']['shg']
            if(shg_id){
              this.shgService.getSHG(shg_id)
              .subscribe((resp)=>{
                this.mentor_shg.push({
                  'mentor' : res['mentor'],
                  'shg' : resp['shg']
                })
              })
            }
            else{
              this.mentor_shg.push({
                'mentor' : res['mentor'],
                'shg' : null
              })
            }
          })   
        }
      }
    }
    // this.managerService.getMentor()
  }


}

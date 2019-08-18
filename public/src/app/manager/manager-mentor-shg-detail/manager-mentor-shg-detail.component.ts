import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MentorService } from 'src/shared/mentor.service';
import { ShgService } from 'src/shared/shg.service';


@Component({
  selector: 'app-manager-mentor-shg-detail',
  templateUrl: './manager-mentor-shg-detail.component.html',
  styleUrls: ['./manager-mentor-shg-detail.component.scss']
})
export class ManagerMentorShgDetailComponent implements OnInit {

  //ACCEPTS mentor_shg DICTIONARY WITH KEYS mentor AND shg THAT CONTAINS THEIR RESPECTIVE DATA
  mentor_id;
  mentor;
  shg;
  constructor(private activatedRoute: ActivatedRoute,
    private shgService: ShgService,
    private mentorService: MentorService) { 
    this.mentor_id = this.activatedRoute.snapshot.paramMap['params']['id'];
    console.log(this.mentor_id);
  }

  mentor_shg;

  async ngOnInit() {
    await this.mentorService.getMentor(this.mentor_id)
    .subscribe((res)=>{
      const shg_id = res['mentor']['shg']
      if(shg_id){
        this.shgService.getSHG(shg_id)
        .subscribe((resp)=>{
          this.mentor = res['mentor'];
          this.shg = resp['shg'];
          console.log("DATA HERE", res[
            'mentor'], resp['shg']);
        })
      }
      else{
        this.mentor = res['mentor'];
        this.shg = null
      }
    })
  }



}

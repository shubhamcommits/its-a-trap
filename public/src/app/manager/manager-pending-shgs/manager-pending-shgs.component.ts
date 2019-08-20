import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';
import { MentorService } from 'src/shared/mentor.service';
import { ShgService } from 'src/shared/shg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-pending-shgs',
  templateUrl: './manager-pending-shgs.component.html',
  styleUrls: ['./manager-pending-shgs.component.scss']
})
export class ManagerPendingShgsComponent implements OnInit {

  constructor(private managerService: ManagerService,
    private mentorService: MentorService,
    private shgService: ShgService,
    private router: Router) { }

  manager: any;
  pending_shgs: any = new Array()

  ngOnInit() {
    this.manager = JSON.parse(localStorage.getItem('Manager'));
    console.log(this.manager);
    this.getPendingSHGs();
  }

  getPendingSHGs(){
    if(this.manager.hasOwnProperty('pending_shgs')){
      console.log(this.manager.pending_shgs);
      if(this.manager.pending_shgs.length > 0){
        for(var i = 0; i < this.manager.pending_shgs.length; i++){
          this.shgService.getSHG(this.manager.pending_shgs[i])
          .subscribe((res)=>{
            console.log('SHG found', res);
            this.pending_shgs.push(res['shg']);
          })
        }
      }
    }
  }

  acceptSHG(shg_id){
    console.log(shg_id);
    this.managerService.acceptPendingSHG(shg_id, this.manager._id)
    .subscribe((res)=>{
      console.log(res);
      localStorage.setItem('Manager', JSON.stringify(res['manager']));
      this.manager = JSON.parse(localStorage.getItem('Manager'));

      const log = Date()+" : SHG approved by Manager.";

      this.shgService.addLog(shg_id, log)
      .subscribe((resp)=>{
        console.log('Log added',resp);

        this.mentorService.addSHG(shg_id, resp['shg']['mentor'])
        .subscribe((respo)=>{
          console.log('Mentor Updated',respo);

          this.router.navigate(['manager','dashboard']);
        });
      });
    });
  }

  rejectSHG(shg_id){

  }

  // MANAGER DATA HAS ATTRIBUTE pending_shgs WHICH IS ARRAY OF ALL THE PENDING SHG'S ID UNDER THIS LOGGED IN MANAGER.
  // MATCH THE ID OF THAT SHG WHO'S ACCEPTANCE IS CLICKED

  // GET DATA OF THAT SHG USING /data/shg/get_shg THAT ACCEPTS SHG ID

  // CALL API /data/manager/approve_pending_shg THAT ACCEPTS MANAGER ID AND SHG ID
  // CALL API /data/mentor/add_shg THAT ACCEPTS SHG ID AND MENTOR ID(SOTRED AS mentor_id IN SHG DATA)
  // CALL API /data/shg/add_log THAT ACCEPTS SHG ID AND STRING log="Date.now : SHG was accepted by the Manager"

}

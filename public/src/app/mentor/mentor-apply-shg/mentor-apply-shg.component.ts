import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-apply-shg',
  templateUrl: './mentor-apply-shg.component.html',
  styleUrls: ['./mentor-apply-shg.component.scss']
})
export class MentorApplyShgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // CALL /data/shg/add_shg WITH THE FORM DATA AND SAVE THE RETURNED SHG DATA
      // CALL /data/manager/add_pending_shg WITH THE manager_id SELECTED FROM COMBOBOX AND shg_id GOT FROM CREATING SSH

}

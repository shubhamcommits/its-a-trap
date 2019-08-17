import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-my-shg',
  templateUrl: './mentor-my-shg.component.html',
  styleUrls: ['./mentor-my-shg.component.scss']
})
export class MentorMyShgComponent implements OnInit {

  SSGaccepted: boolean = false;

  constructor() { }

  ngOnInit() {
    // GET mentor DATA FROM /data/mentor/get-mentor AND SUBSCRIBE IT
      // IF THE shg ATTRIBUTE IS NOT NULL:-
          // GET THE SHG DATA USING shg_id from /data/shg/get-shg
          // SET this.SSGaccepted = true
  }

}

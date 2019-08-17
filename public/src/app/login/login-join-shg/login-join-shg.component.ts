import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-join-shg',
  templateUrl: './login-join-shg.component.html',
  styleUrls: ['./login-join-shg.component.scss']
})
export class LoginJoinShgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // GET DATA OF ALL THE SHGS FROM /data/shg/get-all-shgs
  // STORE THE DATA IN shgs VARIABLE

  // CALL /data/user/join-shg USING shg_id ID AND user_id ID
  // CALL /data/mentor/add_mentee USING mentor_id ID FROM shg DATA and user_id ID
  // CALL /data/shg/add_mentee USING shg_id ID AND user_id ID

}

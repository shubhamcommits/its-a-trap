import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-my-shg',
  templateUrl: './login-my-shg.component.html',
  styleUrls: ['./login-my-shg.component.scss']
})
export class LoginMyShgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-fund-shg',
  templateUrl: './login-fund-shg.component.html',
  styleUrls: ['./login-fund-shg.component.scss']
})
export class LoginFundShgComponent implements OnInit {

  constructor() { }

  shgs: any;

  ngOnInit() {
  }

  // GET DATA OF ALL THE SHGS FROM /data/shg/get-all-shgs
  // STORE THE DATA IN shgs VARIABLE

}

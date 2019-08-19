import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.scss']
})
export class MentorLoginComponent implements OnInit {

  constructor(private authService: AuthService, private ngxService: NgxUiLoaderService,
    private _location: Location, private router: Router) { }

  email: any;
  password: any;
  notApprovedBox: boolean;

  ngOnInit() {
    this.notApprovedBox = false;
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
  }

  loginMentor(){
    this.notApprovedBox = false;
    const _loginData = {
      email: this.email,
      password: this.password
    }
    this.authService.loginMentor(_loginData)
    .subscribe((res)=>{
      console.log('Mentor Logged In', res);
      if (res['mentor']['has_manager']){
        this.authService.loggedUser.next("mentor");
        localStorage.setItem('Mentor',JSON.stringify(res['mentor']));
        localStorage.setItem('Token', JSON.stringify(res['token']));
        if (res['mentor']['has_applied']){
          this.authService.hasCreatedSHG.next(true);
          this.router.navigate(['mentor', 'my-shg']);
        }
        else{
          this.authService.hasCreatedSHG.next(false);
          this.router.navigate(['mentor', 'apply-shg']);
        }
      }
      else{
        this.notApprovedBox = true;
      }
    }, (err)=>{
      console.log('Error fetched', err);
    })
  }

}

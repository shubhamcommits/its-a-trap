import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.scss']
})
export class MentorLoginComponent implements OnInit {

  constructor(private authService: AuthService, private ngxService: NgxUiLoaderService) { }

  email: any;
  password: any;

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
  }

  loginMentor(){
    const _loginData = {
      email: this.email,
      password: this.password
    }
    this.authService.loginMentor(_loginData)
    .subscribe((res)=>{
      console.log('Mentor Logged In', res);
    }, (err)=>{
      console.log('Error fetched', err);
    })
  }

}

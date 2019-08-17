import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.scss']
})
export class MentorLoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  email: any;
  password: any;

  ngOnInit() {
  }

  loginManager(){
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

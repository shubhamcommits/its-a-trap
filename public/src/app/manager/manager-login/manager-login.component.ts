import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.scss']
})
export class ManagerLoginComponent implements OnInit {

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
    this.authService.loginManager(_loginData)
    .subscribe((res)=>{
      console.log('Manager Logged In', res);
    }, (err)=>{
      console.log('Error fetched', err);
    })
  }

}

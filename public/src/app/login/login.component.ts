import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private ngxService: NgxUiLoaderService,
    private authService: AuthService) { }

    email: any;
    password: any;

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
  }

  loginUser(){
    const _loginData = {
      email: this.email,
      password: this.password
    }
    this.authService.loginUser(_loginData)
    .subscribe((res)=>{
      console.log('Logged In', res);
    }, (err)=>{
      console.log('Error fetched', err);
    })
  }

}

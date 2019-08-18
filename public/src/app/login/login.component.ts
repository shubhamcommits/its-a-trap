import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from 'src/shared/auth.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private ngxService: NgxUiLoaderService,
    private authService: AuthService, private _location: Location, private router: Router) { }

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
      this.authService.loggedUser.next("user");
      console.log('Logged In', res);
      localStorage.setItem('User',JSON.stringify(res['user']));
      localStorage.setItem('Token', JSON.stringify(res['token']));
      if(res['user']['shg']){
        //is in shg
        this.authService.partOfSHG.next(true);
        this.router.navigate(['user','my-shg']);
      }
      else{
        this.authService.partOfSHG.next(false);
        this.router.navigate(['user','join-shg']);
      }
    }, (err)=>{
      console.log('Error fetched', err);
    })
  }

}

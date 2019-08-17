import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.scss']
})
export class ManagerLoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private _location: Location, private ngxService: NgxUiLoaderService) { }

  email: any;
  password: any;

  async ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
    const { value: password } = await Swal.fire({
      title: 'Enter Global Password',
      input: 'password',
      inputPlaceholder: 'Enter your password',
      inputAttributes: {
        autocapitalize: 'off',
        autocorrect: 'off'
      }
    })
    
    if (password === '123') {
      Swal.fire({
        title: 'Welcome, please login!',
        type: 'success'
      })
    } else{
      Swal.fire({
        title: 'Wrong Password!',
        text: 'Redirecting you back to the previous location',
        type: 'error'
      }).then(()=>{
        this._location.back();
      })

    }
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

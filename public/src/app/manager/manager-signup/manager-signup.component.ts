import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
import { AuthService } from 'src/shared/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-signup',
  templateUrl: './manager-signup.component.html',
  styleUrls: ['./manager-signup.component.scss']
})
export class ManagerSignupComponent implements OnInit {

  constructor(private _location: Location, private authService: AuthService, 
    private ngxService: NgxUiLoaderService, private router: Router) { }

  first_name: any;
  last_name:any;
  email: any;
  password: any;
  age: any;
  sex: any;
  address: any;
  country: any;
  phone_number: any;
  about: any;

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
        title: 'Welcome, please sign up!',
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

  signupManager(){

    const _signupData = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      age: this.age,
      sex: this.sex,
      address: this.address,
      country: this.country,
      phone_number: this.phone_number,
      about: this.about
    }
    this.authService.signupManager(_signupData)
    .subscribe((res)=>{
      console.log('Manager signed up', res);
      this.authService.loggedUser.next("manager");
      localStorage.setItem('Manager', JSON.stringify(res['manager']));
      localStorage.setItem('Token', JSON.stringify(res['token']));
      this.router.navigate(['manager', 'dashboard']);
    }, (err)=>{
      console.log('Error', err);
    })
  }

}

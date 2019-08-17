import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService, 
    private authService: AuthService) { }

    first_name: any;
    last_name:any;
    email: any;
    password: any;
    age: any;
    sex: any;
    address: any;
    country: any;
    phone_number: any;

    /**
     * name
     * address
     * country
     * latitude
     * longitude
     * mentor_id
     * manager_id 
     */

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
  }

  signupUser(){

    const _signupData = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      age: this.age,
      sex: this.sex,
      address: this.address,
      country: this.country,
      phone_number: this.phone_number
    }
    this.authService.signupUser(_signupData)
    .subscribe((res)=>{
      console.log('User signed up', res);
    }, (err)=>{
      console.log('Error', err);
    })
  }

}

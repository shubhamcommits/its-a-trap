import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.scss']
})
export class MentorSignupComponent implements OnInit {

  constructor(private authService: AuthService, private ngxService: NgxUiLoaderService, ) { }

  first_name: any;
  last_name:any;
  email: any;
  password: any;
  age: any;
  sex: any;
  address: any;
  country: any;
  phone_number: any;

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
  }

  signupMentor(){

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
    this.authService.signupMentor(_signupData)
    .subscribe((res)=>{
      console.log('Manager signed up', res);
    }, (err)=>{
      console.log('Error', err);
    })
  }

}

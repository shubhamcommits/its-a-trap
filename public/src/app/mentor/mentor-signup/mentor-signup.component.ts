import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.scss']
})
export class MentorSignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

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

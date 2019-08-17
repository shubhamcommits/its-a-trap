import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-manager-signup',
  templateUrl: './manager-signup.component.html',
  styleUrls: ['./manager-signup.component.scss']
})
export class ManagerSignupComponent implements OnInit {

  constructor(private _location: Location, private authService: AuthService) { }

  first_name: any;
  last_name:any;
  email: any;
  password: any;
  age: any;
  sex: any;
  address: any;
  country: any;
  phone_number: any;

  async ngOnInit() {
    const { value: password } = await Swal.fire({
      title: 'Enter your password',
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
      phone_number: this.phone_number
    }
    this.authService.signupManager(_signupData)
    .subscribe((res)=>{
      console.log('Manager signed up', res);
    }, (err)=>{
      console.log('Error', err);
    })
  }

}

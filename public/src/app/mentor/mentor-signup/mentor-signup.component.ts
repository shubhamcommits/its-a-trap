import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ManagerService } from 'src/shared/manager.service';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.scss']
})
export class MentorSignupComponent implements OnInit {

  constructor(private managerService: ManagerService,
    private authService: AuthService,
    private ngxService: NgxUiLoaderService, ) { }

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

  managers:Array<Object>;
  selectedManager;
  

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);

    this.managers = [];
    this.managerService.getAllManagers()
    .subscribe((res)=>{
      console.log(res);
      for(var i=0; i<res['manager'].length; i++){
        const manager = res['manager'][i]
        console.log(manager);
        this.managers.push({
          id: manager._id,
          name: manager.first_name+" "+manager.last_name
        });
      };
    });
  }

  signupMentor(){
    if(this.selectedManager){
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
        about: this.about,
        manager: this.selectedManager.id
      }

      console.log(_signupData);

      this.authService.signupMentor(_signupData)
      .subscribe((res)=>{
        console.log('Mentor signed up', res);

        this.managerService.addPendingMentor(res['mentor']['_id'], this.selectedManager.id)
        .subscribe((resp)=>{
          console.log('Mentor added as pending to Manager', resp);
        });
      }, (err)=>{
        console.log('Error', err);
      })
    }
  }
}

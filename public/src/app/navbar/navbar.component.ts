import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  current_user: string;
  partOfSHG: boolean;
  hasCreatedSHG: boolean;
  
  constructor(private authService: AuthService) {
    this.authService.loggedUser.subscribe((value)=>{
      this.current_user = value
    });
    this.authService.partOfSHG.subscribe((value)=>{
      this.partOfSHG = value
    });
    this.authService.hasCreatedSHG.subscribe((value)=>{
      this.hasCreatedSHG = value
    });
  }

  ngOnInit() {
    if(localStorage.getItem('Manager')){
      this.current_user = 'manager';
    } else if(localStorage.getItem('User')){
      this.current_user = 'user';
    } else if(localStorage.getItem('Mentor')){
      this.current_user = 'mentor';
    } else {
      this.current_user = 'home';
    }
    console.log(this.current_user);
  }

  logOut() {
    this.authService.logOut();
  }

}

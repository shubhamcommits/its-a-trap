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
  
  constructor(private authService: AuthService) {
    this.authService.loggedUser.subscribe((value)=>{
      this.current_user = value
    });
    this.authService.partOfSHG.subscribe((value)=>{
      this.partOfSHG = value
    });
  }

  ngOnInit() {
    console.log(this.current_user);
  }

  logOut() {
    this.authService.logOut();
  }

}

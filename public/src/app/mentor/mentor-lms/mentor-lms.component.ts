import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-mentor-lms',
  templateUrl: './mentor-lms.component.html',
  styleUrls: ['./mentor-lms.component.scss']
})
export class MentorLmsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  mentor;

  ngOnInit() {
    this.mentor = JSON.parse(localStorage.getItem('Mentor'));
    if(this.mentor.shg){
      this.authService.hasCreatedSHG.next(true);
    }
  }

}

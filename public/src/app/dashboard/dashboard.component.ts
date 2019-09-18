import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: object;

  constructor(private managerService: ManagerService) {

      this.managerService.getCourseJSON().subscribe((res)=>{
        console.log(JSON.parse(res));
        this.products = JSON.parse(res);
      });






  }


  ngOnInit() {

  }

}

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
    try{
      this.managerService.getCourseJSON().subscribe((res)=>{
        console.log(res);
        this.products = res;
      });
    }
    catch (error) {
      console.error('Log error', error);
    }





  }


  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';


@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.scss']
})
export class AgricultureComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  output: any;

  state: any;
  district: any;
  month: any;

  ngOnInit() {
  }

  predict(){
    console.log(this.state, this.district, this.month);
    this.managerService.getJSON()
    .subscribe((res)=>{
      if(res['Haryana']){
        if(res['Haryana'][`${this.district}`]){
          console.log(res['Haryana'][`${this.district}`])
        }
      }
    })
  }

}

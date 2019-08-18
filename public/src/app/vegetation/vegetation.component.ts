import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';

@Component({
  selector: 'app-vegetation',
  templateUrl: './vegetation.component.html',
  styleUrls: ['./vegetation.component.scss']
})
export class VegetationComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  output: any;

  state: any;
  district: any;
  month: any;

  ngOnInit() {
  }

  predict(){
    console.log(this.state, this.district, this.month);
    this.managerService.getVegJSON()
    .subscribe((res)=>{
      if(res['Haryana']){
        if(res['Haryana'][`${this.district}`]){
          // if(res['Haryana'][`${this.district}`][`${this.month}`]){
            this.output = res['Haryana'][`${this.district}`];
            console.log(this.output['Jan']);
          // }
        }
      }
    })
  }
}

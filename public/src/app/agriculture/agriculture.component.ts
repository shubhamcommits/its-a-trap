import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';


@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.scss']
})
export class AgricultureComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  allData;
  regions;
  selectedRegion;
  months;
  selectedMonth;
  prediction;

  ngOnInit() {
    this.prediction = "-";
    this.months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    this.managerService.getRainfallJSON()
    .subscribe((res)=>{
      console.log(res);
      this.allData = res;
      this.regions = Object.keys(res);
      console.log(Object.keys(res));
    });
  }

  predict(){
    //console.log(this.crop, this.state);
    this.managerService.getRainfallJSON()
    .subscribe((res)=>{
      this.prediction = this.allData[this.selectedRegion][this.selectedMonth];
    })
  }

}

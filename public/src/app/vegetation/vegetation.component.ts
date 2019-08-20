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


  allData;
  states;
  selectedState;
  districts;
  selectedDistrict;
  months;
  selectedMonth;
  prediction;

  ngOnInit() {
    this.prediction = "";
    this.months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    this.managerService.getVegJSON()
    .subscribe((res)=>{
      console.log(res);
      this.allData = res;
      this.states = Object.keys(res);
      console.log(Object.keys(res));
    });
  }

  stateSelected(){
    console.log(this.selectedState);
    this.districts = Object.keys(this.allData[this.selectedState]);
  }

  predict(){
    if(this.selectedState && this.selectedDistrict && this.selectedMonth){
      console.log(this.selectedState, this.selectedDistrict, this.selectedMonth);

      this.prediction = this.allData[this.selectedState][this.selectedDistrict][this.selectedMonth];

      console.log(this.prediction);
    }
  }
}

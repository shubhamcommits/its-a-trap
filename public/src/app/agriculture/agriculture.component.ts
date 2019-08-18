import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/shared/manager.service';


@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.scss']
})
export class AgricultureComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  value: any;
  output: any;
  state: any;
  crop: any;

  ngOnInit() {
  }

  predict(){
    //console.log(this.crop, this.state);
    this.managerService.getRainfallJSON()
    .subscribe((res)=>{
      this.value = this.crop;
      console.log(this.value)
      this.managerService.getJSON()
      .subscribe((resp)=>{
          for(var i in resp){
            if(this.crop === resp[i]['type'] && resp[i]['rainfall'] < this.value){
              console.log(resp[i]);
              // this.managerService.getRainfallJSON()
              // .subscribe((resp)=>{})
            }
          }
        //console.log(this.value);
      })
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from 'src/shared/manager.service';

@Component({
  selector: 'app-lms-detail',
  templateUrl: './lms-detail.component.html',
  styleUrls: ['./lms-detail.component.scss']
})
export class LmsDetailComponent implements OnInit {
  details: any;
  slug: any;
  loadAPI: Promise<any>;
  constructor(private activatedRoute: ActivatedRoute,private managerService: ManagerService){
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
    this.slug = this.activatedRoute.snapshot.paramMap['params']['id'];
    this.managerService.getCourseJSON().subscribe((res)=>{
      console.log(res);
      this.details = res[this.slug];
    });

  }

  ngOnInit() {
  }
  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }
    isFound = true;
    if (isFound) {
        var dynamicScripts = [
          "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.3/owl.carousel.min.js",
          "../assets/js/owl.carousel.min.js",
          "../assets/js/circle-progress.min.js",
          "../assets/js/main.js",
        ];

        for (var i = 0; i < dynamicScripts.length; i++) {
            const body = <HTMLDivElement> document.body;
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            body.appendChild(node);
        }

    }
  }
}

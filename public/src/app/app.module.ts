import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

import { NgxUiLoaderModule, NgxUiLoaderConfig } from  'ngx-ui-loader';
import { AgricultureComponent } from './agriculture/agriculture.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {

  "bgsColor": "rgb(0, 95, 213)",
  "bgsOpacity": 0.9,
  "bgsPosition": "center-center",
  "bgsSize": 100,
  "bgsType": "three-bounce",
  "blur": 15,
  "fgsColor": "#fff",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-spin-clockwise-fade-rotating",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "overlayColor": "rgb(0, 95, 213)",
  "pbColor": "#000",
  "pbDirection": "ltr",
  "pbThickness": 5,
  "hasProgressBar": false,
  "text": "Please Hold on...",
  "textColor": "#fff",
  "textPosition": "center-center",
  //"threshold": 500 // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AgricultureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }

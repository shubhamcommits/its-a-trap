import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { BlockchainService } from 'src/shared/blockchain.service';

import { NgxUiLoaderModule, NgxUiLoaderConfig } from  'ngx-ui-loader';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { BlockViewComponent } from './blockchain/components/block-view/block-view.component';

import { BlockchainViewerComponent } from './blockchain/pages/blockchain-viewer/blockchain-viewer.component';
import { SettingsComponent } from './blockchain/pages/settings/settings.component';
import { CreateTransactionComponent } from './blockchain/pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './blockchain/pages/pending-transactions/pending-transactions.component';
import { WalletBalanceComponent } from './blockchain/pages/wallet-balance/wallet-balance.component';
import { TransactionsTableComponent } from './blockchain/components/transactions-table/transactions-table.component';
import { MentorComponent } from './mentor/mentor.component';
import { ManagerComponent } from './manager/manager.component';
import { MentorLoginComponent } from './mentor/mentor-login/mentor-login.component';
import { MentorSignupComponent } from './mentor/mentor-signup/mentor-signup.component';
import { ManagerSignupComponent } from './manager/manager-signup/manager-signup.component';
import { ManagerLoginComponent } from './manager/manager-login/manager-login.component';
import { AuthService } from 'src/shared/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerDashboardComponent } from './manager/manager-dashboard/manager-dashboard.component';

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
    AgricultureComponent,
    BlockchainComponent,
    BlockViewComponent,
    BlockchainViewerComponent,
    SettingsComponent,
    TransactionsTableComponent,
    CreateTransactionComponent,
    PendingTransactionsComponent,
    WalletBalanceComponent,
    MentorComponent,
    ManagerComponent,
    MentorLoginComponent,
    MentorSignupComponent,
    ManagerSignupComponent,
    ManagerLoginComponent,
    DashboardComponent,
    ManagerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, 
    BlockchainService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

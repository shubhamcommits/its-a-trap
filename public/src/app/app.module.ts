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
import { ManagerMentorShgDetailComponent } from './manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component';
import { ManagerPendingMentorsComponent } from './manager/manager-pending-mentors/manager-pending-mentors.component';
import { ManagerPendingShgsComponent } from './manager/manager-pending-shgs/manager-pending-shgs.component';
import { ManagerService } from 'src/shared/manager.service';

import { LoginJoinShgComponent } from './login/login-join-shg/login-join-shg.component';
import { LoginMyShgComponent } from './login/login-my-shg/login-my-shg.component';
import { LoginFundShgComponent } from './login/login-fund-shg/login-fund-shg.component';
import { LoginFundComponent } from './login/login-fund/login-fund.component';
import { MentorApplyShgComponent } from './mentor/mentor-apply-shg/mentor-apply-shg.component';
import { MentorMyShgComponent } from './mentor/mentor-my-shg/mentor-my-shg.component';
import { MentorLmsComponent } from './mentor/mentor-lms/mentor-lms.component';
import { LmsComponent } from './lms/lms.component';
import { ShgService } from 'src/shared/shg.service';
import { UserService } from 'src/shared/user.service';
import { VegetationComponent } from './vegetation/vegetation.component';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {

  "bgsColor": "#28c3d4",
  "bgsOpacity": 0.9,
  "bgsPosition": "center-center",
  "bgsSize": 100,
  "bgsType": "three-bounce",
  "blur": 15,
  "fgsColor": "black",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-spin-clockwise-fade-rotating",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "overlayColor": "#28c3d4",
  "pbColor": "black",
  "pbDirection": "ltr",
  "pbThickness": 5,
  "hasProgressBar": false,
  "text": "Please Hold on...",
  "textColor": "black",
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
    ManagerDashboardComponent,
    ManagerMentorShgDetailComponent,
    ManagerPendingMentorsComponent,
    ManagerPendingShgsComponent,
    LoginJoinShgComponent,
    LoginMyShgComponent,
    LoginFundShgComponent,
    LoginFundComponent,
    MentorApplyShgComponent,
    MentorMyShgComponent,
    MentorLmsComponent,
    LmsComponent,
    VegetationComponent
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
    AuthService,
    ManagerService,
    ShgService,
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { BlockchainComponent } from './blockchain/blockchain.component';

import { BlockchainViewerComponent } from './blockchain/pages/blockchain-viewer/blockchain-viewer.component';
import { SettingsComponent } from './blockchain/pages/settings/settings.component';
import { CreateTransactionComponent } from './blockchain/pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './blockchain/pages/pending-transactions/pending-transactions.component';
import { WalletBalanceComponent } from './blockchain/pages/wallet-balance/wallet-balance.component';
import { ManagerLoginComponent } from './manager/manager-login/manager-login.component';
import { ManagerSignupComponent } from './manager/manager-signup/manager-signup.component';
import { MentorLoginComponent } from './mentor/mentor-login/mentor-login.component';
import { MentorSignupComponent } from './mentor/mentor-signup/mentor-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerDashboardComponent } from './manager/manager-dashboard/manager-dashboard.component';
import { ManagerPendingMentorsComponent } from './manager/manager-pending-mentors/manager-pending-mentors.component';
import { ManagerPendingShgsComponent } from './manager/manager-pending-shgs/manager-pending-shgs.component';
import { LmsComponent } from './lms/lms.component';
import { ManagerMentorShgDetailComponent } from './manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component';
import { AgricultureComponent } from './agriculture/agriculture.component';

import { LoginJoinShgComponent } from './login/login-join-shg/login-join-shg.component';
import { LoginMyShgComponent } from './login/login-my-shg/login-my-shg.component';
import { LoginFundShgComponent } from './login/login-fund-shg/login-fund-shg.component';
import { LoginFundComponent } from './login/login-fund/login-fund.component';
import { VegetationComponent } from './vegetation/vegetation.component';

import { MentorLmsComponent } from './mentor/mentor-lms/mentor-lms.component';
import { MentorApplyShgComponent } from './mentor/mentor-apply-shg/mentor-apply-shg.component';
import { MentorMyShgComponent } from './mentor/mentor-my-shg/mentor-my-shg.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-mentor', component: MentorLoginComponent },
  { path: 'login-manager', component: ManagerLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent},
  // { path: 'transaction1', component: BlockchainComponent},
  { path: 'signup-mentor', component: MentorSignupComponent},
  { path: 'signup-manager', component: ManagerSignupComponent},
  { path: 'transaction', component: BlockchainViewerComponent },
  { path: 'settings', component: SettingsComponent},
  { path: 'new/transaction', component: CreateTransactionComponent },
  { path: 'new/transaction/pending', component: PendingTransactionsComponent },
  { path: 'wallet/:address', component: WalletBalanceComponent },
  { path: 'manager/dashboard/mentors', component:ManagerDashboardComponent },
  { path: 'dashboard/mantor', component:DashboardComponent },
  { path: 'manager/dashboard/pending/mentors', component: ManagerPendingMentorsComponent },
  { path: 'manager/dashboard/pending/shg', component: ManagerPendingShgsComponent },
  { path: 'lms', component: LmsComponent },
  { path: 'manager/mentor/shg/detail/:id', component: ManagerMentorShgDetailComponent},
  { path: 'manager/dashboard/agriculture', component: AgricultureComponent},
  { path: 'user/join-shg', component:LoginJoinShgComponent},
  { path: 'user/my-shg', component:LoginMyShgComponent},
  { path: 'user/fund-shg', component:LoginFundShgComponent},
  { path: 'user/fund', component:LoginFundComponent},
  { path: 'manager/dashboard/vegetation', component: VegetationComponent},
  { path: 'mentor/apply-shg', component:MentorApplyShgComponent},
  { path: 'mentor/my-shg', component:MentorMyShgComponent},
  { path: 'mentor/lms', component:MentorLmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

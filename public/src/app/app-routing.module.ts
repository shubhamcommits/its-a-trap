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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

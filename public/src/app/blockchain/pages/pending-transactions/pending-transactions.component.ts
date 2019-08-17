import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockchainService } from '../../../../shared/blockchain.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {
  public pendingTransactions = [];
  public miningInProgress = false;
  public justAddedTx = false;

  constructor(private blockchainService: BlockchainService, private router: Router, private route: ActivatedRoute,  private ngxService: NgxUiLoaderService) {
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
    if (this.route.snapshot.paramMap.get('addedTx')) {
      this.justAddedTx = true;

      setTimeout(() => {
        this.justAddedTx = false;
      }, 4000);
    }
  }

  minePendingTransactions() {
    this.miningInProgress = true;
    this.blockchainService.minePendingTransactions();
    this.miningInProgress = false;
    this.router.navigate(['/transaction']);
  }
}

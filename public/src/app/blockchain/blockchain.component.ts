import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/shared/blockchain.service';
BlockchainService
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {
  
  public blockchain;
  public showInfoMessage = true;

  constructor(private blockchainService: BlockchainService, private ngxService: NgxUiLoaderService) {
    this.blockchain = blockchainService.blockchainInstance;
  }

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
  }

  thereArePendingTransactions() {
    return this.blockchain.pendingTransactions.length > 0;
  }

}

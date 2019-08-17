import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../../../shared/blockchain.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public blockchain;

  constructor(private blockchainService: BlockchainService,  private ngxService: NgxUiLoaderService) {
    this.blockchain = blockchainService.blockchainInstance;
  }

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
  }
}

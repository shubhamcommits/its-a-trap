(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/agriculture/agriculture.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/agriculture/agriculture.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>agriculture works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Believe me, it's a TRAP!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n<app-navbar></app-navbar>\n\n<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 offset-md-0\">\n        <router-outlet>\n            <ngx-ui-loader></ngx-ui-loader>\n        </router-outlet>\n      </div>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/blockchain.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/blockchain.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n        <div class=\"col-lg-12\" style=\"text-align:center;\">\n          <h1 style=\"font-weight:inherit; font-size: 55px;\">Your Transactions</h1>\n          <div class=\"col-sm-12\">\n            Brand Line 1\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"mt-4 col-md-12\">\n        </div>\n      </div>\n<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-2\">\n                </div>\n                <div class=\"col-md-10\">\n                        <button style=\"background-color: rgb(0, 95, 213); margin-right: 20px; float: right;\" routerLink=\"/new/transaction/pending\" class=\"btn btn-primary\" *ngIf=\"thereArePendingTransactions()\">\n                            Pending transactions\n                            <span class=\"badge badge-light\">{{blockchain.pendingTransactions.length}}</span>\n                        </button>\n                        &nbsp;\n                        <button style=\"background-color: rgb(0, 95, 213); margin-right: 0px; float: right;\" routerLink=\"/settings\" class=\"btn btn-primary\">\n                            Settings\n                        </button>\n                        &nbsp;\n                        <button style=\"background-color: rgb(0, 95, 213); float: right; margin-right: 10px;\" routerLink=\"/new/transaction\" class=\"btn btn-primary\">\n                            Create transaction\n                        </button>\n                    </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/components/block-view/block-view.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/components/block-view/block-view.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [class.border-primary]=\"isSelectedBlock()\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Block {{ getBlockNumber() }} <small class=\"text-muted\" *ngIf=\"block.previousHash == 0\">(Genesis block)</small></h5>\n    </div>\n\n     <ul class=\"list-group list-group-flush\">\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Hash</span>\n\t    \t<br>\n\t    \t<div class=\"text-truncate\" [style.color]=\"'#' + block.hash.substring(0,6)\">\n\t    \t\t<small>{{ block.hash }}</small>\n\t    \t</div>\n\n\t\t\t<br>\n\t\t\t<span class=\"\">Hash of previous block</span>\n\t    \t<br>\n\n\t    \t<div class=\"text-truncate\" [style.color]=\"'#' + block.previousHash.substring(0,6)\">\n\t    \t\t<small>{{ block.previousHash }}</small>\n\t    \t</div>\n\t    </li>\n\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Nonce</span><br>\n\t    \t<div class=\"text-truncate text-muted\">\n\t    \t\t<small>{{ block.nonce }}</small>\n\t    \t</div>\n\t    </li>\n\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Timestamp</span><br>\n\t    \t<div class=\"text-truncate text-muted\">\n\t    \t\t<small>{{ block.timestamp }}</small>\n\t    \t</div>\n\t    </li>\n\t  </ul>\n\n\t  <!-- <div class=\"card-body\"> -->\n\t  \t<!-- <span class=\"card-link\" *ngIf=\"!blockHasTx()\">Block has no transactions</span> -->\n\t  \t<!-- <span class=\"card-link\" *ngIf=\"blockHasTx()\">Contains {{block.transactions.length}} transactions</span> -->\n\t  <!-- </div> -->\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/components/transactions-table/transactions-table.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/components/transactions-table/transactions-table.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"transactions.length === 0\">This block has no transactions</p>\n\n<table class=\"table table-hover table-striped\" *ngIf=\"transactions.length > 0\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">From</th>\n      <th scope=\"col\">To</th>\n      <th scope=\"col\">Amount</th>\n      <th scope=\"col\">Timestamp</th>\n      <th scope=\"col\">Valid?</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let tx of transactions; index as index\">\n      <td>{{index}}</td>\n      <td class=\"text-truncate\" style=\"max-width: 100px;\">\n\n        <a [routerLink]=\"['/wallet', tx.fromAddress]\" *ngIf=\"tx.fromAddress !== null\">{{tx.fromAddress}}</a>\n\n        <span *ngIf=\"tx.fromAddress === null\">System</span>\n\n        <span class=\"text-muted\" *ngIf=\"blockchainService.addressIsFromCurrentUser(tx.fromAddress)\">\n          <br><small>(That's yours!)</small>\n        </span>\n      </td>\n      <td class=\"text-truncate\" style=\"max-width: 100px;\">\n          <a [routerLink]=\"['/wallet', tx.toAddress]\">{{tx.toAddress}}</a>\n\n          <span class=\"text-muted\" *ngIf=\"blockchainService.addressIsFromCurrentUser(tx.toAddress)\">\n            <br><small>(That's yours!)</small>\n          </span>\n      </td>\n      <td>\n        {{tx.amount}}\n        <span *ngIf=\"tx.fromAddress === null\" class=\"text-muted\"><br><small>(Block reward)</small></span>\n      </td>\n      <td>\n        {{tx.timestamp}}<br>\n        <span class=\"text-muted\"><small>{{tx.timestamp |date:'MMM d, y, HH:mm'}}</small></span>\n      </td>\n      <td style=\"max-width: 40px;\">\n        <span *ngIf=\"tx.isValid()\">✓</span>\n        <span *ngIf=\"!tx.isValid()\">✗</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-blockchain>\n</app-blockchain>\n<div class=\"container\">\n\t<h1>Blocks on chain</h1>\n\t<p>Each card represents a block on the chain. Click on a block to see the transactions stored inside.</p>\n</div>\n\n<div class=\"container\" style=\"overflow-x: scroll;white-space: nowrap;\">\n\t<app-block-view \n\t\t*ngFor=\"let block of blocks\" \n\t\t[block]=\"block\" \n\t\t[selectedBlock]=\"selectedBlock\"\n\t\t(click)=\"showTransactions(block)\"\n\t></app-block-view>\n</div>\n\n<br><br>\n\n<div class=\"container\">\n\t<h1>Transactions inside block {{ getBlockNumber(selectedBlock) }}</h1>\n\n\t<app-transactions-table\n\t\t[transactions]=\"selectedBlock.transactions\"\n\t></app-transactions-table>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/create-transaction/create-transaction.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/pages/create-transaction/create-transaction.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"mt-4 col-md-12\">\n        </div>\n\t  </div>\n\t  \n<div class=\"container\">\n\t<h1>Create transaction</h1>\n\t<p>Transfer some money to someone!</p>\n\n\t<br>\n\n\t<div class=\"form-group\">\n\t    <label for=\"fromAddress\">From address</label>\n\t    <input type=\"text\" class=\"form-control\" id=\"fromAddress\" aria-describedby=\"fromAddressHelp\" [(ngModel)]=\"ownWalletKey.publicKey\" disabled>\n\t    <small id=\"fromAddressHelp\" class=\"form-text text-muted\">\n\t    \tThis is your wallet address. You cannot change it because you can only spend your own coins.\n\t    </small>\n  \t</div>\n\n  \t<div class=\"form-group\">\n\t    <label for=\"toAddress\">To address</label>\n\t    <input type=\"text\" class=\"form-control\" id=\"toAddress\" aria-describedby=\"toAddressHelp\" [(ngModel)]=\"newTx.toAddress\">\n\t    <small id=\"toAddressHelp\" class=\"form-text text-muted\">\n\t    \tThe address of the wallet where you want to send the money to. You can type random text here (if you are not interested in recovering the funds)\n\t    </small>\n  \t</div>\n\n  \t<div class=\"form-group\">\n\t    <label for=\"amount\">Amount</label>\n\t    <input type=\"number\" class=\"form-control\" id=\"amount\" aria-describedby=\"amountHelp\" [(ngModel)]=\"newTx.amount\">\n\t    <small id=\"amountHelp\" class=\"form-text text-muted\">\n\t    \tYou can transfer any amount. Account balance is not checked in this demo. Have at it!\n\t    </small>\n  \t</div>\n\n  \t<button (click)=\"createTransaction()\" type=\"submit\" class=\"btn btn-primary\">Sign & create transaction</button>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/pending-transactions/pending-transactions.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/pages/pending-transactions/pending-transactions.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"mt-4 col-md-12\">\n        </div>\n\t  </div>\n\t  \n<div class=\"container\">\n\n\t<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"justAddedTx\">\n\t\tTransaction created successfully!\n\t</div>\n\n\t<h1>Pending transactions</h1>\n\t<p>These transactions are waiting to be included in the next block. Next block is created when you start the mining process.</p>\n\n\t<app-transactions-table\n\t\t[transactions]=\"pendingTransactions\">\n\t</app-transactions-table>\n\n\t <button class=\"btn btn-primary\" *ngIf=\"pendingTransactions.length > 0 && miningInProgress === false\" (click)=\"minePendingTransactions()\">\n     \tStart mining\n    </button>\n\n    <div *ngIf=\"miningInProgress === true\">\n    \tMining block.. Hang on...\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/settings/settings.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/pages/settings/settings.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n    </div>\n  </div>\n  \n<div class=\"container\">\n  <h1>Settings</h1>\n  <p>Control how the blockchain behaves when new transactions or blocks are created. Changes are automatically saved.</p>\n\n  <br>\n\n  <div class=\"form-group\">\n    <label for=\"difficulty\">Difficulty</label>\n    <input type=\"number\" class=\"form-control\" id=\"difficulty\" aria-describedby=\"difficultyHelp\" [(ngModel)]=\"blockchain.difficulty\">\n    <small id=\"difficultyHelp\" class=\"form-text text-muted\">\n    \tDifficulty controls how long the mining process takes. Higher numbers will make mining a lot slower!\n    \t<br>Default: 2\n    </small>\n  </div>\n\n  <br>\n\n  <div class=\"form-group\">\n    <label for=\"miningReward\">Mining reward</label>\n    <input type=\"number\" class=\"form-control\" id=\"miningReward\" aria-describedby=\"miningRewardHelp\" [(ngModel)]=\"blockchain.miningReward\">\n    <small id=\"miningRewardHelp\" class=\"form-text text-muted\">\n\t\tHow much \"coins\" a miner receives for successfully creating a new block for the chain.\n\t\t<br>Default: 100\n    </small>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/wallet-balance/wallet-balance.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/pages/wallet-balance/wallet-balance.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>Wallet details</h1>\n\n\t<p style=\"word-wrap:break-word;\">\n\t\t<strong>Address:</strong>\n\t\t<br>\n\t\t{{walletAddress}}\n\t</p>\n\n\t<p>\n\t\t<strong>Balance:</strong>\n\t\t<br>\n\t\t{{ balance }}\n\t</p>\n\n\t<hr>\n\n\t<h1>Transactions</h1>\n\t<p *ngIf=\"transactions.length === 0\">This wallet has made no transactions (yet)</p>\n\t<app-transactions-table\n\t\t[transactions]=\"transactions\"\n\t\t*ngIf=\"transactions.length > 0\"\n\t></app-transactions-table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>dashboard works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Reboot The Earth!</h1>\n      <div class=\"col-sm-12\">\n        Brand Line 1\n      </div>\n    </div>\n  \n  </div>\n  \n  <div class=\"row\">\n      <div class=\"mt-4 col-md-12\">\n  \n  </div>\n    </div>\n  <div class=\"row\">\n  \n      <div class=\"col-sm-6\">\n    <h4>Heading 1?</h4>\n    <p>Testing data...\n    </p>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n        <button class=\"btn btn-lg btn-primary form-control\" style=\"background-color: rgb(0, 95, 213)\"  routerLinkActive=\"active\" [routerLink]=\"['/login']\" >Login Now!</button>\n        </div>\n      </div>\n      </div>\n  \n      <div class=\"col-sm-6\">\n    <h4>Heading 2?</h4>\n    <p>Testing data...\n\n    </p>\n      <div class=\"row\">\n          <div class=\"col-sm-12\">\n          <button class=\"btn btn-lg btn btn-primary form-control\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/signup']\" routerLinkActive=\"active\">Register Here!</button>\n          </div>\n        </div>\n  \n      </div>\n  \n      </div>\n\n<!-- <div class=\"stars small\"></div>\n<div class=\"stars medium\"></div>\n<div class=\"stars large\"></div> -->\n\n<!-- <div class=\"wrapper\">\n  <div class=\"earth\">\n    <i class=\"fas fa-globe-americas\"></i>\n    <div class=\"face\">\n      <div></div>\n    </div>\n  </div>\n  <div class=\"moon\">\n    <div class=\"face\">\n      <div></div>\n    </div>\n  </div>\n</div> -->\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Login to your Account</h1>\n      <div class=\"col-sm-12\">\n        Brand Line 1\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n\n  \n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" type=\"email\" placeholder=\"Your Email\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" type=\"password\"\n              placeholder=\"Your Password\">\n  \n          </div>\n  \n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-success btn-lg form-control\" style=\"background-color: #24662A\" (click)=\"loginUser()\">LOGIN</button>\n  \n          </div>\n  \n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager-dashboard/manager-dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager-dashboard/manager-dashboard.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>manager-dashboard works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager-login/manager-login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager-login/manager-login.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Login to your Manager Account</h1>\n      <div class=\"col-sm-12\">\n        Brand Line 1\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n\n  \n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input class=\"form-control\" name=\"email\" id=\"email\" type=\"email\" placeholder=\"Your Email\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input class=\"form-control\" name=\"password\" id=\"password\" type=\"password\"\n              placeholder=\"Your Password\">\n  \n          </div>\n  \n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-success btn-lg form-control\" style=\"background-color: #24662A\" (click)=\"login()\">LOGIN</button>\n  \n          </div>\n  \n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager-signup/manager-signup.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager-signup/manager-signup.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Create your new Manager Account</h1>\n      <div class=\"col-sm-12\">\n        Brandline 1\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n  \n    </div>\n  \n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n  \n  \n          <div class=\"input-group\">\n  \n  \n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">FIRST NAME</label>\n            <input class=\"form-control\" name=\"first_name\" id=\"firstname\" type=\"text\"\n              placeholder=\"Your First Name\">\n  \n          </div>\n\n          <div class=\"input-group\">\n  \n  \n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">LAST NAME</label>\n                <input class=\"form-control\" name=\"last_name\" id=\"lastname\" type=\"text\"\n                  placeholder=\"Your Last Name\">\n      \n              </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email_\" placeholder=\"Your Email\">\n  \n  \n          </div>\n          <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">AGE</label>\n                <input type=\"number\" class=\"form-control\" name=\"age\" id=\"age\" placeholder=\"Your Age\">\n      \n      \n              </div>\n                        <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">SEX</label>\n                <input type=\"text\" class=\"form-control\" name=\"sex\" id=\"sex\" placeholder=\"Your Sex\">\n      \n      \n              </div>\n                  <div class=\"input-group\">\n                        <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">ADDRESS</label>\n                        <input type=\"text\" class=\"form-control\" name=\"address\" id=\"address\" placeholder=\"Your Address\">\n              \n              \n                      </div>\n                      <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">COUNTRY</label>\n                            <input type=\"text\" class=\"form-control\" name=\"country\" id=\"country\" placeholder=\"Your Country\">\n                  \n                  \n                          </div>\n                          <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONTACT NUMBER</label>\n                            <input type=\"number\" class=\"form-control\" name=\"contact\" id=\"contact\" placeholder=\"Your Contact Number\">\n                  \n                  \n                          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password_\"\n              placeholder=\"Your Password\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONFIRM PASSWORD</label>\n            <input type=\"password\" class=\"form-control\" name=\"cpass\" id=\"cpass_\" placeholder=\"Confirm Password\">\n  \n          </div>\n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-success btn-lg form-control\" type=\"submit\" style=\"background-color: #24662A\" (click)=\"register_caregiver()\">CREATE\n              ACCOUNT</button>\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n  \n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>manager works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-login/mentor-login.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mentor/mentor-login/mentor-login.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Login to your Mentor Account</h1>\n      <div class=\"col-sm-12\">\n        Brand Line 1\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n\n  \n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input class=\"form-control\" name=\"email\" id=\"email\" type=\"email\" placeholder=\"Your Email\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input class=\"form-control\" name=\"password\" id=\"password\" type=\"password\"\n              placeholder=\"Your Password\">\n  \n          </div>\n  \n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-success btn-lg form-control\" style=\"background-color: #24662A\" (click)=\"login()\">LOGIN</button>\n  \n          </div>\n  \n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-signup/mentor-signup.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mentor/mentor-signup/mentor-signup.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Create your new Mentor Account</h1>\n      <div class=\"col-sm-12\">\n        Brandline 1\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n  \n    </div>\n  \n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n  \n  \n          <div class=\"input-group\">\n  \n  \n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">FIRST NAME</label>\n            <input class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" id=\"firstname\" type=\"text\"\n              placeholder=\"Your First Name\">\n  \n          </div>\n\n          <div class=\"input-group\">\n  \n  \n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">LAST NAME</label>\n                <input class=\"form-control\" [(ngModel)]=\"last_model\" name=\"last_name\" id=\"lastname\" type=\"text\"\n                  placeholder=\"Your Last Name\">\n      \n              </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email_\" placeholder=\"Your Email\">\n  \n  \n          </div>\n          <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">AGE</label>\n                <input type=\"number\" class=\"form-control\" name=\"age\" id=\"age\" placeholder=\"Your Age\">\n      \n      \n              </div>\n                        <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">SEX</label>\n                <input type=\"text\" class=\"form-control\" name=\"sex\" id=\"sex\" placeholder=\"Your Sex\">\n      \n      \n              </div>\n                  <div class=\"input-group\">\n                        <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">ADDRESS</label>\n                        <input type=\"text\" class=\"form-control\" name=\"address\" id=\"address\" placeholder=\"Your Address\">\n              \n              \n                      </div>\n                      <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">COUNTRY</label>\n                            <input type=\"text\" class=\"form-control\" name=\"country\" id=\"country\" placeholder=\"Your Country\">\n                  \n                  \n                          </div>\n                          <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONTACT NUMBER</label>\n                            <input type=\"number\" class=\"form-control\" name=\"contact\" id=\"contact\" placeholder=\"Your Contact Number\">\n                  \n                  \n                          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password_\"\n              placeholder=\"Your Password\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONFIRM PASSWORD</label>\n            <input type=\"password\" class=\"form-control\" name=\"cpass\" id=\"cpass_\" placeholder=\"Confirm Password\">\n  \n          </div>\n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-success btn-lg form-control\" type=\"submit\" style=\"background-color: #24662A\" (click)=\"register_caregiver()\">CREATE\n              ACCOUNT</button>\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n  \n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mentor/mentor.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>mentor works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <span class=\"nav-button\">\n        \t&#9776;\n        </span>\n    <ul class=\"nav\" role=\"navigation\">\n      <li class=\"active\">\n        <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >Home</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" >Login</a>\n        <ul class=\"nav__sub\">\n          <li>\n            <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" >User</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/login-mentor']\" routerLinkActive=\"router-link-active\" >Mentor</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/login-manager']\" routerLinkActive=\"router-link-active\" >Manager</a>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['/signup']\" routerLinkActive=\"router-link-active\" >Signup</a>\n        <ul class=\"nav__sub\">\n          <li>\n            <a [routerLink]=\"['/signup']\" routerLinkActive=\"router-link-active\" >User</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/signup-mentor']\" routerLinkActive=\"router-link-active\" >Mentor</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/signup-manager']\" routerLinkActive=\"router-link-active\" >Manager</a>\n          </li>\n        </ul>\n      </li>\n      <li>\n          <a [routerLink]=\"['/transaction']\" routerLinkActive=\"router-link-active\">Transactions</a>\n        </li>\n      <li>\n        <a href=\"#\">contact</a>\n      </li>\n    </ul>\n\n\n    <ul class=\"nav\" role=\"navigation\" *ngIf=\"at_manager\">\n      <li class=\"active\">\n        <a [routerLink]=\"['/manager/mentors']\" routerLinkActive=\"router-link-active\" >Mentors</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/manager/pending']\" routerLinkActive=\"router-link-active\" >Pending</a>\n        <ul class=\"nav__sub\">\n          <li>\n            <a [routerLink]=\"['/manager/pending/mentors']\" routerLinkActive=\"router-link-active\" >Mentors</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/manager/pending/shg']\" routerLinkActive=\"router-link-active\" >SHGs</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"active\">\n        <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >Log Out</a>\n      </li>\n\n\n\n    </ul>\n  </nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Create your new User Account</h1>\n      <div class=\"col-sm-12\">\n        Brandline 1\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n  \n    </div>\n  \n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n  \n  \n          <div class=\"input-group\">\n  \n  \n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">FIRST NAME</label>\n            <input class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" id=\"firstname\" type=\"text\"\n              placeholder=\"Your First Name\">\n  \n          </div>\n\n          <div class=\"input-group\">\n  \n  \n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">LAST NAME</label>\n                <input class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" id=\"lastname\" type=\"text\"\n                  placeholder=\"Your Last Name\">\n      \n              </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email_\" placeholder=\"Your Email\">\n  \n  \n          </div>\n          <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">AGE</label>\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"age\" name=\"age\" id=\"age\" placeholder=\"Your Age\">\n      \n      \n              </div>\n                        <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">SEX</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sex\" name=\"sex\" id=\"sex\" placeholder=\"Your Sex\">\n      \n      \n              </div>\n                  <div class=\"input-group\">\n                        <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">ADDRESS</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"address\" name=\"address\" id=\"address\" placeholder=\"Your Address\">\n              \n              \n                      </div>\n                      <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">COUNTRY</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"country\" name=\"country\" id=\"country\" placeholder=\"Your Country\">\n                  \n                  \n                          </div>\n                          <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONTACT NUMBER</label>\n                            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"contact\" name=\"contact\" id=\"contact\" placeholder=\"Your Contact Number\">\n                  \n                  \n                          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password_\"\n              placeholder=\"Your Password\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONFIRM PASSWORD</label>\n            <input type=\"password\" class=\"form-control\" name=\"cpass\" id=\"cpass_\" placeholder=\"Confirm Password\">\n  \n          </div>\n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-success btn-lg form-control\" type=\"submit\" style=\"background-color: #24662A\" (click)=\"signupUser()\">CREATE\n              ACCOUNT</button>\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n  \n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/agriculture/agriculture.component.scss":
/*!********************************************************!*\
  !*** ./src/app/agriculture/agriculture.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FncmljdWx0dXJlL2FncmljdWx0dXJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/agriculture/agriculture.component.ts":
/*!******************************************************!*\
  !*** ./src/app/agriculture/agriculture.component.ts ***!
  \******************************************************/
/*! exports provided: AgricultureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgricultureComponent", function() { return AgricultureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgricultureComponent = class AgricultureComponent {
    constructor() { }
    ngOnInit() {
    }
};
AgricultureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agriculture',
        template: __webpack_require__(/*! raw-loader!./agriculture.component.html */ "./node_modules/raw-loader/index.js!./src/app/agriculture/agriculture.component.html"),
        styles: [__webpack_require__(/*! ./agriculture.component.scss */ "./src/app/agriculture/agriculture.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AgricultureComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _blockchain_pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blockchain/pages/blockchain-viewer/blockchain-viewer.component */ "./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.ts");
/* harmony import */ var _blockchain_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blockchain/pages/settings/settings.component */ "./src/app/blockchain/pages/settings/settings.component.ts");
/* harmony import */ var _blockchain_pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blockchain/pages/create-transaction/create-transaction.component */ "./src/app/blockchain/pages/create-transaction/create-transaction.component.ts");
/* harmony import */ var _blockchain_pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blockchain/pages/pending-transactions/pending-transactions.component */ "./src/app/blockchain/pages/pending-transactions/pending-transactions.component.ts");
/* harmony import */ var _blockchain_pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blockchain/pages/wallet-balance/wallet-balance.component */ "./src/app/blockchain/pages/wallet-balance/wallet-balance.component.ts");
/* harmony import */ var _manager_manager_login_manager_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manager/manager-login/manager-login.component */ "./src/app/manager/manager-login/manager-login.component.ts");
/* harmony import */ var _manager_manager_signup_manager_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manager/manager-signup/manager-signup.component */ "./src/app/manager/manager-signup/manager-signup.component.ts");
/* harmony import */ var _mentor_mentor_login_mentor_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mentor/mentor-login/mentor-login.component */ "./src/app/mentor/mentor-login/mentor-login.component.ts");
/* harmony import */ var _mentor_mentor_signup_mentor_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mentor/mentor-signup/mentor-signup.component */ "./src/app/mentor/mentor-signup/mentor-signup.component.ts");















const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login-mentor', component: _mentor_mentor_login_mentor_login_component__WEBPACK_IMPORTED_MODULE_13__["MentorLoginComponent"] },
    { path: 'login-manager', component: _manager_manager_login_manager_login_component__WEBPACK_IMPORTED_MODULE_11__["ManagerLoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    // { path: 'transaction1', component: BlockchainComponent},
    { path: 'signup-mentor', component: _mentor_mentor_signup_mentor_signup_component__WEBPACK_IMPORTED_MODULE_14__["MentorSignupComponent"] },
    { path: 'signup-manager', component: _manager_manager_signup_manager_signup_component__WEBPACK_IMPORTED_MODULE_12__["ManagerSignupComponent"] },
    { path: 'transaction', component: _blockchain_pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_6__["BlockchainViewerComponent"] },
    { path: 'settings', component: _blockchain_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"] },
    { path: 'new/transaction', component: _blockchain_pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_8__["CreateTransactionComponent"] },
    { path: 'new/transaction/pending', component: _blockchain_pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_9__["PendingTransactionsComponent"] },
    { path: 'wallet/:address', component: _blockchain_pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_10__["WalletBalanceComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, h1, h2, h3, h4, h5, h6, p {\n  color: #005fd5;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhbnVqX2RyYWxsL0RvY3VtZW50cy9VTi9pdHMtYS10cmFwL3B1YmxpYy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBQTtFQUNBLHdJQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwe1xuXG4gICAgY29sb3I6IHJnYigwLCA5NSwgMjEzKTtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIFxuICAgIH0gICAgIiwiYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIGNvbG9yOiAjMDA1ZmQ1O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/shared/blockchain.service */ "./src/shared/blockchain.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _agriculture_agriculture_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./agriculture/agriculture.component */ "./src/app/agriculture/agriculture.component.ts");
/* harmony import */ var _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blockchain/blockchain.component */ "./src/app/blockchain/blockchain.component.ts");
/* harmony import */ var _blockchain_components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blockchain/components/block-view/block-view.component */ "./src/app/blockchain/components/block-view/block-view.component.ts");
/* harmony import */ var _blockchain_pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blockchain/pages/blockchain-viewer/blockchain-viewer.component */ "./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.ts");
/* harmony import */ var _blockchain_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blockchain/pages/settings/settings.component */ "./src/app/blockchain/pages/settings/settings.component.ts");
/* harmony import */ var _blockchain_pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blockchain/pages/create-transaction/create-transaction.component */ "./src/app/blockchain/pages/create-transaction/create-transaction.component.ts");
/* harmony import */ var _blockchain_pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blockchain/pages/pending-transactions/pending-transactions.component */ "./src/app/blockchain/pages/pending-transactions/pending-transactions.component.ts");
/* harmony import */ var _blockchain_pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blockchain/pages/wallet-balance/wallet-balance.component */ "./src/app/blockchain/pages/wallet-balance/wallet-balance.component.ts");
/* harmony import */ var _blockchain_components_transactions_table_transactions_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blockchain/components/transactions-table/transactions-table.component */ "./src/app/blockchain/components/transactions-table/transactions-table.component.ts");
/* harmony import */ var _mentor_mentor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mentor/mentor.component */ "./src/app/mentor/mentor.component.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/manager/manager.component.ts");
/* harmony import */ var _mentor_mentor_login_mentor_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mentor/mentor-login/mentor-login.component */ "./src/app/mentor/mentor-login/mentor-login.component.ts");
/* harmony import */ var _mentor_mentor_signup_mentor_signup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mentor/mentor-signup/mentor-signup.component */ "./src/app/mentor/mentor-signup/mentor-signup.component.ts");
/* harmony import */ var _manager_manager_signup_manager_signup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./manager/manager-signup/manager-signup.component */ "./src/app/manager/manager-signup/manager-signup.component.ts");
/* harmony import */ var _manager_manager_login_manager_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./manager/manager-login/manager-login.component */ "./src/app/manager/manager-login/manager-login.component.ts");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _manager_manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./manager/manager-dashboard/manager-dashboard.component */ "./src/app/manager/manager-dashboard/manager-dashboard.component.ts");
































const ngxUiLoaderConfig = {
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
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
            _agriculture_agriculture_component__WEBPACK_IMPORTED_MODULE_13__["AgricultureComponent"],
            _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_14__["BlockchainComponent"],
            _blockchain_components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_15__["BlockViewComponent"],
            _blockchain_pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_16__["BlockchainViewerComponent"],
            _blockchain_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
            _blockchain_components_transactions_table_transactions_table_component__WEBPACK_IMPORTED_MODULE_21__["TransactionsTableComponent"],
            _blockchain_pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_18__["CreateTransactionComponent"],
            _blockchain_pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_19__["PendingTransactionsComponent"],
            _blockchain_pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_20__["WalletBalanceComponent"],
            _mentor_mentor_component__WEBPACK_IMPORTED_MODULE_22__["MentorComponent"],
            _manager_manager_component__WEBPACK_IMPORTED_MODULE_23__["ManagerComponent"],
            _mentor_mentor_login_mentor_login_component__WEBPACK_IMPORTED_MODULE_24__["MentorLoginComponent"],
            _mentor_mentor_signup_mentor_signup_component__WEBPACK_IMPORTED_MODULE_25__["MentorSignupComponent"],
            _manager_manager_signup_manager_signup_component__WEBPACK_IMPORTED_MODULE_26__["ManagerSignupComponent"],
            _manager_manager_login_manager_login_component__WEBPACK_IMPORTED_MODULE_27__["ManagerLoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
            _manager_manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["ManagerDashboardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] },
            src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_11__["BlockchainService"],
            src_shared_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/blockchain/blockchain.component.scss":
/*!******************************************************!*\
  !*** ./src/app/blockchain/blockchain.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vYmxvY2tjaGFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/blockchain/blockchain.component.ts":
/*!****************************************************!*\
  !*** ./src/app/blockchain/blockchain.component.ts ***!
  \****************************************************/
/*! exports provided: BlockchainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainComponent", function() { return BlockchainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/blockchain.service */ "./src/shared/blockchain.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");



src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"];

let BlockchainComponent = class BlockchainComponent {
    constructor(blockchainService, ngxService) {
        this.blockchainService = blockchainService;
        this.ngxService = ngxService;
        this.showInfoMessage = true;
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
};
BlockchainComponent.ctorParameters = () => [
    { type: src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }
];
BlockchainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blockchain',
        template: __webpack_require__(/*! raw-loader!./blockchain.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/blockchain.component.html"),
        styles: [__webpack_require__(/*! ./blockchain.component.scss */ "./src/app/blockchain/blockchain.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
], BlockchainComponent);



/***/ }),

/***/ "./src/app/blockchain/components/block-view/block-view.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/blockchain/components/block-view/block-view.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 18rem;\n  display: inline-block;\n  margin: 0 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhbnVqX2RyYWxsL0RvY3VtZW50cy9VTi9pdHMtYS10cmFwL3B1YmxpYy9zcmMvYXBwL2Jsb2NrY2hhaW4vY29tcG9uZW50cy9ibG9jay12aWV3L2Jsb2NrLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jsb2NrY2hhaW4vY29tcG9uZW50cy9ibG9jay12aWV3L2Jsb2NrLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvYmxvY2tjaGFpbi9jb21wb25lbnRzL2Jsb2NrLXZpZXcvYmxvY2stdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuXHR3aWR0aDogMThyZW07IFxuXHRkaXNwbGF5OmlubGluZS1ibG9jazsgXG5cdG1hcmdpbjogMCAxMHB4IDAgMDtcbn0iLCIuY2FyZCB7XG4gIHdpZHRoOiAxOHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/blockchain/components/block-view/block-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/blockchain/components/block-view/block-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: BlockViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockViewComponent", function() { return BlockViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/blockchain.service */ "./src/shared/blockchain.service.ts");



let BlockViewComponent = class BlockViewComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocksInChain = blockchainService.blockchainInstance.chain;
    }
    ngOnInit() {
    }
    blockHasTx() {
        return this.block.transactions.length > 0;
    }
    isSelectedBlock() {
        return this.block === this.selectedBlock;
    }
    getBlockNumber() {
        return this.blocksInChain.indexOf(this.block) + 1;
    }
};
BlockViewComponent.ctorParameters = () => [
    { type: src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockViewComponent.prototype, "block", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockViewComponent.prototype, "selectedBlock", void 0);
BlockViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-view',
        template: __webpack_require__(/*! raw-loader!./block-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/components/block-view/block-view.component.html"),
        styles: [__webpack_require__(/*! ./block-view.component.scss */ "./src/app/blockchain/components/block-view/block-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
], BlockViewComponent);



/***/ }),

/***/ "./src/app/blockchain/components/transactions-table/transactions-table.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/blockchain/components/transactions-table/transactions-table.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vY29tcG9uZW50cy90cmFuc2FjdGlvbnMtdGFibGUvdHJhbnNhY3Rpb25zLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/blockchain/components/transactions-table/transactions-table.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/blockchain/components/transactions-table/transactions-table.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TransactionsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsTableComponent", function() { return TransactionsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/blockchain.service */ "./src/shared/blockchain.service.ts");



let TransactionsTableComponent = class TransactionsTableComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.transactions = [];
    }
    ngOnInit() {
    }
};
TransactionsTableComponent.ctorParameters = () => [
    { type: src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TransactionsTableComponent.prototype, "transactions", void 0);
TransactionsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions-table',
        template: __webpack_require__(/*! raw-loader!./transactions-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/components/transactions-table/transactions-table.component.html"),
        styles: [__webpack_require__(/*! ./transactions-table.component.scss */ "./src/app/blockchain/components/transactions-table/transactions-table.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
], TransactionsTableComponent);



/***/ }),

/***/ "./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vcGFnZXMvYmxvY2tjaGFpbi12aWV3ZXIvYmxvY2tjaGFpbi12aWV3ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BlockchainViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainViewerComponent", function() { return BlockchainViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/blockchain.service */ "./src/shared/blockchain.service.ts");



let BlockchainViewerComponent = class BlockchainViewerComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocks = [];
        this.selectedBlock = null;
        this.blocks = blockchainService.blockchainInstance.chain;
        this.selectedBlock = this.blocks[0];
        console.log(this.blocks);
    }
    ngOnInit() {
    }
    showTransactions(block) {
        console.log(block);
        this.selectedBlock = block;
        return false;
    }
    blockHasTx(block) {
        return block.transactions.length > 0;
    }
    selectedBlockHasTx() {
        return this.blockHasTx(this.selectedBlock);
    }
    isSelectedBlock(block) {
        return this.selectedBlock === block;
    }
    getBlockNumber(block) {
        return this.blocks.indexOf(block) + 1;
    }
};
BlockchainViewerComponent.ctorParameters = () => [
    { type: _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
BlockchainViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blockchain-viewer',
        template: __webpack_require__(/*! raw-loader!./blockchain-viewer.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.html"),
        styles: [__webpack_require__(/*! ./blockchain-viewer.component.scss */ "./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
], BlockchainViewerComponent);



/***/ }),

/***/ "./src/app/blockchain/pages/create-transaction/create-transaction.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/blockchain/pages/create-transaction/create-transaction.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vcGFnZXMvY3JlYXRlLXRyYW5zYWN0aW9uL2NyZWF0ZS10cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/blockchain/pages/create-transaction/create-transaction.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/blockchain/pages/create-transaction/create-transaction.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTransactionComponent", function() { return CreateTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/blockchain.service */ "./src/shared/blockchain.service.ts");
/* harmony import */ var savjeecoin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! savjeecoin */ "./node_modules/savjeecoin/src/blockchain.js");
/* harmony import */ var savjeecoin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(savjeecoin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");






let CreateTransactionComponent = class CreateTransactionComponent {
    constructor(blockchainService, router, ngxService) {
        this.blockchainService = blockchainService;
        this.router = router;
        this.ngxService = ngxService;
        this.newTx = new savjeecoin__WEBPACK_IMPORTED_MODULE_4__["Transaction"]();
        this.newTx = new savjeecoin__WEBPACK_IMPORTED_MODULE_4__["Transaction"]();
        this.ownWalletKey = blockchainService.walletKeys[0];
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
    createTransaction() {
        const newTx = this.newTx;
        // Set the FROM address and sign the transaction
        newTx.fromAddress = this.ownWalletKey.publicKey;
        newTx.signTransaction(this.ownWalletKey.keyObj);
        try {
            this.blockchainService.addTransaction(this.newTx);
        }
        catch (e) {
            alert(e);
            return;
        }
        this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
        this.newTx = new savjeecoin__WEBPACK_IMPORTED_MODULE_4__["Transaction"]();
    }
};
CreateTransactionComponent.ctorParameters = () => [
    { type: _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"] }
];
CreateTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-transaction',
        template: __webpack_require__(/*! raw-loader!./create-transaction.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/create-transaction/create-transaction.component.html"),
        styles: [__webpack_require__(/*! ./create-transaction.component.scss */ "./src/app/blockchain/pages/create-transaction/create-transaction.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]])
], CreateTransactionComponent);



/***/ }),

/***/ "./src/app/blockchain/pages/pending-transactions/pending-transactions.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/blockchain/pages/pending-transactions/pending-transactions.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vcGFnZXMvcGVuZGluZy10cmFuc2FjdGlvbnMvcGVuZGluZy10cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/blockchain/pages/pending-transactions/pending-transactions.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/blockchain/pages/pending-transactions/pending-transactions.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PendingTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingTransactionsComponent", function() { return PendingTransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/blockchain.service */ "./src/shared/blockchain.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");





let PendingTransactionsComponent = class PendingTransactionsComponent {
    constructor(blockchainService, router, route, ngxService) {
        this.blockchainService = blockchainService;
        this.router = router;
        this.route = route;
        this.ngxService = ngxService;
        this.pendingTransactions = [];
        this.miningInProgress = false;
        this.justAddedTx = false;
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
};
PendingTransactionsComponent.ctorParameters = () => [
    { type: _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"] }
];
PendingTransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pending-transactions',
        template: __webpack_require__(/*! raw-loader!./pending-transactions.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/pending-transactions/pending-transactions.component.html"),
        styles: [__webpack_require__(/*! ./pending-transactions.component.scss */ "./src/app/blockchain/pages/pending-transactions/pending-transactions.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]])
], PendingTransactionsComponent);



/***/ }),

/***/ "./src/app/blockchain/pages/settings/settings.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/blockchain/pages/settings/settings.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/blockchain/pages/settings/settings.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/blockchain/pages/settings/settings.component.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/blockchain.service */ "./src/shared/blockchain.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");




let SettingsComponent = class SettingsComponent {
    constructor(blockchainService, ngxService) {
        this.blockchainService = blockchainService;
        this.ngxService = ngxService;
        this.blockchain = blockchainService.blockchainInstance;
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/blockchain/pages/settings/settings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/blockchain/pages/wallet-balance/wallet-balance.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/blockchain/pages/wallet-balance/wallet-balance.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vcGFnZXMvd2FsbGV0LWJhbGFuY2Uvd2FsbGV0LWJhbGFuY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/blockchain/pages/wallet-balance/wallet-balance.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/blockchain/pages/wallet-balance/wallet-balance.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WalletBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletBalanceComponent", function() { return WalletBalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/blockchain.service */ "./src/shared/blockchain.service.ts");




let WalletBalanceComponent = class WalletBalanceComponent {
    constructor(route, blockchainService) {
        this.route = route;
        this.blockchainService = blockchainService;
        this.walletAddress = '';
        this.balance = 0;
        this.transactions = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.walletAddress = params['address'];
            const blockchain = this.blockchainService.blockchainInstance;
            this.balance = blockchain.getBalanceOfAddress(this.walletAddress);
            this.transactions = blockchain.getAllTransactionsForWallet(this.walletAddress);
        });
    }
};
WalletBalanceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"] }
];
WalletBalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet-balance',
        template: __webpack_require__(/*! raw-loader!./wallet-balance.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/wallet-balance/wallet-balance.component.html"),
        styles: [__webpack_require__(/*! ./wallet-balance.component.scss */ "./src/app/blockchain/pages/wallet-balance/wallet-balance.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"]])
], WalletBalanceComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #000000;\n  background-image: radial-gradient(#292929, #000000);\n}\n\n.stars.large {\n  height: 3px;\n  width: 3px;\n  background: transparent;\n  box-shadow: box-shadow(25);\n}\n\n.stars.medium {\n  height: 2px;\n  width: 2px;\n  background: transparent;\n  box-shadow: box-shadow(100);\n}\n\n.stars.small {\n  height: 1px;\n  width: 1px;\n  background: transparent;\n  box-shadow: box-shadow(150);\n}\n\n.wrapper {\n  width: 500px;\n  height: 350px;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.earth {\n  width: 250px;\n  height: 250px;\n  color: #1DA1C1;\n  font-size: 380px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 0 35px 2px rgba(255, 255, 255, 0.15), inset -25px -5px 40px 20px rgba(0, 0, 0, 0.6);\n}\n\n.earth i {\n  background-color: #8BC34A;\n  z-index: -1;\n  -webkit-animation: 5s ease-in-out 0s normal none infinite land-move;\n          animation: 5s ease-in-out 0s normal none infinite land-move;\n}\n\n.earth .face {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.earth .face div {\n  width: 60px;\n  height: 20px;\n  border-radius: 20px;\n  position: absolute;\n  top: 65%;\n  left: 30%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  box-shadow: inset 0px -22px 0px 0px #252730, 2px 5px 5px -3px rgba(0, 0, 0, 0.5);\n  -webkit-animation: 5s ease-in-out 0s normal none infinite face-move;\n          animation: 5s ease-in-out 0s normal none infinite face-move;\n}\n\n.earth .face div:before, .earth .face div:after {\n  content: \"\";\n  width: 40px;\n  height: 40px;\n  box-sizing: border-box;\n  background-color: #000000;\n  box-shadow: inset -5px -5px 0px 15px #ffffff, 2px 2px 5px rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  position: absolute;\n  -webkit-animation: 5s ease-in-out 0s normal none infinite eye-ball;\n          animation: 5s ease-in-out 0s normal none infinite eye-ball;\n  top: -80px;\n}\n\n.earth .face div:before {\n  left: -15px;\n}\n\n.earth .face div:after {\n  right: -15px;\n}\n\n.moon {\n  width: 80px;\n  height: 80px;\n  background-color: #e3f2fd;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-animation: 5s ease-in-out 0s normal none infinite moon-move;\n          animation: 5s ease-in-out 0s normal none infinite moon-move;\n  box-shadow: 0 0 35px 2px rgba(255, 255, 255, 0.5), inset -25px -5px 30px 10px rgba(0, 0, 0, 0.5);\n}\n\n.moon .face {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-transform-origin: right;\n          transform-origin: right;\n  -webkit-animation: 5s linear 0s normal none infinite moon-face-move;\n          animation: 5s linear 0s normal none infinite moon-face-move;\n}\n\n.moon .face div {\n  width: 25px;\n  height: 8px;\n  border-radius: 20px;\n  position: absolute;\n  top: 65%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  box-shadow: inset 0px -5px 0px 0px black;\n  border-radius: 50%;\n}\n\n.moon .face div:before, .moon .face div:after {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  box-shadow: inset 0px 0px 0px 3px black;\n  border-radius: 50%;\n  position: absolute;\n  top: -20px;\n}\n\n.moon .face div:before {\n  left: -5px;\n}\n\n.moon .face div:after {\n  right: -5px;\n}\n\n@-webkit-keyframes face-move {\n  0% {\n    box-shadow: inset 0px -22px 0px 0px #252730, 2px 5px 5px -3px rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    top: 60%;\n    left: 75%;\n    height: 60px;\n    border-radius: 50%;\n    box-shadow: inset 0px -22px 0px 0px #252730, 2px 5px 5px -3px rgba(0, 0, 0, 0.5);\n  }\n  100% {\n    box-shadow: inset 0px -22px 0px 0px #252730, 2px 5px 5px -3px rgba(0, 0, 0, 0.5);\n  }\n}\n\n@keyframes face-move {\n  0% {\n    box-shadow: inset 0px -22px 0px 0px #252730, 2px 5px 5px -3px rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    top: 60%;\n    left: 75%;\n    height: 60px;\n    border-radius: 50%;\n    box-shadow: inset 0px -22px 0px 0px #252730, 2px 5px 5px -3px rgba(0, 0, 0, 0.5);\n  }\n  100% {\n    box-shadow: inset 0px -22px 0px 0px #252730, 2px 5px 5px -3px rgba(0, 0, 0, 0.5);\n  }\n}\n\n@-webkit-keyframes land-move {\n  0% {\n    margin-left: 0px;\n  }\n  50% {\n    margin-left: 50px;\n  }\n  100% {\n    margin-left: 0px;\n  }\n}\n\n@keyframes land-move {\n  0% {\n    margin-left: 0px;\n  }\n  50% {\n    margin-left: 50px;\n  }\n  100% {\n    margin-left: 0px;\n  }\n}\n\n@-webkit-keyframes eye-ball {\n  0% {\n    box-shadow: inset -5px 5px 0px 15px #ffffff, 2px 2px 5px rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    box-shadow: inset 5px -2px 0px 12px #ffffff, 2px 2px 5px rgba(0, 0, 0, 0.5);\n    top: -45px;\n  }\n  100% {\n    box-shadow: inset -5px 5px 0px 15px #ffffff, 2px 2px 5px rgba(0, 0, 0, 0.5);\n  }\n}\n\n@keyframes eye-ball {\n  0% {\n    box-shadow: inset -5px 5px 0px 15px #ffffff, 2px 2px 5px rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    box-shadow: inset 5px -2px 0px 12px #ffffff, 2px 2px 5px rgba(0, 0, 0, 0.5);\n    top: -45px;\n  }\n  100% {\n    box-shadow: inset -5px 5px 0px 15px #ffffff, 2px 2px 5px rgba(0, 0, 0, 0.5);\n  }\n}\n\n@-webkit-keyframes moon-move {\n  0% {\n    left: 12%;\n    top: 55%;\n    z-index: 5;\n  }\n  50% {\n    left: 88%;\n    top: 45%;\n  }\n  100% {\n    left: 12%;\n    top: 55%;\n    z-index: -5;\n  }\n}\n\n@keyframes moon-move {\n  0% {\n    left: 12%;\n    top: 55%;\n    z-index: 5;\n  }\n  50% {\n    left: 88%;\n    top: 45%;\n  }\n  100% {\n    left: 12%;\n    top: 55%;\n    z-index: -5;\n  }\n}\n\n@-webkit-keyframes moon-face-move {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n    -webkit-transform-origin: right;\n            transform-origin: right;\n  }\n  25% {\n    -webkit-transform: rotateY(45deg);\n            transform: rotateY(45deg);\n    opacity: 0.5;\n    -webkit-transform-origin: right;\n            transform-origin: right;\n  }\n  50% {\n    -webkit-transform: rotateY(90deg);\n            transform: rotateY(90deg);\n    opacity: 0;\n    -webkit-transform-origin: right;\n            transform-origin: right;\n  }\n  75% {\n    -webkit-transform: rotateY(90deg);\n            transform: rotateY(90deg);\n    opacity: 0;\n    -webkit-transform-origin: left;\n            transform-origin: left;\n  }\n  100% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n    -webkit-transform-origin: left;\n            transform-origin: left;\n  }\n}\n\n@keyframes moon-face-move {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n    -webkit-transform-origin: right;\n            transform-origin: right;\n  }\n  25% {\n    -webkit-transform: rotateY(45deg);\n            transform: rotateY(45deg);\n    opacity: 0.5;\n    -webkit-transform-origin: right;\n            transform-origin: right;\n  }\n  50% {\n    -webkit-transform: rotateY(90deg);\n            transform: rotateY(90deg);\n    opacity: 0;\n    -webkit-transform-origin: right;\n            transform-origin: right;\n  }\n  75% {\n    -webkit-transform: rotateY(90deg);\n            transform: rotateY(90deg);\n    opacity: 0;\n    -webkit-transform-origin: left;\n            transform-origin: left;\n  }\n  100% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n    -webkit-transform-origin: left;\n            transform-origin: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhbnVqX2RyYWxsL0RvY3VtZW50cy9VTi9pdHMtYS10cmFwL3B1YmxpYy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0VBQUE7QUNBSjs7QURJRTtFQUNFLFlBQUE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNETjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EsbURBQUE7QUNESjs7QURnQkU7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBUmE7QUNMbkI7O0FEZ0JFO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQWRjO0FDQ3BCOztBRGdCRTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFwQmE7QUNPbkI7O0FEZ0JFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNiSjs7QURnQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUdBQUE7QUNiSjs7QURlSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1FQUFBO1VBQUEsMkRBQUE7QUNiTjs7QURnQkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZE47O0FEZ0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0FDZFI7O0FEaUJRO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRFQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtFQUFBO1VBQUEsMERBQUE7RUFDQSxVQUFBO0FDZlY7O0FEa0JRO0VBQ0UsV0FBQTtBQ2hCVjs7QURrQlE7RUFDRSxZQUFBO0FDaEJWOztBRHNCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsbUVBQUE7VUFBQSwyREFBQTtFQUNBLGdHQUFBO0FDbkJKOztBRHFCSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUVBQUE7VUFBQSwyREFBQTtBQ25CTjs7QURxQk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FDbkJSOztBRHNCUTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDcEJWOztBRHVCUTtFQUNFLFVBQUE7QUNyQlY7O0FEdUJRO0VBQ0UsV0FBQTtBQ3JCVjs7QUQ0QkU7RUFDRTtJQUNFLGdGQUFBO0VDekJKO0VEMkJFO0lBQ0UsUUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxnRkFBQTtFQ3pCSjtFRDJCRTtJQUNFLGdGQUFBO0VDekJKO0FBQ0Y7O0FEWUU7RUFDRTtJQUNFLGdGQUFBO0VDekJKO0VEMkJFO0lBQ0UsUUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxnRkFBQTtFQ3pCSjtFRDJCRTtJQUNFLGdGQUFBO0VDekJKO0FBQ0Y7O0FENEJFO0VBQ0U7SUFDRSxnQkFBQTtFQzFCSjtFRDRCRTtJQUNFLGlCQUFBO0VDMUJKO0VENEJFO0lBQ0UsZ0JBQUE7RUMxQko7QUFDRjs7QURpQkU7RUFDRTtJQUNFLGdCQUFBO0VDMUJKO0VENEJFO0lBQ0UsaUJBQUE7RUMxQko7RUQ0QkU7SUFDRSxnQkFBQTtFQzFCSjtBQUNGOztBRDZCRTtFQUNFO0lBQ0UsMkVBQUE7RUMzQko7RUQ2QkU7SUFDRSwyRUFBQTtJQUNBLFVBQUE7RUMzQko7RUQ2QkU7SUFDRSwyRUFBQTtFQzNCSjtBQUNGOztBRGlCRTtFQUNFO0lBQ0UsMkVBQUE7RUMzQko7RUQ2QkU7SUFDRSwyRUFBQTtJQUNBLFVBQUE7RUMzQko7RUQ2QkU7SUFDRSwyRUFBQTtFQzNCSjtBQUNGOztBRDhCRTtFQUNFO0lBQ0UsU0FBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0VDNUJKO0VEOEJFO0lBQ0UsU0FBQTtJQUNBLFFBQUE7RUM1Qko7RUQ4QkU7SUFDRSxTQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7RUM1Qko7QUFDRjs7QURjRTtFQUNFO0lBQ0UsU0FBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0VDNUJKO0VEOEJFO0lBQ0UsU0FBQTtJQUNBLFFBQUE7RUM1Qko7RUQ4QkU7SUFDRSxTQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7RUM1Qko7QUFDRjs7QUQrQkU7RUFDRTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtFQzdCSjtFRCtCRTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxZQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtFQzdCSjtFRCtCRTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxVQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtFQzdCSjtFRCtCRTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxVQUFBO0lBQ0EsOEJBQUE7WUFBQSxzQkFBQTtFQzdCSjtFRCtCRTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0lBQ0EsOEJBQUE7WUFBQSxzQkFBQTtFQzdCSjtBQUNGOztBRElFO0VBQ0U7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsVUFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUM3Qko7RUQrQkU7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUM3Qko7RUQrQkU7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsVUFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUM3Qko7RUQrQkU7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsVUFBQTtJQUNBLDhCQUFBO1lBQUEsc0JBQUE7RUM3Qko7RUQrQkU7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsVUFBQTtJQUNBLDhCQUFBO1lBQUEsc0JBQUE7RUM3Qko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgXG4gIH1cblxuICBodG1sLCBib2R5e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjMjkyOTI5LCAjMDAwMDAwKTtcbiAgfVxuICBcbi8vICAgQGZ1bmN0aW9uIGJveC1zaGFkb3coJHN0YXJzKSB7XG4vLyAgICAgICAkYnhzaGFkb3c6ICgpO1xuLy8gICAgICAgQGZvciAkaSBmcm9tIDEgdG8gJHN0YXJzIHtcbi8vICAgICAgICAgICAkYnhzaGFkb3c6IGFwcGVuZCgkYnhzaGFkb3csIChyYW5kb20oMjAwMCkgKyAwcHgpIChyYW5kb20oMjAwMCkgKyAwcHgpICNmZmYsIGNvbW1hKTtcbi8vICAgICAgIH1cbi8vICAgICAgIEByZXR1cm4gdW5xdW90ZSgkYnhzaGFkb3cpO1xuLy8gICB9XG4gIFxuICAkYnhzaGFkb3ctbGFyZ2U6IGJveC1zaGFkb3coMjUpO1xuICAkYnhzaGFkb3ctbWVkaXVtOiBib3gtc2hhZG93KDEwMCk7XG4gICRieHNoYWRvdy1zbWFsbDogYm94LXNoYWRvdygxNTApO1xuICBcbiAgLnN0YXJzLmxhcmdlIHtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgd2lkdGg6IDNweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogJGJ4c2hhZG93LWxhcmdlO1xuICB9XG4gIFxuICAuc3RhcnMubWVkaXVtIHtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgd2lkdGg6IDJweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogJGJ4c2hhZG93LW1lZGl1bTtcbiAgfVxuICBcbiAgLnN0YXJzLnNtYWxsIHtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogJGJ4c2hhZG93LXNtYWxsO1xuICB9XG4gIFxuICAud3JhcHBlcntcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLmVhcnRoe1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGNvbG9yOiAjMURBMUMxO1xuICAgIGZvbnQtc2l6ZTogMzgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDAgMzVweCAycHggcmdiYSgyNTUsMjU1LDI1NSwuMTUpLCBpbnNldCAtMjVweCAtNXB4IDQwcHggMjBweCByZ2JhKDAsMCwwLC42KTtcbiAgICBcbiAgICBpe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhCQzM0QTtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgYW5pbWF0aW9uOiA1cyBlYXNlLWluLW91dCAwcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBsYW5kLW1vdmU7XG4gICAgfVxuICAgIFxuICAgIC5mYWNle1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBcbiAgICAgIGRpdntcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDY1JTtcbiAgICAgICAgbGVmdDogMzAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0yMnB4IDBweCAwcHggIzI1MjczMCwgMnB4IDVweCA1cHggLTNweCByZ2JhKDAsMCwwLCAwLjUpO1xuICAgICAgICBhbmltYXRpb246IDVzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbCBub25lIGluZmluaXRlIGZhY2UtbW92ZTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAmOmJlZm9yZSwgJjphZnRlcntcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC01cHggLTVweCAwcHggMTVweCAjZmZmZmZmLCAycHggMnB4IDVweCByZ2JhKDAsMCwwLCAwLjUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYW5pbWF0aW9uOiA1cyBlYXNlLWluLW91dCAwcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBleWUtYmFsbDtcbiAgICAgICAgICB0b3A6IC04MHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmOmJlZm9yZXtcbiAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVye1xuICAgICAgICAgIHJpZ2h0OiAtMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLm1vb257XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYW5pbWF0aW9uOiA1cyBlYXNlLWluLW91dCAwcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBtb29uLW1vdmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDM1cHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpLCBpbnNldCAtMjVweCAtNXB4IDMwcHggMTBweCByZ2JhKDAsMCwwLC41KTtcbiAgICBcbiAgICAuZmFjZXtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gICAgICBhbmltYXRpb246IDVzIGxpbmVhciAwcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBtb29uLWZhY2UtbW92ZTtcbiAgICAgIFxuICAgICAgZGl2e1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA2NSU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtNXB4IDBweCAwcHggcmdiYSgwLDAsMCwxKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICY6YmVmb3JlLCAmOmFmdGVye1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggM3B4IHJnYmEoMCwwLDAsMSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmOmJlZm9yZXtcbiAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICB9XG4gICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIFxuICBAa2V5ZnJhbWVzIGZhY2UtbW92ZXtcbiAgICAwJXtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMjJweCAwcHggMHB4ICMyNTI3MzAsIDJweCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwgMC41KTtcbiAgICB9XG4gICAgNTAle1xuICAgICAgdG9wOiA2MCU7XG4gICAgICBsZWZ0OiA3NSU7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTIycHggMHB4IDBweCAjMjUyNzMwLCAycHggNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsIDAuNSk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTIycHggMHB4IDBweCAjMjUyNzMwLCAycHggNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsIDAuNSk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGxhbmQtbW92ZXtcbiAgICAwJXtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZXllLWJhbGx7XG4gICAgMCV7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAtNXB4IDVweCAwcHggMTVweCAjZmZmZmZmLCAycHggMnB4IDVweCByZ2JhKDAsMCwwLCAwLjUpO1xuICAgIH1cbiAgICA1MCV7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCA1cHggLTJweCAwcHggMTJweCAjZmZmZmZmLCAycHggMnB4IDVweCByZ2JhKDAsMCwwLCAwLjUpO1xuICAgICAgdG9wOiAtNDVweDtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IC01cHggNXB4IDBweCAxNXB4ICNmZmZmZmYsIDJweCAycHggNXB4IHJnYmEoMCwwLDAsIDAuNSk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIG1vb24tbW92ZXtcbiAgICAwJXtcbiAgICAgIGxlZnQ6IDEyJTtcbiAgICAgIHRvcDogNTUlO1xuICAgICAgei1pbmRleDogNTtcbiAgICB9XG4gICAgNTAle1xuICAgICAgbGVmdDogODglO1xuICAgICAgdG9wOiA0NSU7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICBsZWZ0OiAxMiU7XG4gICAgICB0b3A6IDU1JTtcbiAgICAgIHotaW5kZXg6IC01O1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBtb29uLWZhY2UtbW92ZXtcbiAgICAwJXtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgICB9XG4gICAgMjUle1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDQ1ZGVnKTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICAgIH1cbiAgICA1MCV7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICAgIH1cbiAgICA3NSV7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgICB9XG4gIH1cbiAgIiwiaDEge1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIzI5MjkyOSwgIzAwMDAwMCk7XG59XG5cbi5zdGFycy5sYXJnZSB7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogYm94LXNoYWRvdygyNSk7XG59XG5cbi5zdGFycy5tZWRpdW0ge1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IGJveC1zaGFkb3coMTAwKTtcbn1cblxuLnN0YXJzLnNtYWxsIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBib3gtc2hhZG93KDE1MCk7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmVhcnRoIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBjb2xvcjogIzFEQTFDMTtcbiAgZm9udC1zaXplOiAzODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDAgMzVweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgLTI1cHggLTVweCA0MHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLmVhcnRoIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEJDMzRBO1xuICB6LWluZGV4OiAtMTtcbiAgYW5pbWF0aW9uOiA1cyBlYXNlLWluLW91dCAwcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBsYW5kLW1vdmU7XG59XG4uZWFydGggLmZhY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZWFydGggLmZhY2UgZGl2IHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY1JTtcbiAgbGVmdDogMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0yMnB4IDBweCAwcHggIzI1MjczMCwgMnB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGFuaW1hdGlvbjogNXMgZWFzZS1pbi1vdXQgMHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgZmFjZS1tb3ZlO1xufVxuLmVhcnRoIC5mYWNlIGRpdjpiZWZvcmUsIC5lYXJ0aCAuZmFjZSBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3gtc2hhZG93OiBpbnNldCAtNXB4IC01cHggMHB4IDE1cHggI2ZmZmZmZiwgMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYW5pbWF0aW9uOiA1cyBlYXNlLWluLW91dCAwcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBleWUtYmFsbDtcbiAgdG9wOiAtODBweDtcbn1cbi5lYXJ0aCAuZmFjZSBkaXY6YmVmb3JlIHtcbiAgbGVmdDogLTE1cHg7XG59XG4uZWFydGggLmZhY2UgZGl2OmFmdGVyIHtcbiAgcmlnaHQ6IC0xNXB4O1xufVxuXG4ubW9vbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYW5pbWF0aW9uOiA1cyBlYXNlLWluLW91dCAwcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBtb29uLW1vdmU7XG4gIGJveC1zaGFkb3c6IDAgMCAzNXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIGluc2V0IC0yNXB4IC01cHggMzBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5tb29uIC5mYWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgYW5pbWF0aW9uOiA1cyBsaW5lYXIgMHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgbW9vbi1mYWNlLW1vdmU7XG59XG4ubW9vbiAuZmFjZSBkaXYge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAtNXB4IDBweCAwcHggYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tb29uIC5mYWNlIGRpdjpiZWZvcmUsIC5tb29uIC5mYWNlIGRpdjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDNweCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG59XG4ubW9vbiAuZmFjZSBkaXY6YmVmb3JlIHtcbiAgbGVmdDogLTVweDtcbn1cbi5tb29uIC5mYWNlIGRpdjphZnRlciB7XG4gIHJpZ2h0OiAtNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGZhY2UtbW92ZSB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTIycHggMHB4IDBweCAjMjUyNzMwLCAycHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuICA1MCUge1xuICAgIHRvcDogNjAlO1xuICAgIGxlZnQ6IDc1JTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMjJweCAwcHggMHB4ICMyNTI3MzAsIDJweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMjJweCAwcHggMHB4ICMyNTI3MzAsIDJweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxhbmQtbW92ZSB7XG4gIDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufVxuQGtleWZyYW1lcyBleWUtYmFsbCB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtNXB4IDVweCAwcHggMTVweCAjZmZmZmZmLCAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCA1cHggLTJweCAwcHggMTJweCAjZmZmZmZmLCAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgdG9wOiAtNDVweDtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtNXB4IDVweCAwcHggMTVweCAjZmZmZmZmLCAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW9vbi1tb3ZlIHtcbiAgMCUge1xuICAgIGxlZnQ6IDEyJTtcbiAgICB0b3A6IDU1JTtcbiAgICB6LWluZGV4OiA1O1xuICB9XG4gIDUwJSB7XG4gICAgbGVmdDogODglO1xuICAgIHRvcDogNDUlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEyJTtcbiAgICB0b3A6IDU1JTtcbiAgICB6LWluZGV4OiAtNTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb29uLWZhY2UtbW92ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg0NWRlZyk7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");



let HomeComponent = class HomeComponent {
    constructor(ngxService) {
        this.ngxService = ngxService;
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
};
HomeComponent.ctorParameters = () => [
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhbnVqX2RyYWxsL0RvY3VtZW50cy9VTi9pdHMtYS10cmFwL3B1YmxpYy9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVFOztFQUVFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGlucHV0LmJ0bi5idG4tbGcsXG4gIGlucHV0LmJ0bi5idG4tbGc6Zm9jdXMge1xuICAgIG91dGxpbmU6ICMzOWIzZDc7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbiAgYnV0dG9uLmJ0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG4gIFxuICAiLCIuaW5wdXQtZ3JvdXAge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LmJ0bi5idG4tbGcsXG5pbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgb3V0bGluZTogIzM5YjNkNztcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbmJ1dHRvbi5idG4ge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(ngxService, authService) {
        this.ngxService = ngxService;
        this.authService = authService;
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
    loginUser() {
        const _loginData = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(_loginData)
            .subscribe((res) => {
            console.log('Logged In', res);
        }, (err) => {
            console.log('Error fetched', err);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] },
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"],
        src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/manager/manager-dashboard/manager-dashboard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/manager/manager-dashboard/manager-dashboard.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvbWFuYWdlci1kYXNoYm9hcmQvbWFuYWdlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/manager/manager-dashboard/manager-dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/manager/manager-dashboard/manager-dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: ManagerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerDashboardComponent", function() { return ManagerDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManagerDashboardComponent = class ManagerDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManagerDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager-dashboard',
        template: __webpack_require__(/*! raw-loader!./manager-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager-dashboard/manager-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./manager-dashboard.component.scss */ "./src/app/manager/manager-dashboard/manager-dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ManagerDashboardComponent);



/***/ }),

/***/ "./src/app/manager/manager-login/manager-login.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/manager/manager-login/manager-login.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhbnVqX2RyYWxsL0RvY3VtZW50cy9VTi9pdHMtYS10cmFwL3B1YmxpYy9zcmMvYXBwL21hbmFnZXIvbWFuYWdlci1sb2dpbi9tYW5hZ2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYW5hZ2VyL21hbmFnZXItbG9naW4vbWFuYWdlci1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVFOztFQUVFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvbWFuYWdlci1sb2dpbi9tYW5hZ2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGlucHV0LmJ0bi5idG4tbGcsXG4gIGlucHV0LmJ0bi5idG4tbGc6Zm9jdXMge1xuICAgIG91dGxpbmU6ICMzOWIzZDc7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbiAgYnV0dG9uLmJ0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG4gIFxuICAiLCIuaW5wdXQtZ3JvdXAge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LmJ0bi5idG4tbGcsXG5pbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgb3V0bGluZTogIzM5YjNkNztcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbmJ1dHRvbi5idG4ge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/manager/manager-login/manager-login.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/manager/manager-login/manager-login.component.ts ***!
  \******************************************************************/
/*! exports provided: ManagerLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerLoginComponent", function() { return ManagerLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");



let ManagerLoginComponent = class ManagerLoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    loginManager() {
        const _loginData = {
            email: this.email,
            password: this.password
        };
        this.authService.loginManager(_loginData)
            .subscribe((res) => {
            console.log('Manager Logged In', res);
        }, (err) => {
            console.log('Error fetched', err);
        });
    }
};
ManagerLoginComponent.ctorParameters = () => [
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ManagerLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager-login',
        template: __webpack_require__(/*! raw-loader!./manager-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager-login/manager-login.component.html"),
        styles: [__webpack_require__(/*! ./manager-login.component.scss */ "./src/app/manager/manager-login/manager-login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ManagerLoginComponent);



/***/ }),

/***/ "./src/app/manager/manager-signup/manager-signup.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/manager/manager-signup/manager-signup.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhbnVqX2RyYWxsL0RvY3VtZW50cy9VTi9pdHMtYS10cmFwL3B1YmxpYy9zcmMvYXBwL21hbmFnZXIvbWFuYWdlci1zaWdudXAvbWFuYWdlci1zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hbmFnZXIvbWFuYWdlci1zaWdudXAvbWFuYWdlci1zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFRTs7RUFFRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBRENFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2VyL21hbmFnZXItc2lnbnVwL21hbmFnZXItc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGlucHV0LmJ0bi5idG4tbGcsXG4gIGlucHV0LmJ0bi5idG4tbGc6Zm9jdXMge1xuICAgIG91dGxpbmU6ICMzOWIzZDc7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbiAgYnV0dG9uLmJ0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG4gIFxuICAiLCIuaW5wdXQtZ3JvdXAge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LmJ0bi5idG4tbGcsXG5pbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgb3V0bGluZTogIzM5YjNkNztcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbmJ1dHRvbi5idG4ge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/manager/manager-signup/manager-signup.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/manager/manager-signup/manager-signup.component.ts ***!
  \********************************************************************/
/*! exports provided: ManagerSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerSignupComponent", function() { return ManagerSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");





let ManagerSignupComponent = class ManagerSignupComponent {
    constructor(_location, authService) {
        this._location = _location;
        this.authService = authService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { value: password } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Enter your password',
                input: 'password',
                inputPlaceholder: 'Enter your password',
                inputAttributes: {
                    autocapitalize: 'off',
                    autocorrect: 'off'
                }
            });
            if (password === '123') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Welcome, please sign up!',
                    type: 'success'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Wrong Password!',
                    text: 'Redirecting you back to the previous location',
                    type: 'error'
                }).then(() => {
                    this._location.back();
                });
            }
        });
    }
    signupManager() {
        const _signupData = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            age: this.age,
            sex: this.sex,
            address: this.address,
            country: this.country,
            phone_number: this.phone_number
        };
        this.authService.signupManager(_signupData)
            .subscribe((res) => {
            console.log('Manager signed up', res);
        }, (err) => {
            console.log('Error', err);
        });
    }
};
ManagerSignupComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ManagerSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager-signup',
        template: __webpack_require__(/*! raw-loader!./manager-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager-signup/manager-signup.component.html"),
        styles: [__webpack_require__(/*! ./manager-signup.component.scss */ "./src/app/manager/manager-signup/manager-signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], src_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], ManagerSignupComponent);



/***/ }),

/***/ "./src/app/manager/manager.component.scss":
/*!************************************************!*\
  !*** ./src/app/manager/manager.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvbWFuYWdlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/manager/manager.component.ts":
/*!**********************************************!*\
  !*** ./src/app/manager/manager.component.ts ***!
  \**********************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManagerComponent = class ManagerComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager',
        template: __webpack_require__(/*! raw-loader!./manager.component.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager.component.html"),
        styles: [__webpack_require__(/*! ./manager.component.scss */ "./src/app/manager/manager.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ManagerComponent);



/***/ }),

/***/ "./src/app/mentor/mentor-login/mentor-login.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/mentor/mentor-login/mentor-login.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhbnVqX2RyYWxsL0RvY3VtZW50cy9VTi9pdHMtYS10cmFwL3B1YmxpYy9zcmMvYXBwL21lbnRvci9tZW50b3ItbG9naW4vbWVudG9yLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW50b3IvbWVudG9yLWxvZ2luL21lbnRvci1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVFOztFQUVFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21lbnRvci9tZW50b3ItbG9naW4vbWVudG9yLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGlucHV0LmJ0bi5idG4tbGcsXG4gIGlucHV0LmJ0bi5idG4tbGc6Zm9jdXMge1xuICAgIG91dGxpbmU6ICMzOWIzZDc7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbiAgYnV0dG9uLmJ0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG4gIFxuICAiLCIuaW5wdXQtZ3JvdXAge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LmJ0bi5idG4tbGcsXG5pbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgb3V0bGluZTogIzM5YjNkNztcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbmJ1dHRvbi5idG4ge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/mentor/mentor-login/mentor-login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/mentor/mentor-login/mentor-login.component.ts ***!
  \***************************************************************/
/*! exports provided: MentorLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorLoginComponent", function() { return MentorLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");



let MentorLoginComponent = class MentorLoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    loginManager() {
        const _loginData = {
            email: this.email,
            password: this.password
        };
        this.authService.loginMentor(_loginData)
            .subscribe((res) => {
            console.log('Mentor Logged In', res);
        }, (err) => {
            console.log('Error fetched', err);
        });
    }
};
MentorLoginComponent.ctorParameters = () => [
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MentorLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor-login',
        template: __webpack_require__(/*! raw-loader!./mentor-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-login/mentor-login.component.html"),
        styles: [__webpack_require__(/*! ./mentor-login.component.scss */ "./src/app/mentor/mentor-login/mentor-login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], MentorLoginComponent);



/***/ }),

/***/ "./src/app/mentor/mentor-signup/mentor-signup.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/mentor/mentor-signup/mentor-signup.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhbnVqX2RyYWxsL0RvY3VtZW50cy9VTi9pdHMtYS10cmFwL3B1YmxpYy9zcmMvYXBwL21lbnRvci9tZW50b3Itc2lnbnVwL21lbnRvci1zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnRvci9tZW50b3Itc2lnbnVwL21lbnRvci1zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFRTs7RUFFRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBRENFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tZW50b3IvbWVudG9yLXNpZ251cC9tZW50b3Itc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGlucHV0LmJ0bi5idG4tbGcsXG4gIGlucHV0LmJ0bi5idG4tbGc6Zm9jdXMge1xuICAgIG91dGxpbmU6ICMzOWIzZDc7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbiAgYnV0dG9uLmJ0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG4gIFxuICAiLCIuaW5wdXQtZ3JvdXAge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LmJ0bi5idG4tbGcsXG5pbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgb3V0bGluZTogIzM5YjNkNztcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbmJ1dHRvbi5idG4ge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/mentor/mentor-signup/mentor-signup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/mentor/mentor-signup/mentor-signup.component.ts ***!
  \*****************************************************************/
/*! exports provided: MentorSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorSignupComponent", function() { return MentorSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");



let MentorSignupComponent = class MentorSignupComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    signupMentor() {
        const _signupData = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            age: this.age,
            sex: this.sex,
            address: this.address,
            country: this.country,
            phone_number: this.phone_number
        };
        this.authService.signupMentor(_signupData)
            .subscribe((res) => {
            console.log('Manager signed up', res);
        }, (err) => {
            console.log('Error', err);
        });
    }
};
MentorSignupComponent.ctorParameters = () => [
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MentorSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor-signup',
        template: __webpack_require__(/*! raw-loader!./mentor-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-signup/mentor-signup.component.html"),
        styles: [__webpack_require__(/*! ./mentor-signup.component.scss */ "./src/app/mentor/mentor-signup/mentor-signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], MentorSignupComponent);



/***/ }),

/***/ "./src/app/mentor/mentor.component.scss":
/*!**********************************************!*\
  !*** ./src/app/mentor/mentor.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRvci9tZW50b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mentor/mentor.component.ts":
/*!********************************************!*\
  !*** ./src/app/mentor/mentor.component.ts ***!
  \********************************************/
/*! exports provided: MentorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorComponent", function() { return MentorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MentorComponent = class MentorComponent {
    constructor() { }
    ngOnInit() {
    }
};
MentorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor',
        template: __webpack_require__(/*! raw-loader!./mentor.component.html */ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor.component.html"),
        styles: [__webpack_require__(/*! ./mentor.component.scss */ "./src/app/mentor/mentor.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MentorComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* container */\nnav {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  position: relative;\n  background-color: #005fd5;\n  border-radius: 4px;\n  box-shadow: 0 3px 0 0 #004dac;\n}\nnav .nav-button {\n  display: none;\n  padding: 10px;\n  color: #fff;\n  background-color: #005fd5;\n  text-align: center;\n  font-size: 1.5em;\n  cursor: pointer;\n}\nnav .nav-button:hover {\n  color: #eee;\n}\n/* navigation */\n.nav {\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  background: #005fd5;\n  margin: 0 auto;\n  padding: 0 40px;\n  height: initial;\n  transition: height 0.3s ease;\n}\n.nav > li {\n  list-style: none;\n}\n.nav > li a {\n  display: block;\n  font-size: 20px;\n  color: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 30px 15px;\n}\n.nav > li:hover > a {\n  background: #004dac;\n  color: #f7f7f7;\n}\n.nav > li:hover > .nav__sub {\n  display: flex;\n  flex-direction: column;\n}\n/* Sub navigation */\n.nav__sub {\n  display: none;\n  padding: 0;\n  margin: 0;\n  position: initial;\n  background: #004dac;\n}\n.nav__sub > li {\n  display: flex;\n  position: relative;\n}\n.nav__sub > li > a {\n  padding: 15px 60px;\n  font-size: 15px;\n  flex: 1 1 auto;\n}\n.nav__sub > li > a:hover {\n  background: #003d89;\n}\n.button {\n  display: inline-block;\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: 4px;\n  padding: 10px 15px;\n  background-color: #eee;\n  text-decoration: none;\n  color: #333;\n  transition: background-color 0.5s ease;\n}\n.button:hover, .button:active {\n  color: #fff;\n  background-color: #6f6f6f;\n  transition: background-color 0.5s ease;\n}\n.button--primary {\n  background-color: #005fd5;\n  color: #fff;\n}\n.button--primary:hover, .button--primary:active {\n  background-color: #0048a2;\n  color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhbnVqX2RyYWxsL0RvY3VtZW50cy9VTi9pdHMtYS10cmFwL3B1YmxpYy9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBLGNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQWZLO0VBZ0JMLGtCQUFBO0VBQ0EsNkJBQUE7QUNsQkY7QURvQkU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkF2Qkc7RUF3Qkgsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNsQko7QURvQkk7RUFDRSxXQUFBO0FDbEJOO0FEdUJBLGVBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQXZDSztFQXdDTCxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ3BCRjtBRHNCRTtFQUNFLGdCQUFBO0FDcEJKO0FEc0JJO0VBQ0UsY0FBQTtFQUVBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDckJOO0FEd0JJO0VBQ0UsbUJBMURNO0VBMkROLGNBQUE7QUN0Qk47QUR5Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUN2Qk47QUQ0QkEsbUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBM0VVO0FDa0RaO0FEMkJFO0VBQ0csYUFBQTtFQUNBLGtCQUFBO0FDekJMO0FEMkJJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3pCTjtBRDJCTTtFQUNFLG1CQXRGVTtBQzZEbEI7QUQyRkE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0FDeEZGO0FEeUZFO0VBRUUsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7QUN4Rko7QUQyRkU7RUFDRSx5QkE3S0c7RUE4S0gsV0FBQTtBQ3pGSjtBRDJGSTtFQUVFLHlCQUFBO0VBQ0EsV0FBQTtBQzFGTiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Kb3NlZmluK1NhbnMpO1xuXG4vLyBAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW5kZXJ8R3JlYXQrVmliZXMpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNvbG9yc1xuJGdyZWVuLXRvbWF0bzogIzI0NjYyQTtcbiRibHVlOiByZ2IoMCwgOTUsIDIxMyk7XG4kYmx1ZS1kYXJrOiBkYXJrZW4oJGJsdWUsIDglKTtcbiRyb3R0ZW4tdG9tYXRvZXM6IGRhcmtlbigkYmx1ZSwgMTUlKTtcbiRiYW5uZXJQYWRkaW5nOiA0MHB4O1xuJGJ1dHRvbkRlZmF1bHRDb2xvcjogI2VlZTtcbiRidXR0b25TbWFsbDogMTBweCAxNXB4O1xuJGJ1dHRvbk1lZGl1bTogMTBweCAyMHB4O1xuXG4vKiBjb250YWluZXIgKi9cbm5hdiB7ICBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDAgMCAkYmx1ZS1kYXJrO1xuICBcbiAgLm5hdi1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2VlZTtcbiAgICB9XG4gIH1cbn1cblxuLyogbmF2aWdhdGlvbiAqL1xuLm5hdiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJGJsdWU7XG4gIG1hcmdpbjogMCBhdXRvIDtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBoZWlnaHQ6IGluaXRpYWw7XG4gIHRyYW5zaXRpb246IGhlaWdodCAuM3MgZWFzZTtcblxuICA+IGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIFxuICAgIGEge1xuICAgICAgZGlzcGxheTogYmxvY2s7ICBcbiAgICAgIC8vZm9udC1mYW1pbHk6IFwiam9zZWZpbiBzYW5zXCI7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XG4gICAgfVxuICAgIC8vIGNoYW5nZSBsaW5rIGNvbG9yIFxuICAgICY6aG92ZXIgPiBhIHtcbiAgICAgIGJhY2tncm91bmQ6ICRibHVlLWRhcms7XG4gICAgICBjb2xvcjogI2Y3ZjdmNztcbiAgICB9XG4gICAgLy8gZGlzcGxheSBzdWJtZW51XG4gICAgJjpob3ZlciA+IC5uYXZfX3N1YiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbn1cblxuLyogU3ViIG5hdmlnYXRpb24gKi9cbi5uYXZfX3N1YiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGluaXRpYWw7XG4gIGJhY2tncm91bmQ6ICRibHVlLWRhcms7XG4gIFxuICA+IGxpIHtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgID4gYSB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDYwcHg7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRyb3R0ZW4tdG9tYXRvZXM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuLy8gICAuYmFubmVyIHtcbi8vICAgICBwYWRkaW5nLXRvcDogMDtcbi8vICAgfVxuICBcbi8vICAgbmF2IHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwOyAgICBcbi8vICAgICAmLnZpc2libGUge1xuLy8gICAgICAgLm5hdiB7XG4vLyAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcbi8vICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuM3MgZWFzZTtcbi8vICAgICAgICAgZmxleDogMSAxIGF1dG87XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIC5uYXYtYnV0dG9uIHtcbi8vICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuLy8gICAgICAgZmxleDogMSAxIGF1dG87XG4vLyAgICAgfVxuLy8gICB9XG4gIFxuLy8gICAubmF2IHtcbi8vICAgICBoZWlnaHQ6IDA7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbi8vICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgIFxuLy8gICAgIGxpIHtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgJjpob3ZlciAubmF2X19zdWIge1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgICAgfVxuLy8gICAgICAgYSB7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbiAgXG4vLyAgLm5hdl9fc3ViIHtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGZsZXgtd3JhcDogd3JhcDtcbi8vICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuLy8gICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgXG4vLyAgICAgbGkge1xuLy8gICAgICAgZmxleDogMCAxIGF1dG87XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMzMztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXMgZWFzZTtcbiAgJjpob3ZlcixcbiAgJjphY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjZWVlLCA1MCUpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzIGVhc2U7XG4gIH1cbiAgXG4gICYtLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIFxuICAgICY6aG92ZXIsXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuICAgICAgY29sb3I6ICNlZWU7XG4gICAgfVxuICB9XG59IiwiLyogY29udGFpbmVyICovXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWZkNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDNweCAwIDAgIzAwNGRhYztcbn1cbm5hdiAubmF2LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZmQ1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdiAubmF2LWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4vKiBuYXZpZ2F0aW9uICovXG4ubmF2IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDA1ZmQ1O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA0MHB4O1xuICBoZWlnaHQ6IGluaXRpYWw7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7XG59XG4ubmF2ID4gbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm5hdiA+IGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAzMHB4IDE1cHg7XG59XG4ubmF2ID4gbGk6aG92ZXIgPiBhIHtcbiAgYmFja2dyb3VuZDogIzAwNGRhYztcbiAgY29sb3I6ICNmN2Y3Zjc7XG59XG4ubmF2ID4gbGk6aG92ZXIgPiAubmF2X19zdWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBTdWIgbmF2aWdhdGlvbiAqL1xuLm5hdl9fc3ViIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZDogIzAwNGRhYztcbn1cbi5uYXZfX3N1YiA+IGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5hdl9fc3ViID4gbGkgPiBhIHtcbiAgcGFkZGluZzogMTVweCA2MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLm5hdl9fc3ViID4gbGkgPiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwM2Q4OTtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzMzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcbn1cbi5idXR0b246aG92ZXIsIC5idXR0b246YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZjZmNmY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xufVxuLmJ1dHRvbi0tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVmZDU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ1dHRvbi0tcHJpbWFyeTpob3ZlciwgLmJ1dHRvbi0tcHJpbWFyeTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0OGEyO1xuICBjb2xvcjogI2VlZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
        this.at_home = true;
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhbnVqX2RyYWxsL0RvY3VtZW50cy9VTi9pdHMtYS10cmFwL3B1YmxpYy9zcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFRTs7RUFFRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBRENFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGlucHV0LmJ0bi5idG4tbGcsXG4gIGlucHV0LmJ0bi5idG4tbGc6Zm9jdXMge1xuICAgIG91dGxpbmU6ICMzOWIzZDc7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbiAgYnV0dG9uLmJ0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG4gIFxuICAiLCIuaW5wdXQtZ3JvdXAge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LmJ0bi5idG4tbGcsXG5pbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgb3V0bGluZTogIzM5YjNkNztcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbmJ1dHRvbi5idG4ge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");




let SignupComponent = class SignupComponent {
    constructor(ngxService, authService) {
        this.ngxService = ngxService;
        this.authService = authService;
    }
    /**
     * name
     * address
     * country
     * latitude
     * longitude
     * mentor_id
     * manager_id
     */
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
    signupUser() {
        const _signupData = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            age: this.age,
            sex: this.sex,
            address: this.address,
            country: this.country,
            phone_number: this.phone_number
        };
        this.authService.signupUser(_signupData)
            .subscribe((res) => {
            console.log('User signed up', res);
        }, (err) => {
            console.log('Error', err);
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] },
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"],
        src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], SignupComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    BASE_URL: 'http://localhost:3000/',
    BASE_API_URL: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/auth.service.ts":
/*!************************************!*\
  !*** ./src/shared/auth.service.ts ***!
  \************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AuthService = class AuthService {
    constructor(_http) {
        this._http = _http;
        this.BASE_API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_API_URL;
    }
    signupUser(_signupData) {
        return this._http.post(this.BASE_API_URL + `/data/user/add-user`, _signupData);
    }
    signupMentor(_signupData) {
        return this._http.post(this.BASE_API_URL + `/data/mentor/add-mentor`, _signupData);
    }
    signupManager(_signupData) {
        return this._http.post(this.BASE_API_URL + `/data/manager/add-manager`, _signupData);
    }
    loginUser(_loginData) {
        return this._http.post(this.BASE_API_URL + `/data/login-user`, _loginData);
    }
    loginMentor(_loginData) {
        return this._http.post(this.BASE_API_URL + `/data/login-mentor`, _loginData);
    }
    loginManager(_loginData) {
        return this._http.post(this.BASE_API_URL + `/data/login-manager`, _loginData);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/shared/blockchain.service.ts":
/*!******************************************!*\
  !*** ./src/shared/blockchain.service.ts ***!
  \******************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var savjeecoin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! savjeecoin */ "./node_modules/savjeecoin/src/blockchain.js");
/* harmony import */ var savjeecoin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(savjeecoin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_3__);




let BlockchainService = class BlockchainService {
    constructor() {
        this.blockchainInstance = new savjeecoin__WEBPACK_IMPORTED_MODULE_2__["Blockchain"]();
        this.walletKeys = [];
        this.blockchainInstance.difficulty = 1;
        this.blockchainInstance.minePendingTransactions('hi');
        this.generateWalletKeys();
    }
    minePendingTransactions() {
        this.blockchainInstance.minePendingTransactions(this.walletKeys[0].publicKey);
    }
    addressIsFromCurrentUser(address) {
        return address === this.walletKeys[0].publicKey;
    }
    generateWalletKeys() {
        const ec = new elliptic__WEBPACK_IMPORTED_MODULE_3___default.a.ec('secp256k1');
        const key = ec.genKeyPair();
        this.walletKeys.push({
            keyObj: key,
            publicKey: key.getPublic('hex'),
            privateKey: key.getPrivate('hex'),
        });
        console.log(this.walletKeys);
    }
    getPendingTransactions() {
        return this.blockchainInstance.pendingTransactions;
    }
    addTransaction(tx) {
        this.blockchainInstance.addTransaction(tx);
    }
};
BlockchainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlockchainService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tanuj_drall/Documents/UN/its-a-trap/public/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
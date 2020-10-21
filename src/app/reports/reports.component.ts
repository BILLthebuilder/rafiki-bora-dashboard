import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { RafikiBoraService } from '../services/rafiki-bora.service';

export interface Report {
  id: number;
  MID: string;
  TID: string;
  AgentId: string;
  DebitAct: string;
  CreditAct: string;
  Amount: string;
  TransactionType: string;
  dateCreated: string;
}

export interface Option {
  value: string;
  viewValue: string;
}
const reports: Report[] = [
  {
    id: 1,
    MID: '3243423422323',
    TID: '5463534234',
    AgentId: '434232',
    DebitAct: '4342121234',
    CreditAct: 'null',
    Amount: '3000000',
    TransactionType: 'Deposit',
    dateCreated: '2/5/2012',
  },
];

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss', '../app.component.scss'],
})
export class ReportsComponent implements OnInit {
  dataSource: any;

  displayedColumns: string[] = [
    'id',
    'MID',
    'TID',
    'AgentId',
    'CreditAct',
    'TransactionType',
    'Amount',
    'dateCreated',
    'action',
  ];

  constructor(
    private authService: AuthService,
    private _rafikiBoraService: RafikiBoraService
  ) {}

  merchantFilters: any;

  isAdmin() {
    return this.authService.isAdmin();
  }
  ngOnInit(): void {
    // Get table data
    this._rafikiBoraService
      .getMerchantsData()
      .subscribe((data) => (this.merchantFilters = data));
  }

  getMerchantTransaction(mid) {
    this._rafikiBoraService.getMerchantsTransaction(mid).subscribe();
  }
}

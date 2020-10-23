import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../services/auth.service';
import { RafikiBoraService } from '../services/rafiki-bora.service';

export interface Option {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss', '../app.component.scss'],
})
export class ReportsComponent implements OnInit {
  dataSource: any;

  displayedColumns: string[] = [
    'pan',
    'currencyCode',
    'amount',
    'type',
    'date',
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
    this._rafikiBoraService.getMerchantsTransaction(mid).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data.transactions);
    });
  }
}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
    'referenceNo',
    'pan',
    // 'currencyCode',
    'amount',
    'type',
    'date',
  ];
  pipe: DatePipe;

  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
    status: new FormControl(),
  });

  get fromDate() {
    return this.filterForm.get('fromDate').value;
  }
  get toDate() {
    return this.filterForm.get('toDate').value;
  }
  get status() {
    return this.filterForm.get('status').value;
  }

  constructor(
    private authService: AuthService,
    private _rafikiBoraService: RafikiBoraService
  ) {
    // this.pipe = new DatePipe('en');
    // this.dataSource.filterPredicate = (data) => {
    //   if (this.fromDate && this.toDate) {
    //     return (
    //       data.dateCreated >= this.fromDate && data.dateCreated <= this.toDate
    //     );
    //   }
    //   return true;
    // };
  }

  merchantFilters: any;

  isAdmin() {
    return this.authService.isAdmin();
  }
  isMerchant() {
    return this.authService.isMerchant();
  }
  ngOnInit(): void {
    // Get table data
    this._rafikiBoraService
      .getMerchantsData()
      .subscribe((data) => (this.merchantFilters = data));
    this._rafikiBoraService.getAllTransactions().subscribe((data) => {
       this.dataSource = new MatTableDataSource(data);

    });
    if (this.isMerchant()) {
      this.getTransactionsOfLoggedInMerchant();
    }
  }

  getMerchantTransaction(mid) {
    this._rafikiBoraService.getMerchantsTransaction(mid).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  getTransactionsOfLoggedInMerchant() {
    this._rafikiBoraService.getUserProfile().subscribe((data) => {
      this.getMerchantTransaction(data.mid);
    })
  }
  applyFilter() {
    this.dataSource.filter = `${Math.random()}`;
  }
  applySearchFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

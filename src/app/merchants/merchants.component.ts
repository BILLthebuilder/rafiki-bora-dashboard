import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { RafikiBoraService } from '../services/rafiki-bora.service';

@Component({
  selector: 'app-roles',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss', '../app.component.scss'],
})
export class MerchantsComponent implements OnInit {
  displayedColumns: string[] = [
    'first_name',
    'last_name',
    'email',
    'mid',
    'business_name',
    'phone_no',
    'createdBy',
    'approvedBy',
    'status',
    'dateCreated',
  ];
  filters = [
    { value: 'approved', viewValue: 'Approved' },
    { value: 'declined', viewValue: 'Declined' },
  ];

  public dataSource: any = [];

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
    private _rafikiBoraService: RafikiBoraService,
    private _fb: FormBuilder
  ) {
    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (data, filter) => {
      if (this.fromDate && this.toDate) {
        return data.created >= this.fromDate && data.created <= this.toDate;
      }
      return true;
    };
  }

  ngOnInit(): void {
    // Get table data
    this._rafikiBoraService
      .getMerchantsData()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
  }

  applyFilter() {
    this.dataSource.filter = `${Math.random()}`;
  }
  applySearchFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

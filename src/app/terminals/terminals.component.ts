import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { RafikiBoraService } from '../services/rafiki-bora.service';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.scss', '../app.component.scss'],
})
export class TerminalsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'tid',
    'serialNo',
    'modelType',
    'status',
    'mid',
    'createdBy',
    'approvedBy',
    'isDeleted',
    'createdOn',
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

  constructor(private _rafikiBoraService: RafikiBoraService) {
    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (data, filter) => {
      if (this.fromDate && this.toDate) {
        return data.created >= this.fromDate && data.created <= this.toDate;
      }
      return true;
    };
  }

  ngOnInit(): void {
    this._rafikiBoraService
      .getTerminals()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
  }

  applyFilter() {
    this.dataSource.filter = `${Math.random()}`;
  }
}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { RafikiBoraService } from '../services/rafiki-bora.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss', '../app.component.scss'],
})
export class SupportComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tid', 'name', 'date', 'reason'];
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
      .getSupportData()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
  }

  applyFilter() {
    this.dataSource.filter = `${Math.random()}`;
  }
  applySearchFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RafikiBoraService } from '../rafiki-bora.service';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../app.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'accountNumber',
    'pan',
    'phoneNumber',
    'status',
    'balance',
    'dateCreated',
  ];

  filters: Option[] = [
    { value: 'approved', viewValue: 'Approved' },
    { value: 'declined', viewValue: 'Declined' },
  ];
  public dataSource: any = [];

  constructor(private _rafikiBoraService: RafikiBoraService) {}

  ngOnInit(): void {
    this._rafikiBoraService
      .getMyData()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

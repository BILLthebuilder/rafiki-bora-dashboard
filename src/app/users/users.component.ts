import { Component, OnInit } from '@angular/core';
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
    'description',
    'createdBy',
    'approvedBy',
    'status',
    'dateCreated',
  ];

  filters: Option[] = [
    { value: 'approved', viewValue: 'Approved' },
    { value: 'declined', viewValue: 'Declined' },
  ];
  public dataSource = [];

  // dataSource = users;

  constructor(private _rafikiBoraService: RafikiBoraService) {}

  ngOnInit(): void {
    this.dataSource = this._rafikiBoraService.getMyData();
  }
}

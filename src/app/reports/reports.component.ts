import { Component, OnInit } from '@angular/core';

export interface Reports {
  id: number;
  name: string;
  phoneNo: string;
  email: string;
  merchant: string;
  status: string;
  dateCreated: string;
}

export interface Option {
  value: string;
  viewValue: string;
}
const reports: Reports[] = [
  {
    id: 1,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
];

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss', '../app.component.scss'],
})
export class ReportsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'phoneNo',
    'email',
    'merchant',
    'status',
    'dateCreated',
  ];
  filters: Option[] = [
    { value: 'approved', viewValue: 'Approved' },
    { value: 'declined', viewValue: 'Declined' },
  ];
  merchantFilters: Option[] = [
    { value: 'tracom', viewValue: 'Tracom' },
    { value: 'pergamon', viewValue: 'Pergamon' },
  ];

  dataSource = reports;
  constructor() {}

  ngOnInit(): void {}
}

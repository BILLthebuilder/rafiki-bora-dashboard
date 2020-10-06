import { Component, OnInit } from '@angular/core';

export interface Merchant {
  id: number;
  name: string;
  roleDescription: string;
  createdBy: string;
  approvedBy: string;
  status: string;
  dateCreated: string;
}

export interface Option {
  value: string;
  viewValue: string;
}
const merchants: Merchant[] = [
  {
    id: 1,
    name: 'admins',
    roleDescription: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 2,
    name: 'admins',
    roleDescription: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 3,
    name: 'admins',
    roleDescription: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 4,
    name: 'admins',
    roleDescription: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 5,
    name: 'admins',
    roleDescription: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 6,
    name: 'admins',
    roleDescription: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 7,
    name: 'admins',
    roleDescription: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 8,
    name: 'admins',
    roleDescription: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 9,
    name: 'admins',
    roleDescription: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
];
@Component({
  selector: 'app-roles',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss', '../app.component.scss'],
})
export class MerchantsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'merchantDescription',
    'createdBy',
    'approvedBy',
    'status',
    'dateCreated',
  ];
  filters: Option[] = [
    { value: 'approved', viewValue: 'Approved' },
    { value: 'declined', viewValue: 'Declined' },
  ];

  dataSource = merchants;

  constructor() { }

  ngOnInit(): void { }
}

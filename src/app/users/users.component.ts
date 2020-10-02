import { Component, OnInit } from '@angular/core';

export interface User {
  id: number;
  name: string;
  description: string;
  createdBy: string;
  approvedBy: string;
  status: string;
  dateCreated: string;
}

export interface Option {
  value: string;
  viewValue: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 2,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 3,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 4,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 5,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 6,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
]
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
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

  dataSource = users;

  constructor() {}

  ngOnInit(): void {}
}

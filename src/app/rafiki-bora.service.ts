/* eslint-disable @angular-eslint/contextual-lifecycle */
import { Injectable, OnInit } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class RafikiBoraService implements OnInit {
  // eslint-disable-next-line @typescript-eslint/member-ordering
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'createdBy',
    'approvedBy',
    'status',
    'dateCreated',
  ];
  constructor() {}
  getMyData() {
    return [
      {
        id: 1,
        name: 'admins',
        description: 'Administrators of stuff',
        createdBy: 'John Doe Ngechu',
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
    ];
  }
  ngOnInit() {}
}

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';

export interface WorkGroup {
  id: number;
  name: string;
  description: string;
  createdBy: string;
  approvedBy: string;
  status: string;
  dateCreated: string;
}

export interface Option{
  value: string;
  viewValue: string;
}

const workGroups: WorkGroup[] = [
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
  {
    id: 7,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 8,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 9,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 9,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 9,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 9,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 9,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 9,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 9,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 10,
    name: 'admins',
    description: 'Administrators of stuff',
    createdBy: 'John Doe',
    approvedBy: 'John Doe',
    status: 'Approved',
    dateCreated: '26/09/2020',
  }
];

@Component({
  selector: 'app-workgroups',
  templateUrl: './workgroups.component.html',
  styleUrls: ['./workgroups.component.scss'],
})
export class WorkgroupsComponent implements OnInit {
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

  dataSource = workGroups;

  constructor() {}

  ngOnInit(): void {}
}

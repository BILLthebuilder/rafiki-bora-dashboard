import { Component, OnInit } from '@angular/core';

export interface Customer {
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
const customers: Customer[] = [
  {
    id: 1,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 2,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 3,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 4,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 5,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 6,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 7,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 8,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 9,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 10,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Approved',
    dateCreated: '26/09/2020',
  },
  {
    id: 11,
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Approved',
    dateCreated: '26/09/2020',
  }
];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
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

  dataSource = customers;

  constructor() {}

  ngOnInit(): void {}
}

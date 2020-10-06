import { Component, OnInit } from '@angular/core';

export interface Agent {
  id: number;
  tid: string;
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
const agents: Agent[] = [
  {
    id: 1,
    tid: 'IWL5003820180',
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 2,
    tid: 'IWL5003820180',
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 3,
    tid: 'IWL5003820180',
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 4,
    tid: 'IWL5003820180',
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 5,
    tid: 'IWL5003820180',
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 5,
    tid: 'IWL5003820180',
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 6,
    tid: 'IWL5003820180',
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 7,
    tid: 'IWL5003820180',
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 8,
    tid: 'IWL5003820180',
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 9,
    tid: 'IWL5003820180',
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
  {
    id: 10,
    tid: 'IWL5003820180',
    name: 'Brian Ngechu',
    phoneNo: '0711706503',
    email: 'ngechu@gmail.com',
    merchant: 'Tracom',
    status: 'Pending',
    dateCreated: '26/09/2020',
  },
];

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss', '../app.component.scss'],
})
export class AgentsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'tid',
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

  dataSource = agents;
  constructor() {}

  ngOnInit(): void {}
}

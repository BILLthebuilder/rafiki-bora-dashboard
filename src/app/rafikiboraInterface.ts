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

export interface User {
  id: number;
  name: string;
  description: string;
  createdBy: string;
  approvedBy: string;
  status: string;
  dateCreated: string;
}

export interface Role {
  id: number;
  roleName: string;
}
export interface Merchant {
  id: number;
  name: string;
  merchantDescription: string;
  createdBy: string;
  approvedBy: string;
  status: string;
  dateCreated: string;
}

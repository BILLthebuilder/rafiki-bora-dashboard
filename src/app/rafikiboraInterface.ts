export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
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
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  mid: string;
  businessName: string;
  phoneNo: string;
  createdBy: string;
  approvedBy: string;
  status: string;
  dateCreated: string;
}

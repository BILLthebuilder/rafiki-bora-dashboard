export interface User {
  userid: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  username: string;
  password: string;
  role: string;
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
  userid: number;
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

export interface Terminal {
  id: number;
  tid: string;
  serialNo: string;
  modelType: string;
  status: boolean;
  mid: string;
  createdBy: any;
  approvedBy: any;
  isDeleted: any;
  createdOn: any;
}
export interface Report {
  id: number;
  MID: string;
  TID: string;
  AgentId: string;
  DebitAct: string;
  CreditAct: string;
  Amount: string;
  TransactionType: string;
  dateCreated: string;
}

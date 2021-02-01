/* eslint-disable @angular-eslint/contextual-lifecycle */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// eslint-disable-next-line import/no-cycle

import {
  User,
  Role,
  Merchant,
  Terminal,
  Report,
  Agent,
} from '../rafikiboraInterface';

@Injectable({
  providedIn: 'root',
})
export class RafikiBoraService implements OnInit {
  private usersUrl = 'http://localhost:2019/api/users';
  private baseUrlTransactions = 'http://localhost:2019/api/transactions';
  private allTransactionsUrl = `${this.baseUrlTransactions}/all`;
  private merchantTransactions = `${this.baseUrlTransactions}/merchant`;
  private totalTransactions = `${this.baseUrlTransactions}/sum`;
  private sendMoneyTotals = `${this.totalTransactions}/send_money`;
  private saleTotals = `${this.totalTransactions}/sale`;
  private depositTotals = `${this.totalTransactions}/deposit`;
  private recieveMoneyTotals = `${this.totalTransactions}/recieve_money`;
  private addUsersUrl = `${this.usersUrl}/createuser`;
  private getUsersUrl = `${this.usersUrl}`;
  private getProfileUrl = `${this.usersUrl}/user/profile`;
  private getUserByIdUrl = `${this.usersUrl}/user`;
  private deleteUserUrl = `${this.usersUrl}`;
  private editUsersUrl = `${this.usersUrl}`;
  private approveUrl = `${this.usersUrl}/user/approve`;
  private createAgentUrl = `${this.usersUrl}/addagent`;
  private customersUrl = `${this.usersUrl}/customer`;
  private merchantsUrl = `${this.usersUrl}/merchant`;
  private getAgentsUrl = `${this.usersUrl}/agent`;
  private assignUrl = `${this.usersUrl}/assignmerchantterminal`;
  private assignAgentUrl = `${this.usersUrl}/agenttoterminal`;
  private terminalsUrl = 'http://localhost:2019/api/terminals';
  private rolesUrl = 'http://localhost:2019/api/roles';
  private supportUrl = 'http://localhost:2019/api/support';
  private getUnassignedTerminals = 'http://localhost:2019/api/terminals/fetch';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Get Users
  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }
  // Get User By Id
  getUserById(userId): Observable<User> {
    return this.http.get<User>(`${this.getUserByIdUrl}/${userId}`);
  }

  editUser(userId, userData) {
    return this.http.patch<any>(
      `${this.editUsersUrl}/${userId}`,
      userData,
      this.httpOptions
    );
  }

  // Add User
  addUser(userData) {
    return this.http.post<any>(this.addUsersUrl, userData, this.httpOptions);
  }

  // Approve User
  approveUser(email: string) {
    return this.http.post<any>(`${this.approveUrl}/${email}`, null);
  }

  // get User Profile
  getUserProfile() {
    return this.http.get<any>(`${this.getProfileUrl}`);
  }

  // Delete User
  deleteUser(userId) {
    return this.http.delete<any>(`${this.deleteUserUrl}/${userId}`);
  }

  // Add Terminals
  addTerminal(terminalData) {
    return this.http.post<any>(this.terminalsUrl, terminalData);
  }
  // Get terminals
  getTerminals(): Observable<Terminal[]> {
    return this.http.get<Terminal[]>(this.terminalsUrl);
  }
  // Approve Terminal
  approveTerminal(tid: string) {
    return this.http.post<any>(`${this.terminalsUrl}/approve{id}/${tid}`, null);
  }
  // Delete User
  deleteTerminal(tid) {
    return this.http.delete<any>(`${this.terminalsUrl}/${tid}`);
  }

  // Fetch all unassigned terminals
  getUnAssignedTerminals(): Observable<Terminal[]> {
    return this.http.get<Terminal[]>(this.getUnassignedTerminals);
  }

  // Assign terminals to merchant
  assignTerminal(terminalData) {
    return this.http.post<any>(this.assignUrl, terminalData);
  }

  // Assign terminals to Agent
  assignAgentTerminal(terminalData) {
    return this.http.post<any>(this.assignAgentUrl, terminalData);
  }

  // Fetch all unassigned terminals to Agent
  getUnAssignedAgentTerminals(merchantID) {
    return this.http.get<any>(
      `http://localhost:2019/api/terminals/merchant/${merchantID}/unassigned`
    );
  }

  addRole(roleData) {
    return this.http.post<any>(this.rolesUrl, roleData, this.httpOptions);
  }
  // Get Roles
  getRolesData(): Observable<Role[]> {
    return this.http.get<Role[]>(this.rolesUrl);
  }
  // Get Merchants
  getMerchantsData(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(this.merchantsUrl);
  }

  // Get Agents
  getAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.getAgentsUrl);
  }

  // Create Agents
  addAgent(agentsData) {
    return this.http.post<any>(
      this.createAgentUrl,
      agentsData,
      this.httpOptions
    );
  }

  // Get Customers
  getCustomersData(): Observable<any> {
    return this.http.get<any>(this.customersUrl);
  }

  // Fetch support tickets
  getSupportData(): Observable<any> {
    return this.http.get<any>(this.supportUrl);
  }

  // Get transactions by merchant
  getMerchantsTransaction(mid): Observable<any> {
    return this.http.get<any>(`${this.merchantTransactions}/${mid}`);
  }

  getAllTransactions(): Observable<any> {
    return this.http.get<any>(this.allTransactionsUrl);
  }

  getSendMoney(): Observable<any> {
    return this.http.get<any>(this.sendMoneyTotals);
  }
  getSale(): Observable<any> {
    return this.http.get<any>(this.saleTotals);
  }
  getReciveMoney(): Observable<any> {
    return this.http.get<any>(this.recieveMoneyTotals);
  }
  getDeposits(): Observable<any> {
    return this.http.get<any>(this.depositTotals);
  }
  ngOnInit(): void {}
}

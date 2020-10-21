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
  private addUsersUrl = 'http://localhost:2019/api/users/createuser';
  private getUsersUrl = 'http://localhost:2019/api/users';
  private terminalsUrl = 'http://localhost:2019/api/terminals';
  private merchantsUrl = 'http://localhost:2019/api/users/merchant';
  private getAgentsUrl = 'http://localhost:2019/api/users/agent';
  private createAgentUrl = 'http://localhost:2019/api/users/addagent';
  private customersUrl = 'http://localhost:2019/api/users/customer';
  private rolesUrl = 'http://localhost:2019/api/roles';
  private supportUrl = 'http://localhost:2019/api/support';
  private TransactionUrl =
    'http://localhost:2019/api/transactions/merchant/{mid}';
  private editUsersUrl = 'http://localhost:2019/api/users/ser';
  private approveUrl = 'http://localhost:2019/api/users/user/approve';
  private assignUrl = 'http://localhost:2019/api/users/assignmerchantterminal';
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
    return this.http.get<User>(`${this.editUsersUrl}/${userId}`);
  }

  editUser(userId, userData) {
    return this.http.patch<any>(
      `${this.getUsersUrl}/${userId}`,
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

  // Delete User
  deleteUser(userId) {
    return this.http.delete<any>(`${this.getUsersUrl}/${userId}`);
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

  // Assign terminals
  assignTerminal(terminalData) {
    return this.http.post<any>(this.assignUrl, terminalData);
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

  // Get Reports
  getMerchantsTransaction(mid): Observable<Report[]> {
    return this.http.get<any>(`${this.TransactionUrl}/${mid}`);
  }
  ngOnInit(): void {}
}

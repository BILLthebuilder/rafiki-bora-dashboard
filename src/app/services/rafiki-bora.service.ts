/* eslint-disable @angular-eslint/contextual-lifecycle */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// eslint-disable-next-line import/no-cycle

import { User, Role, Merchant, Terminal } from '../rafikiboraInterface';

@Injectable({
  providedIn: 'root',
})
export class RafikiBoraService implements OnInit {
  private addUsersUrl = 'http://192.168.254.174:2019/api/users/createuser';
  private getUsersUrl = 'http://192.168.254.174:2019/api/users';
  private terminalsUrl = 'http://192.168.254.174:2019/api/terminals';
  private merchantsUrl = 'http://192.168.254.174:2019/api/users/merchant';
  private customersUrl = 'http://192.168.254.174:2019/api/users/customer';
  private rolesUrl = 'http://192.168.254.174:2019/api/roles';
  private supportUrl = 'http://192.168.254.174:2019/api/support'
  private UserByRoleUrl = '';
  // private terminalsUrl='http://localhost:2019/api/terminals';

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
  // Add Terminals
  addTerminal(terminalData) {
    return this.http.post<any>(
      this.terminalsUrl,
      terminalData
      // this.httpOptions
    );
  }
  // Get terminals
  getTerminals(): Observable<Terminal[]> {
    return this.http.get<Terminal[]>(this.terminalsUrl);
  }
  // Add User
  addUser(userData) {
    return this.http.post<any>(this.addUsersUrl, userData, this.httpOptions);
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

  // Get Customers
  getCustomersData(): Observable<any> {
    return this.http.get<any>(this.customersUrl);
  }

  // Fetch support tickets
  getSupportData(): Observable<any> {
    return this.http.get<any>(this.supportUrl);
  }
  ngOnInit() {}
}

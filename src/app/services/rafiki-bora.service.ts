/* eslint-disable @angular-eslint/contextual-lifecycle */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// eslint-disable-next-line import/no-cycle

import { User, Role, Merchant } from '../rafikiboraInterface';

@Injectable({
  providedIn: 'root',
})
export class RafikiBoraService implements OnInit {
  private addUsersUrl = 'http://localhost:2019/api/auth/signup';
  private getUsersUrl = 'http://localhost:2019';
  private merchantsUrl = 'http://localhost:2019/api/users/merchant';
  private customersUrl = '';
  private rolesUrl = 'http://localhost:2019/api/roles';
  private UserByRoleUrl = '';

  displayedColumns: string[] = [
    'id',
    'name',
    'accountNumber',
    'pan',
    'phoneNumber',
    'status',
    'balance',
    'dateCreated',
  ];
  constructor(private http: HttpClient) {}

  // Get Users
  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }
  // Add User
  addUser(userData){
    const httpOptions = {
      headers: new HttpHeaders(
      {

         'Content-Type': 'application/json'
      })
  }
    return this.http.post<any>(this.addUsersUrl, userData,httpOptions);
  }

  // Get Roles
  getRolesData(): Observable<Role[]> {
    return this.http.get<Role[]>(this.rolesUrl);
  }
  // Get Merchants
  getMerchantsData(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(this.merchantsUrl);
  }

  ngOnInit() {}
}

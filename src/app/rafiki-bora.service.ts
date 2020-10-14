/* eslint-disable @angular-eslint/contextual-lifecycle */
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// eslint-disable-next-line import/no-cycle

import { User, Role, Merchant } from './rafikiboraInterface';

@Injectable({
  providedIn: 'root',
})
export class RafikiBoraService implements OnInit {
  private usersUrl = 'http://localhost:8080/api/auth/signup';
  private merchantsUrl = '';
  private customersUrl = '';
  private rolesUrl = 'http://localhost:8080/api/role';

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
    return this.http.get<User[]>(this.usersUrl);
  }
  // Add User
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user);
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

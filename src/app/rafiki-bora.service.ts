/* eslint-disable @angular-eslint/contextual-lifecycle */
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './rafikiboraInterface';

@Injectable({
  providedIn: 'root',
})
export class RafikiBoraService implements OnInit {
  private url = 'http://127.0.0.1:1233/listAccounts';

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
  getMyData(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  ngOnInit() {}
}

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-undef */
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, tap, delay, finalize } from 'rxjs/operators';
import { ApplicationUser } from './application-user';

interface LoginResult {
  status: string;
  message: string;
  authToken: string;
  email: string;
  roles: any;
}

export interface ProfileResult {
  // userId: number;
  email: string;
  roles: any;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private readonly apiUrl = `http://localhost:8080`;
  private timer: Subscription;
  private _user = new BehaviorSubject<ApplicationUser>(null);
  user$: Observable<ApplicationUser> = this._user.asObservable();

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea === localStorage) {
      if (event.key === 'logout-event') {
        this.stopTokenTimer();
        this._user.next(null);
      }
      if (event.key === 'login-event') {
        this.stopTokenTimer();
        this.http
          .get<ProfileResult>(`${this.apiUrl}/profile`)
          .subscribe((x) => {
            this._user.next({
              email: x.email,
              roles: x.roles,
            });
          });
      }
    }
  }

  constructor(private router: Router, private http: HttpClient) {
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.storageEventListener.bind(this));
  }

  login(email: string, password: string) {
    return this.http
      .post<LoginResult>(`${this.apiUrl}/api/auth/login`, {
        email,
        password,
      })
      .pipe(
        map((x) => {
          this._user.next({
            email: x.email,
            roles: x.roles,
          });
          this.setLocalStorage(x);
          // console.log(this._user.value);
          this.setUserInStorage(this._user.value);
          this.startTokenTimer();
          return x;
        })
      );
  }

  logout() {
    // this.http
    //   .post<unknown>(`${this.apiUrl}/logout`, {})
    //   .pipe(
    //     finalize(() => {
    this.clearLocalStorage();
    this._user.next(null);
    // this.stopTokenTimer();
    this.router.navigate(['']);
    //   })
    // )
    // .subscribe();
  }

  //   refreshToken() {
  //     const refreshToken = localStorage.getItem('refresh_token');
  //     if (!refreshToken) {
  //       this.clearLocalStorage();
  //       return of(null);
  //     }

  //     return this.http
  //       .post<LoginResult>(`${this.apiUrl}/refresh-token`, { refreshToken })
  //       .pipe(
  //         map((x) => {
  //           this._user.next({
  //             email: x.email,
  //             role: x.role,
  //           });
  //           this.setLocalStorage(x);
  //           this.startTokenTimer();
  //           return x;
  //         })
  //       );
  //   }

  setLocalStorage(x: LoginResult) {
    localStorage.setItem('access_token', x.authToken);
    // localStorage.setItem('refresh_token', x.refreshToken);
  }
  setUserInStorage(x: any) {
    localStorage.setItem('user', x.email);
    // localStorage.setItem(
    //   'roles',
    //   x.roles.array.forEach((e) => {
    //     e.authority;
    //   })
    // );
    localStorage.setItem('login-event', `login${Math.random()}`);
  }
  clearLocalStorage() {
    localStorage.removeItem('access_token');
    // localStorage.removeItem('refresh_token');
    localStorage.setItem('logout-event', `logout${Math.random()}`);
  }

  private getTokenRemainingTime() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return 0;
    }
    const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    console.log(expires);
    return expires.getTime() - Date.now();
  }

  private startTokenTimer() {
    const timeout = this.getTokenRemainingTime();
    this.timer = of(true)
      .pipe(
        delay(timeout),
        tap(() => console.log('token Expired'))
      )
      .subscribe();
  }

  private stopTokenTimer() {
    this.timer?.unsubscribe();
    this.logout();
  }
}

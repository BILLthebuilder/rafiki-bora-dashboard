/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-undef */
import { EventEmitter, Injectable, OnDestroy, Output } from '@angular/core';
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

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() email: EventEmitter<string> = new EventEmitter();
  private readonly apiUrl = `http://192.168.254.174:2019`;
  private timer: Subscription;
  private _user = new BehaviorSubject<ApplicationUser>(null);
  user$: Observable<ApplicationUser> = this._user.asObservable();

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea === localStorage) {
      if (event.key === 'logout-event') {
        this.stopTokenTimer();
        this.logout();
      }
      if (event.key === 'login-event') {
        this.stopTokenTimer();
        this.http
          .get<ApplicationUser>(`${this.apiUrl}api/users//user/profile`)
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
          this.setTokenInStorage(x);
          // console.log(this._user.value.roles[0].authority);
          this.setUserInStorage(this._user.value);
          this.startTokenTimer();
          // console.log(this.getRole());
          this.loggedIn.emit(true);
          this.email.emit(x.email);
          return x;
        })
      );
  }
  setTokenInStorage(x: LoginResult) {
    localStorage.setItem('access-token', x.authToken);
  }
  setUserInStorage(x: any) {
    localStorage.setItem('user', x.email);
    localStorage.setItem('roles', x.roles[0].authority);
    localStorage.setItem('login-event', `login${Math.random()}`);
  }
  getUser() {
    return localStorage.getItem('user') && localStorage.getItem('access-token');
  }
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
  isAdmin(): boolean {
    const role = localStorage.getItem('roles');
    if (role === 'ROLE_ADMIN') {
      return true;
    }
    return false;
  }
  isMerchant(): boolean {
    const role = localStorage.getItem('roles');
    if (role === 'ROLE_MERCHANT') {
      return true;
    }
    return false;
  }
  getRole(): string {
    const role = localStorage.getItem('roles');
    return role;
  }
  clearLocalStorage() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('user');
    localStorage.setItem('logout-event', `logout${Math.random()}`);
  }

  private getTokenRemainingTime() {
    const accessToken = localStorage.getItem('access-token');
    if (!accessToken) {
      return 0;
    }
    const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    // console.log(expires);
    return expires.getTime() - Date.now();
  }

  private startTokenTimer() {
    const timeout = this.getTokenRemainingTime();
    this.timer = of(true)
      .pipe(
        delay(timeout),
        tap(() => !this.loggedIn)
      )
      .subscribe();
  }

  private stopTokenTimer() {
    this.timer?.unsubscribe();
  }
  logout() {
    // this.http
    //   .post<unknown>(`${this.apiUrl}/logout`, {})
    //   .pipe(
    //     finalize(() => {
    this.clearLocalStorage();
    this._user.next(null);
    this.stopTokenTimer();
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
  //           this.setTokenInStorage(x);
  //           this.startTokenTimer();
  //           return x;
  //         })
  //       );
  //   }
}

/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  busy = false;
  email = '';
  password = '';
  loginError = false;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe((x) => {
      if (this.router.url === '') {
        const accessToken = localStorage.getItem('access-token');
        if (x && accessToken) {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
          this.router.navigate([returnUrl]);
        }
      } // If a tab shows login page, then refresh the page to reduce duplicate login
    });
  }
  login() {
    if (!this.email || !this.password) {
      return;
    }
    this.busy = true;
    this.authService
      .login(this.email, this.password)
      .pipe(finalize(() => (this.busy = false)))
      .subscribe(
        () => {
          this.router.navigateByUrl('/dashboard/home');
        },
        (error) => {
          this.loginError = true;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

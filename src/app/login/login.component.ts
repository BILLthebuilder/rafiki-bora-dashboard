/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import { Component, OnDestroy, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  // formGroup: FormGroup;
  busy = false;
  email = '';
  password = '';
  loginError = false;
  private subscription: Subscription;

  // constructor(private loginService: LoginService, private router: Router) {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  // ngOnInit(): void {
  //   this.initForm();
  // }
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

  // initForm() {
  //   this.formGroup = new FormGroup({
  //     email: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required]),
  //   });
  // }

  // loginProcess() {
  //   if (this.formGroup.valid) {
  //     this.loginService.login(this.formGroup.value).subscribe(
  //       (result) => {
  //         if (result.status === 'SUCCESS') {
  //           const decodedToken = jwt_decode(result.authToken);
  //           localStorage.setItem(decodedToken, 'token');
  //           console.log(decodedToken);
  //           this.router.navigateByUrl('/dashboard/home', { replaceUrl: true });
  //         }
  //       },
  //       (error) => console.log(alert(error.error.message))
  //     );
  //   }
  // }
  login() {
    if (!this.email || !this.password) {
      return;
    }
    this.busy = true;
    //  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    this.authService
      .login(this.email, this.password)
      .pipe(finalize(() => (this.busy = false)))
      .subscribe(
        () => {
          this.router.navigateByUrl('/dashboard/home');
        },
        (error) => {
          this.loginError = true;
          console.log(error);
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

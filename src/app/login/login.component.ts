/* eslint-disable no-undef */
/* eslint-disable no-alert */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
// @ts-ignore
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginProcess() {
    if (this.formGroup.valid) {
      this.loginService.login(this.formGroup.value).subscribe(
        (result) => {
          if (result.status === 'SUCCESS') {
            const decodedToken = jwt_decode(result.authToken);
            localStorage.setItem(decodedToken, 'token');
            console.log(decodedToken)
            this.router.navigateByUrl('/dashboard/home', { replaceUrl: true });
          }
        },
        (error) => console.log(alert(error.error.message))
      );
    }
  }
}

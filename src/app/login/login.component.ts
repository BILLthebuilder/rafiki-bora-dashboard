/* eslint-disable no-undef */
/* eslint-disable no-alert */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

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
      this.loginService.login(this.formGroup.value).subscribe((result) => {
        if (result.status === 'SUCCESS') {
          this.router.navigateByUrl('/dashboard/home', { replaceUrl: true });
          alert('Welcome ');
        }
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) { }

  public login(email: string, password: string) {
    this.router.navigate(['dashboard'], { replaceUrl: true });
  }

  ngOnInit(): void {
  }

}

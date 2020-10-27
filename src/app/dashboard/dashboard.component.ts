import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  show = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  isAdmin() {
    return this.authService.isAdmin();
  }

  isMerchant() {
    return this.authService.isMerchant();
  }

  isMerchantAndIsAdmin() {
    return this.authService.isAdmin && this.authService.isMerchant;
  }

  logout() {
    return this.authService.logout();
  }
}

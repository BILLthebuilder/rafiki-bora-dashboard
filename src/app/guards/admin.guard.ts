/* eslint-disable no-undef */
/* eslint-disable no-else-return */
import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const role = this.authService.getRole();

    if (next.data.role !== role) {
      this.router.navigate(['']);
      this._snackBar.open(
        'Error: You are no authorized to access this resource',
        'dismiss',
        {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        }
      );
      return false;
    }
    return true;
  }
}

/* eslint-disable no-undef */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/rafikiboraInterface';
import { RafikiBoraService } from 'src/app/services/rafiki-bora.service';

@Component({
  selector: 'app-new-merchant',
  templateUrl: './new-merchant.component.html',
  styleUrls: ['./new-merchant.component.scss'],
})
export class NewMerchantComponent implements OnInit {
  userSubmitForm: any;
  email: string;
  constructor(
    private _rafikiBoraService: RafikiBoraService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.userSubmitForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      username: '',
      phoneNo: '',
      email: this.email,
      password: '',
      role: '',
    });
    this.userSubmitForm.patchValue({
      role: 'MERCHANT',
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = +params.get('id');
      if (userId) {
        this.getUser(userId);
      }
    });
  }
  getUser(id: number) {
    this._rafikiBoraService.getUserById(id).subscribe(
      (user: User) => this.editUser(user),
      (error) => {
        this._snackBar.open('An Error has occurred', 'dismiss', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
      }
    );
  }

  editUser(user: User) {
    this.userSubmitForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      phoneNo: user.phoneNo,
      email: user.email,
      password: user.password,
      role: user.role,
    });
  }
  onSubmit() {
    this._rafikiBoraService.addUser(this.userSubmitForm.value).subscribe(
      (response) => {
        this._snackBar.open('Merchant created Successfully', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['green-snackbar'],
        });
        // Store the merchant Email to be reused later to assign a terminal
        const merchantEmail = this.userSubmitForm.value.email;
        localStorage.removeItem('merchEmail');
        localStorage.setItem('merchEmail', merchantEmail);
        this.router.navigateByUrl('/dashboard/terminals/assign');
      },
      (error) => {
        this._snackBar.open('Error creating merchant', 'dismiss', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
      }
    );
  }
}

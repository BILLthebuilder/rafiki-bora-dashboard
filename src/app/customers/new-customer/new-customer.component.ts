import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/rafikiboraInterface';
import { RafikiBoraService } from 'src/app/services/rafiki-bora.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
})
export class NewCustomerComponent implements OnInit {
  userSubmitForm: any;
  constructor(
    private _rafikiBoraService: RafikiBoraService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.userSubmitForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      username: '',
      phoneNo: '',
      email: '',
      password: '',
      role: '',
    });
    this.userSubmitForm.patchValue({
      role: 'CUSTOMER',
    })
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
        this._snackBar.open('User created Successfully', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['green-snackbar'],
        });
        this.location.back();
      },
      (error) => {
        this._snackBar.open('Error creating user', 'dismiss', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
      }
    );
  }
}

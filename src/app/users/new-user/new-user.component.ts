import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/rafikiboraInterface';

import { RafikiBoraService } from 'src/app/services/rafiki-bora.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  roles: any = [];
  userSubmitForm: any;

  constructor(
    private http: HttpClient,
    private _rafikiBoraService: RafikiBoraService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
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
  }

  ngOnInit(): void {
    // Get the roles data from the Database
    this._rafikiBoraService.getRolesData().subscribe((data) => {
      this.roles = data;
    });
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
        this.router.navigateByUrl('/dashboard/users');
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/rafikiboraInterface';
import { RafikiBoraService } from 'src/app/services/rafiki-bora.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['../new-user/new-user.component.scss'],
})
export class EditUserComponent implements OnInit {
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
      userid: '',
      firstName: '',
      lastName: '',
      password: '',
      phoneNo: '',
      email: '',
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
      (user: User) => {
        this.editUser(user);
        
      },
      (error) => console.log(error)
    );
  }
  editUser(user: User) {
    this.userSubmitForm.patchValue({
      userid: user.userid,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNo: user.phoneNo,
      email: user.email,
      password: user.password,
    });
  }
  onSubmit() {
    this._rafikiBoraService
      .editUser(this.userSubmitForm.value.userid, this.userSubmitForm.value)
      .subscribe(
        (response) => {
          this._snackBar.open('User edited Successfully', 'dismiss', {
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
          console.log('There is an error', error);
        }
      );
  }
}

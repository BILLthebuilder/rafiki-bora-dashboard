import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RafikiBoraService } from '../services/rafiki-bora.service';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../app.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'accountNumber',
    'phoneNo',
    'status',
    'dateCreated',
    'action',
  ];

  filters: Option[] = [
    { value: 'approved', viewValue: 'Approved' },
    { value: 'declined', viewValue: 'Declined' },
  ];
  public dataSource: any = [];

  constructor(
    private _rafikiBoraService: RafikiBoraService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._rafikiBoraService.getUserData().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Edit User

  editButtonUser(id: number) {
    this.router.navigate(['/dashboard/users/edit', id]);
  }
  // Delete User
  approveUser(email: string) {
    this._rafikiBoraService.approveUser(email).subscribe(
      (response) => {
        this._snackBar.open('User approved Successfully', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['green-snackbar'],
        });
        this.ngOnInit();
        console.log(response);
      },
      (error) => {
        this._snackBar.open('You cannot approve this user', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
        this.ngOnInit();
        console.log(error);
      }
    );
  }

  // Delete User
  deleteUser(userId) {
    this._rafikiBoraService.deleteUser(userId).subscribe(
      (response) => {
        this.ngOnInit();
        console.log('User successfully deleted', response);
      },
      (error) => {
        this.ngOnInit();
        console.log(error);
      }
    );
  }
}

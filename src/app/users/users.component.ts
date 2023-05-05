import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
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
    'firstName',
    'lastName',
    'email',
    'phoneNo',
    'status',
    'createdBy',
    'approvedBy',
    'dateCreated',
    'action',
  ];

  filters: Option[] = [
    { value: 'approved', viewValue: 'Approved' },
    { value: 'declined', viewValue: 'Declined' },
  ];
  public dataSource: any = [];
  pipe: DatePipe;

  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
    status: new FormControl(),
  });

  get fromDate() {
    return this.filterForm.get('fromDate').value;
  }
  get toDate() {
    return this.filterForm.get('toDate').value;
  }
  get status() {
    return this.filterForm.get('status').value;
  }

  constructor(
    private _rafikiBoraService: RafikiBoraService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (data) => {
      if (this.fromDate && this.toDate) {
        return (
          data.dateCreated >= this.fromDate && data.dateCreated <= this.toDate
        );
      }
      return true;
    };
  }

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
      },
      (error) => {
        this._snackBar.open('You cannot approve this user', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
        this.ngOnInit();
      }
    );
  }

  // Delete User
  deleteUser(userId) {
    this._rafikiBoraService.deleteUser(userId).subscribe(
      (response) => {
        this._snackBar.open('User deleted Successfully', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['green-snackbar'],
        });
        this.ngOnInit();
      },
      (error) => {
        this._snackBar.open('Unable to delete this user', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
        this.ngOnInit();
      }
    );
  }
  applyFilterByDate() {
    this.dataSource.filter = `${Math.random()}`;
  }
}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RafikiBoraService } from '../services/rafiki-bora.service';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss', '../app.component.scss'],
})
export class AgentsComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phoneNo',
    'status',
    'dateCreated',
    'action',
  ];
  filters = [
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
    this.dataSource.filterPredicate = (data, filter) => {
      if (this.fromDate && this.toDate) {
        return data.created >= this.fromDate && data.created <= this.toDate;
      }
      return true;
    };
  }

  ngOnInit(): void {
    this._rafikiBoraService
      .getCustomersData()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
  }
  // Edit User
  editButtonUser(id: number) {
    this.router.navigate(['/dashboard/users/edit', id]);
  }
  // Approve User
  // approveUser(email: string) {
  //   this._rafikiBoraService.approveUser(email).subscribe(
  //     (response) => {
  //       this._snackBar.open('User approved Successfully', 'dismiss', {
  //         duration: 3000,
  //         verticalPosition: 'top',
  //         panelClass: ['green-snackbar'],
  //       });
  //       this.ngOnInit();
  //     },
  //     (error) => {
  //       this._snackBar.open('You cannot approve this user', 'dismiss', {
  //         duration: 3000,
  //         verticalPosition: 'top',
  //         panelClass: ['red-snackbar'],
  //       });
  //       this.ngOnInit();
  //     }
  //   );
  // }

  // Delete User
  deleteUser(userId) {
    this._rafikiBoraService.deleteUser(userId).subscribe(
      (response) => {
        this._snackBar.open('Agent deleted Successfully', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['green-snackbar'],
        });
        this.ngOnInit();
      },
      (error) => {
        this._snackBar.open('Unable to delete this Agent', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
        this.ngOnInit();
      }
    );
  }
  applyFilter() {
    this.dataSource.filter = `${Math.random()}`;
  }
  applySearchFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

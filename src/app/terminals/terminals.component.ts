import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { RafikiBoraService } from '../services/rafiki-bora.service';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.scss', '../app.component.scss'],
})
export class TerminalsComponent implements OnInit {
  displayedColumns: string[] = [
    'tid',
    'serialNo',
    'modelType',
    'status',
    // 'mid',
    'createdOn',
    'action',
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
        return (
          data.dateCreated >= this.fromDate && data.dateCreated <= this.toDate
        );
      }
      return true;
    };
  }

  ngOnInit(): void {
    this._rafikiBoraService
      .getTerminals()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
  }

  applyFilter() {
    this.dataSource.filter = `${Math.random()}`;
  }

  // Delete Terminal
  approveTerminal(tid) {
    this._rafikiBoraService.approveTerminal(parseInt(tid, 10)).subscribe(
      (response) => {
        this._snackBar.open('Terminal approved Successfully', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['green-snackbar'],
        });
        this.ngOnInit();
      },
      (error) => {
        this._snackBar.open('You cannot approve this Terminal', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
        this.ngOnInit();
      }
    );
  }

  // Delete User
  deleteTerminal(tid) {
    this._rafikiBoraService.deleteTerminal(tid).subscribe(
      (response) => {
        this._snackBar.open('Terminal deleted Successfully', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['green-snackbar'],
        });
        this.ngOnInit();
      },
      (error) => {
        this._snackBar.open('Unable to delete Terminal', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
        this.ngOnInit();
      }
    );
  }
  applySearchFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

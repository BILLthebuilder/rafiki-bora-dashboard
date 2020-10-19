import { Component, OnInit } from '@angular/core';
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
    'accountNumber',
    'phoneNo',
    'status',
    'dateCreated',
  ];

  filters: Option[] = [
    { value: 'approved', viewValue: 'Approved' },
    { value: 'declined', viewValue: 'Declined' },
  ];
  public dataSource: any = [];

  constructor(
    private _rafikiBoraService: RafikiBoraService,
    private router: Router
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
    this.router.navigate(['/edit', id]);
  }

  // Delete User
  deleteUser(userId) {
    this._rafikiBoraService.deleteUser(userId).subscribe(
      (response) => console.log('User successfully deleted', response),
      (error) => console.log(error)
    );
  }

  // hide row
}

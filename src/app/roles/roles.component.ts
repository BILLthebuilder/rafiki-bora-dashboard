import { Component, OnInit } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { RafikiBoraService } from '../services/rafiki-bora.service';

export interface Option {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss', '../app.component.scss'],
})
export class RolesComponent implements OnInit {
  public dataSource: any = [];
  displayedColumns: string[] = ['id', 'roleName'];
  constructor(private _rafikiBoraService: RafikiBoraService) {}
  filters: Option[] = [
    { value: 'approved', viewValue: 'Approved' },
    { value: 'declined', viewValue: 'Declined' },
  ];

  ngOnInit(): void {
    this._rafikiBoraService
      .getRolesData()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
  }
}

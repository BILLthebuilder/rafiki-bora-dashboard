import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';
import { RafikiBoraService } from '../services/rafiki-bora.service';

@Component({
  selector: 'app-roles',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss', '../app.component.scss'],
})
export class MerchantsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'mid',
    'business_name',
    'phone_no',
    'createdBy',
    'approvedBy',
    'status',
    'dateCreated',
  ];
  filters = [
    { value: 'approved', viewValue: 'Approved' },
    { value: 'declined', viewValue: 'Declined' },
  ];

  public dataSource: any = [];

  pipe: DatePipe;
  // CheckBtn form group
  nestedForm: FormGroup;

  selectedRowsValue = [];

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
    private _fb: FormBuilder
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
    // Return selected ids
    this.nestedForm = this._fb.group({
      selectedId: this.addRowsControls(),
    });
    // Get table data
    this._rafikiBoraService
      .getMerchantsData()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
  }

  // Rows Getter
  get rowArray() {
    return <FormArray>this.nestedForm.get('selectedId');
  }

  // Get selected rows value
  getSelectedRowsValue() {
    this.selectedRowsValue = [];
    this.rowArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedRowsValue.push(this.dataSource[i]);
      }
    });
    console.log(this.selectedRowsValue);
  }

  applyFilter() {
    this.dataSource.filter = `${Math.random()}`;
  }
  applySearchFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addRowsControls() {
    const arr = this.dataSource.map((item) => {
      return this._fb.control(false);
    });
    return this._fb.array(arr);
  }

  showOptions(event) {
    if (event.checked) {
      console.log('I am checked yooh');
    }
  }
}

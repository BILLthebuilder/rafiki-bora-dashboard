/* eslint-disable no-undef */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RafikiBoraService } from 'src/app/services/rafiki-bora.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss'],
})
export class AssignComponent implements OnInit {
  userSubmitForm: any;
  // merchantEmails: any = [];
  merchantEmail: string;
  unassignedTerminals: any = [];
  status = false;

  constructor(
    private _rafikiBoraService: RafikiBoraService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.userSubmitForm = this.formBuilder.group({
      tid: '',
      email: '',
    });
  }

  ngOnInit(): void {
    // this._rafikiBoraService.getMerchantsData().subscribe((data) => {
    //   data.forEach((item) => {
    //     this.merchantEmails.push(item.email);
    //   });
    // });
    this._rafikiBoraService.getUnAssignedTerminals().subscribe((data) => {
      data.forEach((item) => {
        this.unassignedTerminals.push(item.tid);
      });
    });
    this.merchantEmail = localStorage.getItem('merchEmail');
    localStorage.removeItem('merchEmail');
  }
  onSubmit() {
    this._rafikiBoraService.assignTerminal(this.userSubmitForm.value).subscribe(
      (response) => {
        this._snackBar.open('Terminal assigned Successfully', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['green-snackbar'],
        });
        this.router.navigateByUrl('/dashboard/terminals');
      },
      (error) => {
        this._snackBar.open('Error assigning terminal', 'dismiss', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
      }
    );
  }
  selectedMerchant(event) {
    this.userSubmitForm.patchValue({
      email: event,
    });
  }
  selectedTerminal(event) {
    this.userSubmitForm.patchValue({
      tid: event,
    });
  }
}

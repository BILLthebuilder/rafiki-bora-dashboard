/* eslint-disable no-undef */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RafikiBoraService } from 'src/app/services/rafiki-bora.service';

@Component({
  selector: 'app-assign-a',
  templateUrl: './assign-a.component.html',
  styleUrls: ['./assign-a.component.scss'],
})
export class AssignAComponent implements OnInit {
  userSubmitForm: any;
  // merchantEmails: any = [];
  agentEmail: string;
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
    this._rafikiBoraService.getUserProfile().subscribe((data) => {
      this._rafikiBoraService
        .getUnAssignedAgentTerminals(data.mid)
        .subscribe((data) => {
          data.forEach((item) => {
            this.unassignedTerminals.push(item.tid);
          });
        });
    });

    this.agentEmail = localStorage.getItem('agentEmail');
    localStorage.removeItem('agentEmail');
  }
  onSubmit() {
    this._rafikiBoraService
      .assignAgentTerminal(this.userSubmitForm.value)
      .subscribe(
        (response) => {
          this._snackBar.open('Terminal assigned Successfully', 'dismiss', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['green-snackbar'],
          });
          // this.router.navigateByUrl('/dashboard/terminals');
          window.location.reload();
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
  selectedAgent(event) {
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

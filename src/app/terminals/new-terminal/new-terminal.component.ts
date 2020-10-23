import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RafikiBoraService } from 'src/app/services/rafiki-bora.service';

@Component({
  selector: 'app-new-terminal',
  templateUrl: './new-terminal.component.html',
  styleUrls: ['./new-terminal.component.scss'],
})
export class NewTerminalComponent implements OnInit {
  userSubmitForm: any;
  constructor(
    private http: HttpClient,
    private _rafikiBoraService: RafikiBoraService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.userSubmitForm = this.formBuilder.group({
      modelType: '',
      serialNo: '',
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this._rafikiBoraService.addTerminal(this.userSubmitForm.value).subscribe(
      (response) => {
        this._snackBar.open('Terminal created Successfully', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['green-snackbar'],
        });
        this.router.navigateByUrl('/dashboard/terminals');
      },
      (error) => {
        this._snackBar.open('Error creating terminal', 'dismiss', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
      }
    );
  }
}

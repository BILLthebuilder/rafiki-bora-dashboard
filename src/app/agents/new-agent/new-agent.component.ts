import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { RafikiBoraService } from 'src/app/services/rafiki-bora.service';

@Component({
  selector: 'app-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.scss'],
})
export class NewAgentComponent implements OnInit {
  userSubmitForm: any;
  roles: any = [];
  email: string;
  constructor(
    private http: HttpClient,
    private _rafikiBoraService: RafikiBoraService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.userSubmitForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      username: '',
      phoneNo: '',
      email: this.email,
      password: '',
      role: '',
    });
    this.userSubmitForm.patchValue({
      role: 'AGENT',
    });
  }

  ngOnInit(): void {
    // Get the roles data from the Database
    this._rafikiBoraService.getRolesData().subscribe((data) => {
      this.roles = data;
    });
  }
  onSubmit() {
    this._rafikiBoraService.addAgent(this.userSubmitForm.value).subscribe(
      (response) => {
        this._snackBar.open('Agent created Successfully', 'dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['green-snackbar'],
        });
        this.location.back();
      },
      (error) => {
        this._snackBar.open('Error creating agent', 'dismiss', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
      }
    );
  }
}

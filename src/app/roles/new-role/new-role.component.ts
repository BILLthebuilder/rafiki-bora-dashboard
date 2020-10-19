import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RafikiBoraService } from 'src/app/services/rafiki-bora.service';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss'],
})
export class NewRoleComponent implements OnInit {
  userSubmitForm: any;
  constructor(
    private _rafikiBoraService: RafikiBoraService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.userSubmitForm = this.formBuilder.group({
      roleName: '',
    });
  }

  ngOnInit(): void {}
  saveRole(userData) {
    // fetch('http://localhost:2019/api/roles', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: userData,
    // }).then((res) => res.json());
    this._rafikiBoraService.addRole(userData).subscribe(
      (response) => {
        this.router.navigateByUrl('/dashboard/roles');
      },
      (error) => {
        console.log('There is an error', error);
      }
    );
  }
}

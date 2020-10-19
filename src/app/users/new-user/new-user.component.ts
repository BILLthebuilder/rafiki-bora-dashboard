import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/rafikiboraInterface';
import { RafikiBoraService } from 'src/app/services/rafiki-bora.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  roles: any = [];
  userSubmitForm: any;

  constructor(
    private http: HttpClient,
    private _rafikiBoraService: RafikiBoraService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.userSubmitForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      username: '',
      phoneNo: '',
      email: '',
      password: '',
      role: '',
    });
  }

  ngOnInit(): void {
    // Get the roles data from the Database
    this._rafikiBoraService.getRolesData().subscribe((data) => {
      this.roles = data;
    });
    this.route.paramMap.subscribe((params) => {
      const userId = +params.get('id');
      if (userId) {
        this.getUser(userId);
      }
    });
  }

  getUser(id: number) {
    this._rafikiBoraService.getUserById(id).subscribe(
      (user: User) => this.editUser(user),
      (error) => console.log(error)
    );
  }

  editUser(user: User) {
    this.userSubmitForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      phoneNo: user.phoneNo,
      email: user.email,
      password: user.password,
      role: user.role,
    });
  }
  onSubmit() {
    this._rafikiBoraService.addUser(this.userSubmitForm.value).subscribe(
      (response) => console.log('Success', response),
      (error) => console.log('There is an error', error)
    );
    console.log(this.userSubmitForm.value);
  }
}

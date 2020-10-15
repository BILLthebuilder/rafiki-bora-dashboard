import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RafikiBoraService } from 'src/app/rafiki-bora.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  roles: any = [];
  userSubmitForm: any;

  constructor(
    private _rafikiBoraService: RafikiBoraService,
    private formBuilder: FormBuilder
  ) {
    this.userSubmitForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      businessName: '',
      accountNumber: '',
      email: '',
      password: '',
      // role: '',
    });
  }

  ngOnInit(): void {
    // Get the roles data from the Database
    this._rafikiBoraService.getRolesData().subscribe((data) => {
      this.roles = data;
    });
  }
  onSubmit(userData) {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    this.userSubmitForm.reset();

    console.log('The User Created is:', userData);
  }
}

import { Component, OnInit } from '@angular/core';
import { RafikiBoraService } from 'src/app/rafiki-bora.service';

@Component({
  selector: 'app-new-merchant',
  templateUrl: './new-merchant.component.html',
  styleUrls: ['./new-merchant.component.scss'],
})
export class NewMerchantComponent implements OnInit {

  roles: any = [];
  constructor(private _rafikiBoraService: RafikiBoraService) {}

  ngOnInit(): void {
    // Get the roles data from the Database
    this._rafikiBoraService.getRolesData().subscribe((data) => {
      this.roles = data;
    });
  }

  submitHandler(myForm){
    console.log(myForm.value);
  }
}

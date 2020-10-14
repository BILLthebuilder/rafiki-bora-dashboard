import { Component, OnInit } from '@angular/core';
import { RafikiBoraService } from 'src/app/rafiki-bora.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  roles: any = [];

  constructor(private _rafikiBoraService: RafikiBoraService) {}

  ngOnInit(): void {
    // Get the roles data from the Database
    this._rafikiBoraService.getRolesData().subscribe((data) => {
      this.roles = data;
    });
  }

  addUser(myForm) {
    this._rafikiBoraService.addUser(myForm).toPromise().catch((error)=>"Error while saving data");
  }
}

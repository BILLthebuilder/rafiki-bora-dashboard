import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss'],
})
export class NewRoleComponent implements OnInit {
  userSubmitForm: any;
  constructor(private formBuilder: FormBuilder) {
    this.userSubmitForm = this.formBuilder.group({
    roleName: '',
  });}

  ngOnInit(): void {}
  saveRole(userData){
    fetch("http://localhost:2019/api/roles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:userData
    }).then((res)=>res.json())
  }


}

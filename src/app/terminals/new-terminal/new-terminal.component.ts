import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    private router: Router
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
        console.log('Success', response);
        this.router.navigateByUrl('dashboard/terminals');
      } ,
      (error) => console.log('There is an error', error)
    );
    console.log(this.userSubmitForm.value);
  }
}

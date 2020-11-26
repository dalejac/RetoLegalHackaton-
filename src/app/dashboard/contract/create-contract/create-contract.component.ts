import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {createContractFields} from './contract-form-builder';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  fields = createContractFields;
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };

  constructor() {}

  ngOnInit(): void {
  }

  save(): void {
    console.log(this.model);
  }

  requireInfo(): void {
    console.log('requireInfo');
  }
}

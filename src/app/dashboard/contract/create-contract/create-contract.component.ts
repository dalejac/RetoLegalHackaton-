import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
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

  constructor() {}

  ngOnInit(): void {
  }

  save(): void {
    console.log(this.model);
  }
}

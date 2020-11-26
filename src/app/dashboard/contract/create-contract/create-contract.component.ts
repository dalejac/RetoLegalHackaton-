import { Component, OnInit } from '@angular/core';
import { DynamicFormModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';
import {contractFormLayout, contractFormModel} from './contract-form-builder';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {
  formModel: DynamicFormModel = contractFormModel;
  formLayout = contractFormLayout;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) {}

  ngOnInit(): void {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  save(): void {
    const generalInfo = this.formGroup.controls.generalInfo.value;
    console.log(generalInfo);
  }
}

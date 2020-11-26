import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions} from '@ngx-formly/core';
import {AuthService} from '../../../core/services/auth/auth.service';
import {UserRole} from '../../../core/types/user-type.type';
import {SupplierContractFormBuilder, SupplierMessage} from './builders/supplier-contract-form-builder';
import {UserContractFormBuilder, UserMessage} from './builders/user-contract-form-builder';
import { FirestoreService } from '../../services/contract.service';

// TODO: delete this
export const contractExample  = { "generalInfoSection": { "interestedArea": "Gerencia de Innovación y Transformación Digital", "contractType": "Cesión de Espacio", "personType": "natural", "personFullName": "Mayra Rodriguez", "personId": "1140415633", "personMainAddress": "Lorem ipsum", "chamberOfCommerce": "Bogota" }, "contractPriceSection": { "ivaIsApplied": true, "contractPrice": "234345345", "contractPriceInLetters": "345345", "unitPrice": "Mil mil", "unitPriceInLetters": "4345345" }, "payMethodSection": { "anotherPaymentMethodDescr": "20 % del valor del CONTRATO, correspondiente a la suma de Mil mil M/cte ($ 10202) IVA incluido, por concepto de Lorem Lorem. ", "withRetainer": true, "retainerPrice": "345345", "retainerPriceInLetters": "Mil mil", "retainerPrc": "50", "retainerDate": "26/11/2020", "withMonthlyPaymentUponDelivery": true, "withOnlyPaymentUponDelivery": true, "uponDeliveryPrice": "2002200", "uponDeliveryPriceInLetters": "Mil mil", "uponDeliveryPricePrc": "80", "anotherPaymentMethod": true, "isPriceInUsd": true }, "durationSection": { "contractDuration": "10 meses" }, "guaranteeSection": { "isGuaranteeApplied": true, "guaranteeAppliedOptions": { "Salarios y prestaciones sociales": true, "Responsabilidad civil contractual": true, "Cumplimiento del Contrato": true } }, "dateSection": { "contractSubscription": "10/11/2020" }, "filesSection": { "generateConfidentialityAgreement": true } };

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  currentUserRole = this.authService.currentUserRole();
  userRole = UserRole;
  fields = this.currentUserRole === UserRole.Supplier ? SupplierContractFormBuilder : UserContractFormBuilder;
  message = this.currentUserRole === UserRole.Supplier ? SupplierMessage : UserMessage;
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };

  data = [];

  constructor(private authService: AuthService, private firestoreServie: FirestoreService) {}

  ngOnInit(): void {
  }

  save(): void {
    console.log(this.model);
  }

  requireInfo(): void {
    console.log('requireInfo');
  }
}

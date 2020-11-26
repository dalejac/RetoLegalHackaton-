import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions} from '@ngx-formly/core';
import {AuthService} from '../../../core/services/auth/auth.service';
import {UserRole} from '../../../core/types/user-type.type';
import {SupplierContractFormBuilder, SupplierMessage} from './builders/supplier-contract-form-builder';
import {UserContractFormBuilder, UserMessage} from './builders/user-contract-form-builder';
import { FirestoreService } from '../../services/contract.service';

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

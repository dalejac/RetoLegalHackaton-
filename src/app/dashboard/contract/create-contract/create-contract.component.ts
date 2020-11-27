import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions} from '@ngx-formly/core';
import {AuthService} from '../../../core/services/auth/auth.service';
import {UserRole} from '../../../core/types/user-type.type';
import {SupplierContractFormBuilder, SupplierMessage} from './builders/supplier-contract-form-builder';
import {UserContractFormBuilder, UserMessage} from './builders/user-contract-form-builder';
import { Observable } from 'rxjs';
import { Contract } from '../../model/contract.model';
import { ContractService } from '../../services/contract.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';

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

  showButtonUserCanEdit = false;
  data: Observable<Contract[]>;
  contractId: string;

  constructor(private authService: AuthService,
              private fireStore: ContractService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.pipe().subscribe(
      params => {
        if (params.get('id')) {
          this.contractId = params.get('id');
        }
    });
    this.data = this.fireStore.getAll();
  }

  update(): void {
    this.fireStore.update(this.contractId, {userCanEdit: true});
  }

  add(item: Contract): void {
    console.log(this.contractId);
    if (this.contractId) {
      this.fireStore.update(this.contractId, item)
          .then(() => {
            this.router.navigate(['/dashboard/states']);
          });
    } else {
      item.userCanEdit = false;
      this.fireStore.add(item)
        .then((docRef) => {
          this.showButtonUserCanEdit = true;
          this.contractId = docRef.id;
          // this.router.navigate(['/dashboard/states']);
        });
    }
  }
}

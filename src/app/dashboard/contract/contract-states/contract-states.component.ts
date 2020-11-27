import { Component, OnInit } from '@angular/core';
import {ContractGeneratorService} from '../../../core/services/files/contract-generator.service';
import {Contract} from '../../model/contract.model';
import {ContractService} from '../../services/contract.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UserRole} from '../../../core/types/user-type.type';
import {AuthService} from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-contract-states',
  templateUrl: './contract-states.component.html',
  styleUrls: ['./contract-states.component.scss']
})
export class ContractStatesComponent implements OnInit {
    currentUserRole;
    userRole = UserRole;
    contracts$: Observable<Contract[]>;

  constructor(
      private contractService: ContractService,
      private contractGeneratorService: ContractGeneratorService,
      private authService: AuthService,
      private router: Router) { }

  ngOnInit(): void {
      this.currentUserRole = this.authService.currentUserRole();
      this.getAll();
  }

  getAll(): void {
      this.contracts$ = this.contractService.getAll();
  }

    edit(id?: string): void {
        if (!id) {
            return;
        }
        this.router.navigate(['/dashboard/create', id]);
    }

  public download(contract: Contract): void {
    this.contractGeneratorService.downloadContract(contract);
  }
}

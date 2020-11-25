import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { ContractStatesComponent } from './contract-states/contract-states.component';


@NgModule({
  declarations: [CreateContractComponent, ContractStatesComponent],
  imports: [
    CommonModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }

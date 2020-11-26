import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { ContractStatesComponent } from './contract-states/contract-states.component';
import { ContractDownloadComponent } from './contract-download/contract-download.component';
import {SharedModule} from '../../shared/shared.module';
import { DownloadContractComponent } from './download-contract/download-contract.component';


@NgModule({
  declarations: [CreateContractComponent, ContractStatesComponent, ContractDownloadComponent, DownloadContractComponent],
  
  imports: [
    CommonModule,
    ContractRoutingModule,
    SharedModule
  ]
})
export class ContractModule { }

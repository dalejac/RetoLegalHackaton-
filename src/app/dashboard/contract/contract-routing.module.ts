import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {ContractStatesComponent} from './contract-states/contract-states.component';
import { ContractDownloadComponent } from './contract-download/contract-download.component';


const routes: Routes = [
  {
    path: 'create',
    component: CreateContractComponent
  },
  {
    path: 'states',
    component: ContractStatesComponent
  },
  {
    path: 'prueba',
    component: ContractDownloadComponent
  },
  {
    path: '**',
    redirectTo: 'create'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }

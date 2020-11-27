import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {ContractStatesComponent} from './contract-states/contract-states.component';


const routes: Routes = [
  {
    path: 'create/:id',
    component: CreateContractComponent
  },
  {
    path: 'create',
    component: CreateContractComponent
  },
  {
    path: 'states',
    component: ContractStatesComponent
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

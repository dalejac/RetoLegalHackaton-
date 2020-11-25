import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoguinComponent } from './loguin/loguin.component';

const routes: Routes = [
  {
    path: '',
    component: LoguinComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

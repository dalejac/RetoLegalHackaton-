import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DynamicFormsBasicUIModule} from '@ng-dynamic-forms/ui-basic';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    ReactiveFormsModule,
    DynamicFormsBasicUIModule,
  ]
})
export class SharedModule { }

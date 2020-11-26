import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule
  ]
})
export class SharedModule { }

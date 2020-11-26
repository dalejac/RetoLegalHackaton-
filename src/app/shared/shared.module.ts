import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { DatePickerComponent } from './components/formly/date-picker/date-picker.component';
import {DatePickerValueAccessor} from './components/formly/date-picker/date-picker.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FieldsetWrapper} from './components/formly/date-picker/wrappers/filedset-wrapper.component';
import {LabelWrapper} from './components/formly/date-picker/wrappers/label-wrapper.component';
import { FieldFileComponent } from './components/formly/field-file/field-file.component';
import { FileValueAccessorDirective } from './components/formly/field-file/file-value-accessor.directive';


@NgModule({
  declarations: [
    NavbarComponent,
    DatePickerComponent,
    DatePickerValueAccessor,
    FieldFileComponent,
    FileValueAccessorDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      types: [
        { name: 'date',
          component: DatePickerComponent,
          wrappers: ['label', 'fieldset'],
        },
        { name: 'file', component: FieldFileComponent, wrappers: ['form-field'] },
      ],
      wrappers: [
        { name: 'label', component: LabelWrapper },
        { name: 'fieldset', component: FieldsetWrapper }
      ]
    }),
    FormlyBootstrapModule,
  ],
  exports: [
    NavbarComponent,
    ReactiveFormsModule,
    NgbModule,
    FormlyModule,
    FormlyBootstrapModule,
    DatePickerValueAccessor
  ]
})
export class SharedModule { }

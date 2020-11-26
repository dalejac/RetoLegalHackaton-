import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DatePickerComponent} from './shared/components/formly/date-picker/date-picker.component';
import {LabelWrapper} from './shared/components/formly/date-picker/wrappers/label-wrapper.component';
import {FieldsetWrapper} from './shared/components/formly/date-picker/wrappers/filedset-wrapper.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

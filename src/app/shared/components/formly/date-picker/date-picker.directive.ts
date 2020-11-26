import { Directive } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[type=bootstrap-date]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '(change)': 'onChange($event)',
    '(blur)': 'onTouched()',
  },
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: DatePickerValueAccessor, multi: true },
  ],
})

export class DatePickerValueAccessor implements ControlValueAccessor {
  value: any;
  onChange = (_) => { console.log(_) };
  onTouched = () => { };

  writeValue(value): void { }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
}

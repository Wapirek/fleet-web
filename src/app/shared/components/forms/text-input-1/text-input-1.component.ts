import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FieldModel } from 'src/app/shared/models/models/field.model';

@Component({
  selector: 'shared-text-input-1',
  templateUrl: 'text-input-1.component.html',
  styleUrls: ['./text-input-1.component.scss']
})
export class TextInput1Component implements ControlValueAccessor  {
  @Input() field: FieldModel | undefined;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}

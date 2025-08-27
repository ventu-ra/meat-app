import { Component, forwardRef, OnInit, input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { RadioOption } from "./radio-option.model";
import { NgFor } from "@angular/common";

@Component({
  selector: "mt-radio",
  templateUrl: "./radio.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
  imports: [NgFor]
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  readonly options = input<RadioOption[]>(undefined);

  value: any;

  onChange: any = () => { };
  onTouched: any = () => { };
  isDisabled: boolean = false;

  constructor() { }

  ngOnInit() { }

  setValue(value: any) {
    if (this.isDisabled) return;
    this.value = value;
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}

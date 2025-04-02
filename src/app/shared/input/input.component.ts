import {
  Component,
  Input,
  OnInit,
  ContentChild,
  AfterContentInit,
} from "@angular/core";
import { FormControlName, NgModel } from "@angular/forms";

@Component({
  selector: "mt-input-container",
  templateUrl: "./input.component.html",
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showTip: boolean = true;
  input: any;

  @ContentChild(NgModel, { static: false }) model: NgModel;
  @ContentChild(FormControlName, { static: false }) control: FormControlName;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.input = this.model || this.control;
    if (!this.input) {
      throw new Error(
        "Esse componente precisa ser usado com uma diretiva ngModel ou formControlName"
      );
    }
  }

  hasSuccess(): boolean {
    return (
      this.input && this.input.valid && (this.input.dirty || this.input.touched)
    );
  }

  hasError(): boolean {
    return (
      this.input &&
      this.input.invalid &&
      (this.input.dirty || this.input.touched)
    );
  }
}

import {
  Component,
  OnInit,
  AfterContentInit,
  input,
  contentChild
} from "@angular/core";
import { FormControlName, NgModel } from "@angular/forms";
import { NgIf } from "@angular/common";

@Component({
    selector: "mt-input-container",
    templateUrl: "./input.component.html",
    imports: [NgIf]
})
export class InputComponent implements OnInit, AfterContentInit {
  readonly label = input<string>(undefined);
  readonly errorMessage = input<string>(undefined);
  readonly showTip = input<boolean>(true);
  input: any;

  readonly model = contentChild(NgModel);
  readonly control = contentChild(FormControlName);

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.input = this.model() || this.control();
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

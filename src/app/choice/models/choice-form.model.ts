import { FormControl, Validators } from "@angular/forms";
import { Choice } from "./choice.model";

export class ChoiceForm {
  isValid = new FormControl();
  value = new FormControl();

  constructor(choice: Choice) {
    this.isValid.setValue(choice.isValid);
    this.isValid.setValidators([Validators.required]);

    this.value.setValue(choice.value);
    this.value.setValidators([Validators.required]);
  }
}

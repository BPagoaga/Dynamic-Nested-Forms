import { FormArray, FormControl } from "@angular/forms";
import { Enigm } from "./enigm.model";

export class EnigmForm {
  name = new FormControl();
  choices = new FormArray([]);

  constructor(enigm: Enigm) {
    if (enigm.name) {
      this.name.setValue(enigm.name);
    }

    if (enigm.choices) {
      this.choices.setValue(enigm.choices);
    }
  }
}

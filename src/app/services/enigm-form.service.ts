import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { EnigmForm, Enigm } from "../models";
import { ChoiceForm, Choice } from "../choice/models";

@Injectable({
  providedIn: "root"
})
export class EnigmFormService {
  private enigmForm: BehaviorSubject<
    FormGroup | undefined
  > = new BehaviorSubject(
    this.fb.group(new EnigmForm(new Enigm("unique-choice")))
  );

  enigmForm$: Observable<FormGroup> = this.enigmForm.asObservable();

  constructor(private fb: FormBuilder) {}

  addChoice() {
    const currentEnigm = this.enigmForm.getValue();
    const currentChoices = currentEnigm.get("choices") as FormArray;

    currentChoices.push(this.fb.group(new ChoiceForm(new Choice(false, ""))));

    this.enigmForm.next(currentEnigm);
  }

  deleteChoice(i: number) {
    const currentEnigm = this.enigmForm.getValue();
    const currentChoices = currentEnigm.get("choices") as FormArray;

    currentChoices.removeAt(i);
    this.enigmForm.next(currentEnigm);
  }
}

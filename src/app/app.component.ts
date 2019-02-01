import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { FormGroup, FormArray } from "@angular/forms";
import { EnigmFormService } from "./services/enigm-form.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  enigmForm: FormGroup;
  enigmFormSub: Subscription;
  formInvalid: boolean = false;
  choices: FormArray;

  constructor(private enigmFormService: EnigmFormService) {}

  ngOnInit() {
    this.enigmFormSub = this.enigmFormService.enigmForm$.subscribe(enigm => {
      this.enigmForm = enigm;
      this.choices = this.enigmForm.get("choices") as FormArray;
    });
  }

  ngOnDestroy() {
    this.enigmFormSub.unsubscribe();
  }

  addChoice() {
    this.enigmFormService.addChoice();
  }

  deleteChoice(index: number) {
    this.enigmFormService.deleteChoice(index);
  }

  saveEnigm() {
    console.log("enigm saved!");
    console.log(this.enigmForm.value);
  }
}

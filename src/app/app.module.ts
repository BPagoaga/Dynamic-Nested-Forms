import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDividerModule,
  MatInputModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { ChoiceComponent } from "./choice/choice.component";
import { EnigmFormService } from "./services/enigm-form.service";

@NgModule({
  declarations: [AppComponent, ChoiceComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  providers: [EnigmFormService],
  bootstrap: [AppComponent]
})
export class AppModule {}

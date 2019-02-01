import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-choice",
  templateUrl: "./choice.component.html",
  styleUrls: ["./choice.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoiceComponent implements OnInit {
  @Input() choiceForm: FormGroup;
  @Input() index: number;
  @Output() deleteChoice: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  delete() {
    this.deleteChoice.emit(this.index);
  }
}

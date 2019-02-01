import { Choice } from "../choice/models/choice.model";

export class Enigm {
  name: string;
  choices: Choice[];

  constructor(name: string, choices?: Choice[]) {
    this.name = name;
    this.choices = choices;
  }
}

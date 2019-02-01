export class Choice {
  isValid: boolean;
  value: string;

  constructor(isValid?: boolean, value?: string) {
    this.isValid = isValid;
    this.value = value;
  }
}

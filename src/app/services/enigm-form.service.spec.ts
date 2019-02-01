import { TestBed } from "@angular/core/testing";

import { EnigmFormService } from "./enigm-form.service";

describe("EnigmFormService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: EnigmFormService = TestBed.get(EnigmFormService);
    expect(service).toBeTruthy();
  });
});

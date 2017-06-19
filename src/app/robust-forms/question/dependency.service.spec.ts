import { TestBed, async, inject } from '@angular/core/testing';

import { DependencyService } from '.';

describe('RobustForms :: Question :: DependencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DependencyService]
    });
  });

  it('should ...', inject([DependencyService], (service: DependencyService) => {
    expect(service).toBeTruthy();
  }));
});

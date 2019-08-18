import { TestBed } from '@angular/core/testing';

import { ShgService } from './shg.service';

describe('ShgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShgService = TestBed.get(ShgService);
    expect(service).toBeTruthy();
  });
});

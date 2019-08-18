import { TestBed } from '@angular/core/testing';

import { MentorService } from './mentor.service';

describe('MentorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MentorService = TestBed.get(MentorService);
    expect(service).toBeTruthy();
  });
});

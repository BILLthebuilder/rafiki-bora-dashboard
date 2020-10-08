import { TestBed } from '@angular/core/testing';

import { RafikiBoraService } from './rafiki-bora.service';

describe('RafikiBoraService', () => {
  let service: RafikiBoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RafikiBoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

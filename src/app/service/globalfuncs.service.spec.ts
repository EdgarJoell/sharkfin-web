import { TestBed } from '@angular/core/testing';

import { GlobalfuncsService } from './globalfuncs.service';

describe('GlobalfuncsService', () => {
  let service: GlobalfuncsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalfuncsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

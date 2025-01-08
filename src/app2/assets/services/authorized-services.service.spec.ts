import { TestBed } from '@angular/core/testing';

import { AuthorizedServicesService } from '../../app/services/authorized-services.service';

describe('AuthorizedServicesService', () => {
  let service: AuthorizedServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizedServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

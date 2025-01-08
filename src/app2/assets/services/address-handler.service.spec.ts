import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { AddressHandlerService } from './address-handler.service';

describe('AddressHandlerService', () => {
  let service: AddressHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AddressHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

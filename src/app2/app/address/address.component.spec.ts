import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let mockAddressHandlerService;

  beforeEach(async () => {
    mockAddressHandlerService = jasmine.createSpyObj(['getAddress','saveAddress','getCounty']);
    await TestBed.configureTestingModule({
      imports: [AddressComponent,BrowserAnimationsModule],
      providers:[{provide:mockAddressHandlerService, useValue:mockAddressHandlerService},provideHttpClient()],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  
});

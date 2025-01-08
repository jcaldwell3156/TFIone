import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyComponent } from './third-party.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Input } from '@angular/core';

describe('ThirdPartyComponent', () => {
  let component: ThirdPartyComponent;
  let fixture: ComponentFixture<ThirdPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdPartyComponent,HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdPartyComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

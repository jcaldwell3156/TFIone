import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDefaultComponent } from './layout-default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from '../../../assets/services/authentication.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('LayoutDefaultComponent', () => {
  let component: LayoutDefaultComponent;
  let fixture: ComponentFixture<LayoutDefaultComponent>;
  let mockAuthenticationService;

  beforeEach(async () => {
    mockAuthenticationService = jasmine.createSpyObj(['LogIn']);
    await TestBed.configureTestingModule({
      imports: [LayoutDefaultComponent,BrowserAnimationsModule,HttpClientTestingModule],
      providers:[provideRouter([]),{provider:AuthenticationService, useValue:mockAuthenticationService}],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

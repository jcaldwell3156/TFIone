import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyformComponent } from './agencyform.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AgencyformComponent', () => {
  let component: AgencyformComponent;
  let fixture: ComponentFixture<AgencyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyformComponent,HttpClientTestingModule,BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgencyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

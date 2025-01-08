import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyComponent } from './agency.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AgencyComponent', () => {
  let component: AgencyComponent;
  let fixture: ComponentFixture<AgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyComponent, BrowserAnimationsModule,]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

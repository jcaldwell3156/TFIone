import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencylistComponent } from './agencylist.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AgencylistComponent', () => {
  let component: AgencylistComponent;
  let fixture: ComponentFixture<AgencylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencylistComponent, RouterModule.forRoot([]), BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgencylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralComponent } from './referral.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReferralComponent', () => {
  let component: ReferralComponent;
  let fixture: ComponentFixture<ReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralComponent, BrowserAnimationsModule,]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

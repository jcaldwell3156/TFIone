import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyprofileComponent } from './agencyprofile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
describe('AgencyprofileComponent', () => {
  let component: AgencyprofileComponent;
  let fixture: ComponentFixture<AgencyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AgencyprofileComponent,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
      ],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

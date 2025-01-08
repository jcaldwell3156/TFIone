import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentComponent } from './recruitment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RecruitmentComponent', () => {
  let component: RecruitmentComponent;
  let fixture: ComponentFixture<RecruitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitmentComponent, BrowserAnimationsModule,]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

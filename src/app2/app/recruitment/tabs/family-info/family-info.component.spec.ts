import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyInfoComponent } from './family-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FamilyInfoComponent', () => {
  let component: FamilyInfoComponent;
  let fixture: ComponentFixture<FamilyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyInfoComponent, BrowserAnimationsModule,]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

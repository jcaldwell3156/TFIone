import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAdditionComponent } from './staff-addition.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StaffAdditionComponent', () => {
  let component: StaffAdditionComponent;
  let fixture: ComponentFixture<StaffAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffAdditionComponent,HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffAdditionComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

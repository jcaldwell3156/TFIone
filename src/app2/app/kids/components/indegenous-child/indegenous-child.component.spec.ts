import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndegenousChildComponent } from './indegenous-child.component';

describe('IndegenousChildComponent', () => {
  let component: IndegenousChildComponent;
  let fixture: ComponentFixture<IndegenousChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndegenousChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndegenousChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

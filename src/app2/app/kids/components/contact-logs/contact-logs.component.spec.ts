import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLogsComponent } from './contact-logs.component';

describe('ContactLogsComponent', () => {
  let component: ContactLogsComponent;
  let fixture: ComponentFixture<ContactLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactLogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
